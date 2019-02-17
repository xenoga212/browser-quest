export default class Monster {
    constructor() {
        this.monsters = [
            {
                name: 'Goblin',
                level: 1,
                hp: 3,
                skills: [
                    {
                        skill: 'stab',
                        damage: 1 * (2 * Math.sqrt(.34)).toFixed(0)
                    }
                ]
            },

            {
                name: 'Skeleton',
                level: 1,
                hp: 3,
                skills: [
                    {
                        skill: 'Slam',
                        damage: 1 * (2 * Math.sqrt(.34)).toFixed(0)
                    }
                ]
            },

            {
                name: 'Slime',
                level: 2,
                hp: 4,
                skills: [
                    {
                    skill: 'Whip',
                    damage: 2 * (2 * Math.sqrt(.3)).toFixed(0)
                    }
                ]
            },

            {
                name: 'Lizardman',
                level: 3,
                hp: 5,
                skills: [
                    {
                    skill: 'Cut',
                    damage: 3 * (2 * Math.sqrt(.4)).toFixed(0)
                    }
                ]
            },

            {
                name: 'Infected Lizardman',
                level: 5,
                hp: 7,
                skills: [
                    {
                        skill: 'Sweep',
                        damage: 5 * (2 * Math.sqrt(.4)).toFixed(0)
                    },

                    {
                        skill: 'Tail slam',
                        damage: 5 * (2 * Math.sqrt(.5)).toFixed(0)
                    }
                ]
            },

            {
                name: 'Skeleton Mage',
                level: 6,
                hp: 6,
                skills: [
                    {
                        skill: 'Fireball',
                        damage: 6 * (2 * Math.sqrt(.5)).toFixed(0)
                    },

                    {
                        skill: 'Forst',
                        damage: 6 * (2 * Math.sqrt(.7)).toFixed(0)
                    }
                ]
            },

            {
                name: 'Mimic',
                level: 7,
                hp: 12,
                skills: [
                    {
                        name: 'Crunch',
                        damage: 7 * (2 * Math.sqrt(.4)).toFixed(0)
                    }
                ]
            },

            {
                name: 'Knight Armor',
                level: 8,
                hp: 17,
                skills: [
                    {
                        name: 'Slash',
                        damage: 8 * (2 * Math.sqrt(.5)).toFixed(0)
                    }
                ]
            },

            {
                name: 'The Loyal Bad Guy',
                level: 9,
                hp: 20,
                skills: [
                    {
                        name: 'Twin slash',
                        damage: 9 * (2 * Math.sqrt(.6)).toFixed(0)
                    }
                ]
            },

            {
                name: 'Evil Wizard',
                level: 10,
                hp: 30,
                skills: [
                    {
                        name: 'Fire O\' Fury',
                        damage: 10 * (2 * Math.sqrt(.5)).toFixed(0)
                    },

                    {
                        name: 'Frost Storm',
                        damage: 10 * (2 * Math.sqrt(.7)).toFixed(0)
                    },

                    {
                        name: 'Black Box',
                        damage: 10 * (2 * Math.sqrt(.9)).toFixed(0)
                    }
                ]
            }

        ];
    }
}