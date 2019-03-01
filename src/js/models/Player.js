export default class Player {
    constructor(name, specialty) {
        this.name = name;
        this.specialty = specialty;
        this.currentFloorLevel = 10;
        this.monsterClearCount = 0;
        this.stats = {
            strength: 0,
            magic: 0,
            defense: 0,
            dexterity: 0,
            health: 10,
            level: 0,
            exp: 0,
            expForNextLevel: 0
        }
    }
}