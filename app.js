const express = require('express')
const app = express()
const models = require('./models')
var bodyParser = require('body-parser')

var mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views','./views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

/* creating a task object
const task = models.task.build({
    title: "feed the fish",
    iscompleted: false
}) */

// delete the task
/*
models.task.destroy({
  where: {
      title: 'feed the fish'
  }
}).then(function(){
}) */

// fetch all tasks
/*
models.task.findAll().then(function(tasks){
  console.log(tasks)
}) */

/*
models.task.findById(30).then(function(task){
  console.log(task)
})
*/

// fetch a particular task
/*
models.task.findOne({
  where: {
    title: 'do the dishes'
  }
}).then(function(task){
  console.log(task)
}) */

// saving a new task
//task.save().then(function(newTask){
//  console.log(newTask)
//})

// plan findOne method with no filter
//models.task.findOne().then(function(task){
//  console.log(task)
//})

app.post('/',function(req,res){

   const title = req.body.title
   const iscompleted = req.body.completed == 'on' ? true : false

   const taskData = {
     title :title,
     iscompleted :iscompleted
   }

   const task = models.task.build(taskData)

   task.save().then(function(newTask){
     console.log(newTask)
   })

})

app.get('/', function (req, res) {

  models.task.findAll().then(function(tasks){

    res.render('index',{tasks :tasks})

  })

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
