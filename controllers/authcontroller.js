const db = require ("../models/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;


module.exports.renderhostregister = (req, res) => {
    res.render("hostregister.ejs")
}
module.exports.renderBoking = (req, res) => {
    res.render("booking.ejs")
}
module.exports.renderHost = (req, res) => {
    res.render("host.ejs")
}
module.exports.renderAdmin = (req,res) =>{
    res.render("admin.ejs")
}
module.exports.renderLogin = (req, res) => {
    res.render("login.ejs")
}

module.exports.renderRegister = (req, res) => {
    res.render("register.ejs")
} 

module.exports.host = (req, res) => {
    console.log(req.body);
    let { firstname, lastname, emailaddress, password } = req.body;
    if (!firstname || !lastname || !emailaddress || !password) {
        return res.status(500).json({
            message: "Invalid email or password"
        })
    }

    password = bcrypt.hashSync(password, saltRounds);
   
    let id = Math.floor(Math.random() * 1000000);

    db.execute("SELECT * FROM user WHERE email=?", [emailaddress])

        .then((data) => {
            let [rows] = data; 
            console.log(rows);
        
            if (rows.length > 0) {
                return Promise.reject("User already exist");
            } else {
                return db.execute("INSERT INTO user VALUE(?, ?, ?, ?, ?, ?)", [id, firstname, lastname, emailaddress, password, "host"]);
            }
        }).then((data) => {
            // console.log(data);
            res.status(404).json({
                message: "Create one susscessful"
            });
        })
        .catch((err) => {
            res.status(200).json({
               message: err,
            })
        });
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
        }).then((data) => {
            // console.log(data);
            res.status(404).json({
                message: "Create one susscessful"
            });
        })
        .catch((err) => {
            res.status(200).json({
               message: err,
            })
        });
} 

module.exports.login = (req, res)=>{
    let {email, password} =  req.body
    // console.log(email, password);
    if(!email|| !password){
        return res.status(500).json({
            message: "Invalid email or password"
        })
    }
    db.execute("SELECT * FROM user WHERE email = ?", [email])
    .then((data)=>{
        let [rows] = data;
        let find = rows[0];
        if(!find){
            res.status(404).json({
                message: "User is not exist"
            })
        }else{
            // check password
            let passValid =  bcrypt.compareSync(password, find.password);
            // console.log(passValid);
            if(!passValid){
                res.status(404).json({
                    message: "Wrong password"
                })
            }else{
                res.cookie("userId", find.id, {signed:true}) 
                res.cookie("role", find.role, {signed:true})              
                     
                res.status(200).json({
                    message: "Login Successfully",
                    status: "success",
                })
               
            }
        }
    })
    .catch((err)=> console.log(err))
} 