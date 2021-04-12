import quests from '../data-models.js';
import { getUser, questsCompleted } from '../local-storage-utils.js';

const user = getUser();

const userOutOfHp = user.hp <= 0;

if (questsCompleted() || userOutOfHp) {
    window.location = '../results.html';
}

const section = document.querySelector('section');

for (let quest of quests) {
    const anchorTag = document.createElement('a');
    
    anchorTag.textContent = quest.title;
    
    anchorTag.href = `../quest/?id=${quest.id}`;

    section.append(anchorTag);
}