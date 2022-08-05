"use strict";
const person1 = {
    name: "leonardo",
    age: 15,
    address: {
        city: "United States",
        state: "Venice"
    }
};
function showUserInfo(user) {
    return ` Welcome ${user.name} - ${user.age} - ${user.address.city} - ${user.address.state} `;
}
let result = showUserInfo(person1);

console.log(result);