import quests from './data-models.js';

let USERDATA = 'USERDATA';

export function getFromLocalStorage() {
    const stringStored = localStorage.getItem(USERDATA);
    const parsedStored = JSON.parse(stringStored);
    return parsedStored;
}

export function setToLocalStorage(parsedUserdata) {
    const toString = JSON.stringify(parsedUserdata);
    return localStorage.setItem(USERDATA, toString);
}

export function getUser() {
    const userStored = localStorage.getItem('user');
    if (!userStored) return null;
    const user = JSON.parse(userStored);
    return user;
}

export function saveUser(user) {
    const userToString = JSON.stringify(user);
    localStorage.setItem('user', userToString);
}
    
export function updateUserOnAction(questId, action) {
    const user = getUser();
    user.hp += action.hp;

    user.dreams += action.dreans;

    user.completed[questId] = true;

    saveUser(user);
}

export function didUserExhaustQuests() {
    const user = getUser();
    for (let quest of quests) {
        if (!user.completed[quest.id]) {
            return false;
        }
    }
    return true;
}

export function getUserProfile() {
    const name = document.getElementById('name');
    const hp = document.getElementById('hp');
    const dreams = document.getElementById('dreams');

    const user = getUser();

    if (!user) {
        window.location = './index.html';
    }

    name.textContent = user.name;
    dreams.textContent = user.dreams;

    if (user.hp <= 0) {
        hp.textContent = 'Pusheen is still asleep!';
    }
    else {
        hp.textContent = user.hp;
    }
}

export function questsCompleted() {
    const user = getUser();
    for (let quest of quests) {
        if (!user.completed[quest.id]) {
            return false;
        }
    }
    return true;
}

export function updateUser(questId, choice) {
    const user = getUser();
    user.completed[questId] = true;
    user.hp += choice.hp;
    user.dreams += choice.dreams;
    saveUser(user);
}