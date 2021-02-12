console.log('*** I have JavaScript 🦖 ***');

$(document).ready(onReady);

const verbose = true;

function onReady() {
  console.log('*** I have jQuery 🦍 ***');
  $('.status').on('click', '.inProgressButton', moveToInProgress);
}

function moveToInProgress() {
  if (verbose) {
    console.log('*** in moveToInProgress() ***');
  }
}
