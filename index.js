clear=()=>{
  $("input:text").val("");
    console.log("r")
  };
  evaluate=()=>{
  var va = eval($("input:text").val());
     $("input:text").val(va);
  }
   sum =(eve)=>{
     dir=$("input:text").val()+eve.target.value;
    $("input:text").val(dir);
  }
  $("#1").click(sum);
  $("#2").click(sum);
  $("#3").click(sum);
  $("#p").click(sum);
  $("#4").click(sum);
  $("#5").click(sum);
  $("#6").click(sum);
  $("#m").click(sum);
  $("#7").click(sum);
  $("#8").click(sum);
  $("#9").click(sum);
  $("#double").click(sum);
  
  $("#clear").click(clear);
  $("#0").click(sum);
  $("#divide").click(sum);
  $("#e").click(evaluate);
  