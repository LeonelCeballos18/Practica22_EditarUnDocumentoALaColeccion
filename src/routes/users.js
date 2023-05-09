let express = require('express'); //inyeccion de la dependencia de express
let router = express.Router(); //Instalacion del router
const mongoose = require('mongoose'); //Inyectamos la dependencia de mongoose
let User = require('../models/users'); //Le indicamos la direccion de nuestro modelo

router.get('/users', async (req, res)=>{
    const Users = await User.find({}); //Recuperamos los datos de nuestro schema
    res.render("index", {Users}); //Imprimimos lo que recuperamos en una vista
})


//Añadir nuevo usuario

router.get('/addUser', async (req, res)=>{
    res.render("addUser"); //Imprimimos lo que recuperamos en formato JSon
})

router.post('/addUser', (req, res)=>{
    const newUser = User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    newUser
    .save()
    .then((data) => {res.redirect('/users')}) // Si todo sale bien guardara el registro del nuevo usuario
    .catch((error) => {res.json({message:error})}) //En caso de haber un error lo notificara
})

//Actualizar usuario

router.get('/findById/:id', (req, res) => {
    User.findById(req.params.id)
    .then((myUser) => {res.render('updateUser', {myUser})})
    .catch((error) => {res.json({menssage:error})});
});

// endpoint con metodo post para actualizar el documento.
router.post('/updateUser', (req, res) => {
    const updateUser = User.findByIdAndUpdate(req.body.objId, // actualiza el documento
        {
        name: req.body.name, // accede a los elementos del body HTML.
        email: req.body.email,
        password: req.body.password
    });
    updateUser
    .then((data) => {res.redirect('/users')}) // si los datos se actualizan, se redirecciona a la ruta /usuario.
    .catch((error) => {res.json({message:error})}); // si encuentra un error, evita que crashee, pues atrapa el error.
});

module.exports = router;