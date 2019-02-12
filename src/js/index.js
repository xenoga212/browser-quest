console.log('Main app working...');
import { startGame, nextBtn } from './models/Game_Dom';
import Player from './models/Player';
import Warrior from './models/Warrior';
import Ranger from './models/Ranger';
import Mage from './models/Mage';


// grab start btn element and add click event listener
const startBtn = document.querySelector('.btn--start');
const playerGreetBtn = document.querySelector('.player-greet__button-next');

startBtn.addEventListener('click', startGame);
playerGreetBtn.addEventListener('click', nextBtn);



// prompt user to choose class
// // const specialClass = prompt('Choose your class: Warrior, Ranger, Mage').toLowerCase();
// let player;

// // assign class depending on user choice
// if (specialClass === 'warrior') {
//     player = new Warrior('Ange', specialClass);
// } else if (specialClass === 'ranger') {
//     player = new Ranger('Hawk', specialClass);
// } else if (specialClass === 'mage') {
//     player = new Mage('Magic guy', specialClass);
// }

// console.log(player);

