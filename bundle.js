var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game;
(function (Game) {
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        function Background(x, y, path) {
            var _this = _super.call(this) || this;
            console.log("Background created");
            _this.texture = PIXI.Texture.fromImage(path);
            _this.anchor.set(0.5);
            _this.x = x;
            _this.y = y;
            return _this;
        }
        return Background;
    }(PIXI.Sprite));
    Game.Background = Background;
})(Game || (Game = {}));
var Game;
(function (Game) {
    var GameMenu = /** @class */ (function () {
        // private _textInputPlayer1 : PixiTextInput;
        function GameMenu(app) {
            this.PATH_BITMAP_FONT = "assets/bitmap-font/";
            console.log("Game menu created");
            this.app = app;
            new Game.HeadOrTail(this.app, new Game.Player("Evgeni"), new Game.Player("Stanchev"));
            PIXI.loader.add('desyrel', this.PATH_BITMAP_FONT + 'desyrel.xml').load(this.onAssetsLoaded.bind(this));
            // this._mainContainer = new PIXI.Container();
            // this.background = new Background(this.app.screen.width / 2, this.app.screen.height / 2, 'assets/tictactoe-background.jpg');
            // this.playButton = new PlayButton(this.app, this);
            // // @ts-ignore
            // this.playButton.on(`pointertap`, this.onClick());
            // // this.init();
        }
        ;
        Object.defineProperty(GameMenu.prototype, "mainContainer", {
            // get titleText(): PIXI.extras.BitmapText {
            //     return this._titleText;
            // }
            get: function () {
                return this._mainContainer;
            },
            enumerable: true,
            configurable: true
        });
        GameMenu.prototype.init = function () {
            // this._mainContainer.addChild(this._titleText);
        };
        // onAssetsLoaded() {
        //     const bitmapFontText = new PIXI.extras.BitmapText('bitmap fonts are supported!\nWoo yay!', { font: '55px Desyrel', align: 'left' });
        //
        //     bitmapFontText.x = 50;
        //     bitmapFontText.y = 200;
        //
        //     this.app.stage.addChild(bitmapFontText);
        // }
        GameMenu.prototype.onClick = function () {
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
            var player1 = new Game.Player("Player 1");
            var player2 = new Game.Player("Player 2");
            new Game.HeadOrTail(this.app, player1, player2);
        };
        GameMenu.prototype.onAssetsLoaded = function () {
            this._titleText = Game.Utilities.getBitmapTextField("Tic-Tac-Toe", 75, "center", this.app.screen.width / 3.5, this.app.screen.height / 12);
            this._textPlayer1 = Game.Utilities.getBitmapTextField("Player 1", 40, "center", this.app.screen.width / 10, this.app.screen.height / 1.7);
            this._textPlayer2 = Game.Utilities.getBitmapTextField("Player 2", 40, "center", this.app.screen.width / 1.4, this.app.screen.height / 1.7);
            this._errorEmptyInputText = Game.Utilities.getErrorTextField("Please, write names!", 30, this.app.screen.width / 3.25, this.app.screen.height / 25);
            this._errorEqualNamesText = Game.Utilities.getErrorTextField("Names should be different!", 30, this.app.screen.width / 3.75, this.app.screen.height / 25);
            this._errorBiggerLengthText = Game.Utilities.getErrorTextField("Name's length should be less than 10!", 30, this.app.screen.width / 6, this.app.screen.height / 25);
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
        };
        return GameMenu;
    }());
    Game.GameMenu = GameMenu;
})(Game || (Game = {}));
var Game;
(function (Game) {
    var GameMenu = Game.GameMenu;
    var Main = /** @class */ (function () {
        function Main() {
            this.app = new PIXI.Application(800, 600);
            document.body.appendChild(this.app.view);
            console.log('Main created.');
            this.createMenu();
        }
        Main.prototype.createMenu = function () {
            new GameMenu(this.app);
            console.log('Menu created!');
        };
        return Main;
    }());
    Game.Main = Main;
})(Game || (Game = {}));
var Game;
(function (Game) {
    var PlayButton = /** @class */ (function (_super) {
        __extends(PlayButton, _super);
        function PlayButton(app, gameMenu) {
            var _this = _super.call(this) || this;
            console.log("Play button created!");
            _this.texture = PIXI.Texture.fromImage("assets/playButton.png");
            _this.x = app.screen.width / 2;
            _this.y = app.screen.height / 1.15;
            _this.anchor.set(0.5);
            _this.width = 200;
            _this.height = 80;
            _this.interactive = true;
            _this.buttonMode = true;
            _this.on('pointertap', function () {
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
            });
            return _this;
        }
        PlayButton.prototype.removeErrorTexts = function () {
            // mainContainer.removeChild(errorEmptyInputText);
            // mainContainer.removeChild(errorEqualNamesText);
            // mainContainer.removeChild(errorBiggerLengthText);
        };
        PlayButton.prototype.isWrongInput = function () {
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
        };
        return PlayButton;
    }(PIXI.Sprite));
    Game.PlayButton = PlayButton;
})(Game || (Game = {}));
var Game;
(function (Game) {
    var Utilities = /** @class */ (function () {
        function Utilities() {
        }
        Utilities.getBitmapTextField = function (text, px, textAlign, x, y) {
            var bitmapTextField = new PIXI.extras.BitmapText(text, {
                font: px + 'px Desyrel',
                align: textAlign
            });
            bitmapTextField.x = x;
            bitmapTextField.y = y;
            return bitmapTextField;
        };
        Utilities.getErrorTextField = function (text, px, x, y) {
            var richText = new PIXI.Text(text, new PIXI.TextStyle({
                fontFamily: 'Arial',
                fontSize: px,
                fontStyle: 'italic',
                fontWeight: 'bold',
                fill: ['#FF0000']
            }));
            richText.x = x;
            richText.y = y;
            return richText;
        };
        return Utilities;
    }());
    Game.Utilities = Utilities;
})(Game || (Game = {}));
var Game;
(function (Game) {
    var HeadOrTail = /** @class */ (function () {
        function HeadOrTail(app, player1, player2) {
            this.MAX_SIZE = 225;
            this.MIN_SIZE = 0;
            this.CHANGING_SIZE = 75;
            this._headTexture = PIXI.Texture.from('assets/images/head.png');
            this._headSprite = new PIXI.Sprite(this._headTexture);
            this._tailTexture = PIXI.Texture.from('assets/images/tail.png');
            this._tailSprite = new PIXI.Sprite(this._tailTexture);
            this._app = app;
            this._player1 = player1;
            this._player2 = player2;
            this._namePlayer1 = Game.Utilities.getBitmapTextField(this._player1.name, 50, "center", this._app.screen.width / 4, this._app.screen.height / 7);
            this._namePlayer2 = Game.Utilities.getBitmapTextField(this._player2.name, 50, "center", this._app.screen.width / 1.35, this._app.screen.height / 7);
            this._coinSprite = new PIXI.Sprite(this._headTexture);
            this._headSprite.anchor.set(0.5);
            this._headSprite.x = app.screen.width / 4;
            this._headSprite.y = app.screen.height / 3.5;
            this._tailSprite.anchor.set(0.5);
            this._tailSprite.x = app.screen.width / 1.35;
            this._tailSprite.y = app.screen.height / 3.25;
            this._tailSprite.width = 100;
            this._tailSprite.height = 100;
            this._tailSprite.width = 100;
            this._tailSprite.height = 100;
            this._app.stage.addChild(this._namePlayer1);
            this._app.stage.addChild(this._namePlayer2);
            this._app.stage.addChild(this._headSprite);
            this._app.stage.addChild(this._tailSprite);
        }
        return HeadOrTail;
    }());
    Game.HeadOrTail = HeadOrTail;
})(Game || (Game = {}));
var Game;
(function (Game) {
    var Player = /** @class */ (function () {
        function Player(name) {
            this._name = name;
        }
        Object.defineProperty(Player.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        return Player;
    }());
    Game.Player = Player;
})(Game || (Game = {}));
//# sourceMappingURL=bundle.js.map