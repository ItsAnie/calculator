$(document).ready(function(){

  let number1, number2, action;
  $(".num").click(function(){
    let num = $(this).html();
    let current = $("#result").html();
    
    if (current === "0" && !current.includes(".")) {
      current = num; 
    } else {
      current += num; 
    }
  
    $("#result").html(current);
  });

  $(".action").click(function(){
    number1 = Number($("#result").html())
    action = $(this).html();
    $("#result").html("");
  })

  $("#equal").click(function(){
    number2 = Number($("#result").html());
    let res;
    
    if(action == "+"){
        res = number1 + number2;
    }else if(action == "-"){
        res = number1 - number2;
    }else if(action == "x"){
        res = number1 * number2;
    }else if(action == "/"){
        res = number1 / number2;
    }
    $("#result").html(res);
  })

  $(".clear").click(function(){
    $("#result").html("0"); 
});

$(".back").click(function(){
  let curr = $("#result").html();
  curr = curr.slice(0, -1);
  if(curr === ""){
    curr = "0";
  } 
  $("#result").html(curr);
})

$(".minus").click(function(){
  let minus = $("#result").html();  
  if(minus === "0") {
    minus = "-";  
  } else {
    
    if(minus.startsWith("-")) {  
      minus = minus.substring(1);  
    } else {
      minus = "-" + minus; 
    }
  }

  $("#result").html(minus);
});

$(".num_decimal").click(function() {
  let decimal = $("#result").html();
  if (!decimal.includes(".")) { 
    decimal += ".";
    $("#result").html(decimal);
  }
});
$(".bin").click(function(){
  let num = $("#result").html(); 
  let binary = parseInt(num).toString(2); 
  $("#result").html(binary); 
});


})