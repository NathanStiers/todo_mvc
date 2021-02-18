let express = require('express');
let router = express.Router();

let taskController = require('./controllers/taskController');

router.get('/tasks', taskController.fetchTasks);
router.post('/add', taskController.addTask);
router.get('/delete/:id', taskController.deleteTask)

module.exports = router;
