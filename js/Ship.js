import Globals from "./Globals.js";

export default class Ship extends Object{
    constructor(x, y){
        super();
        let ship = new Globals.Sprite(Globals.resources["../assets/spaceShip.png"].texture);
        ship.scale.x = ship.scale.y = 0.3;
        ship.anchor.x = 0.5;
        ship.anchor.y = 1;
        ship.x = x;
        ship.y = y;
        return ship;
    }
}