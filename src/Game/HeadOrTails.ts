namespace Game {

    export class HeadOrTail {
        private readonly PATH_BITMAP_FONT: string = `assets/bitmap-font/`;
        public readonly MAX_SIZE: number = 225;
        public readonly MIN_SIZE: number = 0;
        public readonly CHANGING_SIZE: number = 75;

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
            PIXI.loader.add('desyrel', this.PATH_BITMAP_FONT + 'desyrel.xml').load(this.onAssetsLoaded.bind());
            this._namePlayer1 = Utilities.getBitmapTextField(this._player1.name, 50, "center", this._app.screen.width / 4, this._app.screen.height / 7);
            this._namePlayer2 = Utilities.getBitmapTextField(this._player2.name, 50, "center", this._app.screen.width / 1.35, this._app.screen.height / 7);
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