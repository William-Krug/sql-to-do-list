console.log('*** I have JavaScript ***');

$(document).ready(onReady);

const verbose = true;

function onReady() {
  console.log('*** I have jQuery ***');

  // New Task Event Listener
  $('#addTaskForm').on('submit', createTask);

  // Task Event Listeners
  $('.status').on('click', '.inProgressButton', moveToInProgress);
  $('.status').on('click', '.completedButton', moveToCompleted);
  $('.status').on('click', '.deleteButton', removeTask);
}

/**
 * Function grabs the user inputs from the DOM and stores the 
 * inputs inside a new object
 * 
 * @param {*} event 
 */
function createTask(event) {
  // Keep the DOM from refreshing
  event.preventDefault();

  const newTask = {
    taskName: $('#taskNameInput').val(),
    taskNote: $('#taskNotesInput').val(),
  };

  // Testing and debugging breadcrumbs
  if (verbose) {
    console.log('*** in createTask() ***');
    console.log('\tnewTask:', newTask);
  }

  clearInputs();
}

function postTask(task) {
  // Testing and debugging breadcrumbs
  if (verbose) {
    console.log('*** in putTask() ***');
    console.log('\ttask:', task);
  }

  $.ajax({
    type: 'POST',
    url: '/todoList',
    data: task,
  })
  .then(function (response) {
    console.log('POST response:', response);
    //render function
  }).catch(function (error) {
    console.log('*** ERROR in task POST', error);
    alert('*** ERROR adding task.  Please try again later. ***');
  });
}

/**
 * Function clears out the task creation inputs
 */
function clearInputs() {
  $('#taskNameInput').val(''),
  $('#taskNotesInput').val(''),
}

function moveToInProgress() {
  // Testing and debugging breadcrumbs
  if (verbose) {
    console.log('*** in moveToInProgress() ***');
  }
}

function moveToCompleted() {
  // Testing and debugging breadcrumbs
  if (verbose) {
    console.log('*** in moveToCompleted() ***');
  }
}

function removeTask() {
  // Testing and debugging breadcrumbs
  if (verbose) {
    console.log('*** in removeTask() ***');
  }
}
