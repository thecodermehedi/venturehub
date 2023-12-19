const express = require('express');
const app = express();
const { port } = require('./config');
const connectDB = require('./db/connectDB');
const applyMiddleware = require('./middlewares/applymiddleware');
const startupRouter = require('./routes/startups');

// Middlewares
applyMiddleware(app);

// Routes
app.use(startupRouter);

const runServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  })
};

module.exports = { app, runServer};