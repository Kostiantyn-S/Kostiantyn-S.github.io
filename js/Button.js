import Globals from "./Globals.js";

export default class Button extends Object{
    constructor(){
        super();
    }

    createButton = (text, style, onClick, x = null, y = null) => {
        let bg = new PIXI.Graphics();
        bg.beginFill(0x2c95f6);
        bg.drawRoundedRect(0, 0, 300, 100, 20);
        bg.endFill();
        bg.x = x || Globals.baseWidth/2 - bg.width/2;
        bg.y = y || Globals.baseHeight/2 - bg.height/2;

        let text_ = Globals.text.getTextField(text, Globals.text.getTextStyle(style), bg.width/2, bg.height/2, 0.5, 0.5);
        bg.addChild(text_);
        bg.interactive = true;
        bg.on("click", onClick);

        return bg;
    }
}