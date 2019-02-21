console.log('PlayerStatsViews working...');

export function playerStatsViews() {
    console.log('clicked');
    const playerStatsEle = document.querySelector('.player-status');
    const playerStatsBox = document.querySelector('.player-stats');
    playerStatsEle.classList.toggle('player-status__opacity');
    playerStatsBox.classList.toggle('player-stats-display');
    


}