const express = require("express");
const User = require("../db/db").user;
const router = express.Router();
const middleware = require("./auth");


router.get('/getUser', middleware.VERIFYWITHJWT, async (req, res) => {
    const userdata = await User.findOne({ username: req.headers["user"] });
    if (!userdata) {
      res.status(403).json({ msg: "User doesnt exist" })
      return
    }
    res.json({
      username: userdata.username
    })
});

module.exports = router;