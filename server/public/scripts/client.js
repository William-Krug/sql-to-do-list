console.log('*** I have JavaScript 🦖 ***');

$(document).ready(onReady);

const verbose = true;

function onReady() {
  console.log('*** I have jQuery 🦍 ***');

  // New Task Event Listener
  $('#addTaskForm').on('submit', createTask);

  // Task Event Listeners
  $('.status').on('click', '.inProgressButton', moveToInProgress);
  $('.status').on('click', '.completedButton', moveToCompleted);
  $('.status').on('click', '.deleteButton', removeTask);
}

function createTask(event) {
  event.preventDefault();
  if (verbose) {
    console.log('*** in createTask() ***');
  }
}

function moveToInProgress() {
  if (verbose) {
    console.log('*** in moveToInProgress() ***');
  }
}

function moveToCompleted() {
  if (verbose) {
    console.log('*** in moveToCompleted() ***');
  }
}

function removeTask() {
  if (verbose) {
    console.log('*** in removeTask() ***');
  }
}
