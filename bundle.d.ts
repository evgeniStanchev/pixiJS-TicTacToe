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
        private readonly _app;
        private _inputPlayer1;
        private _inputPlayer2;
        private _titleText;
        private _textPlayer1;
        private _textPlayer2;
        static Utilities: any;
        private _errorEmptyInputText;
        private _errorEqualNamesText;
        private _errorBiggerLengthText;
        constructor(utils: any);
        readonly errorEmptyInputText: PIXI.Text;
        readonly errorEqualNamesText: PIXI.Text;
        readonly errorBiggerLengthText: PIXI.Text;
        readonly titleText: PIXI.extras.BitmapText;
        readonly mainContainer: PIXI.Container;
        readonly textPlayer1: PIXI.extras.BitmapText;
        readonly textPlayer2: PIXI.extras.BitmapText;
        readonly background: Background;
        readonly textInputPlayer1: any;
        readonly textInputPlayer2: any;
        readonly app: PIXI.Application;
        removeErrorTexts(): void;
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
        static readonly BUTTON_PATH = "assets/playButton.png";
        private readonly app;
        private readonly gameMenu;
        private readonly mainContainer;
        private namePlayer1;
        private namePlayer2;
        constructor(gameMenu: GameMenu);
        addFunctionallity(): void;
        isWrongInput(): boolean;
        startHeadOrTails(): void;
        removeMainMenu(): void;
    }
}
declare namespace Game {
    class Player {
        private readonly _name;
        constructor(name: any);
        readonly name: string;
    }
}
