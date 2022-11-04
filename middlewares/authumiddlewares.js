const db = require("../models/db");
module.exports.requireAuth = (req, res, next) => {
    if (Object.keys(req.signedCookies).length === 0) {
      res.redirect("/auth/login");
    } else {
      next();
    }
  };
module.exports.renderHost = (req, res, next) => {
  let userId = req.signedCookies.userId;
  let role = req.signedCookies.role;
  console.log(userId, role);
  db.execute("SELECT * FROM user WHERE id = ?", [userId]).then((data) => {
    let role = data[0][0].role;
    if (role == "guest") {
      next();
    } else if (role == "admin") {
      res.redirect(`/auth/admin`);
    } else if (role == "host") {
      res.redirect(`/auth/host`);
    }
  });
};

// người dùng nhập email, password vào form đăng nhập
// tiến hành kiểm tra trong bảng user xem
//    nếu role của email là host thì render ra trang host.ejs
//    nếu role của email là guest thì render ra trang chủ homePage.ejs
//    nếu role của email là admin thì render ra trang admin.ejs
