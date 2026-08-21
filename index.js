const { faker } = require("@faker-js/faker");

let getRandomUser = () => {
    return {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        
    };
}

console.log(getRandomUser());