export default class TextStyles extends Object{
    
    bulletsCountTextStyle = {
        fontFamily: "Arial",
        fontSize: 28,
        fill: "white",
        stroke: '#4ef62c',
        strokeThickness: 4,
        dropShadow: true,
        dropShadowColor: "#000000",
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
    };

    WinTextStyle = {
        fontFamily: "Arial",
        fontSize: 158,
        fill: "green",
        stroke: '#e9c46a',
        strokeThickness: 4,
        dropShadow: true,
        dropShadowColor: "#000000",
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
    };

    LoseTextStyle = {
        fontFamily: "Arial",
        fontSize: 158,
        fill: "red",
        stroke: '#e9c46a',
        strokeThickness: 4,
        dropShadow: true,
        dropShadowColor: "#000000",
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
    };

    ButtonTextstyle = {
        fontFamily: "Arial",
        fontSize: 38,
        fill: "black",
        stroke: 'white',
        strokeThickness: 4,
        dropShadow: true,
        dropShadowColor: "#000000",
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
    };
    
    constructor(){
        super();
    }

    getTextStyle = (name) => {
        switch(name){
            case "bulletsCount": return new PIXI.TextStyle(this.bulletsCountTextStyle);
            case "winText": return new PIXI.TextStyle(this.WinTextStyle);
            case "loseText": return new PIXI.TextStyle(this.LoseTextStyle);
            case "buttonText": return new PIXI.TextStyle(this.ButtonTextstyle);
        }
    }

    getTextField = (text, style, x = 0, y = 0, anchorX = 0, anchorY = 0) => {
        let text_ = new PIXI.Text(text, style);
        text_.anchor.x = anchorX;
        text_.anchor.y = anchorY;
        text_.position.x = x;
        text_.position.y = y;
        return text_;
    }
}