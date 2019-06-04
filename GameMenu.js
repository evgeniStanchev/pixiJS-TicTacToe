function GameMenu() {
    const UTILITIES = new Utilities();

    const app = new PIXI.Application(800, 600);
    document.body.appendChild(app.view);

    const mainContainer = new PIXI.Container();
    app.stage.addChild(mainContainer);

    const background = UTILITIES.background(app.screen.width / 2, app.screen.height / 2);
    mainContainer.addChild(background);

    const playButton = new PIXI.Sprite.fromImage('assets/playButton.png');
    playButton.x = app.screen.width / 2;
    playButton.y = app.screen.height / 1.15;
    playButton.anchor.set(0.5);
    playButton.width = 200;
    playButton.height = 80;
    playButton.interactive = true;
    playButton.buttonMode = true;
    playButton.on('pointertap', function () {
        console.log(player1Input , " hhh " + player2Input);
        mainContainer.removeChild(emptyInputText);
        mainContainer.removeChild(equalNamesText);
        if (player1Input.text === "" || player2Input.text === "") {
            mainContainer.addChild(emptyInputText);
        } else if (player1Input.text === player2Input.text) {
            mainContainer.addChild(equalNamesText);
        } else {
            mainContainer.removeChild(playButton);
            mainContainer.removeChild(background);
            mainContainer.removeChild(titleText);
            mainContainer.removeChild(player1Text);
            mainContainer.removeChild(player2Text);
            mainContainer.removeChild(player1Input);
            mainContainer.removeChild(player2Input);
            const player1 = new Player(player1Input.text);
            const player2 = new Player(player2Input.text);
            new HeadOrTail(app, player1, player2);
        }
    });

    mainContainer.addChild(playButton);

    PIXI.loader
        .add('desyrel', 'assets/bitmap-font/desyrel.xml')
        .load(onAssetsLoaded);
    let titleText;
    let player1Text;
    let player2Text;
    let player1Input;
    let player2Input;
    let emptyInputText;
    let equalNamesText;

    function onAssetsLoaded() {
        titleText = UTILITIES.bitmapTextField("Tic-Tac-Toe", 75, "center", app.screen.width / 2, app.screen.height / 6);
        player1Text = UTILITIES.bitmapTextField("Player 1", 40, "center", app.screen.width / 5, app.screen.height / 1.5);
        player2Text = UTILITIES.bitmapTextField("Player 2", 40, "center", app.screen.width / 1.25, app.screen.height / 1.5);
        player1Input = UTILITIES.textInput(150, app.screen.width / 8.5, app.screen.height / 1.4);
        player2Input = UTILITIES.textInput(150, app.screen.width / 1.4, app.screen.height / 1.4);
        emptyInputText = UTILITIES.errorTextField("Players must have names!", 40, app.screen.width / 5, app.screen.height / 25);
        equalNamesText =  UTILITIES.errorTextField("Players can't have equal names!", 40, app.screen.width / 7, app.screen.height / 25);



        mainContainer.addChild(player1Input);
        mainContainer.addChild(player2Input);
        mainContainer.addChild(titleText);
        mainContainer.addChild(player1Text)
        mainContainer.addChild(player2Text);
        mainContainer.addChild(player1Input);
    }


}