namespace Game {
    import GameMenu = Game.GameMenu;

    export class Main {

        private readonly app: PIXI.Application;

        constructor() {
            this.app = new PIXI.Application(800, 600);
            document.body.appendChild(this.app.view);
            console.log('Main created.')
            this.createMenu();
        }

        createMenu() {
            new GameMenu(this.app);
            console.log('Menu created!')
        }
    }
}