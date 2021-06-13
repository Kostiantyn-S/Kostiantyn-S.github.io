import Asteroid from "./Asteroid.js";
import Bullet from "./Bullet.js";
import Globals from "./Globals.js";
import Ship from "./Ship.js";

export default class World extends Object{

    constructor(){
        super();
    }

    createWorld = () => {
        this.world = new Globals.Container();

        this.sky = new Globals.Sprite(Globals.resources["../assets/sky.jpg"].texture);
        this.world.addChild(this.sky);

        this.ship = new Ship(Globals.baseWidth/2, Globals.baseHeight);
        this.ship.name = "ship";
        this.world.addChild(this.ship);

        let countWidth = 90;
        for(let i = 0; i < Globals.asteroidsCount; i++){
            const asteroid = new Asteroid(countWidth);
            countWidth += 110;
            this.world.addChild(asteroid);
        }

        for(let i = 0; i < Globals.bulletsCount; i++){
            const bullet = new Bullet();
        }

        this.bulletsText = Globals.text.getTextField(`You have ${Globals.bullets.length} bullets`, Globals.text.getTextStyle("bulletsCount"), 10, 35);
        this.bulletsText.name = "bulletsText";
        this.world.addChild(this.bulletsText);

        this.timerText = Globals.text.getTextField(`You have ${Globals.gameTime - Globals.timerCount} seconds`,  Globals.text.getTextStyle("bulletsCount"), Globals.baseWidth - 10, 35);
        this.timerText.x -= this.timerText.width;
        this.timerText.name = "timerText";
        this.world.addChild(this.timerText);

        this.winText = Globals.text.getTextField("YOU WIN",  Globals.text.getTextStyle("winText"), Globals.baseWidth/2, Globals.baseHeight/2, 0.5, 0.5);
        this.winText.visible = false;
        this.winText.name = "winText";
        this.world.addChild(this.winText);

        this.loseText = Globals.text.getTextField("YOU LOSE",  Globals.text.getTextStyle("loseText"), Globals.baseWidth/2, Globals.baseHeight/2, 0.5, 0.5);
        this.loseText.visible = false;
        this.loseText.name = "loseText";
        this.world.addChild(this.loseText);

        this.startButton = Globals.button.createButton("Start", "buttonText", this.onStartButton);
        this.world.addChild(this.startButton);

        this.reStartButton = Globals.button.createButton("Restart", "buttonText", this.onReStartButton, null, 500);
        this.reStartButton.visible = false;
        this.reStartButton.name = "reStartButton";
        this.world.addChild(this.reStartButton);

        this.gameMusic = new Howl({
            src: ['assets/gameMusic.mp3'],
            autoplay: true,
            loop: true,
            volume: 0.5
        });
        this.gameMusic.play();

        return this.world;
    }

    onReStartButton = (e) => {
        this.reStartButton.visible = false;
        window.dispatchEvent(new Event("reStartClicked"));
    }

    onStartButton = (e) => {
        this.startButton.visible = false;
        window.dispatchEvent(new Event("startClicked"));
    }
}