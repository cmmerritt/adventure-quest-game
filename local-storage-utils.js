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

