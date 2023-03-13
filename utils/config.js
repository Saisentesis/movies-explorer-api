require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB: process.env.MONGODB || 'mongodb://localhost:27017/bitfilmsdb',
  JWT_SECRET: process.env.JWT_SECRET || 'some-secret-key',
};
