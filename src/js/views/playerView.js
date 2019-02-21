console.log('Player Views');


export function playerViews(playerData) {
    console.log(playerData);
    // grab elements to replace with playerStats
    const playerHealth = document.querySelector('.player-status__combat-info__hp-stats');
    const playerResource = document.querySelector('.player-status__combat-info__class-skill-resource');
    const playerResourceNumbers = document.querySelector('.player-status__combat-info__class-skill-numbers');
    

    // replace elements with current player stats
    playerHealth.innerHTML = playerData.stats.health;
    playerResource.innerHTML = playerData.skillResource;
    playerResourceNumbers.innerHTML = playerData.skillResourceNumber;

    playerStatsViews(playerData);
    
}

function playerStatsViews(playerData) {
    // grab each of the li elements in player-stats-ul and replace the placeholder texts with the player stats
    const playerName = document.querySelector('.player-stats__ul__list--name');
    const playerSpecialty = document.querySelector('.player-stats__ul__list--specialty');
    const playerLevel = document.querySelector('.player-stats__ul__list--level');
    const playerExpTotal = document.querySelector('.player-stats__ul__list--exp');
    const playerExpNextLevel = document.querySelector('.player-stats__ul__list--next-level');
    const playerHealth = document.querySelector('.player-stats__ul__list--health');
    const playerStrength = document.querySelector('.player-stats__ul__list--strength');
    const playerDefense = document.querySelector('.player-stats__ul__list--defense');
    const playerDexterity = document.querySelector('.player-stats__ul__list--dexterity');
    const playerMagic = document.querySelector('.player-stats__ul__list--magic');

    playerName.innerHTML = playerData.name;
    playerSpecialty.innerHTML = playerData.specialty;
    playerLevel.innerHTML = playerData.stats.level;
    playerExpTotal.innerHTML = playerData.stats.exp;
    playerExpNextLevel.innerHTML = playerData.stats.expForNextLevel;
    playerHealth.innerHTML = playerData.stats.health;
    playerStrength.innerHTML = playerData.stats.strength;
    playerDefense.innerHTML = playerData.stats.defense;
    playerDexterity.innerHTML = playerData.stats.dexterity;
    playerMagic.innerHTML = playerData.stats.magic;
}