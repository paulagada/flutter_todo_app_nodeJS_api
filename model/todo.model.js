const mongoose = require("mongoose");
const db = require("../confg/db");
const userModel = require('./user.model')

const { Schema } = mongoose;

const todoSchema = Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: userModel.modelName
    },
  title: {
    type: String,
    required: true
  },
  disc: {
    type: String,
    required: true
  },
});



const todoModel = db.model("todos", todoSchema);

module.exports = todoModel;
