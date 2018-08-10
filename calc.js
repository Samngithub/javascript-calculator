$(document).ready(()=>{
  clear=()=>{
    $("input:text").val("");
  }
  evaluate=()=>{
    var va = eval($("input:text").val());
       $("input:text").val(va);
  }
  sum =(eve)=>{
       dir=$("input:text").val()+eve.target.value;
      $("input:text").val(dir);
  }
  for(let i=0;i<10;i++){
      $("#" + i).click(sum);
  }
    $("#p").click(sum);
    $("#m").click(sum);
    $("#double").click(sum);
    $("#clear").click(clear);
    $("#divide").click(sum);
    $("#e").click(evaluate);  
    
  
})
