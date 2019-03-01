import { createNewPlayer } from '../models/Game_Dom';
import Monster from '../models/Monster';



// create function that allows player to explore the tower when clicking on the "explore tower" button
function explore(name) {
    // create a random number, if that number is either 3, 6 or 9, the player will fight a monster
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (randomNumber === 3 || randomNumber === 6 || randomNumber === 9) {
        // disable button to explore tower and insert dialogue that let players know which monster they are facing
        disableExploreTowerButton();
        monsterEncounterDialogue();
       
    } else {
        exploreDialogue(name);
    }
};


// create new monster object in an iife and call it
const monster = (function() {
    const { currentFloorLevel } = createNewPlayer();

    return {
        monster: createANewMonster().monsters[Math.floor(Math.random() * currentFloorLevel) + 1],

        newMonster: createANewMonster().monsters[Math.floor(Math.random() * currentFloorLevel) + 1],

        deleteMonster: function() {
            delete this.monster;
        },
        createNewMonster: function() {
            this.monster = createANewMonster().monsters[Math.floor(Math.random() * currentFloorLevel) + 1]; 
        }

    }   
})();



// logic if monster is still alive or not
function monsterInfo() {
    if (monster.monster.hp > 0) {
    } 

    // if monster is dead, display monster defeated text, delete the monster object, create a new monster object for the next encounter and enable "explore tower" button
    else if (monster.monster.hp <= 0) {
        monsterDefeatedText();
        monster.deleteMonster();
        monster.createNewMonster();
        enableTowerExploration();
        console.log(monster.monster);
    }
}


function monsterCombatText() {
    const { name } = createNewPlayer();
    const playerHistory = document.querySelector('.player-history-box__feed');

    let li;
    li = document.createElement('li');
    li.textContent = `${name} Attacked! ${monster.monster.name} took ${createNewPlayer().attack()} damage!!`;
    monster.monster.hp-= createNewPlayer().attack();
    playerHistory.appendChild(li);
    
}


function monsterDefeatedText() {
    const { name } = createNewPlayer();
    // if monster hits 0 or less than 0 hp, let the player know that they defeated the monster
    if (monster.monster.hp <= 0) {
        const playerHistory = document.querySelector('.player-history-box__feed');
    
        let li;
        li = document.createElement('li');
        li.textContent = `${name} defeated ${monster.monster.name}!!`;
        playerHistory.appendChild(li);
    }
}


function combat() {    
    monsterCombatText();
    monsterInfo(); 
}

function enableTowerExploration() {
    // grab button elements
    const exploreTowerBtn = document.querySelector('.explore-tower');
    const playerStatusBtnBox = document.querySelector('.player-status__button-box');
    const attackBtn = document.querySelector('.player-status__button-box__attack-button');
    const skillsBtn = document.querySelector('.player-status__button-box__skills-button');
    const itemsBtn = document.querySelector('.player-status__button-box__items-button');

    // disable button to explore tower and enable action buttons 
    exploreTowerBtn.disabled = false;
    playerStatusBtnBox.classList.add('player-status__button-box--disable')
    attackBtn.classList.add('player-status__button-box__attack-button--disable');
    skillsBtn.classList.add('player-status__button-box__skills-button--disable');
    itemsBtn.classList.add('player-status__button-box__items-button--disable');
}

// disable explore tower btn function

function disableExploreTowerButton() {
    // grab button elements
    const exploreTowerBtn = document.querySelector('.explore-tower');
    const playerStatusBtnBox = document.querySelector('.player-status__button-box--disable');
    const attackBtn = document.querySelector('.player-status__button-box__attack-button--disable');
    const skillsBtn = document.querySelector('.player-status__button-box__skills-button--disable');
    const itemsBtn = document.querySelector('.player-status__button-box__items-button--disable');

    // disable button to explore tower and enable action buttons 
    exploreTowerBtn.disabled = true;
    playerStatusBtnBox.classList.remove('player-status__button-box--disable');
    attackBtn.classList.remove('player-status__button-box__attack-button--disable');
    skillsBtn.classList.remove('player-status__button-box__skills-button--disable');
    itemsBtn.classList.remove('player-status__button-box__items-button--disable');
}



// dialogue to let player know they are exploring
function exploreDialogue(playerName) {
        const playerHistory = document.querySelector('.player-history-box__feed');
        let li;
        
        li = document.createElement('li');
        li.textContent = `${playerName} is exploring tower...`;
        playerHistory.appendChild(li);
}

// dialogue to let player know they encountered a monster
function monsterEncounterDialogue() {
        const { name, currentFloorLevel } = createNewPlayer();
        const playerHistory = document.querySelector('.player-history-box__feed');
        let li;
        li = document.createElement('li');
        li.textContent = `${name} encountered ${monster.monster.name}!`;
        playerHistory.appendChild(li);

}

function createANewMonster() {
    const monster = new Monster();
    return monster;
}


export {
    explore,
    combat,
}