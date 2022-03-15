const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
      type: String,
  },
  desctiption: {
      type: String,
  },
  author: {
      type: String,
  },
  durationTask: {
      type: String,
  },
  finishDate: {
    type: Date,
  },
  status: {
      type: String,
  }
});

schema.plugin(mongoosePaginate);

/** 
 * @param name название задачи
 * @param author имя исполнителя
 * @param desctiption описание задачи
 * @param durationTask срок выполнения
 * @param finishDate дата выполнения
 * @param status стстус задачи
 */
const Todo = mongoose.model('Todo', schema);

module.exports = Todo;