// invoco express
const express = require('express');
const ejs = require('ejs');
// inicio constantes
const router = express.Router();
const conexion = require ('./conection/conexion');
const { response } = require('express');

//MUESTRA PRINCIPAL
router.get('/',(req,res)=>{
     //primera tabla PERSONAS CON SUS LOGROS ACADEMICOS
    conexion.query('SELECT per.PER_P_NOM, per.PER_S_NOM, per.PER_T_NOM, per.PER_P_APE, per.PER_S_APE, per.PER_C_APE, LO.ID_TLOG , T.TLOG_NOM FROM PRU_PERSONAS per INNER JOIN PRU_LOGROS LO ON LO.ID_PER = per.ID_PER INNER JOIN PRU_T_LOGROS T ON LO.ID_TLOG = T.ID_TLOG;', (error,results)=>{
        if(error){
            throw error;
        }else{
            //donde mostrarlos
            res.render('index2.ejs', {results:results});
            //res.send(results);
        }
    })
})

//MUESTRA CANTIDAD
router.get('/index.ejs',(req,res)=>{    
     //SEGUNDA tabla CAPASITADOS EN AREA
    conexion.query('SELECT t2.ID_AREA, t1.ARE_NOM, COUNT(*) AS CANTIDAD FROM pru_logros as t2, pru_areas AS t1 WHERE t2.ID_AREA = t1.ID_AREA GROUP bY t2.ID_AREA, t1.ARE_NOM;', (error,results)=>{
        if(error){
            throw error;
        }else{
            //donde mostrarlos
            res.render('index.ejs', {results:results});
            console.log(results);
        }
    })
})

//PARA PERSONAS.
router.get('/persona.ejs',(req,res)=>{
     //prueba consola
    conexion.query('SELECT * FROM pru_personas', (error,results)=>{
        if(error){
            throw error;
        }else{
            //donde mostrarlos
            res.render('persona.ejs', {results:results});
        }
    })
})



//INVOCAR METODOS CRU
const crud = require('./controller/crud');
//digo a quin doy referencia guaradar persona
router.post('/save_per', crud.save_per)
router.post('/update_per', crud.update_per)
router.post('/save_log', crud.save_log)
router.post('/save_are', crud.save_are)


//ruta a crear PERSONA
router.get('/create_per.ejs',(req,res)=>{
    res.render('create_per.ejs');
})

//ruta a crear LOGRO
router.get('/nuevo_logro.ejs',(req,res)=>{
    res.render('/nuevo_logro.ejs');
})

//ruta a crear AREA
router.get('/nuevo_area.ejs',(req,res)=>{
    res.render('/nuevo_area.ejs');
})

//RUTA EDITO PERSONA

router.get('/edir_per.ejs/:ID_PER',(req,res)=>{
    const ID_PER = req.params.ID_PER;
    conexion.query('SELECT * FROM pru_personas WHERE ID_PER = ?',[ID_PER], (error,results)=>{
        if(error){
            throw error;
        }else{
            //donde mostrarlos
            res.render('edir_per.ejs', {pru_personas:results[0]});
        }
    })
})




//exporto router
module.exports = router;