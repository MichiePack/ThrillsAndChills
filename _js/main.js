$(document).ready(function(){
    //alert("document ready");
    $("[href]").addClass("btn btn-large disabled");
    $("#newsSection").accordion({ header: "h4" });
});
function rotateImages() {
    var oCurPhoto = $('#photoShow div.current');
    var oNxtPhoto = oCurPhoto.next();
    if (oNxtPhoto.length == 0){
        oNxtPhoto = $('#photoShow div:first');
    }
    oCurPhoto.removeClass('current').addClass('previous');
    oNxtPhoto.css({ opacity: 0.0 }).addClass('current').animate({ opacity: 1.0 }, 1000,
        function() {
            oCurPhoto.removeClass('previous');
        });
}
$("[href]").on("mouseleave", function(evt) {
    var $td = $(event.target);
    $td.removeClass("btn btn-large btn-primary disabled").addClass("btn btn-large disabled");
});
$("[href]").on("mouseover", function(evt) {
    var $td = $(event.target);
    $td.removeClass("btn btn-large disabled").addClass("btn btn-large btn-primary disabled");
});
$(function() {
    // create the image rotator
    setInterval(rotateImages, 2000);
});


//$("#update").load("news.txt");

    
