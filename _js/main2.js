/*$("document").ready(function(){
    alert("the page just loaded")
});
*/

//$('.IsBestAnswer').addClass('bestanswer').removeClass('IsBestAnswer');

/*$("#news").onfocus(function(){
    $('#news').addClass('btn btn-large btn-primary disabled').removeClass('btn btn-large disabled');
});*/
$("[href]").on("mouseleave", function(evt) {
    $('#news').removeClass("btn btn-large btn-primary disabled").addClass("btn btn-large disabled");
});
$("[href]").on("mouseover", function(evt) {
    $('#news').removeClass("btn btn-large disabled").addClass("btn btn-large btn-primary disabled");
});




