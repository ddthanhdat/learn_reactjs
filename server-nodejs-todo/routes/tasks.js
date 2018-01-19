var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'nodejs_task'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

// GET list tasks
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM task', function(err, results) {
    if (err) res.json(err);
    else
      res.json(results);
  })
  
});

// Get task
router.get('/:id', function(req, res, next) {
  console.log(req.params.id)
  connection.query('SELECT * FROM task where task_id=\''+req.params.id+'\'', function(err, results) {
    if (err) {
      res.json(err);
    }else{
      if(results[0]) res.json(results[0]);
      else
      res.json('id not found!');
    }
  })
});

// POST create task
router.post('/', function(req, res, next) {
  console.log('updating-', req.body);
  connection.query('insert into task (name) values(\''+req.body.name+'\')', function(err, results) {
    if (err) res.json(err);
    else
      {
        connection.query('SELECT * FROM task where task_id=LAST_INSERT_ID()', function(err, results) {
          if (err) {
            res.json(err);
          }else{
            if(results[0]) res.json(results[0]);
            else
            res.json('id not found!');
          }
        })
      }
  })
});

// PUT update task
router.put('/:id', function(req, res, next) {
  connection.query('UPDATE task SET name=\''+req.body.name+'\' where task_id=\''+req.params.id+'\'', function(err, results) {
    if (err) {
      res.json(err);
    }else{
      connection.query('SELECT * FROM task where task_id=\''+req.params.id+'\'', function(err, results) {
        if (err) {
          res.json(err);
        }else{
          if(results[0]) res.json(results[0]);
          else
          res.json('id not found!');
        }
      })
    }
  })
});

// DELETE remove task
router.delete('/:id', function(req, res, next) {
  connection.query('DELETE from task where task_id=\''+req.params.id+'\'', function(err, results) {
    if (err) {
      res.json(err);
    }else{
      res.json('deleted!');
    }
  })
});

module.exports = router;
