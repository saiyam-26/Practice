const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "delta_app",
});

try {
    connection.query("SHOW TABLES", (error, result) => {
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
