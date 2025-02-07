module.exports = (app) => {
    console.log(`src/routes/home.js - module.exports = (app)`); // Se ejecuta 1 vez
    app.get('/', (req, res) => {
        console.log(`app.get('/')`);
        res.json({ "msg": "Bienvenido" });
    });
    app.get('/about', (req, res) => {
        console.log(`app.get('/about')`);
        res.json({ "msg": "about" });
    });
};
