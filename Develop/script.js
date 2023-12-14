$(document).ready(function () {
  var TimeDisplayEl = $("#currentDay");
  var descriptionEl = $(".description");
  var saveBtnEl = $(".saveBtn");
  var timeBlockEl = $(".time-block");

  var items = [];

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
      var timeObject = { timeBlockId, descriptionVal }; // created an object and oushed into array
      items.push(timeObject); // array of objects
      localStorage.setItem("hourly-calander", JSON.stringify(items)); // trun from object into string
    } else {
      console.log("description is null at " + timeBlockId);
      // Do not save into local storage if the description is null or too short
    }
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

  function getItems() {
    return localStorage.getItem("hourly-calander");
  }
  function displaySavedItems() {
    var storedItems = getItems();
    var items = JSON.parse(storedItems) || [];

    $.each(items, function (index, timeObject) {
      var timeBlockId = timeObject.timeBlockId;
      var descriptionVal = timeObject.descriptionVal;

      // Update the text area with the descriptionVal
      $("#" + timeBlockId + " textarea").val(descriptionVal);
    });
  }

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
  displaySavedItems();
});
