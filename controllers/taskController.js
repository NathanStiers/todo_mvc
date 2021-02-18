let Task = require('../models/taskModel');

let tasksList = [];
let doInit = true;

exports.fetchTasks = (req, res) => {
    if(doInit){
        initTasksList();
    }
    res.render('indexView.ejs', {tasksList});
}

exports.addTask = (req, res) => {
    tasksList.push(new Task(req.body.taskLabel));
    res.redirect('/tasks');
}

exports.deleteTask = (req, res) => {
    tasksList.splice(req.params.id,1);
    res.redirect('/tasks');
}

function initTasksList(){
    tasksList.push(new Task("Faire le repas"));
    tasksList.push(new Task("Finir la version MVC"));
    doInit = false;
}