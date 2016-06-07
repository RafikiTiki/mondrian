$(document).ready(function() {

    var paint = "#ffffff";

    $('.color').on("click", function() {
        paint = $(this).css('background-color');

    })

    $('.box').on("click", function() {
        $(this).css("background-color", paint);

    })

    $('#reset').on("click", function() {
        $('.box').css("background-color","#fff");

    })


});
