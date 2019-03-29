$(document).ready(function(){
  $("#userInput").submit(function(event){

    var answer1 = $("input:radio[name=answer1]:checked").val();

    if ("javaanswer" === "Yes"){
      $(".java").show();
    } else if ("#javaanswer" === "No"){
      $(".java").hide();
    }

    var answer2 = $("input:radio[name=answer2]:checked").val();

    if ("#csharpanswer" === "Yes"){
      $("#csharp").show();
    } else if ("#csharpanswer" === "No"){
      $("#csharp").hide();
    }

    var answer3 =
    $("input:radio[name=answer3]:checked").val();

    if ("#designanswer" === "Yes"){
      $("#design").show();
    } else if ("#dessignanswer" === "No"){
      $("#design").hide();
    }

    var answer4 =
    $("input:radio[name=answer4]:checked").val();

    if ("#phpanswer" === "Yes"){
      $("#php").show();
    } else if ("#phpanswer" === "No"){
      $("#php").hide();
    }

    var answer5 = $("input:radio[name=answer5]:checked").val();

    if ("#rubyanswer" === "Yes"){
      $("#ruby").show();
    } else if ("#rubyanswer" === "No"){
      $(".ruby").hide();
    }


    event.preventDefault();
  });
});
