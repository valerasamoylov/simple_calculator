/* check checkbox for row background */

$("input[type=checkbox]").on("change", function() {
  let div = $(this).closest(".calculator-inputs");
  $(this).is(":checked")
    ? div.addClass("selected-background")
    : div.removeClass("selected-background");
});

/* radio checked */

$("#sum").prop("checked", true);

/* if check checkbox Add will be add*/

$(function() {
  $("#sum").on("change", function() {
    if ($("#sum").prop("checked")) {
      Add();
    }
  });
});

function Add() {
  let number1 = parseInt($("#row-first").val());
  let number2 = parseInt($("#row-second").val());
  let number3 = parseInt($("#row-third").val());
  let number21 = parseInt($("#selected-row-first").val());
  let number22 = parseInt($("#selected-row-two").val());
  let number23 = parseInt($("#selected-row-third").val());
  let number31 = parseInt($("#select-last1").val());
  let number32 = parseInt($("#select-last2").val());
  let number33 = parseInt($("#select-last3").val());
  let result = number1 + number2 + number3;
  let result2 = number21 + number22 + number23;
  let result3 = number31 + number32 + number33;
  $("#result-row1").html(result);
  $("#result-row2").html(result2);
  $("#result-row3").html(result3);
}

/* if check checkbox Multiply will be multiply*/

$(function() {
  $("#multiply").on("change", function() {
    if ($("#multiply").prop("checked")) {
      Multiply();
    }
  });
});

function Multiply() {
  let number1 = parseInt($("#row-first").val());
  let number2 = parseInt($("#row-second").val());
  let number3 = parseInt($("#row-third").val());
  let number21 = parseInt($("#selected-row-first").val());
  let number22 = parseInt($("#selected-row-two").val());
  let number23 = parseInt($("#selected-row-third").val());
  let number31 = parseInt($("#select-last1").val());
  let number32 = parseInt($("#select-last2").val());
  let number33 = parseInt($("#select-last3").val());
  let result = number1 * number2 * number3;
  let result2 = number21 * number22 * number23;
  let result3 = number31 * number32 * number33;
  $("#result-row1").html(result);
  $("#result-row2").html(result2);
  $("#result-row3").html(result3);
}
