const router = require("express").Router();
const User = require("../models/User");
const cryptojs = require("crypto-js")
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: cryptojs.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString(),
    });

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch(err) {
        res.status(500).json(err);
    }

});

router.post("/login", async (req, res) => {
    try {
    const user = await User.findOne({username: req.body.username});
    !user && res.status(401).json("Username or password is incorrect");

    const hashPass = cryptojs.AES.decrypt(user.password, process.env.PASS_SECRET);
    const pass = hashPass.toString(cryptojs.enc.Utf8);
    pass !== req.body.password && res.status(401).json("Username or password is incorrect");

    const accessToken = jwt.sign(
    {
        id: user._id,
        isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {expiresIn:"10d"}
    );

    const { password, ...userData } = user._doc;

    res.status(200).json({userData, accessToken});
    } catch(err) {
      res.status(500).json(err);
    }
});

module.exports = router;