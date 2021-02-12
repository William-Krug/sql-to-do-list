console.log('*** I have JavaScript 🦖 ***');

$(document).ready(onReady);

const verbose = true;

function onReady() {
  console.log('*** I have jQuery 🦍 ***');

  // Event Listeners
  $('.status').on('click', '.inProgressButton', moveToInProgress);
  $('.status').on('click', '.completeButton', moveToCompleted);
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
