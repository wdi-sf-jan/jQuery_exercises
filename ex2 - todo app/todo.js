$(document).ready(function(){
  $(".addTodo").on("submit",function(e){
    if ($(".todoText").val().length > 0 ){
      e.preventDefault();
      var text = "<span>" + $(".todoText").val() + "</span>";
      var button = "<button class = 'remove'>X</button>";
      var checkbox = "<input type='checkbox' class='checked'>";
      var todo = $("<li>" + checkbox + text + button + "</li>").fadeIn(500);
      $(".todos").append(todo);
      $(".todoText").val("");
      $(".warning").fadeOut(500, function(){
        $(this).hide();
      });
    }
    else {
      $(".warning").show().text("Please enter some text").css("color","red");
    }
  });

  // cleaner than throwing it in the handler
  $("ul").on("click", "button", function(){
    $(this).parent().fadeOut(500, function(){
      $(this).remove();
    });
  });

  $("ul").on("mouseover", "li", function(){
      $(this).css("cursor","pointer");
  });

  $("ul").on("dblclick", "li", function(){
      $(this).remove();
  });

  $("ul").on("click", ".checked", function(){
      $(this).next().toggleClass("checked");
  });

});