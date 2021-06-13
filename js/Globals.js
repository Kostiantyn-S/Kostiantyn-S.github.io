import Button from "./Button.js";
import TextStyles from "./TextStyles.js";
import World from "./World.js";

export default class Globals extends Object{    
    
    static baseWidth = 1280;
    static baseHeight = 720;
    static asteroidsCount = 10;
    static asteroidsScales = [0.1, 0.2, 0.3];
    static bulletsCount = 10;
    static gameTime = 60;

    static Application = PIXI.Application;
    static Container = PIXI.Container;
    static loader = PIXI.loader;
    static resources = PIXI.loader.resources;
    static Sprite = PIXI.Sprite;
    static bump = new Bump(PIXI);

    static appSettings = {
        backgroundColor: 0x1099bb,
        resolution: 1,
        width: Globals.baseWidth,
        height: Globals.baseHeight
    }

    static app = new Globals.Application(Globals.appSettings);
    static text = new TextStyles();
    static button = new Button();
    static asteroids = [];
    static bullets = [];
    static world;
    static timerCount = 0;
    
    constructor(){
        super();
    }
}