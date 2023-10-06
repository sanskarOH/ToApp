const { log } = require('console')
const ToDoModel = require('../models/ToDoModel')

module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

// module.exports.saveToDo = async (req, res) => {
//     const {text} = req.body
//     ToDoModel
//         .create({ text })
//         .then((data) => {
//             console.log("Added Successfully...");
//             console.log(data);
//             res.send(data)
//         })

// }

module.exports.saveToDo = async (req, res) => {
    try {
      const { text } = req.body;
      const newToDo = await ToDoModel.create({ text });
      console.log('Added Successfully...');
      console.log(newToDo);
      res.status(201).json(newToDo); // 201 Created status for successful creation
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while saving the todo item' });
    }
  };
