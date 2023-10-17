
var express = require("express")
var router = express.Router();



router.get("/getLoginDetails", function (req, res, next) {

    res.send("login sucessfull")

})

router.post("/validateUser", function (req, res, next) {
    console.log(req.body);
    const { userName, password } = req.body
    if (userName === "ramesh" && password === "ram123") {
        res.send("login sucessfulll");
    } else {
        res.send("invalid ceditial password and username");

    }
})
module.exports = router