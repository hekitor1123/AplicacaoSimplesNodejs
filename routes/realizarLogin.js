var express = require('express');
var router = express.Router();
var connection = require('../bin/banco');


router.post('/realizarLogin', function(req, res) {
    //const {id} = req.params;
    const {login, senha} = req.body;
  
    const sql = `select * from login where login = "${login}" and senha = "${senha}"`;
    
    connection.query(sql, (erro, resulstado) => {
      let response = {
        status: '',
        data: []
      }
  
      if(erro){
        response.status = 'erro';
        response.data = erro;
  
        res.send(response);
        }else{
        response.status = 'ok';
        response.data = resulstado;
          if(response.data.length === 0){
            response.status = 'Login e senha nao existem';
            response.data = erro;
            }

        res.send(response);
      }
    });
  });

  //inserir
  
  router.post('/', function(req, res) {
    const {login, senha, nome, sobrenome} = req.body;
  
    const sql = `insert into login(login, senha, nome, sobrenome) values("${login}", "${senha}", "${nome}", "${sobrenome}")`;
    
    connection.query(sql, (erro, resultado) => {
      let response = {
        status: '',
        data: []
      }
  
      if(erro){
        response.status = 'erro';
        response.data = erro;
  
        res.send(response);
      } else {
        response.status = 'ok';
        response.data = resultado;
  
        res.send(response);
      }
    });
  });
  

  //upadte
  router.patch('/:id', function(req, res) {
    const {login} = req.params;
    const {senha, nome, sobrenome} = req.body;
  
    const sql = `update login set senha = "${senha}", nome = "${nome}", sobrenome = "${sobrenome}" where login = ${login}`;
  
    connection.query(sql, (erro, resultado) => {
      let response = {
        status: '',
        data: []
      }
  
      if(erro){
        response.status = 'erro';
        response.data = erro;
  
        res.send(response);
      } else {
        response.status = 'ok';
        response.data = resultado;
  
        res.send(response);
      }
    });
  });

  //delete
  router.delete('/:id', function(req, res) {
    const {id} = req.params;
  
    const sql = `delete * from login where login = ${id}`;
  
    connection.query(sql, (erro, resultado) => {
      let response = {
        status: '',
        data: []
      }
  
      if(erro){
        response.status = 'erro';
        response.data = erro;
  
        res.send(response);
      } else {
        response.status = 'ok';
        response.data = resultado;
  
        res.send(response);
      }
    });
  });


  //select
  router.get('/', function(req, res) {
    const sql = 'select * from login';
    
    connection.query(sql, (erro, resultado) => {
      let response = {
        status: '',
        data: []
      }
  
      if(erro){
        response.status = 'erro';
        response.data = erro;
  
        res.send(response);
      } else {
        response.status = 'ok';
        response.data = resultado;
  
        res.send(response);
      }
    });
  
  });

  module.exports = router;