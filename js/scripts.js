$(document).ready(function(){
  $("#userInput").submit(function(event) {
    event.preventDefault();

    var javaIsSelected = $("input:radio[name=javaanswer]:checked").val() === "Yes";
    var cSharpIsSelected = $("input:radio[name=csharpanswer]:checked").val() === "Yes";
    var designIsSelected = $("input:radio[name=designanswer]:checked").val() === "Yes";
    var phpIsSelected = $("input:radio[name=phpanswer]:checked").val() === "Yes";
    var rubyIsSelected = $("input:radio[name=rubyanswer]:checked").val() === "Yes";

    if (javaIsSelected) {
      $("#java").fadeIn();
    } else {
      $("#java").hide();
    }
    if (cSharpIsSelected) {
      $("#csharp").fadeIn();
    } else {
      $("#csharp").hide();
    }
    if (designIsSelected) {
      $("#design").fadeIn();
    } else {
      $("#design").hide();
    }
    if (phpIsSelected) {
      $("#php").fadeIn();
    } else {
      $("#php").hide();
    }
    if (rubyIsSelected) {
      $("#ruby").fadeIn();
    } else {
      $("#ruby").hide();
    }

  });
});
