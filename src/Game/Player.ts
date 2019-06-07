namespace Game {
    export class Player {

        private readonly _name: string;

        constructor(name) {
            this._name = name;
        }

        get name(): string {
            return this._name;
        }

    }
}