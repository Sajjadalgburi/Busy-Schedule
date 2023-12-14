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

  // Attach a click event handler to elements with the class "saveBtn"
  $(".saveBtn").on("click", function (event) {
    // Prevent the default behavior of the button (e.g., form submission)
    event.preventDefault();

    // Get the ID of the closest ancestor element with the class "time-block"
    var timeBlockId = $(this).closest(".time-block").attr("id");
    console.log("Clicked button in time block with ID: " + timeBlockId);

    // Get the value of the input field with the class "description" within the same "time-block"
    var descriptionVal = $(this)
      .closest(".time-block")
      .find(".description")
      .val();

    // Check if the description has a length greater than 1
    if (descriptionVal.length > 1) {
      console.log(descriptionVal + " at " + timeBlockId);
      // Save the description into local storage
    } else {
      console.log("description is null at " + timeBlockId);
      // Do not save into local storage if the description is null or too short
    }
    localStorage.setItem(
      timeBlockEl,
      JSON.stringify({ value: descriptionVal })
    );
  });

  function changeBtnColorOnClick(event) {
    event.preventDefault();

    var changeColorOfBtn = $(this).css("background", "orange");
  }

  saveBtnEl.click(changeBtnColorOnClick);

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

  //
  //
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //
  //
  //
  //
  //
  //
  //

  function displayTime() {
    var rightNow = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
    TimeDisplayEl.text(rightNow);
  }

  setInterval(displayTime, 1000);
  checkHour();
});
