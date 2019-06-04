function Utilities() {
    this.playButton = function PlayButton(x, y) {
        const button = PIXI.Sprite.fromImage('assets/playButton.png');
        button.x = x;
        button.y = y;
        button.anchor.set(0.5);
        button.width = 200;
        button.height = 80;
        button.interactive = true;
        button.buttonMode = true;
        button.on('pointertap', function () {
            new Game("Player1", "Player2");
        });
        return button;
    }

    this.background = function Background(x, y) {
        const background = PIXI.Sprite.fromImage('assets/tictactoe-background.jpg');

        background.anchor.set(0.5);

        background.x = x;
        background.y = y;

        return background;
    }

    this.textInput = function TextInput(width, x, y) {
        const inputText = new PixiTextInput();
        inputText.width = width;
        inputText.x = x;
        inputText.y = y;
        return inputText;
    }

    this.bitmapTextField = function BitmapTextField(text, px, textAlign, x, y) {
        const bitmapTextField = new PIXI.extras.BitmapText(text, {
            font: px + 'px Desyrel',
            align: textAlign
        });
        bitmapTextField.anchor.set(0.5);
        bitmapTextField.x = x;
        bitmapTextField.y = y
        return bitmapTextField;
    }

    this.errorTextField = function ErrorTextField(text, px, x, y) {
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

}