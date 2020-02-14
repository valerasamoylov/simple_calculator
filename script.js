/* check checkbox for row background */

$("input[type=checkbox]").on("change", function() {
  let div = $(this).closest(".calculator-inputs");
  $(this).is(":checked")
    ? div.addClass("choosed-background")
    : div.removeClass("choosed-background");
});

/* radio checked */

$("#sum").prop("checked", true);

$(function() {
  $("#sum").on("change", function() {
    if ($("#sum").prop("checked")) {
      Add();
    }
  });
});

function Add() {
  let number1 = parseInt($(".row-first").val());
  let number2 = parseInt($(".row-second").val());
  let number3 = parseInt($(".row-third").val());
  var result = number1 + number2 + number3;
  $("#result-row1").html(result);
}
