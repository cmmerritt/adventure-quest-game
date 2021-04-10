
export function newUser(formData) {
    const user = {
        name: formData.get('name'),
        hp: 40,
        dreams: 0,
        completed: {}
    };

    return user;
}