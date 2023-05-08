let express = require('express'); //inyeccion de la dependencia de express
let router = express.Router(); //Instalacion del router
const mongoose = require('mongoose'); //Inyectamos la dependencia de mongoose
let User = require('../models/users'); //Le indicamos la direccion de nuestro modelo

router.get('/users', async (req, res)=>{
    const Users = await User.find({}); //Recuperamos los datos de nuestro schema
    res.render("index", {Users}); //Imprimimos lo que recuperamos en una vista
})

module.exports = router;