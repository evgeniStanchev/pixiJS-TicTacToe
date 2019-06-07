namespace Game {

    export class HeadOrTail {

        private _multiplier: number = Math.floor(Math.random() * 10) + 30;
        private readonly PATH_BITMAP_FONT: string = `assets/bitmap-font/`;
        public readonly MAX_SIZE: number = 225;
        public readonly MIN_SIZE: number = 0;
        public readonly CHANGING_SIZE: number = 75;


        private _currentSize : number;
        private _isGrowingUp : boolean;
        private _isHead : boolean;
        private _ticker: PIXI.ticker.Ticker;
        private _app: PIXI.Application;
        private _player1: Player;
        private _player2: Player;
        private _headTexture: PIXI.Texture = PIXI.Texture.from('assets/images/head.png');
        private _headSprite: PIXI.Sprite = new PIXI.Sprite(this._headTexture);
        private _tailTexture: PIXI.Texture = PIXI.Texture.from('assets/images/tail.png');
        private _tailSprite: PIXI.Sprite = new PIXI.Sprite(this._tailTexture);
        private _coinSprite: PIXI.Sprite;
        private _namePlayer1: PIXI.extras.BitmapText;
        private _namePlayer2: PIXI.extras.BitmapText;

        constructor(app: PIXI.Application, player1: Player, player2: Player) {
            this._app = app;
            this._player1 = player1;
            this._player2 = player2;
            this._ticker = new PIXI.ticker.Ticker;
            this._currentSize = this.MAX_SIZE;
            this._isGrowingUp = false;
            this._isHead = true;
            this._ticker.add(() => {
                if (this._currentSize === this.MIN_SIZE) {
                    this.increase();
                } else if (this._currentSize === this.MAX_SIZE) {
                    this.decrease();
                }
                this.changeSize();
                console.log("run");
            }).started;

            PIXI.loader.add('desyrel', this.PATH_BITMAP_FONT + 'desyrel.xml').load(this.onAssetsLoaded.bind(this));


        }

        decrease(){
                if (--this._multiplier < 0 && this._currentSize === this.MAX_SIZE) {
                    //TODO stop(), don't destroy
                    this._app.ticker.destroy();
                    this.choosePlayer(this._coinSprite.texture);
                }
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

        increase(){
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

        changeSize(){
            if (this._isGrowingUp) {
                this._currentSize += this.CHANGING_SIZE;
            } else {
                this._currentSize -= this.CHANGING_SIZE;
            }
            this._coinSprite.width = this._currentSize;
        }

        onAssetsLoaded() {
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
        }



        //
        //     // const tailSprite = new PIXI.Sprite(tailTexture);
        //
        //     let isHead = true;
        //     let isGrowingUp = false;
        //     let currentSize = MAX_SIZE;
        //     let multiplier = Math.floor(Math.random() * 10) + 30;
        //
        //     coin.interactive = true;
        //     coin.buttonMode = true;
        //     coin.anchor.set(0.5);
        //     coin.x = app.screen.width / 2;
        //     coin.y = app.screen.height / 1.5;
        //     coin.width = MAX_SIZE;
        //     coin.height = MAX_SIZE;
        //     coin.on('pointertap', () => {
        //         multiplier = 1;
        //     });
        //     app.stage.addChild(coin);
        //
        //
        //     //TODO use the PIXI.ticker.Ticker(), not app.ticker
        //     app.ticker.add(() => {
        //         if (currentSize === MIN_SIZE) {
        //             increase();
        //         } else if (currentSize === MAX_SIZE) {
        //             decrease();
        //         }
        //         changeSize();
        //         console.log("run");
        //     });
        //     // ticker.start();
        //
        //     function changeSize() {
        //         if (isGrowingUp) {
        //             currentSize += CHANGING_SIZE;
        //         } else {
        //             currentSize -= CHANGING_SIZE;
        //         }
        //         coin.width = currentSize;
        //     }
        //
        //
        //     function flipCoin() {
        //         if (isHead) {
        //             coin.texture = tailTexture;
        //         } else {
        //             coin.texture = headTexture;
        //         }
        //         isHead = !isHead;
        //     }
        //
        //     function increase() {
        //         flipCoin();
        //         isGrowingUp = true;
        //     }
        //
        //     function decrease() {
        //         if (--multiplier < 0 && currentSize === MAX_SIZE) {
        //             //TODO stop(), don't destroy
        //             app.ticker.destroy();
        //             choosePlayer(coin.texture);
        //         }
        //         isGrowingUp = false;
        //     }
        //
        //     function choosePlayer(texture) {
        //         if (texture === tailTexture) {
        //             console.log("tail");
        //             // tailSprite.x = 300;
        //             // new Game(player2, player1);
        //         } else {
        //             console.log("head");
        //             // new Game(player1, player2)
        //         }
        //     }
    }
}