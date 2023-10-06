const {Router} = require('express');
const { getToDo, saveToDo, updateTodo, deleteToDo } = require('../controller/ToDoController');
const router = Router()

router.get('/',getToDo)
router.post('/save',saveToDo)
router.post('/update',updateTodo)
router.post('/delete',deleteToDo)


module.exports= router;