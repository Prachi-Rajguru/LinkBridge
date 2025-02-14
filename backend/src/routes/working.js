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

// const userSchema = new mongoose.Schema({
//   username: String,
//   email: String,
//   password: String,
//   experience: [String],
//   education: [String],
// });
router.post('/addexperience', middleware.VERIFYWITHJWT, async (req, res) => {
    try {
        const { username } = req.headers["user"];
        const {  experience } = req.body;
        if (!username || !experience) {
            return res.status(400).json({ message: "username and experience are required" });
        }
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.experience.push(experience);
        await user.save();
        res.status(200).json({ message: "Experience added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

router.post('/addeducation', middleware.VERIFYWITHJWT, async (req, res) => {
    try {
        const { username } = req.headers["user"];
        const {  education } = req.body;
        if (!username || !education) {
            return res.status(400).json({ message: "username and education are required" });
        }
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.education.push(education);
        await user.save();
        res.status(200).json({ message: "Education added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});


module.exports = router;