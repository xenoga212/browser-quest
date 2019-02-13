import Player from './Player';
import Warrior from './Warrior';
import Ranger from './Ranger';
import Mage from './Mage';
import { create } from 'domain';

export function startGame() {
    fadeDefaultScreen();
    
}

// fade text after player clicks start and starts introduction text 
function fadeDefaultScreen() {
    const container = document.querySelector('.container');
    container.style.display = 'none';
    introducePlayer();
}

function introducePlayer() {
    const playerSection = document.querySelector('.player-greet__text');
    const playerGreet = document.querySelector('.player-greet');
    playerGreet.style.display = 'block';

    // grab the children inside of the player-greet__text class
    let childNodes = playerSection.children;

    // loop through the childNode children and assign them a new class for animation after player clicks on start
    for (let i = 0; i < childNodes.length; i++) {
        if (childNodes[i].classList.contains('player-greet__paragraph-1')) {

            childNodes[i].classList.add('player-greet__paragraph-1--fade-in-1');

        } else if (childNodes[i].classList.contains('player-greet__paragraph-2')) {

            childNodes[i].classList.add('player-greet__paragraph-2--fade-in-2');

        } else if (childNodes[i].classList.contains('player-greet__paragraph-3')) {

            childNodes[i].classList.add('player-greet__paragraph-3--fade-in-3');
        }
    }
}

// next button after player clicks on start

export function nextBtn() {
    const playerSection = document.querySelector('.player-greet__text');
    const playerInfoSection = document.querySelector('.player-info');

    // get rid of the introductory text when the player clicks on next
    playerSection.style.display = 'none';

    // reveal form for player to type down their player name and class 
    playerInfoSection.style.display = 'flex';
}

export function finalizeBtn(e) {
    e.preventDefault();
    createNewPlayer();

    const playerInfoSection = document.querySelector('.player-info');
    playerInfoSection.style.display = 'none';
    playerInstruction();
    removePlayerInstruction();
 
}

// obtain data about player name from input field
function userNameInput() {

    const playerName = document.querySelector('.player-info__input-name').value;

    return playerName;
}

// grab the class element that the player selected
function userClassInput() {

    const playerClass = document.querySelector('.player-info__player-class-select').value;
    
    return playerClass;
}

function createNewPlayer() {
    let player; 

    //assign class depending on player choice
    if (userClassInput() === 'Warrior') {
        player = new Warrior(userNameInput(), userClassInput());
    } else if (userClassInput() === 'Ranger') {
        player = new Ranger(userNameInput(), userClassInput());
    } else if (userClassInput() === 'Mage') {
        player = new Mage(userNameInput(), userClassInput());
    }
    

}

function playerInstruction() {
    const playerGreetEle = document.querySelector('.player-greet__player-instruction');
    playerGreetEle.style.display = 'block';

    let createParagraph = document.createElement('p');

    createParagraph.textContent = `
    ${userNameInput()} Is your name?
    Hmm...I see that you are a ${userClassInput()}. Maybe we can escape this tower at last. Climb up the tower and fight against the mobs to claim freedom. C'mon! Let's get out!
    `;


    // append paragraph to beginning of playerGreet
    playerGreetEle.insertBefore(createParagraph, playerGreetEle.childNodes[0]);
}

export function removePlayerInstruction() {
    const playerGreetEle = document.querySelector('.player-greet');

    playerGreetEle.removeChild(playerGreetEle.lastChild);
    
}