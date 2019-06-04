function Main() {
    // new GameMenu();
    const app = new PIXI.Application(800, 600);
    document.body.appendChild(app.view);
    new HeadOrTail(app, new Player("Evgeni"), new Player("Danail"));
}