const express = require("express");

const mysql = require('mysql2');
const app = express();

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Tienda'
});

app.get("/proud", (req, res)=>{
    /*
    data = {
        id_producto: req.body.id_producto,
        ip_tipo: req.body.ip_tipo,
        descripcion: req.body.descripcion,
        precio_compra: req.body.precio_compra,
        precio_venta: req.body.precio_venta,
        cantidad: req.body.cantidad,
        activo: req.body.activo
    }
    */

    data = {
        id_producto: 45,
        ip_tipo: 52,    
        descripcion: "Nose",
        precio_compra: 52.3,
        precio_venta: 85.6,
        cantidad: 1,
        activo: 1
    }

    let sql = 'insert into Tproducto set?';
    conexion.query(sql, data, (err, resul)=>{
        if (err){
            console.log(err.message);
            res.json({mensaje:'Error Indesperado'});
        }else{
            res.json(resul);
        }
    });
});


app.get('/prod', (req, res) => {
    let sql = 'SELECT * FROM Tproducto';
    conexion.query(sql, (err,  resul) => {
        if(err){
            console.log(err.message);
            res.json({mensaje: 'Error indesperado'})
        }else{
            res.json(resul);
        }
    });
});


conexion.connect((err) => {
    if (err){
        throw err;
    }else{
        console.log("Connexion exitosa");
    }
});

app.listen(3000, () => {
    console.log("servidor Ok en puerto 3000");
});

//activo bit default(0)