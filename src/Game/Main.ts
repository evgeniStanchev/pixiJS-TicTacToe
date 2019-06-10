namespace Game {

    export class Main {
        private readonly _utils: any;

        constructor(utils : any) {
            this._utils = utils;
            console.log('Main created.')
            this.createMenu();
        }

        createMenu() {
            new Game.GameMenu(this._utils);
            console.log('Menu created!')
        }
    }
}