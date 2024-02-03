const express = require ("express");
const User = require("../modules/User");
const router = express.Router();

// const user = User

router.post('/',(req,res)=>{
    // console.log(req.body);
    const user = User(req.body);
    user.save();
    console.log(req.body);
    res.send(req.body);
    // res.send(req.body);
})

module.exports = router;