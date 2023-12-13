// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  var TimeDisplayEl = $("#currentDay");
  var descriptionEl = $(".description");
  var saveBtnEl = $(".saveBtn");
  var timeBlockEl = $(".time-block");

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // Add click event handler to all elements with class 'saveBtn'

  function saveThis() {
    var changeColorOfBtn = $(this).css("background", "orange");

    $(".saveBtn").on("click", function () {
      // Traverse up the DOM to find the closest ancestor with class 'time-block'
      var timeBlock = $(this).closest(".time-block");
    });
  }

  saveBtnEl.click(saveThis);

  function checkHour() {
    // Iterate over all div blocks with class 'time-block'
    $(".time-block").each(function () {
      const currentHour = dayjs().hour(); // 24 hour format

      // Get the hour from the id attribute of the current time block
      var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

      if (timeBlockHour < currentHour) {
        $(this).removeClass("present future");
        $(this).addClass("past");
      } else if (timeBlockHour === currentHour) {
        $(this).removeClass("past future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past present");
        $(this).addClass("future");
      }
    });
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  function displayTime() {
    var rightNow = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
    TimeDisplayEl.text(rightNow);
  }

  setInterval(displayTime, 1000);
  checkHour();
});
