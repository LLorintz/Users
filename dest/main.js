"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserStatus = exports.listUsers = exports.addUser = void 0;
let users = [
    { name: 'Alice', age: 30, isActive: true },
    { name: 'Bob', age: 25, isActive: false },
    { name: 'Charlie', age: 35, isActive: true }
];
// 2. Új felhasználó hozzáadása
const addUser = (users, newUser) => {
    users.push(newUser);
};
exports.addUser = addUser;
// 3. Felhasználók listázása
const listUsers = (users) => {
    return users.map(user => `Name: ${user.name}, Age: ${user.age}, Active: ${user.isActive}`);
};
exports.listUsers = listUsers;
// 4. Felhasználó aktivitásának frissítése
const updateUserStatus = (users, userName, newStatus) => {
    const user = users.find(u => u.name === userName);
    if (user) {
        user.isActive = newStatus;
    }
    else {
        console.log(`User with name ${userName} not found.`);
    }
};
exports.updateUserStatus = updateUserStatus;
