namespace Game {
    export class Main {
        private readonly _utils: any;

        constructor(utils: any) {
            this._utils = utils;
            this.createMenu();
        }

        createMenu() {
            new Game.GameMenu(this._utils);
        }
    }
}