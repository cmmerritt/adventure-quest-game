import quests from '../data-models.js';
import { getUser, didUserExhaustQuests } from '../local-storage-utils.js';

const user = getUser();

const userOutOfHp = user.hp <= 0;

if (didUserExhaustQuests() || userOutOfHp) {
    window.location = '../results/index.html';
}

const section = document.querySelector('section');

for (let quest of quests) {
    const anchorTag = document.createElement('a');
    
    anchorTag.textContent = quest.title;
    
    anchorTag.href = `../quest/?id=${quest.id}`;

    section.append(anchorTag);
}