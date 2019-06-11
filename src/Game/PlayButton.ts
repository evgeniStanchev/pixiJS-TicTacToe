namespace Game {
    export class PlayButton extends PIXI.Sprite {

        public static readonly BUTTON_PATH = `assets/playButton.png`;
        private readonly app: PIXI.Application;
        private readonly gameMenu: GameMenu;
        private readonly mainContainer: PIXI.Container;
        private namePlayer1: string;
        private namePlayer2: string;

        constructor(gameMenu: GameMenu) {
            super();
            this.app = gameMenu.app;
            this.gameMenu = gameMenu;
            this.mainContainer = this.gameMenu.mainContainer;
            this.texture = PIXI.Texture.fromImage(PlayButton.BUTTON_PATH);
            this.x = this.app.screen.width / 2;
            this.y = this.app.screen.height / 1.15;
            this.anchor.set(0.5);
            this.width = 200;
            this.height = 80;
            this.interactive = true;
            this.buttonMode = true;
            this.addFunctionallity();
        }


        addFunctionallity() {
            this.on('pointertap', function () {
                    this.gameMenu.removeErrorTexts();
                    this.namePlayer1 = this.gameMenu.textInputPlayer1.text;
                    this.namePlayer2 = this.gameMenu.textInputPlayer2.text;
                    if (!this.isWrongInput()) {
                        this.removeMainMenu();
                        this.startHeadOrTails();
                    }
                }
            );
        }

        isWrongInput() {
            if (this.namePlayer1 === "" || this.namePlayer2 === "") {
                this.mainContainer.addChild(this.gameMenu.errorEmptyInputText);
                return true;
            } else if (this.namePlayer1 === this.namePlayer2) {
                this.mainContainer.addChild(this.gameMenu.errorEqualNamesText);
                return true;
            } else if (this.namePlayer1.length > 10 || this.namePlayer2.length > 10) {
                this.mainContainer.addChild(this.gameMenu.errorBiggerLengthText);
                return true;
            }
            return false;
        }

        startHeadOrTails() {
            const player1 = new Player(this.namePlayer1);
            const player2 = new Player(this.namePlayer2);
            new HeadOrTail(this.app, player1, player2);
        }

        removeMainMenu() {
            this.mainContainer.removeChild(this);
            this.mainContainer.removeChild(this.gameMenu.background);
            this.mainContainer.removeChild(this.gameMenu.titleText);
            this.mainContainer.removeChild(this.gameMenu.textPlayer1);
            this.mainContainer.removeChild(this.gameMenu.textPlayer2);
            this.mainContainer.removeChild(this.gameMenu.textInputPlayer1);
            this.mainContainer.removeChild(this.gameMenu.textInputPlayer2);
        }
    }
}