import Globals from "./Globals.js";

export default class Bullet extends Object{
    constructor(){
        super();
        let bullet = new PIXI.Graphics();
        bullet.beginFill(0xffffff);
        bullet.drawRect(0, 0, 5, 10);
        bullet.endFill();
        Globals.bullets.push(bullet);
    }
}