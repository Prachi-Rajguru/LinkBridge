const express = require("express");
const user = require("../db/db");
const router = express.Router();
const VERIFYWITHJWT = require("./auth");


router.get('/getUser', async (req, res) => {
    const user = await user.findOne({ username: req.headers["user"] });
    if (!user) {
      res.status(403).json({ msg: "User doesnt exist" })
      return
    }
    res.json({
      username: user.username
    })
});
    


module.exports = router;