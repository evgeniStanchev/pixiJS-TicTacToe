namespace Game {
    export class GameMenu {
        private readonly PATH_BITMAP_FONT: string = `assets/bitmap-font/`;
        private readonly background: Background;
        private readonly playButton: PlayButton;
        private readonly _mainContainer: PIXI.Container;
        private readonly app: PIXI.Application;
        private _titleText: PIXI.extras.BitmapText;
        private _textPlayer1: PIXI.extras.BitmapText;
        private _textPlayer2: PIXI.extras.BitmapText;
        private _errorEmptyInputText: PIXI.Text;
        private _errorEqualNamesText: PIXI.Text;
        private _errorBiggerLengthText: PIXI.Text;
        private _textInputPlayer1;

        // private _textInputPlayer1 : PixiTextInput;

        constructor(app) {
            console.log("Game menu created");
            this.app = app;
            PIXI.loader.add('desyrel', this.PATH_BITMAP_FONT + 'desyrel.xml').load(this.onAssetsLoaded.bind(this));
            this._mainContainer = new PIXI.Container();
            this.background = new Background(this.app.screen.width / 2, this.app.screen.height / 2, 'assets/tictactoe-background.jpg');
            this.playButton = new PlayButton(this.app, this);
            new HeadOrTail(this.app, new Player("Evgeni"), new Player("Stanchev"));
            // this.playButton.on(`pointertap`, this.onClick());
            // // this.init();
        };

        // get titleText(): PIXI.extras.BitmapText {
        //     return this._titleText;
        // }

        get mainContainer(): PIXI.Container {
            return this._mainContainer;
        }

        init() {

            // this._mainContainer.addChild(this._titleText);
        }

        // onAssetsLoaded() {
        //     const bitmapFontText = new PIXI.extras.BitmapText('bitmap fonts are supported!\nWoo yay!', { font: '55px Desyrel', align: 'left' });
        //
        //     bitmapFontText.x = 50;
        //     bitmapFontText.y = 200;
        //
        //     this.app.stage.addChild(bitmapFontText);
        // }

        onClick(){
                // console.log(player1Input , " hhh " + player2Input);
                // mainContainer.removeChild(emptyInputText);
                // mainContainer.removeChild(equalNamesText);
                // if (player1Input.text === "" || player2Input.text === "") {
                //     mainContainer.addChild(emptyInputText);
                // } else if (player1Input.text === player2Input.text) {
                //     mainContainer.addChild(equalNamesText);
                // } else {
                //     mainContainer.removeChild(playButton);
                //     mainContainer.removeChild(background);
                //     mainContainer.removeChild(titleText);
                //     mainContainer.removeChild(player1Text);
                //     mainContainer.removeChild(player2Text);
                //     mainContainer.removeChild(player1Input);
                //     mainContainer.removeChild(player2Input);
                    const player1 = new Player("Player 1");
                    const player2 = new Player("Player 2");
                    new HeadOrTail(this.app, player1, player2);
        }

        onAssetsLoaded() {
            this._titleText = Utilities.getBitmapTextField("Tic-Tac-Toe", 75, "center", this.app.screen.width / 3.5, this.app.screen.height / 12);
            this._textPlayer1 = Utilities.getBitmapTextField("Player 1", 40, "center", this.app.screen.width / 10, this.app.screen.height / 1.7);
            this._textPlayer2 = Utilities.getBitmapTextField("Player 2", 40, "center", this.app.screen.width / 1.4, this.app.screen.height / 1.7);
            this._errorEmptyInputText = Utilities.getErrorTextField("Please, write names!", 30, this.app.screen.width / 3.25, this.app.screen.height / 25);
            this._errorEqualNamesText = Utilities.getErrorTextField("Names should be different!", 30, this.app.screen.width / 3.75, this.app.screen.height / 25);
            this._errorBiggerLengthText = Utilities.getErrorTextField("Name's length should be less than 10!", 30, this.app.screen.width / 6, this.app.screen.height / 25);


            this.app.stage.addChild(this._mainContainer);
            this._mainContainer.addChild(this.background);
            this._mainContainer.addChild(this.playButton);
            this._mainContainer.addChild(this._titleText);
            this._mainContainer.addChild(this._textPlayer1);
            this._mainContainer.addChild(this._textPlayer2);
            // this._mainContainer.addChild(this._errorEmptyInputText);
            // this._mainContainer.addChild(this._errorEqualNamesText);
            // this._mainContainer.addChild(this._errorBiggerLengthText);

            // player1Input = UTILITIES.textInput(150, app.screen.width / 8.5, app.screen.height / 1.4);
            // player2Input = UTILITIES.textInput(150, app.screen.width / 1.4, app.screen.height / 1.4);
            // errorEmptyInputText = UTILITIES.errorTextField("Please, write names!", 30, app.screen.width / 3.25, app.screen.height / 25);
            // errorEqualNamesText = UTILITIES.errorTextField("Names should be different!", 30, app.screen.width / 3.75, app.screen.height / 25);
            // errorBiggerLengthText = UTILITIES.errorTextField("Name's length should be less than 10!", 30, app.screen.width / 6, app.screen.height / 25);

            // this._mainContainer.addChild(player1Input);
            // this._mainContainer.addChild(player2Input);
            // this._mainContainer.addChild(player1Text)
            // this._mainContainer.addChild(player2Text);
            // this._mainContainer.addChild(player1Input);
        }
    }
}