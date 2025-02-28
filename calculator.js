$(document).ready(function() {

  // Declaring variables for numbers and operation
  let number1, number2, action;

  // When a number is clicked, update the display
  $(".num").click(function(){
    let num = $(this).html();  // Get the number clicked
    let current = $("#result").html();  // Get the current value in the display

    // If the display is '0' and there's no decimal, replace it with the clicked number
    if (current === "0" && !current.includes(".")) {
      current = num; 
    } else {
      current += num;  // Otherwise, append the clicked number to the display
    }

    $("#result").html(current);  // Update the display with the new value
  });

  // When an operation (e.g., +, -, x, /) is clicked, store the first number and operation
  $(".action").click(function(){
    number1 = Number($("#result").html());  // Store the first number
    action = $(this).html();  // Store the operation (e.g., +, -, x, /)
    $("#result").html("");  // Clear the display for the second number
  });

  // When the equal button (=) is clicked, perform the operation
  $("#equal").click(function(){
    number2 = Number($("#result").html());  // Get the second number
    let res;

    // Perform the operation based on the selected action
    if(action == "+"){
        res = number1 + number2;
    }else if(action == "-"){
        res = number1 - number2;
    }else if(action == "x"){
        res = number1 * number2;
    }else if(action == "/"){
        res = number1 / number2;
    }

    $("#result").html(res);  // Display the result of the operation
  });

  // When the clear button (C) is clicked, reset the display to '0'
  $(".clear").click(function(){
    $("#result").html("0");  // Reset the display to '0'
  });

  // When the back button (<) is clicked, remove the last character from the display
  $(".back").click(function(){
    let curr = $("#result").html();  // Get the current value in the display
    curr = curr.slice(0, -1);  // Remove the last character
    if(curr === ""){  // If the display is empty, set it to '0'
      curr = "0";
    } 
    $("#result").html(curr);  // Update the display with the new value
  });

  // When the minus button (-) is clicked, toggle the negative sign
  $(".minus").click(function(){
    let minus = $("#result").html();  // Get the current value in the display  
    if(minus === "0") {  // If the display is '0', make it '-'
      minus = "-";  
    } else {
      // If the value starts with a '-', remove it, otherwise add it
      if(minus.startsWith("-")) {  
        minus = minus.substring(1);  
      } else {
        minus = "-" + minus; 
      }
    }

    $("#result").html(minus);  // Update the display with the new value
  });

  // When the decimal button (.) is clicked, add a decimal point if not already present
  $(".num_decimal").click(function() {
    let decimal = $("#result").html();  // Get the current value in the display
    if (!decimal.includes(".")) {  // If the value doesn't already contain a decimal point
      decimal += ".";  // Add the decimal point
      $("#result").html(decimal);  // Update the display with the new value
    }
  });

  // When the binary button (Bin) is clicked, convert the number to binary
  $(".bin").click(function(){
    let num = $("#result").html();  // Get the current number in the display
    let binary = parseInt(num).toString(2);  // Convert the number to binary
    $("#result").html(binary);  // Update the display with the binary value
  });

});
