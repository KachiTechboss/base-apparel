$(document).ready(function () {
    // use keyup event on email field
    $("#email").keyup(function () {
      if (validateEmail()) {
        // if the email is validated
        // setting the border green
        $("#email").css("border", "2px solid green");
        // and set label
        $("#emailMsg").html("<p class='text-success'>Valid</p>").hide();
        $("#errorIcon").hide();
      } else {
        // if the email is not validated
        // set border red
        $("#email").css("border", "2px solid red");
        $("#emailMsg").html(
          "<p class='text-danger'>Please provide a valid email</p>"
        ).show();
        $("#errorIcon").show();
      }
    });

    $("#errorIcon").hide();
    $("#btn").click(function () {
      const email = $("#email").val();
      if (validateEmail()) {
        alert("Successfully submitted 👍");
        location.reload();
      } else {
        $("#errorIcon").show();
        $("#email").css("border", "2px solid red");
        $("#emailMsg").html(
          "<p class='text-danger'>Please provide a valid email</p>"
        ).show();
      }
    });
});

function validateEmail() {
  // get value of input email
  var email = $("#email").val();
  // use regular expression
  var reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(email)) {
    return true;
  } else {
    return false;
  }
}