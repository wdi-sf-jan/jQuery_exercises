// Append and then add event handlerdelay

$(document).ready(function(){
  var newColor, property, value;
  $(".changeStripe").on("submit", function(e){
    e.preventDefault();
    newColor = $(".newColor").val();
    $("tr:even > td").css("background",newColor);
    property = $(".property").val();
    value = $(".value").val();
    $("tr:odd > td").css(property,value);
    $(".newColor").val("");
  });
});