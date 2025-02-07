function User(app) {
    console.log(`src/routes/User.js - function User(app) {}`);
    app.get('/user', (req, res) => {
        console.log(`app.get('/user',`);
        res.json({ "msg": "User page" });
    });
    app.get('/users', (req, res) => {
        console.log(`app.get('/users',`);
        res.json({ "msg": "Users list page" });
    });
};

module.exports = User;
