import quests from '../data-models.js';
import { getUser, didUserExhaustQuests, questIsCompleted, createQuestLink } from '../local-storage-utils.js';

const user = getUser();
const userOutOfFP = user.friendshipPoints <= 0;
const nav = document.getElementById('map-quests');

if (didUserExhaustQuests() || userOutOfFP) {
    window.location = '../results/index.html';
}

// const section = document.querySelector('section');

/* for (let quest of quests) {
    const anchorTag = document.createElement('a');
    anchorTag.textContent = quest.title;
    anchorTag.href = `../quest/?id=${quest.id}`;
    section.append(anchorTag);
}
 */

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    let questDisplay = null;
    if (user.completed[quest.id]) {
        questDisplay = questIsCompleted(quest);
    } else { 
        questDisplay = createQuestLink(quest);
    }
    nav.appendChild(questDisplay);
}
