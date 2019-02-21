import { startGame, nextBtn, finalizeBtn, movePlayerGreet } from './models/Game_Dom';
import { playerStatsViews } from './views/playerStatsViews';
window.onload = function() {
    console.log('Main app working...');
    
    
    
    // grab start btn element and add click event listener
    const startBtn = document.querySelector('.btn--start');
    const playerGreetBtn = document.querySelector('.player-greet__button-next');
    const playerInfoForm = document.querySelector('.player-info__form');
    const playerStatsView = document.querySelector('.player-options__player-list__stats');
    const playerInfoNextButton = document.querySelector('.player-info__btn--next');
    
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
}

