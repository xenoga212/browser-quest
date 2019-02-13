console.log('Main app working...');
import { startGame, nextBtn, finalizeBtn } from './models/Game_Dom';
import Player from './models/Player';
import Warrior from './models/Warrior';
import Ranger from './models/Ranger';
import Mage from './models/Mage';


// grab start btn element and add click event listener
const startBtn = document.querySelector('.btn--start');
const playerGreetBtn = document.querySelector('.player-greet__button-next');
const playerInfoForm = document.querySelector('.player-info__form');

startBtn.addEventListener('click', startGame);
playerGreetBtn.addEventListener('click', nextBtn);
playerInfoForm.addEventListener('submit', finalizeBtn)


