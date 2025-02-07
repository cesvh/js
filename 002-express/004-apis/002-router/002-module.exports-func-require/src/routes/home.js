function Home(app) {
    console.log(`src/routes/home.js - function Home(app) {}`);
    app.get('/', (req, res) => {
        console.log(`app.get('/',`);
        res.json({ "msg": "Bienvenido" });
    });
    app.get('/about', (req, res) => {
        console.log(`app.get('/about',`);
        res.json({ "msg": "About page" });
    });
};

module.exports = Home;
