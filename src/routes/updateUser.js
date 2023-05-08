let express = require('express'); //inyeccion de la dependencia de express
let router = express.Router(); //Instalacion del router
const mongoose = require('mongoose'); //Inyectamos la dependencia de mongoose
let User = require('../models/users'); //Le indicamos la direccion de nuestro modelo

router.get('/findById/:id', (req, res)=>{
    User.findById(req.params.id)
    .then((myUser)=>{res.render('updateUser', {myUser})})
    .catch((error)=>{res.json({message:error})})
})

module.exports = router;