/// <reference types="pixi.js" />
declare namespace Game {
    class Background extends PIXI.Sprite {
        constructor(x: number, y: number, path: string);
    }
}
declare namespace Game {
    class GameMenu {
        private readonly PATH_BITMAP_FONT;
        private readonly _background;
        private readonly playButton;
        private readonly _mainContainer;
        private readonly app;
        private _inputPlayer1;
        private _inputPlayer2;
        private _titleText;
        private _textPlayer1;
        private _textPlayer2;
        static Utilities: any;
        constructor(utils: any);
        readonly titleText: PIXI.extras.BitmapText;
        readonly mainContainer: PIXI.Container;
        readonly textPlayer1: PIXI.extras.BitmapText;
        readonly textPlayer2: PIXI.extras.BitmapText;
        readonly background: Background;
        readonly textInputPlayer1: any;
        readonly textInputPlayer2: any;
        onClick(): void;
        bitmapTextField(text: any, px: any, textAlign: any, x: any, y: any): PIXI.extras.BitmapText;
        onAssetsLoaded(): void;
    }
}
declare namespace Game {
    class HeadOrTail {
        readonly MAX_SIZE_COIN: number;
        readonly MIN_SIZE_COIN: number;
        readonly CHANGING_SIZE: number;
        private readonly _headTexture;
        private _headSprite;
        private readonly _tailTexture;
        private _tailSprite;
        private _multiplier;
        private _currentSize;
        private _isGrowingUp;
        private _isHead;
        private _ticker;
        private _app;
        private _player1;
        private _player2;
        private _coinSprite;
        private _namePlayer1;
        private _namePlayer2;
        constructor(app: PIXI.Application, player1: Player, player2: Player);
        decrease(): void;
        choosePlayer(texture: any): void;
        increase(): void;
        flipCoin(): void;
        changeSize(): void;
        init(): void;
        startTicker(): void;
    }
}
declare namespace Game {
    class Main {
        private readonly _utils;
        constructor(utils: any);
        createMenu(): void;
    }
}
declare namespace Game {
    class PlayButton extends PIXI.Sprite {
        constructor(app: PIXI.Application, gameMenu: GameMenu);
        removeErrorTexts(): void;
        isWrongInput(): void;
    }
}
declare namespace Game {
    class Player {
        private readonly _name;
        constructor(name: any);
        readonly name: string;
    }
}
