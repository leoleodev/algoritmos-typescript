"use strict";
const person1 = {
    name: "leonardo",
    age: 24,
    address: {
        city: "United States",
        state: "Venice"
    }
};
function showUserInfo(user) {
    return ` Welcome ${user.name} - ${user.age} - ${user.address.city} - ${user.address.state} `;
}
showUserInfo(person1);
