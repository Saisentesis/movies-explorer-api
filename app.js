const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const helmet = require('helmet');
const router = require('./routes');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { limiter } = require('./utils/constants');
const ErrorHandler = require('./errors/ErrorHandler');
const config = require('./utils/config');

const app = express();

app.use(express.json());

mongoose.connect(config.MONGODB);

app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'UPDATE', 'DELETE', 'PUT', 'PATCH'],
}));

app.use(helmet());
app.use(limiter);
app.use(requestLogger);

app.use('/', router);

app.use(errorLogger);
app.use(errors());
app.use(ErrorHandler);

app.listen(config.PORT);
