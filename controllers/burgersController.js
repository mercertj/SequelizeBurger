var express = require("express");

var router = express.Router();
var db = require("../models/");

// get route -> index
router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    // express callback response by calling burger.selectAllBurger
    db.Burger.findAll().then(function(dbBurger) {
        var hbsObject = { burger: dbBurger };
        return res.render("index", hbsObject);
    });
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
    // takes the request object using it as input for buger.addBurger
    dbBurger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function(Burger) {
        res.redirect("/");

    });
});

// put route -> back to index
router.put("/burgers/update", function(req, res) {
    dbBurger.update({
        devoured: false
    }, {
        where: {
            id: req.body.burger_id
        }
    }).then(function(dbBurger) {
        res.redirect("/");

    });
});

module.exports = router;