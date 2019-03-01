import Player from './Player';

export default class Ranger extends Player {
    constructor(name, specialty) {
        super(name, specialty);
        this.skillResource = 'DeadEye';
        this.skillResourceNumber = 3;
        this.stats.strength = 4;
        this.stats.magic = 3;
        this.stats.defense = 4;
        this.stats.dexterity = 8;
        this.stats.health = 11;
        this.stats.level = 1;
        this.stats.exp = 0;
        this.stats.expForNextLevel = this.stats.level * (2 * Math.sqrt(500)).toFixed(0);
        this.skills = [
            {
                skill: 'Double shot',
                requiredLevel: 1,
                DeadEyeCost: 1,
                description: 'Attack a single target with two arrows'
            },

            {
                skill: 'Posion touch',
                requiredLevel: 3,
                DeadEyeCost: 2,
                description: 'Attack a single target physically, dealing posion damage for 3 turns'
            },

            {
                skill: 'Valkyrie eyes',
                requiredLevel: 5,
                DeadEyeCost: 4,
                description: 'Fire a powerful arrow with a high chance of dealing critical hit'
            },

            {
                skill: 'Ricochete',
                requiredLevel: 8,
                DeadEyeCost: 5,
                description: 'Fire an arrow that will bounce all over the place, damaging all targets'
            },

            {
                skill: 'Heavens shower',
                requiredLevel: 11,
                DeadEyeCost: 8,
                description: 'Fire multiple arrows in the air before they come down, damaging all targets'
            }
        ]
    }
}