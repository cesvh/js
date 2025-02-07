module.exports = (app) => {
    console.log(`src/routes/user.js - module.exports = (app)`); // Se ejecuta 1 vez
    app.get('/user', (req, res) => {
        console.log(`app.get('user')`);
        res.json({ "msg": "user page" });
    });
    app.get('/users', (req, res) => {
        console.log(`app.get('users')`);
        res.json({ "msg": "users list page" });
    });
};
