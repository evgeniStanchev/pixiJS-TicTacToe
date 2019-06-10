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
            _this.texture = PIXI.Texture.from(path);
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
        // private _errorEmptyInputText: PIXI.Text;
        // private _errorEqualNamesText: PIXI.Text;
        // private _errorBiggerLengthText: PIXI.Text;
        // private _textInputPlayer1:  PIXI.TextInput;
        function GameMenu(utils) {
            this.PATH_BITMAP_FONT = "assets/bitmap-font/";
            this.app = new PIXI.Application(800, 600);
            document.body.appendChild(this.app.view);
            console.log("Game menu created");
            GameMenu.Utilities = utils;
            PIXI.loader.add('desyrel', this.PATH_BITMAP_FONT + 'desyrel.xml').load(this.onAssetsLoaded.bind(this));
            this._mainContainer = new PIXI.Container();
            this._background = new Game.Background(this.app.screen.width / 2, this.app.screen.height / 2, 'assets/tictactoe-background.jpg');
            this.playButton = new Game.PlayButton(this.app, this);
        }
        ;
        Object.defineProperty(GameMenu.prototype, "titleText", {
            get: function () {
                return this._titleText;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameMenu.prototype, "mainContainer", {
            get: function () {
                return this._mainContainer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameMenu.prototype, "textPlayer1", {
            get: function () {
                return this._textPlayer1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameMenu.prototype, "textPlayer2", {
            get: function () {
                return this._textPlayer2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameMenu.prototype, "background", {
            get: function () {
                return this._background;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameMenu.prototype, "textInputPlayer1", {
            get: function () {
                return this._inputPlayer1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameMenu.prototype, "textInputPlayer2", {
            get: function () {
                return this._inputPlayer2;
            },
            enumerable: true,
            configurable: true
        });
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
        GameMenu.prototype.bitmapTextField = function (text, px, textAlign, x, y) {
            var bitmapTextField = new PIXI.extras.BitmapText(text, {
                font: px + 'px Desyrel',
                align: textAlign
            });
            bitmapTextField.x = x;
            bitmapTextField.y = y;
            return bitmapTextField;
        };
        GameMenu.prototype.onAssetsLoaded = function () {
            this.app.stage.addChild(this._mainContainer);
            this._mainContainer.addChild(this.background);
            this._mainContainer.addChild(this.playButton);
            this._titleText = this.bitmapTextField("Tic-Tac-Toe", 75, "center", this.app.screen.width / 3.5, this.app.screen.height / 12);
            this._textPlayer1 = this.bitmapTextField("Player 1", 40, "center", this.app.screen.width / 10, this.app.screen.height / 1.6);
            this._textPlayer2 = this.bitmapTextField("Player 2", 40, "center", this.app.screen.width / 1.4, this.app.screen.height / 1.6);
            // this._errorEmptyInputText = Utilities.getErrorTextField("Please, write names!", 30, this.app.screen.width / 3.25, this.app.screen.height / 25);
            // this._errorEqualNamesText = Utilities.getErrorTextField("Names should be different!", 30, this.app.screen.width / 3.75, this.app.screen.height / 25);
            // this._errorBiggerLengthText = Utilities.getErrorTextField("Name's length should be less than 10!", 30, this.app.screen.width / 6, this.app.screen.height / 25);
            this._mainContainer.addChild(this._titleText);
            this._mainContainer.addChild(this._textPlayer1);
            this._mainContainer.addChild(this._textPlayer2);
            // this._mainContainer.addChild(this._errorEmptyInputText);
            // this._mainContainer.addChild(this._errorEqualNamesText);
            // this._mainContainer.addChild(this._errorBiggerLengthText);
            this._inputPlayer1 = GameMenu.Utilities.getTextInput(this._textPlayer1);
            this._inputPlayer2 = GameMenu.Utilities.getTextInput(this._textPlayer2);
            this._mainContainer.addChild(this._inputPlayer1);
            this._mainContainer.addChild(this._inputPlayer2);
        };
        return GameMenu;
    }());
    Game.GameMenu = GameMenu;
})(Game || (Game = {}));
var Game;
(function (Game) {
    var HeadOrTail = /** @class */ (function () {
        function HeadOrTail(app, player1, player2) {
            this.MAX_SIZE_COIN = 225;
            this.MIN_SIZE_COIN = 0;
            this.CHANGING_SIZE = 75;
            this._multiplier = Math.floor(Math.random() * 10) + 20;
            this._tailTexture = PIXI.Texture.from('assets/images/tail.png');
            this._headTexture = PIXI.Texture.from('assets/images/head.png');
            this._app = app;
            this._player1 = player1;
            this._player2 = player2;
            this._ticker = PIXI.ticker.shared;
            this._currentSize = this.MAX_SIZE_COIN;
            this._isGrowingUp = false;
            this._isHead = true;
            this.init();
        }
        HeadOrTail.prototype.decrease = function () {
            this._isGrowingUp = false;
        };
        HeadOrTail.prototype.choosePlayer = function (texture) {
            if (texture === this._tailTexture) {
                console.log("tail");
                // new Game(player2, player1);
            }
            else {
                console.log("head");
                // new Game(player1, player2)
            }
        };
        HeadOrTail.prototype.increase = function () {
            this.flipCoin();
            this._isGrowingUp = true;
        };
        HeadOrTail.prototype.flipCoin = function () {
            if (this._isHead) {
                this._coinSprite.texture = this._tailTexture;
            }
            else {
                this._coinSprite.texture = this._headTexture;
            }
            this._isHead = !this._isHead;
        };
        HeadOrTail.prototype.changeSize = function () {
            if (this._isGrowingUp) {
                this._currentSize += this.CHANGING_SIZE;
            }
            else {
                this._currentSize -= this.CHANGING_SIZE;
            }
            this._coinSprite.width = this._currentSize;
        };
        HeadOrTail.prototype.init = function () {
            var _this = this;
            this._namePlayer1 = Game.GameMenu.Utilities.getBitmapTextField(this._player1.name, 50, "center", this._app.screen.width / 6, this._app.screen.height / 10);
            this._app.stage.addChild(this._namePlayer1);
            this._namePlayer2 = Game.GameMenu.Utilities.getBitmapTextField(this._player2.name, 50, "center", this._app.screen.width / 1.6, this._app.screen.height / 10);
            this._app.stage.addChild(this._namePlayer2);
            this._coinSprite = Game.GameMenu.Utilities.getSprite(this._headTexture, true, true, this._app.screen.width / 2, this._app.screen.height / 1.5, this.MAX_SIZE_COIN, this.MAX_SIZE_COIN);
            this._coinSprite.on("pointertap", function () {
                _this._multiplier = 1;
            });
            this._app.stage.addChild(this._coinSprite);
            this._headSprite = Game.GameMenu.Utilities.getSprite(this._headTexture, false, false, this._app.screen.width / 4, this._app.screen.height / 3.5, 100, 100);
            this._app.stage.addChild(this._headSprite);
            this._tailSprite = Game.GameMenu.Utilities.getSprite(this._tailTexture, false, false, this._app.screen.width / 1.35, this._app.screen.height / 3.25, 100, 100);
            this._app.stage.addChild(this._tailSprite);
            this.startTicker();
        };
        //TODO stop() method is deprecated now. I must create another solution.
        HeadOrTail.prototype.startTicker = function () {
            var _this = this;
            this._ticker.add(function () {
                if (_this._currentSize === _this.MIN_SIZE_COIN) {
                    _this.increase();
                }
                else if (_this._currentSize === _this.MAX_SIZE_COIN) {
                    if (--_this._multiplier <= 0 && _this._currentSize === _this.MAX_SIZE_COIN) {
                        _this._ticker.autoStart = false;
                        _this._ticker.stop();
                        _this.choosePlayer(_this._coinSprite.texture);
                        return;
                    }
                    else {
                        _this.decrease();
                    }
                }
                _this.changeSize();
            });
        };
        return HeadOrTail;
    }());
    Game.HeadOrTail = HeadOrTail;
})(Game || (Game = {}));
var Game;
(function (Game) {
    var Main = /** @class */ (function () {
        function Main(utils) {
            this._utils = utils;
            console.log('Main created.');
            this.createMenu();
        }
        Main.prototype.createMenu = function () {
            new Game.GameMenu(this._utils);
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
                // if (!this.isWrongInput()) {
                gameMenu.mainContainer.removeChild(this);
                gameMenu.mainContainer.removeChild(gameMenu.background);
                gameMenu.mainContainer.removeChild(gameMenu.titleText);
                gameMenu.mainContainer.removeChild(gameMenu.textPlayer1);
                gameMenu.mainContainer.removeChild(gameMenu.textPlayer2);
                gameMenu.mainContainer.removeChild(gameMenu.textInputPlayer1);
                gameMenu.mainContainer.removeChild(gameMenu.textInputPlayer2);
                var player1 = new Game.Player(gameMenu.textInputPlayer1.text);
                var player2 = new Game.Player(gameMenu.textInputPlayer2.text);
                new Game.HeadOrTail(app, player1, player2);
            }
            // }
            );
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