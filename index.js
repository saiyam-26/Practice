const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "delta_app",
});

let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let users = [
    ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
    ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]
];

try {
    connection.query(q, [users], (error, result) => {
        if (error) throw (error);
        console.log(result);
        

    })
} catch (error) {
    console.log(error);
}

connection.end();

let getUser = () => {
    return {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),

    };
}
