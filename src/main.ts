interface User {
    name: string;
    age: number;
    isActive: boolean;
}

let users: User[] = [
    { name: 'Alice', age: 30, isActive: true },
    { name: 'Bob', age: 25, isActive: false },
    { name: 'Charlie', age: 35, isActive: true }
];

// 2. Új felhasználó hozzáadása
export const addUser = (users: User[], newUser: User): void => {
    users.push(newUser);
}

// 3. Felhasználók listázása
export const listUsers = (users: User[]): string[] => {
    return users.map(user => `Name: ${user.name}, Age: ${user.age}, Active: ${user.isActive}`);
}

// 4. Felhasználó aktivitásának frissítése
export const updateUserStatus = (users: User[], userName: string, newStatus: boolean): void => {
    const user = users.find(u => u.name === userName);
    if (user) {
        user.isActive = newStatus;
    } else {
        console.log(`User with name ${userName} not found.`);
    }
}
