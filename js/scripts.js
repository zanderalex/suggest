$(document).ready(function(){
  $("button#submit").click(function(event){
    var answer = $("#answer").val();
    var Yes = $("#java").val();

    if (rightAnswer ==="1"){
      $(".answer2").show();
    } else if (answer ==="2"){
      alert('Please fill out questions.')
    } else{
      $(".answer1").show();
    }
    event.preventDefault();
  });
});
