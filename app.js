const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cors = require("cors");
const morgan = require("morgan");
port = 3000;

// view engine
app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

// third party
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static("public"));

// const khachRoutes = require("./routes/khach.routes")

// setup route
app.get("/", (req, res) => {
    res.render("homePage", {
        title: "Home page",
    });
});

// app.use("/khach", khachRoutes)
// app.use("/host", hostRoutes)
// app.use("/admin", adminRoutes)

// listen on port
app.listen(port, () => {
    console.log(`Server run on http://127.0.0.1:${port}`);
})