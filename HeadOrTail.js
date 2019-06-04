function HeadOrTail(app, player1, player2) {
    const UTILITIES = new Utilities();
    const MAX_SIZE = 225;
    const MIN_SIZE = 0;
    const CHANGING_SIZE = 75;
    const headTexture = PIXI.Texture.from('assets/images/head.png');
    const tailTexture = PIXI.Texture.from('assets/images/tail.png');
    const coin = new PIXI.Sprite(headTexture);

    let isHead = true;
    let isGrowingUp = false;
    let currentSize = MAX_SIZE;
    let multiplier = Math.floor(Math.random() * 10) + 30;

    coin.interactive = true;
    coin.buttonMode = true;
    coin.anchor.set(0.5);
    coin.x = app.screen.width / 2;
    coin.y = app.screen.height / 2;
    coin.width = MAX_SIZE;
    coin.height = MAX_SIZE;
    coin.on('pointertap', () => {
        multiplier = 1;
    });
    app.stage.addChild(coin);

    app.ticker.add(() => {
        if (currentSize === MIN_SIZE) {
            increase();
        } else if (currentSize === MAX_SIZE) {
            decrease();
        }
        changeSize();
    });

    function changeSize() {
        if (isGrowingUp) {
            currentSize += CHANGING_SIZE;
        } else {
            currentSize -= CHANGING_SIZE;
        }
        coin.width = currentSize;
    }

    function increase() {
        flipCoin();
        isGrowingUp = true;
    }

    function flipCoin() {
        if (isHead) {
            coin.texture = tailTexture;
        } else {
            coin.texture = headTexture;
        }
        isHead = !isHead;
    }

    function decrease() {
        if (--multiplier === MIN_SIZE) {
            app.ticker.destroy();
            choosePlayer(coin.texture);
        }
        isGrowingUp = false;
    }

    function choosePlayer(texture) {
        if (texture === tailTexture) {
            new Game(player2, player1);
        } else {
            new Game(player1, player2)
        }
    }


}