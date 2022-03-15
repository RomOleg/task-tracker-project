const { ADD_TODO } = require("../const/status-task");
const ApiError = require("../error/ApiError");
const Todo = require("../models/todo");

class TodoController {
  async create(req, res, next) {
    try {
      const { name, description, author, durationTask } = req.body;
      const todo = new Todo({
        name,
        description,
        author,
        durationTask,
        finishDate: null,
        status: ADD_TODO,
      });
      todo.save();
      return res.json(todo);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const { author, status, durationTask, finishDate, limit, page } = req.query;

      const sort = {};
      if (author) {
        sort.author = 1;
      }
      if (status) {
        sort.status = 1;
      }
      if (durationTask) {
        sort.durationTask = 1;
      }
      if (finishDate) {
        sort.finishDate = 1;
      }

      let options = {};
      if (limit && page) {
        options = {
          page: page || 1,
          limit: limit || 10,
        };
      }

      await Todo.paginate({sort}, options, (err, result) => {
        if (err) next(ApiError.badRequest(err.message));
        return res.json(result);
      })
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const query = { _id: id }
      const todo = await Todo.find(query);
      return res.json(todo);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateStatus(req, res, next) {
    try {
      const { id } = req.params;
      const { status } = req.query;
      const query = { _id: id };
      const update = { status };
      const todo = await Todo.updateOne(query, update);
      return res.json(todo);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async deteleAll(req, res, next) {
    try {
      const todo = await Todo.deleteMany({});
      return res.json(todo);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async detele(req, res, next) {
    try {
      const { id } = req.params;
      const query = { _id: id };
      const todo = await Todo.deleteOne(query);
      return res.json(todo);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new TodoController();