$(document).ready(function(){
  $("form").on("submit", function(e){
    if ($("#username").val().length === 0){
      e.preventDefault()
      $(".blankWarning").show();
      $(".blankWarning").text("Please enter a password").css("color","red");
    }
    else if($(".passwordInput").val().length >= 5){
      $("form").fadeOut(100);
      var message = $("<h1>Thank you for signing up!</h1>").fadeIn(1000);
      $("body").append(message);
    }
  });

  $(".passwordInput").on("keydown", function(e){
    $(".blankWarning").hide();
    if (($(".passwordInput").val().length) < 6){
      $(".lengthWarning").text("Your password should be longer than 6 characters").css("color","red");
    }
    else{
      $(".lengthWarning").text("");
    }
  });
});
