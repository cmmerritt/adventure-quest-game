import { saveUser } from './local-storage-utils.js';
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    const name = data.get('name');

    const user = {
        hp: 35,
        dreams: 0,
        name: name,
        completed: {}
    };

    saveUser(user);

    window.location = './map/index.html';
}); 