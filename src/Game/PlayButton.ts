namespace Game {
    export class PlayButton extends PIXI.Sprite {

        constructor(app: PIXI.Application, gameMenu: GameMenu) {
            super();
            console.log("Play button created!");
            this.texture = PIXI.Texture.fromImage(`assets/playButton.png`);
            this.x = app.screen.width / 2;
            this.y = app.screen.height / 1.15;
            this.anchor.set(0.5);
            this.width = 200;
            this.height = 80;
            this.interactive = true;
            this.buttonMode = true;
            this.on('pointertap', function () {
                    this.removeErrorTexts();
                    if (!this.isWrongInput()) {
                        // mainContainer.removeChild(this);
                        // mainContainer.removeChild(background);
                        // gameMenu.mainContainer.removeChild(gameMenu.titleText);
                        // mainContainer.removeChild(player1Text);
                        // mainContainer.removeChild(player2Text);
                        // mainContainer.removeChild(player1Input);
                        // mainContainer.removeChild(player2Input);
                        // const player1 = new Player(player1Input.text);
                        // const player2 = new Player(player2Input.text);
                        // new HeadOrTail(app, player1, player2);
                    }
                }
            );
        }

        removeErrorTexts() {
            // mainContainer.removeChild(errorEmptyInputText);
            // mainContainer.removeChild(errorEqualNamesText);
            // mainContainer.removeChild(errorBiggerLengthText);
        }

        isWrongInput() {
            // if (player1Input.text === "" || player2Input.text === "") {
            //     mainContainer.addChild(errorEmptyInputText);
            //     return true;
            // } else if (player1Input.text === player2Input.text) {
            //     mainContainer.addChild(errorEqualNamesText);
            //     return true;
            // } else if (player1Input.text.length > 10 || player2Input.text.length > 10) {
            //     mainContainer.addChild(errorBiggerLengthText);
            //     return true;
            // }
            // return false;
        }
    }
}