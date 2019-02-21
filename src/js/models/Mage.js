import Player from './Player';

export default class Mage extends Player {
    constructor(name, specialty) {
        super(name, specialty);
        this.skillResource = 'MP';
        this.skillResourceNumber = 10;
        this.stats.strength = 2;
        this.stats.magic = 9;
        this.stats.defense = 3;
        this.stats.dexterity = 3;
        this.stats.health = 10;
        this.stats.level = 1;
        this.stats.exp = 0;
        this.stats.expForNextLevel = this.stats.level * (2 * Math.sqrt(500)).toFixed(0);
        this.skills = [
            {
                skill: 'Fireball',
                requiredLevel: 1,
                description: 'Deal damage to a single target',
                mpCost: 3
            },

            {
                skill: 'Bolt',
                requiredLevel: 3,
                description: 'Deal damage to a single target',
                mpCost: 3
            },

            {
                skill: 'Mystic Robe',
                requiredLevel: 5,
                description: 'Equip a special robe that will increase your magic attacks for 3 turns',
                mpCost: 5
            },

            {
                skill: 'Cure',
                requiredLevel: 6,
                description: 'Heal yourself restoring some health',
                mpCost: 7
            },

            {
                skill: 'Ice sword',
                requiredLevel: 8,
                description: 'Attack a single target with an Ice sword',
                mpCost: 5
            },

            {
                skill: 'Meteor',
                requiredLevel: 11,
                description: 'Attack all targets with meteors raining down',
                mpCost: 10
            }
        ]
    }
}