import { addUser, listUsers, updateUserStatus } from '../main'; // cseréld ki a megfelelő modul útvonalra

interface User {
    name: string;
    age: number;
    isActive: boolean;
}

describe('User Functions', () => {
    let users: User[];

    beforeEach(() => {
        users = [
            { name: 'Alice', age: 30, isActive: true },
            { name: 'Bob', age: 25, isActive: false },
            { name: 'Charlie', age: 35, isActive: true }
        ];
    });

    test('should add a new user', () => {
        const newUser: User = { name: 'Dave', age: 28, isActive: true };
        addUser(users, newUser);
        expect(users).toContainEqual(newUser);
    });

    test('should list all users', () => {
        const expectedOutput = [
            'Name: Alice, Age: 30, Active: true',
            'Name: Bob, Age: 25, Active: false',
            'Name: Charlie, Age: 35, Active: true'
        ];
        expect(listUsers(users)).toEqual(expectedOutput);
    });

    test('should update user status', () => {
        updateUserStatus(users, 'Bob', true);
        expect(users.find(user => user.name === 'Bob')?.isActive).toBe(true);
    });

    test('should not update status of a non-existing user', () => {
        console.log = jest.fn();
        updateUserStatus(users, 'NonExistentUser', true);
        expect(console.log).toHaveBeenCalledWith('User with name NonExistentUser not found.');
    });
});
