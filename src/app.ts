import express from "express";
import path from "path"
import configRoute from "./routes";
import morgan from "morgan";
import { Error } from "./type";
import multer from 'multer'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));


// Cấu hình multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.join(__dirname, 'uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage });

configRoute(app,upload)

// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found") as Error;
  err.status = 404;
  next(err);
});

// Error handler function
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;

  // response to client
  return res.status(status).json({
    status: err.status,
    error: {
      message: error.message,
    },
  });
});

export default app;
