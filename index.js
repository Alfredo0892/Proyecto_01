const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("Hola mundo");
});

app.get('/saludo', (req, res) =>{
    console.log("Buenos días Tecnologos");
    res.send("................");
});

app.get(('/saludo/:nombre/:edad'), (req, res) => {
    res.send(`Buenos días ${req.params.nombre} Tienes ${req.params.edad}`);
});

/*
app.get(('/saludo/:edad'), (req, res) => {
    res.send(`tienes la edad de: ${req.params.edad}`);
});
*/
app.listen(3000, () => {
    console.log("servidor Ok en puerto 3000");
});