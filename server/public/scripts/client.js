console.log('*** I have JavaScript ***');

$(document).ready(onReady);

const verbose = true;

function onReady() {
  console.log('*** I have jQuery ***');
  getTasks();

  // New Task Event Listener
  $('#addTaskForm').on('submit', createTask);

  // Task Event Listeners
  $('.status').on('click', '.inProgressButton', moveToInProgress);
  $('.status').on('click', '.completedButton', moveToCompleted);
  $('.status').on('click', '.deleteButton', removeTask);
}

/**
 * GET call to /todoList
 *
 * Function makes a GET AJAX call.
 * Successful promise renders all tasks to the DOM
 */
function getTasks() {
  $.ajax({
    method: 'GET',
    url: '/todoList',
  })
    .then(function (taskList) {
      console.log('GET response:', taskList);
      renderTasks(taskList);
    })
    .catch(function (error) {
      console.log('*** ERROR in task GET', error);
      alert('*** ERROR getting tasks.  Please try again later. ***');
    });
}

/**
 * Function takes in the results from an AJAX GET call to the database
 * and renders each task to the DOM.
 *
 * The state of the task determines which section of the DOM to be
 * displayed in.
 *
 * @param {*} taskList
 */
function renderTasks(taskList) {
  // Testing and debugging breadcrumbs
  if (verbose) {
    console.log('*** in renderTasks() ***');
    console.log('\ttaskList:', taskList);
  }

  // Clear the DOM
  $('#toDoTasks').empty();
  $('#inProgressTasks').empty();
  $('#completedTasks').empty();

  // Loop through provided taskList and append each task to the DOM
  for (let task of taskList) {
    let $sectionContainer = '';
    let taskClassContainer = '';
    let ipButtonClassContainer = '';
    let cButtonClassContainer = '';

    // Determine which section of the DOM current task belongs in
    if (task.toDo) {
      $sectionContainer = $('#toDoTasks');
      taskClassContainer = `class="task td-task"`;
      ipButtonClassContainer = `class="inProgressButton"`;
      cButtonClassContainer = `class="completedButton"`;
    } else if (task.inProgress) {
      $sectionContainer = $('#inProgressTasks');
      taskClassContainer = `class="task ip-task"`;
      ipButtonClassContainer = `class="inProgressButton hide"`;
      cButtonClassContainer = `class="completedButton"`;
    } else if (task.completed) {
      $sectionContainer = $('#completedTasks');
      taskClassContainer = `class="task c-task"`;
      ipButtonClassContainer = `class="inProgressButton hide"`;
      cButtonClassContainer = `class="completedButton hide"`;
    }

    // Render task to DOM in correct section with proper classes
    $sectionContainer.append(`
        <div ${taskClassContainer}>
          <h3>${task.name}</h3>
          <p>${task.notes}</p>
          <button value="inProgressTask" ${ipButtonClassContainer} data-id="${task.id}">
            In Progress
          </button>
          <button value="completeTask" ${cButtonClassContainer} data-id="${task.id}">
            Completed
          </button>
          <button value="deleteTask" class="deleteButton" data-id="${task.id}">Delete</button>
        </div>
      `);
  }
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

  postTask(newTask);
  clearInputs();
}

/**
 * POST call to /todoList
 *
 * Function makes a POST AJAX call.
 * Successful promise calls GET call to render all tasks to DOM
 *
 * @param {*} task
 */
function postTask(task) {
  // Testing and debugging breadcrumbs
  if (verbose) {
    console.log('*** in postTask() ***');
    console.log('\ttask:', task);
  }

  $.ajax({
    type: 'POST',
    url: '/todoList',
    data: task,
  })
    .then(function (response) {
      console.log('POST response:', response);
      getTasks();
    })
    .catch(function (error) {
      console.log('*** ERROR in task POST', error);
      alert('*** ERROR adding task.  Please try again later. ***');
    });
}

/**
 * Function clears out the task creation inputs
 */
function clearInputs() {
  $('#taskNameInput').val('');
  $('#taskNotesInput').val('');
}

/**
 * Function targets the specific task ID associated with the
 * In Progress button clicked.
 *
 * Calls putInProgress() and passes the ID
 */
function moveToInProgress() {
  // Testing and debugging breadcrumbs
  if (verbose) {
    console.log('*** in moveToInProgress() ***');
  }

  putInProgress($(this).data('id'));
}

/**
 * PUT call to /todoList/tasks/inProgress/77
 *
 * Function makes a PUT AJAX call
 * Successful promise calls GET call to render all tasks to DOM
 *
 * @param {*} taskID
 */
function putInProgress(taskID) {
  // Testing and debugging breadcrumbs
  if (verbose) {
    console.log('*** in putInProgress() ***');
    console.log('\ttaskID:', taskID);
  }

  $.ajax({
    method: 'PUT',
    url: `/todoList/tasks/inProgress/${taskID}`,
    data: {
      inProgress: 'TRUE',
    },
  })
    .then(function (response) {
      console.log('PUT response:', response);
      getTasks();
    })
    .catch(function (error) {
      console.log('*** ERROR in task PUT', error);
      alert('*** ERROR moving task.  Please try again later. ***');
    });
}

/**
 * Function targets the specific task ID associated with the
 * Completed button clicked.
 *
 * Calls putInProgress() and passes the ID
 */
function moveToCompleted() {
  // Testing and debugging breadcrumbs
  if (verbose) {
    console.log('*** in moveToCompleted() ***');
  }

  putCompleted($(this).data('id'));
}

/**
 * PUT call to /todoList/tasks/completed/171
 *
 * Function makes a PUT AJAX call
 * Successful promise calls GET call to render all tasks to DOM
 *
 * @param {*} taskID
 */
function putCompleted(taskID) {
  // Testing and debugging breadcrumbs
  if (verbose) {
    console.log('*** in putCompleted() ***');
    console.log('\ttaskID:', taskID);
  }

  $.ajax({
    method: 'PUT',
    url: `/todoList/tasks/completed/${taskID}`,
    data: {
      completed: 'TRUE',
    },
  })
    .then(function (response) {
      console.log('PUT response:', response);
      getTasks();
    })
    .catch(function (error) {
      console.log('*** ERROR in task PUT', error);
      alert('*** ERROR moving task.  Please try again later. ***');
    });
}

/**
 * Function targets the specific task ID associated with the
 * Delete button clicked.
 *
 * Calls deleteTask() and passes the ID
 */
function removeTask() {
  // Testing and debugging breadcrumbs
  if (verbose) {
    console.log('*** in removeTask() ***');
  }

  deleteTask($(this).data('id'));
}

/**
 * DELETE call to /todoList/tasks/2
 *
 * Function removes the task from the database.
 * Successful promise calls GET call to render all tasks to DOM
 *
 * @param {*} deleteID
 */
function deleteTask(deleteID) {
  // Testing and debugging breadcrumbs
  if (verbose) {
    console.log('*** in deleteTask() ***');
    console.log('\tdeleteID:', deleteID);
  }

  $.ajax({
    method: 'DELETE',
    url: `/todoList/tasks/${deleteID}`,
  })
    .then(function (response) {
      console.log('DELETE response:', response);
      getTasks();
    })
    .catch(function (error) {
      console.log('*** ERROR in task DELETE', error);
      alert('*** ERROR deleting task.  Please try again later. ***');
    });
}
