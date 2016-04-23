$(document).ready(function() {
  var number = "";
  var newNumber = "";
  var operator = "";
  var totalScreen = $('#screen');
  $(".number").click(function() {
    number += $(this).text();
    totalScreen.text(number);
    // console.log($(this).text());
  });
  $("#zero").click(function() {
    number += $(this).text();
    totalScreen.text(number);
  });
  $(".operator").not("#calc").click(function() {
    operator = $(this).text();
    newNumber = number;
    number = "";
    totalScreen.text("0");
  });
  $("#calc").click(function() {
    if(operator === "+") {
      newNumber = parseInt(newNumber, 10);
      number = parseInt(number, 10);
      newNumber = newNumber + number;
      newNumber.toString(10);
      $('#screen').text(newNumber);
      number = "";
      newNumber = "";
    }
    else if(operator === '-') {
      newNumber = parseInt(newNumber, 10);
      number = parseInt(number, 10);
      newNumber = newNumber - number;
      newNumber.toString(10);
      $('#screen').text(newNumber);
      number = "";
      newNumber = "";
    }
    else if(operator ==='x') {
      newNumber = parseInt(newNumber, 10);
      number = parseInt(number, 10);
      newNumber = newNumber * number;
      newNumber.toString(10);
      $('#screen').text(newNumber);
      number = "";
      newNumber = "";
    }
    else if(operator == '\u00f7') {
      newNumber = parseInt(newNumber, 10);
      number = parseInt(number, 10);
      newNumber = newNumber / number;
      newNumber.toString(10);
      $('#screen').text(newNumber);
      number = "";
      newNumber = "";
    }
  });
  $('#cancel').click(function(e) {
    e.preventDefault();
    number = "";
    newNumber = "";
    $('#screen').empty();
  });
});
