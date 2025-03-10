"use strict";
const unknownRole = (role) => {
    throw new Error(`Invalid role: ${role}`);
};
const authorize = (role) => {
    switch (role) {
        case 'admin':
            return 'You can do anything';
        case 'user':
            return 'You can do something';
        case 'guest':
            return 'You can do nothing';
        default:
            // never reach here util we add a new role
            return unknownRole(role);
    }
};
console.log(authorize('admin'));
