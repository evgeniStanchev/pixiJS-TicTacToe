namespace Game {

    export class HeadOrTail {

        private _multiplier: number = Math.floor(Math.random() * 10) + 20;
        public readonly MAX_SIZE: number = 225;
        public readonly MIN_SIZE: number = 0;
        public readonly CHANGING_SIZE: number = 75;
        private readonly _headTexture: PIXI.Texture;
        private readonly _headSprite: PIXI.Sprite;
        private readonly _tailTexture: PIXI.Texture;
        private readonly _tailSprite: PIXI.Sprite;

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
            this._app = app;
            this._headTexture = PIXI.Texture.from('assets/images/head.png');
            this._headTexture.width = 225;
            this._headTexture.height = 225;
            this._headSprite = new PIXI.Sprite(this._headTexture);
            this._tailTexture = PIXI.Texture.from('assets/images/tail.png');
            this._tailTexture.width = 225;
            this._tailTexture.height = 225;
            this._tailSprite = new PIXI.Sprite(this._tailTexture);
            this._player1 = player1;
            this._player2 = player2;
            this._ticker = PIXI.ticker.shared;
            this._currentSize = this.MAX_SIZE;
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
                // tailSprite.x = 300;
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
            this._namePlayer1 = Utilities.getBitmapTextField("Player1", 50, "center", this._app.screen.width / 6, this._app.screen.height / 10);
            this._app.stage.addChild(this._namePlayer1);

            this._namePlayer2 = Utilities.getBitmapTextField("Player2", 50, "center", this._app.screen.width / 1.6, this._app.screen.height / 10);
            this._app.stage.addChild(this._namePlayer2);

            this._coinSprite = new PIXI.Sprite(this._headTexture);
            this._coinSprite.interactive = true;
            this._coinSprite.buttonMode = true;
            this._coinSprite.anchor.set(0.5);
            this._coinSprite.x = this._app.screen.width / 2;
            this._coinSprite.y = this._app.screen.height / 1.5;
            this._coinSprite.width = this.MAX_SIZE;
            this._coinSprite.height = this.MAX_SIZE;
            this._coinSprite.on('pointertap', () => {
                this._multiplier = 1;
            });
            this._app.stage.addChild(this._coinSprite);

            this._headSprite.anchor.set(0.5);
            this._headSprite.x = this._app.screen.width / 4;
            this._headSprite.y = this._app.screen.height / 3.5;
            this._headSprite.width = 100;
            this._headSprite.height = 100;
            this._headSprite.width = 100;
            this._headSprite.height = 100;
            this._app.stage.addChild(this._headSprite);

            this._tailSprite.anchor.set(0.5);
            this._tailSprite.x = this._app.screen.width / 1.35;
            this._tailSprite.y = this._app.screen.height / 3.25;
            this._tailSprite.width = 100;
            this._tailSprite.height = 100;
            this._tailSprite.width = 100;
            this._tailSprite.height = 100;
            this._app.stage.addChild(this._tailSprite);

            this.startTicker();
        }

        startTicker() {
            this._ticker.add(() => {
                if (this._currentSize === this.MIN_SIZE) {
                    this.increase();
                } else if (this._currentSize === this.MAX_SIZE) {
                    if (--this._multiplier <= 0 && this._currentSize === this.MAX_SIZE) {
                        //TODO stop(), don't destroy
                        this._ticker.autoStart = false;
                        this._ticker.stop();
                        return;
                        // this._app.ticker.destroy();
                        this.choosePlayer(this._coinSprite.texture);
                    } else {
                        this.decrease();
                    }
                }
                this.changeSize();
            }).start;
        }
    }
}