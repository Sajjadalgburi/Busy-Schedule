// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  var TimeDisplayEl = $("#currentDay");
  var hourTextEl = $(".hour");
  var hour9 = $("#hour-9");
  var hour10 = $("#hour-10");
  var hour11 = $("#hour-11");
  var hour12 = $("#hour-12");
  var hour1 = $("#hour-1");
  var hour2 = $("#hour-2");
  var hour3 = $("#hour-3");
  var hour4 = $("#hour-4");
  var hour5 = $("#hour-5");
  // var array = [
  //   hour9,
  //   hour10,
  //   hour11,
  //   hour12,
  //   hour1,
  //   hour2,
  //   hour3,
  //   hour4,
  //   hour5,
  // ];

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  function ChangeBlockColor() {
    var currentDay = dayjs().hour();

    // var currentDay = dayjs().set("hour", 15).set("minute", 0).set("second", 0);
    // console.log(currentDay);

    var elements = $(".time-block");

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      var id = element.id;
      var numericPart = parseInt(id.split("-")[1]);

      if (numericPart === currentDay) {
        hour9.addClass("present");
      } else if (numericPart < currentDay) {
        hour9.removeClass("present");
        hour9.addClass("past");
      } else {
        hour9.removeClass("present");
        hour9.addClass("future");
      }

      if (numericPart === currentDay) {
        hour10.addClass("present");
      } else if (numericPart < currentDay) {
        hour10.removeClass("present");
        hour10.addClass("past");
      } else {
        hour10.removeClass("present");
        hour10.addClass("future");
      }

      if (numericPart === currentDay) {
        hour12.addClass("present");
      } else if (numericPart < currentDay) {
        hour12.removeClass("present");
        hour12.addClass("past");
      } else {
        hour12.removeClass("present");
        hour12.addClass("future");
      }

      if (numericPart === currentDay) {
        hour1.addClass("present");
      } else if (numericPart < currentDay) {
        hour1.removeClass("present");
        hour1.addClass("past");
      } else {
        hour1.removeClass("present");
        hour1.addClass("future");
      }

      if (numericPart === currentDay) {
        hour2.addClass("present");
      } else if (numericPart < currentDay) {
        hour2.removeClass("present");
        hour2.addClass("past");
      } else {
        hour2.removeClass("present");
        hour2.addClass("future");
      }

      if (numericPart === currentDay) {
        hour3.addClass("present");
      } else if (numericPart < currentDay) {
        hour3.removeClass("present");
        hour3.addClass("past");
      } else {
        hour3.removeClass("present");
        hour3.addClass("future");
      }

      if (numericPart === currentDay) {
        hour4.addClass("present");
      } else if (numericPart < currentDay) {
        hour4.removeClass("present");
        hour4.addClass("past");
      } else {
        hour4.removeClass("present");
        hour4.addClass("future");
      }

      if (numericPart === currentDay) {
        hour5.addClass("present");
      } else if (numericPart < currentDay) {
        hour5.removeClass("present");
        hour5.addClass("past");
      } else {
        hour5.removeClass("present");
        hour5.addClass("future");
      }

      if (numericPart === currentDay) {
        hour11.addClass("present");
      } else if (numericPart < currentDay) {
        hour11.removeClass("present");
        hour11.addClass("past");
      } else {
        hour11.removeClass("present");
        hour11.addClass("future");
      }
    }
  }

  ChangeBlockColor();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  function displayTime() {
    var rightNow = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
    TimeDisplayEl.text(rightNow);
  }

  setInterval(displayTime, 1000);
});
