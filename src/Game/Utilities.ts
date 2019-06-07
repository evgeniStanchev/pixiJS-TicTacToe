namespace Game {

    export class Utilities {
        constructor() {
        }

        static getBitmapTextField(text, px, textAlign, x, y) {
            const bitmapTextField = new PIXI.extras.BitmapText(text, {
                font: px + 'px Desyrel',
                align: textAlign
            });
            bitmapTextField.x = x;
            bitmapTextField.y = y
            return bitmapTextField;
        }

        static getErrorTextField(text, px, x, y) {
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

        //TODO Text input
        // static getTextInput(width, x, y) {
        //
        //     inputText.width = width;
        //     inputText.x = x;
        //     inputText.y = y;
        //     return inputText;
        // }
    }
}