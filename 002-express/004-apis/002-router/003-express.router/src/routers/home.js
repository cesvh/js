const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ "msg": "Bienvenido" });
});
router.get("/about", (req, res) => {
    res.json({ "msg": "About page" })
})

module.exports = router;
