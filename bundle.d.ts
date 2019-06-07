/// <reference types="pixi.js" />
declare namespace Game {
    class Background extends PIXI.Sprite {
        constructor(x: number, y: number, path: string);
    }
}
declare namespace Game {
    class GameMenu {
        private readonly PATH_BITMAP_FONT;
        private readonly background;
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
        constructor(app: any);
        readonly mainContainer: PIXI.Container;
        init(): void;
        onClick(): void;
        onAssetsLoaded(): void;
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
    class Utilities {
        constructor();
        static getBitmapTextField(text: any, px: any, textAlign: any, x: any, y: any): PIXI.extras.BitmapText;
        static getErrorTextField(text: any, px: any, x: any, y: any): PIXI.Text;
    }
}
declare namespace Game {
    class HeadOrTail {
        readonly MAX_SIZE: number;
        readonly MIN_SIZE: number;
        readonly CHANGING_SIZE: number;
        private _app;
        private _player1;
        private _player2;
        private _headTexture;
        private _headSprite;
        private _tailTexture;
        private _tailSprite;
        private _coinSprite;
        private _namePlayer1;
        private _namePlayer2;
        constructor(app: PIXI.Application, player1: Player, player2: Player);
    }
}
declare namespace Game {
    class Player {
        private readonly _name;
        constructor(name: any);
        readonly name: string;
    }
}
