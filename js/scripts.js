inputArray = [];

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    // $("#output").removeClass;
    // $("#number-input").removeClass;
    var inputNum = parseInt($("input").val());

    if (inputNum <= 0 || $("input").val() ==="") {
      $("#output").text("Please enter a whole, positive number.").addClass("error-text");
      $("#number-input").addClass("has-error");
    } else if (inputNum > 0) {
      for (i = 1; i <= inputNum; i++) {
        inputArray.push([i]);
      }
      for (i = 1; i <= inputNum; i++) {
        if (inputArray[i] % )
      }
      $("#output").text("Your sequence is as follows: " + inputArray.join());
    }
  });
});
