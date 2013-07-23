/*
$("#news").on("mouseleave", function(evt) {
    $('#news').removeClass("btn btn-large btn-primary disabled").addClass("btn btn-large disabled");
});
$("#news").on("mouseover", function(evt) {
    $('#news').removeClass("btn btn-large disabled").addClass("btn btn-large btn-primary disabled");
});
 */
$("[href]").on("mouseleave", function(evt) {
    var $td = $(event.target);
    $td.removeClass("btn btn-large btn-primary disabled").addClass("btn btn-large disabled");
});
$("[href]").on("mouseover", function(evt) {
    var $td = $(event.target);
    $td.removeClass("btn btn-large disabled").addClass("btn btn-large btn-primary disabled");
});

