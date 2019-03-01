import { startGame, nextBtn, finalizeBtn, movePlayerGreet } from './models/Game_Dom';
import { playerStatsViews } from './views/playerStatsViews';
import { exploreTower, playerAttack } from './views/playerView';
import * as tower from './views/explore-tower';
window.onload = function() {
    console.log('Main app working...');
    
    
    
    // grab start btn element and add click event listener
    const startBtn = document.querySelector('.btn--start');
    const playerGreetBtn = document.querySelector('.player-greet__button-next');
    const playerInfoForm = document.querySelector('.player-info__form');
    const playerStatsView = document.querySelector('.player-options__player-list__stats');
    const playerInfoNextButton = document.querySelector('.player-info__btn--next');
    const exploreTowerBtn = document.querySelector('.explore-tower');
    const attackBtn = document.querySelector('.player-status__button-box__attack-button');
    
    if (startBtn) {
        startBtn.addEventListener('click', startGame);
    }

    if (playerGreetBtn) {
        playerGreetBtn.addEventListener('click', nextBtn);

    }
    if (playerInfoForm) {
        playerInfoForm.addEventListener('submit', finalizeBtn);
    }
    if (playerInfoNextButton) {
        playerInfoNextButton.addEventListener('click', movePlayerGreet);
    }
    if (playerStatsView) {
        playerStatsView.addEventListener('click', playerStatsViews);
    }

    if (exploreTowerBtn) {
        exploreTowerBtn.addEventListener('click', exploreTower);
    }
    if (attackBtn) {
        attackBtn.addEventListener('click', playerAttack);
    }

}






