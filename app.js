//invocamos expres
const express = require('express');
const app = express();
const ejs = require('ejs');

//testear en consola
app.listen(5000,()=>{
    console.log('server funciona');
});

//invocar motor de plantillas
app.set('view energine', 'ejs');

//como capturar datos de formulario
app.use(express.urlencoded({extended:false}));
app.use(express(JSON));

//USAR ROUTER
app.set('/',require('./routers'));


var mainRoutes = require('./routers');
const { json } = require('express');
app.use(mainRoutes)