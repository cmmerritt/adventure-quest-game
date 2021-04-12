// display user stats
// display end result (calculated from hp & dreams)
// play again button - wipe local storage & redirect to home

import { getUser } from '../local-storage-utils.js';

const DreamMessages = {
    bad: 'nightmares stalk your sleeping hours.',
    neutral: 'you don\'t remember any of your dreams.',
    good: 'you have dreams that leave you happy when you wake up.',
};

const FPMessages = {
    bad: 'You are a bad friend. Pusheen sleeps the day away.',
    neutral: 'Pusheen wakes up at 2 pm and misses out on some fun. You aren\'t the best friend but I guess you aren\'t the worst.',
    good: 'Pusheen wakes up right on time after a solid 18 hours of sleep. You\'re the best friend a lazy cat could wish for.',
};

const section = document.querySelector('section');
const button = document.querySelector('button');
const user = getUser();
const userDreams = calcEndDreams(user);
const userFP = calcEndFP(user);
const userDreamsText = DreamMessages[userDreams];
const userFPText = FPMessages[userFP];

const resultDescription = document.createElement('p');
resultDescription.textContent = `${userFPText} Tonight, ${userDreamsText}`;
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