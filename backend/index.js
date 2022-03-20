require('dotenv').config()
const express = require('express')
const { default: mongoose } = require('mongoose')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000

const app = express();
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: process.env.API_CLIENT,
}));
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
