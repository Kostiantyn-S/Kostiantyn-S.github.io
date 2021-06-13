import Globals from "./Globals.js";

export default class Asteroid extends Object{
    constructor(x){
        super();
        let asteroid = new Globals.Sprite(Globals.resources["../assets/asteroid.png"].texture);
        asteroid.scale.x = asteroid.scale.y = Globals.asteroidsScales[Math.floor(Math.random() * Globals.asteroidsScales.length)];
        asteroid.anchor.x = 0.5;
        asteroid.anchor.y = 0.5;
        asteroid.x = x;
        asteroid.y = Math.random() * 300 + 100;
        Globals.asteroids.push(asteroid);
        return asteroid;
    }
}