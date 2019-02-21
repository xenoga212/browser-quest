import { userNameInput, userClassInput } from '../models/Game_Dom';

export function playerInstruction() {
    const playerGreetEle = document.querySelector('.player-greet__player-instruction');
    playerGreetEle.style.display = 'block';

    let createParagraph = document.createElement('p');

    createParagraph.textContent = `
    ${userNameInput() } Is your name?
    Hmm...I see that you are a ${userClassInput()}. Maybe we can escape this tower at last. Climb up the tower and fight against the mobs to claim freedom. C'mon! Let's get out!
    `;

    // append paragraph to beginning of playerGreet
    playerGreetEle.insertBefore(createParagraph, playerGreetEle.childNodes[0]);
}
