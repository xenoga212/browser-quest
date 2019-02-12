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
    playerSection.style.display = 'none';
    console.log('clicked');
}