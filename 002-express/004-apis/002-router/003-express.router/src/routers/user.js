const express = require("express");
const router = express.Router();

router.get("/user", (req, res) => {
    res.json({"msg": "User page"});
});
router.get("/users", (req, res) => {
    res.json({ "msg": "Users page" });
});

module.exports = router;
