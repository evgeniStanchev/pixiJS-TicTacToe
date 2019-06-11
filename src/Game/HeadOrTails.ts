namespace Game {

    export class HeadOrTail {
        public readonly MAX_SIZE_COIN: number = 225;
        public readonly MIN_SIZE_COIN: number = 0;
        public readonly CHANGING_SIZE: number = 75;
        private readonly _headTexture: PIXI.Texture;
        private _headSprite: PIXI.Sprite;
        private readonly _tailTexture: PIXI.Texture;
        private _tailSprite: PIXI.Sprite;


        private _multiplier: number = Math.floor(Math.random() * 10) + 20;
        private _currentSize: number;
        private _isGrowingUp: boolean;
        private _isHead: boolean;
        private _ticker: PIXI.ticker.Ticker;
        private _app: PIXI.Application;
        private _player1: Player;
        private _player2: Player;
        private _coinSprite: PIXI.Sprite;
        private _namePlayer1: PIXI.extras.BitmapText;
        private _namePlayer2: PIXI.extras.BitmapText;

        constructor(app: PIXI.Application, player1: Player, player2: Player) {
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

        decrease() {
            this._isGrowingUp = false;
        }

        choosePlayer(texture) {
            if (texture === this._tailTexture) {
                console.log("tail");
                // new Game(player2, player1);
            } else {
                console.log("head");
                // new Game(player1, player2)
            }
        }

        increase() {
            this.flipCoin();
            this._isGrowingUp = true;
        }

        flipCoin() {
            if (this._isHead) {
                this._coinSprite.texture = this._tailTexture;
            } else {
                this._coinSprite.texture = this._headTexture;
            }
            this._isHead = !this._isHead;
        }

        changeSize() {
            if (this._isGrowingUp) {
                this._currentSize += this.CHANGING_SIZE;
            } else {
                this._currentSize -= this.CHANGING_SIZE;
            }
            this._coinSprite.width = this._currentSize;
        }

        init() {
            this._namePlayer1 = GameMenu.Utilities.getBitmapTextField(this._player1.name, 50, "center", this._app.screen.width / 5.5, this._app.screen.height / 10);
            this._app.stage.addChild(this._namePlayer1);

            this._namePlayer2 = GameMenu.Utilities.getBitmapTextField(this._player2.name, 50, "center", this._app.screen.width / 1.5, this._app.screen.height / 10);
            this._app.stage.addChild(this._namePlayer2);

            this._coinSprite = GameMenu.Utilities.getSprite(this._headTexture, true, true, this._app.screen.width / 2, this._app.screen.height / 1.5, this.MAX_SIZE_COIN, this.MAX_SIZE_COIN);
            this._coinSprite.on(`pointertap`, () => {
                this._multiplier = 1;
            });
            this._app.stage.addChild(this._coinSprite);

            this._headSprite = GameMenu.Utilities.getSprite(this._headTexture, false, false, this._app.screen.width / 4, this._app.screen.height / 3.5, 100, 100);
            this._app.stage.addChild(this._headSprite);

            this._tailSprite = GameMenu.Utilities.getSprite(this._tailTexture, false, false, this._app.screen.width / 1.35, this._app.screen.height / 3.25, 100, 100);
            this._app.stage.addChild(this._tailSprite);

            this.startTicker();
        }


        //TODO stop() method is deprecated now. I must create another solution.
        startTicker() {
            this._ticker.add(() => {
                if (this._currentSize === this.MIN_SIZE_COIN) {
                    this.increase();
                } else if (this._currentSize === this.MAX_SIZE_COIN) {
                    if (--this._multiplier <= 0 && this._currentSize === this.MAX_SIZE_COIN) {
                        this._ticker.autoStart = false;
                        this._ticker.stop();
                        this.choosePlayer(this._coinSprite.texture);
                        return;
                    } else {
                        this.decrease();
                    }
                }
                this.changeSize();
            });
        }
    }
}