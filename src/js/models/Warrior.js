import Player from './Player';

export default class Warrior extends Player {
    constructor(name, specialty) {
        super(name, specialty);
        this.rage = 2;
        this.stats.strength = 7;
        this.stats.magic = 3;
        this.stats.defense = 5;
        this.stats.dexterity = 4;
        this.stats.health = 13;
        this.stats.level = 1;
        this.stats.exp = 0;
        this.stats.expForNextLevel = this.stats.level * (2 * Math.sqrt(500)).toFixed(0);
        this.skills = [
            {
                skill: 'Smash',
                requiredLevel: 1,
                description: 'Hit a single target with all of your might.',
                rageCost: 2
            },

            {
                skill: 'Fox hunt',
                requiredLevel: 3,
                description: 'Hit a single target and restore some health',
                rageCost: 4
            },

            {
                skill: 'Eruption',
                requiredLevel: 6,
                description: 'Hit multiple targets by with the power of fire',
                rageCost: 5
            }, 

            {
                skill: 'Reapers blessing',
                requiredLevel: 9,
                description: 'You are blessed by the reaper, granting strength and defense bonus for 3 turns',
                rageCost: 8
            }
        ];
    }
}