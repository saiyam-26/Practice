const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "delta_app",
});

let q = "SHOW TABLES";

try {
    connection.query(q, (error, result) => {
        if (error) throw (error);
        console.log(result);
        console.log(result.length);
        console.log(result[0]);
        console.log(result[1]);

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
