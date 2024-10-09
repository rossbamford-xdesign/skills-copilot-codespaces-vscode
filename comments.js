// Create web server
// create a new comments router
// mount the comments router on the web server

// create web server
const express = require('express');
const app = express();

// create a new comments router
const commentsRouter = require('./comments');
app.use('/comments', commentsRouter);

// mount the comments router on the web server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});