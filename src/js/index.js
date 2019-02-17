console.log('Main app working...');
import { startGame, nextBtn, finalizeBtn, removePlayerInstruction } from './models/Game_Dom';
import Player from './models/Player';
import Warrior from './models/Warrior';
import Ranger from './models/Ranger';
import Mage from './models/Mage';
import Monster from './models/Monster';

// grab start btn element and add click event listener
const startBtn = document.querySelector('.btn--start');
const playerGreetBtn = document.querySelector('.player-greet__button-next');
const playerInfoForm = document.querySelector('.player-info__form');
const removePlayerIntro = document.querySelector('.player-info__btn--next')

startBtn.addEventListener('click', startGame);
playerGreetBtn.addEventListener('click', nextBtn);
playerInfoForm.addEventListener('submit', finalizeBtn)
removePlayerIntro.addEventListener('click', removePlayerInstruction);


