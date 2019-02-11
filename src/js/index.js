console.log('Main app working...');
import Player from './models/Player';
import Warrior from './models/Warrior';


const specialClass = prompt('Choose your class: Warrior, Ranger, Mage').toLowerCase();
let player;

if (specialClass === 'warrior') {
    player = new Warrior('Ange', specialClass);
}

console.log(player);

// const player = new Player('sora', 'warrior');
// const player = new Specialty('Sora', 'Warrior');

// const keys = Object.keys(player);





// console.log(player);