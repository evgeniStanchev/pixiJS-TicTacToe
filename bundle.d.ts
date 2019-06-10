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
        private _titleText;
        private _textPlayer1;
        private _textPlayer2;
        private _errorEmptyInputText;
        private _errorEqualNamesText;
        private _errorBiggerLengthText;
        private _textInputPlayer1;
        private _textInputPlayer2;
        constructor(app: any);
        readonly titleText: PIXI.extras.BitmapText;
        readonly mainContainer: PIXI.Container;
        readonly textPlayer1: PIXI.extras.BitmapText;
        readonly textPlayer2: PIXI.extras.BitmapText;
        readonly background: Background;
        readonly textInputPlayer1: any;
        readonly textInputPlayer2: any;
        init(): void;
        onClick(): void;
        onAssetsLoaded(): void;
    }
}
declare namespace Game {
    class HeadOrTail {
        private _multiplier;
        readonly MAX_SIZE: number;
        readonly MIN_SIZE: number;
        readonly CHANGING_SIZE: number;
        private readonly _headTexture;
        private readonly _headSprite;
        private readonly _tailTexture;
        private readonly _tailSprite;
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
        private readonly app;
        constructor();
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
declare namespace Game {
    class Utilities {
        constructor();
        static getBitmapTextField(text: any, px: any, textAlign: any, x: any, y: any): PIXI.extras.BitmapText;
        static getErrorTextField(text: any, px: any, x: any, y: any): PIXI.Text;
    }
}
