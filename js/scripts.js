$(document).ready(function(){
  $("#userInput").submit(function(event){

    var answer = $("input:radio[name=answer]:checked").val();

    if ("#javaanswer" === "Yes"){
      $("#java").show();
    } else if ("#javaanswer" === "No"){
      $("#java").hide();
    }

    var answer = $("input:radio[name=answer]:checked").val();

    if ("#csharpanswer" === "Yes"){
      $("#csharp").show();
    } else if ("#csharpanswer" === "No"){
      $("#csharp").hide();
    }

    var answer = $("#designanswer").val();

    if ("#designanswer" === "Yes"){
      $("#design").show();
    } else if ("#dessignanswer" === "No"){
      $("#design").hide();
    }

    var answer = $("#phpanswer").val();

    if ("#phpanswer" === "Yes"){
      $("#php").show();
    } else if ("#phpanswer" === "No"){
      $("#php").hide();
    }

    var answer = $("#rubyanswer").val();

    if ("#rubyanswer" === "Yes"){
      $("#ruby").show();
    } else if ("#rubyanswer" === "No"){
      $("#ruby").hide();
    }


    event.preventDefault();
  });
});
