
type User = {
    name: string;
    age: number;
    address: {
        city: string;
        state: string;
    }
}

const person1 = {
    name: "leonardo",
    age: 24,
    address:{
        city: "United States",
        state: "Venice"
    }
}

function showUserInfo(user:User){
    return ` Welcome ${user.name} - ${user.age} - ${user.address.city} - ${user.address.state} `;
}

showUserInfo(person1);