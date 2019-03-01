
// display stats when player clicks on the "stats" button after creating a character
export function playerStatsViews() {
    const playerStatsEle = document.querySelector('.player-status');
    const playerStatsBox = document.querySelector('.player-stats');
    playerStatsEle.classList.toggle('player-status__opacity');
    playerStatsBox.classList.toggle('player-stats-display');
    
}