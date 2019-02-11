console.log('Main app working...');
import Player from './models/Player';
import Warrior from './models/Warrior';
import Ranger from './models/Ranger';


// prompt user to choose class
const specialClass = prompt('Choose your class: Warrior, Ranger, Mage').toLowerCase();
let player;

// assign class depending on user choice
if (specialClass === 'warrior') {
    player = new Warrior('Ange', specialClass);
} else if (specialClass === 'ranger') {
    player = new Ranger('Hawk', specialClass);
}

console.log(player);

