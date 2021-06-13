import Globals from "./Globals.js";
import World from './World.js';

export default class Game extends Globals{
    
    bulletsInMove = [];
    right = false;
    left = false;
    timer;
    shootSound = new Howl({
        src: ['assets/shoot.mp3']
    });
    
    constructor(){
        super();
        document.body.appendChild(Globals.app.view);

        Globals.loader
            .add("../assets/spaceShip.png")
            .add("../assets/sky.jpg")
            .add("../assets/asteroid.png")
            .load(this.onLoaded);
    }

    onLoaded = () => {
        this.world = new World().createWorld();
        Globals.app.stage.addChild(this.world);
        window.addEventListener("startClicked", this.onStart);
        window.addEventListener("reStartClicked", this.onRestart);
        this.ship = this.world.getChildByName("ship");
        this.bulletsText = this.world.getChildByName("bulletsText");
        this.timerText = this.world.getChildByName("timerText");
        this.winText = this.world.getChildByName("winText");
        this.loseText = this.world.getChildByName("loseText");
        this.reStartButton = this.world.getChildByName("reStartButton");
    }
        
    onStart = (e) => {
        window.removeEventListener("startClicked", this.onStart);
        Globals.app.ticker.add(delta => this.gameLoop(delta));

        window.addEventListener(
            "keydown", this.downListener, false
        );

        window.addEventListener(
            "keyup", this.upListener, false
        );

        this.timer = setInterval(()=>Globals.timerCount++,1000);
    }

    onRestart = (e) => {
        window.removeEventListener("reStartClicked", this.onRestart);
        this.restart();
    }

    gameLoop = (delta) => {
        if(this.right && this.ship.x < Globals.baseWidth - this.ship.width/3)this.ship.x += 15;
        if(this.left && this.ship.x > 0 + this.ship.width/3)this.ship.x -= 15;

        this.bulletsInMove.forEach((item, i, arr)=>{
            if(this.bulletsInMove[i].y > 0){ 
                this.bulletsInMove[i].y -= 25;
            } else {
                this.world.removeChild(this.bulletsInMove[i]);
                this.bulletsInMove.splice(i, 1);
            }
                                        
        });

        Globals.asteroids.forEach((item, i, arr)=>{
            this.bulletsInMove.forEach((item_, i_, arr_)=>{
                if(Globals.bump.hit(Globals.asteroids[i], this.bulletsInMove[i_])){
                    this.world.removeChild(Globals.asteroids[i]);
                    Globals.asteroids.splice(i, 1);

                    this.world.removeChild(this.bulletsInMove[i_]);
                    this.bulletsInMove.splice(i_, 1);
                }
            });
        });

        if(this.bulletsText.text !== `You have ${Globals.bullets.length} bullets`)
            this.bulletsText.text = `You have ${Globals.bullets.length} bullets`;

        if(this.timerText.text !== `You have ${Globals.gameTime - Globals.timerCount} seconds`)
            this.timerText.text = `You have ${Globals.gameTime - Globals.timerCount} seconds`;

        if(!Globals.asteroids.length && !Globals.bullets.length){
            this.winText.visible = true;
            clearInterval(this.timer);
            this.reStartButton.visible = true;
        }

        if((Globals.asteroids.length && !Globals.bullets.length && !this.bulletsInMove.length) || Globals.gameTime - Globals.timerCount <= 0){
            this.loseText.visible = true;
            clearInterval(this.timer);
            this.reStartButton.visible = true;
        }
    }

    downListener = (e) => {
        if(e.key === "ArrowRight") this.right = true;
        if(e.key === "ArrowLeft") this.left = true;
        if(e.key === " ")this.shoot();
    }

    upListener = (e) => {
        if(e.key === "ArrowRight") this.right = false;
        if(e.key === "ArrowLeft") this.left = false;
    }

    shoot = () => {
        if(Globals.bullets.length){
            const bullet = Globals.bullets[Globals.bullets.length - 1];
            bullet.x = this.ship.x - 3;
            bullet.y = Globals.baseHeight - this.ship.height;
            this.bulletsInMove.push(bullet);
            Globals.bullets.splice(Globals.bullets.length - 1, 1);
            this.world.addChild(bullet);
            this.shootSound.play();
        }
    }

    restart = (e) => {
        location.reload();
    }
}