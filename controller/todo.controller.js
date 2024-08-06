const TodoService = require('../services/todo.service')

exports.createTodo = async (req, res, next) => {
    try {
       const {userId,title, disc} = req.body;
       
       let todo = await TodoService.createTodo(userId,title, disc);

       res.json({success: true, msg: todo});
    } catch (error) {
        next(error)
    }
}

exports.getUserTodo = async (req, res, next) => {
    try {
       const {userId} = req.body;
       
       let todo = await TodoService.getTodo(userId);

       res.json({success: true, data: todo});
    } catch (error) {
        next(error)
    }
}

exports.deleteTodo = async (req, res, next) => {
    try {
       const {id} = req.body;
       
       let deleteTodo = await TodoService.deleteTodo(id);

       res.json({success: true, data: deleteTodo});
    } catch (error) {
        next(error)
    }
}