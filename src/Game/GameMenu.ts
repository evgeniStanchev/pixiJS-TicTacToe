namespace Game {
    export class GameMenu {
        private readonly PATH_BITMAP_FONT: string = `assets/bitmap-font/`;
        private readonly _background: Background;
        private readonly playButton: PlayButton;
        private readonly _mainContainer: PIXI.Container;
        private readonly _app: PIXI.Application;
        private _inputPlayer1: any;
        private _inputPlayer2: any;
        private _titleText: PIXI.extras.BitmapText;
        private _textPlayer1: PIXI.extras.BitmapText;
        private _textPlayer2: PIXI.extras.BitmapText;
        public static Utilities: any;
        private _errorEmptyInputText: PIXI.Text;
        private _errorEqualNamesText: PIXI.Text;
        private _errorBiggerLengthText: PIXI.Text;

        constructor(utils: any) {
            this._app = new PIXI.Application(800, 600);
            document.body.appendChild(this._app.view);
            console.log("Game menu created");
            GameMenu.Utilities = utils;
            PIXI.loader.add('desyrel', this.PATH_BITMAP_FONT + 'desyrel.xml').load(this.onAssetsLoaded.bind(this));
            this._mainContainer = new PIXI.Container();
            this._background = new Background(this._app.screen.width / 2, this._app.screen.height / 2, 'assets/tictactoe-background.jpg');
            this.playButton = new PlayButton(this);
        };

        //Getters
        get errorEmptyInputText(): PIXI.Text {
            return this._errorEmptyInputText;
        }

        get errorEqualNamesText(): PIXI.Text {
            return this._errorEqualNamesText;
        }

        get errorBiggerLengthText(): PIXI.Text {
            return this._errorBiggerLengthText;
        }

        get titleText(): PIXI.extras.BitmapText {
            return this._titleText;
        }

        get mainContainer(): PIXI.Container {
            return this._mainContainer;
        }

        get textPlayer1(): PIXI.extras.BitmapText {
            return this._textPlayer1;
        }

        get textPlayer2(): PIXI.extras.BitmapText {
            return this._textPlayer2;
        }

        get background(): Background {
            return this._background;
        }

        get textInputPlayer1(): any {
            return this._inputPlayer1;
        }

        get textInputPlayer2(): any {
            return this._inputPlayer2;
        }

        get app(): PIXI.Application {
            return this._app;
        }

        removeErrorTexts() {
            this.mainContainer.removeChild(this._errorEmptyInputText);
            this.mainContainer.removeChild(this._errorEqualNamesText);
            this.mainContainer.removeChild(this._errorBiggerLengthText);
        }

        onAssetsLoaded() {
            this._app.stage.addChild(this._mainContainer);
            this._mainContainer.addChild(this.background);
            this._mainContainer.addChild(this.playButton);

            this._titleText = GameMenu.Utilities.getBitmapTextField("Tic-Tac-Toe", 75, "center", this._app.screen.width / 3.5, this._app.screen.height / 12);
            this._mainContainer.addChild(this._titleText);
            this._textPlayer1 = GameMenu.Utilities.getBitmapTextField("Player 1", 40, "center", this._app.screen.width / 10, this._app.screen.height / 1.6);
            this._mainContainer.addChild(this._textPlayer1);
            this._textPlayer2 = GameMenu.Utilities.getBitmapTextField("Player 2", 40, "center", this._app.screen.width / 1.4, this._app.screen.height / 1.6);
            this._mainContainer.addChild(this._textPlayer2);

            this._inputPlayer1 = GameMenu.Utilities.getTextInput(this._textPlayer1);
            this._mainContainer.addChild(this._inputPlayer1);
            this._inputPlayer2 = GameMenu.Utilities.getTextInput(this._textPlayer2);
            this._mainContainer.addChild(this._inputPlayer2);

            this._errorEmptyInputText = GameMenu.Utilities.getErrorTextField("Please, write names!", 30, this._app.screen.width / 3.25, this._app.screen.height / 25);
            this._errorEqualNamesText = GameMenu.Utilities.getErrorTextField("Names should be different!", 30, this._app.screen.width / 3.75, this._app.screen.height / 25);
            this._errorBiggerLengthText = GameMenu.Utilities.getErrorTextField("Name's length should be less than 10!", 30, this._app.screen.width / 6, this._app.screen.height / 25);
        }
    }
}