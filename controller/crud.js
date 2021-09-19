//hago conexion
const { response } = require('express');
const conexion = require('../conection/conexion');

//nueva paersona
exports.save_per = (require, res) =>{

    const PER_P_NOM = require.body.PER_P_NOM;
    const PER_S_NOM = require.body.PER_S_NOM;
    const PER_T_NOM = require.body.PER_T_NOM;
    const PER_P_APE = require.body.PER_P_APE;
    const PER_S_APE = require.body.PER_S_APE;
    const PER_C_APE = require.body.PER_C_APE;
    const PER_DIR = require.body.PER_DIR;
    const PER_USU = require.body.PER_USU;
    const PER_CON = require.body.PER_CON;
    const PER_TEL = require.body.PER_TEL;

    //testeo de captura
    console.log(PER_P_NOM + "-" + PER_TEL);
    conexion.query('INSERT INTO  pru_personas SET ?',{PER_P_NOM:PER_P_NOM, PER_S_NOM:PER_S_NOM, PER_T_NOM:PER_T_NOM, PER_P_APE:PER_P_APE, PER_S_APE:PER_S_APE, PER_C_APE:PER_C_APE, PER_DIR:PER_DIR, PER_USU:PER_USU, PER_CON:PER_CON, PER_TEL:PER_TEL}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results); 
            console.log('SE REGISTRO PERSONA CORRECTAMENETE') 
            res.redirect('/');         
        }
    })


} 

//ACTUALIZAR un REGISTRO
exports.update_per = (req, res)=>{
    const ID_PER = require.body.ID_PER;
    const PER_P_NOM = require.body.PER_P_NOM;
    const PER_S_NOM = require.body.PER_S_NOM;
    const PER_T_NOM = require.body.PER_T_NOM;
    const PER_P_APE = require.body.PER_P_APE;
    const PER_S_APE = require.body.PER_S_APE;
    const PER_C_APE = require.body.PER_C_APE;
    const PER_DIR = require.body.PER_DIR;
    const PER_USU = require.body.PER_USU;
    const PER_CON = require.body.PER_CON;
    const PER_TEL = require.body.PER_TEL;
    //consulta
    conexion.query('UPDATE pru_personas SET ? WHERE ID_PER = ?',[{PER_P_NOM:PER_P_NOM, PER_S_NOM:PER_S_NOM, PER_T_NOM:PER_T_NOM, PER_P_APE:PER_P_APE, PER_S_APE:PER_S_APE, PER_C_APE:PER_C_APE, PER_DIR:PER_DIR, PER_USU:PER_USU, PER_CON:PER_CON, PER_TEL:PER_TEL}, ID_PER], (error, results)=>{
        if(error){
            console.log(error);
        }else{  
            console.log('SE EDITO PERSONA CORRECTAMENETE')          
            res.redirect('/');         
        }
});
};

//nueva area
exports.save_are = (require, res) =>{

    const ID_AREA = require.body.ID_AREA;
    const ARE_NOM = require.body.ARE_NOM;
    const ARE_DES = require.body.ARE_DES;


    //testeo de captura
    console.log(ID_AREA + "-" + ARE_NOM);
    conexion.query('INSERT INTO  pru_areas SET ?',{ID_AREA:ID_AREA, ARE_NOM:ARE_NOM, ARE_DES:ARE_DES}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results); 
            console.log('SE REGISTRO AREA CORRECTAMENETE') 
            res.redirect('/');         
        }
    })


} 


//nueva LOGRO
exports.save_log = (require, res) =>{

    const ID_LOGRO = require.body.ID_LOGRO;
    const ID_PER = require.body.ID_PER;
    const ARE_DES = require.body.ARE_DES;
    const ID_TLOG = require.body.ID_TLOG;
    const LOG_NOM_PRO = require.body.LOG_NOM_PRO;
    const LOG_INST = require.body.LOG_INST;
    const LOG_NUM_SER = require.body.LOG_NUM_SER;


    //testeo de captura
    console.log(ID_AREA + "-" + ARE_NOM);
    conexion.query('INSERT INTO  pru_logros SET ?',{ID_LOGRO:ID_LOGRO, ID_PER:ID_PER, ID_TLOG:ID_TLOG, LOG_NOM_PRO:LOG_NOM_PRO, LOG_INST:LOG_INST, LOG_NUM_SER:LOG_NUM_SER}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results); 
            console.log('SE Logro AREA CORRECTAMENETE') 
            res.redirect('/');         
        }
    })


} 