// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentHour = dayjs().format('HH');

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
    for (let x=9; x <= 17; x++) {
      $(this).on("click", function() {
      var textHourId = document.querySelector(`#hour-${x}`);
      var textArea = textHourId.querySelector('textarea');
      localStorage.setItem(`savedTextHour${x}`, textArea.value);
      })
    }

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  for (let i=9; i <= 17; i++) {
    var hourId = document.getElementById(`hour-${i}`)
    if (i < parseInt(currentHour)) {
      // PAST
      $(hourId).addClass('past');
    }
    if (i === parseInt(currentHour)) {
      // PRESENT
      $(hourId).addClass('present');
    }
    if (i > parseInt(currentHour)) {
      // FUTURE
      $(hourId).addClass('future');
    }
  } 
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  for (let x=9; x <= 17; x++) {
    var localSaved = localStorage.getItem(`savedTextHour${x}`);
    var textHourId = document.querySelector(`#hour-${x}`);
    var textArea = textHourId.querySelector('textarea');
    textArea.textContent = localSaved;
  }

  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('MMMM DD, YYYY'));
});
