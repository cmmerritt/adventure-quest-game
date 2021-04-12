// display user stats
// display end result (calculated from hp & dreams)
// play again button - wipe local storage & redirect to home

import { getUser } from '../local-storage-utils.js';

const DreamMessages = {
    bad: 'nightmares stalk your sleeping hours',
    neutral: 'you don\'t remember any of your dreams',
    good: 'you have dreams that leave you happy when you wake up',
};

const FPMessages = {
    bad: 'you are a bad friend',
    neutral: 'you aren\'t the best friend but I guess you aren\'t the worst',
    good: 'you\'re the best friend a lazy cat could wish for'
};

const section = document.querySelector('section');
const button = document.querySelector('button');
const user = getUser();
const userDreams = calcEndDreams(user);
const userFP = calcEndFP(user);
const userDreamsText = DreamMessages[userDreams];
const userFPText = FPMessages[userFP];

const resultDescription = document.createElement('p');
resultDescription.textContent = `${userDreamsText} and ${userFPText}`;
section.append(resultDescription);

function calcEndDreams(user) {
    const dreams = user.dreams;
    if (dreams <= 0) {
        return 'bad';
    } else if ((dreams > 0) && (dreams < 60)) {
        return 'neutral';
    } else {
        return 'good';
    }
}

function calcEndFP(user) {
    const FP = user.friendshipPoints;
    if (FP <= 0) {
        return 'bad';
    } else if ((FP > 0) && (FP < 60)) {
        return 'neutral';
    } else {
        return 'good';
    }
}

button.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../index.html';
});