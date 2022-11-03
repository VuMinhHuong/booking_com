const db = require ("../models/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;


module.exports.renderLogin = (req, res) => {
    res.render("login.ejs")
}

module.exports.renderRegister = (req, res) => {
    res.render("register.ejs")
} 

module.exports.register = (req, res) => {
    console.log(req.body);
    let { firstname, lastname, emailaddress, password } = req.body;
    if (!firstname || !lastname || !emailaddress || !password) {
        return res.status(500).json({
            message: "Invalid email or password"
        })
    }
    // generate password add id
    password = bcrypt.hashSync(password, saltRounds);
    // console.log(password);
    let id = Math.floor(Math.random() * 1000000);
    // execute SQL query
    db.execute("SELECT * FROM user WHERE email=?", [emailaddress])
        .then((data) => {
            let [rows] = data; // 1 mảng chứa 1 phần tử nếu tìm thấy user
            console.log(rows);
            // 1 mảng chứa 1 phẩn tử nếu tìm thấy user
            // [] nếu không tìm thấy
            if (rows.length > 0) {
                return Promise.reject("User already exist");
            } else {
                return db.execute("INSERT INTO user VALUE(?, ?, ?, ?, ?, ?)", [id, firstname, lastname, emailaddress, password, "guest"]);
            }
        })
        .then((data) => {
            // console.log(data);
            res.status(404).json({
                message: "Create one susscessful"
            });
        })
        .catch((err) => {
            res.status(200).json({
                err: err,
            })
        });
} 

module.exports.login = (req, res) => {
    // lấy giá trị các ô trong form login
    // đẩy lên DB
    // bật thông báo đăng nhập thành công, quay về trang chủ, lưu cookie
} 