function Utilities() {
    this.getSprite = function GetSprite(texture, isInteractive, isButton, x, y, width, height) {
        const sprite = new PIXI.Sprite(texture);
        sprite.interactive = isInteractive;
        sprite.buttonMode = isButton;
        sprite.anchor.set(0.5);
        sprite.x = x;
        sprite.y = y;
        sprite.width = width;
        sprite.height = height;
        return sprite;
    }

    this.getErrorTextField = function GetErrorTextField(text, px, x, y) {
        const richText = new PIXI.Text(text, new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: px,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: ['#FF0000']
        }));
        richText.x = x;
        richText.y = y;
        return richText;
    }

    this.getTextInput = function GetTextInput(text) {
        let textInput = new PIXI.TextInput({
            input: {
                fontFamily: 'Arial',
                fontSize: '16px',
                padding: '5px',
                width: '200px',
                color: '#26272E'
            },
            box: {
                default: {fill: 0xE8E9F3, rounded: 12, stroke: {color: 0xCBCEE0, width: 3}},
                focused: {fill: 0xE1E3EE, rounded: 12, stroke: {color: 0xABAFC6, width: 3}},
                disabled: {fill: 0xDBDBDB, rounded: 12}
            }
        });
        textInput.x = text.x - 20;
        textInput.y = text.y + 60;
        return textInput
    }
}