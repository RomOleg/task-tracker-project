require('dotenv').config()
const express = require('express')
const { default: mongoose } = require('mongoose')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
// Обработка ошибок, последний Middleware
app.use(errorHandler);

const start = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECT, (err) => {
      if (err) return console.log(err);
      app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    });
  } catch (e) {
    console.log(e);
  }
};

start();
