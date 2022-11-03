const mysql = require("mysql2");
let pool = mysql.createPool({
    host: "localhost",
    database: "booking",
    user: "root",
    password: "hoaian2807",
})

module.exports = pool.promise();