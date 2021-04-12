import { getUser, updateUser } from '../local-storage-utils.js';
import quests from '../data-models.js';
import { findById } from '../utils.js';


const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = findById(quests, questId);
const section = document.querySelector('section');

if (!quest) {
    window.location = './map';
}

const image = document.createElement('image');
image.src = `../assets/quests/${quest.image}`;

const title = document.createElement('h2');
title.textContent = quest.title;

const form = document.createElement('form');

for (let choice of quest.choices) {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = choice.id;
    label.append(choice.description, radio);

    form.append(label);
}

const button = document.createElement('button');
button.textContent = 'Submit';

form.append(button);

form.addEventListener('submit', (event) => {
    event.preventDefault();
   
    const formData = new FormData(form);
    const choiceId = formData.get('choice');

    const choice = findById(quest.choices, choiceId);
    updateUser(questId, choice);

    alert(JSON.stringify(getUser(), true, 2));

    window.location = '../map';
});


section.append(title, image, form);