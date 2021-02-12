const express = require('express');

const app = express();
const port = 5000;

app.use(express.static('server/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Task Router
const taskRouter = require('./routes/tasks.router');
app.use('/todoList', taskRouter);

// STart Express
app.listen(port, function () {
  console.log(`I'm listening on port`, port, `....`);
});
