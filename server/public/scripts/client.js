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

function getTasks() {
  $.ajax({
    method: 'GET',
    url: '/todoList',
  })
    .then(function (response) {
      console.log('GET response:', response);
      renderTasks(response);
    })
    .catch(function (error) {
      console.log('*** ERROR in task GET', error);
      alert('*** ERROR getting tasks.  Please try again later. ***');
    });
}

function renderTasks(taskList) {
  // Testing and debugging breadcrumbs
  if (verbose) {
    console.log('*** in renderTasks() ***');
    console.log('\ttaskList:', taskList);
  }

  $('#toDoTasks').empty();
  $('#inProgressTasks').empty();
  $('#completedTasks').empty();

  let counter = 1;
  for (let task of taskList) {
    let $sectionContainer = '';
    let classContainer = '';

    if (task.toDo) {
      $sectionContainer = $('#toDoTasks');
      classContainer = `class="task td-task"`;
    } else if (task.inProgress) {
      $sectionContainer = $('#inProgressTasks');
      classContainer = `class="task ip-task"`;
    } else if (task.completed) {
      $sectionContainer = $('#completedTasks');
      classContainer = `class="task c-task"`;
    }

    console.log('counter:', counter);
    console.log('$sectionContainer:', $sectionContainer);
    console.log('classContainer:', classContainer);

    $sectionContainer.append(`
        <div ${classContainer}>
          <h3>${task.name}</h3>
          <p>${task.notes}</p>
          <button value="inProgressTask" class="inProgressButton">
            In Progress
          </button>
          <button value="completeTask" class="completedButton">
            Completed
          </button>
          <button value="deleteTask" class="deleteButton">Delete</button>
        </div>
      `);
    counter++;
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
