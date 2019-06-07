namespace Game {
    export class Background extends PIXI.Sprite {
        constructor(x: number, y: number, path: string) {
            super();
            console.log("Background created")
            this.texture = PIXI.Texture.fromImage(path);
            this.anchor.set(0.5);
            this.x = x;
            this.y = y;
        }
    }
}