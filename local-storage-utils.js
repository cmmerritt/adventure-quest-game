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
    
