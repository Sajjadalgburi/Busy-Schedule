$(document).ready(function () {
  // Selecting DOM elements
  var TimeDisplayEl = $("#currentDay"); // Element displaying current time
  var descriptionEl = $(".description"); // Text area for event description
  var saveBtnEl = $(".saveBtn"); // Save buttons for each time block
  var timeBlockEl = $(".time-block"); // Time block containers

  var items = []; // Array to store time block objects with descriptions

  // Event handler for save buttons
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
      var timeObject = { timeBlockId, descriptionVal };
      items.push(timeObject);
      localStorage.setItem("hourly-calander", JSON.stringify(items));
    } else {
      console.log("description is null at " + timeBlockId);
      // Do not save into local storage if the description is null or too short
    }
  });

  // Event handler to change button color on click
  function changeBtnColorOnClick(event) {
    event.preventDefault();
    var changeColorOfBtn = $(this).css("background", "orange");
  }

  saveBtnEl.click(changeBtnColorOnClick);

  // Function to check the current hour and update time block classes accordingly
  function checkHour() {
    $(".time-block").each(function () {
      const currentHour = dayjs().hour();

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

  // Function to retrieve items from local storage
  function getItems() {
    return localStorage.getItem("hourly-calander");
  }

  // Function to display saved items in the corresponding time blocks
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

  // Function to display current time
  function displayTime() {
    var rightNow = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
    TimeDisplayEl.text(rightNow);
  }

  // Update time every second
  setInterval(displayTime, 1000);
  checkHour();
  displaySavedItems();
});
