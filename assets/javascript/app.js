// makes sure function does not run before the page is ready
$(document).ready(function () {

    //function used to scroll back to the top from the bottom of the portfolio section
    $("#back-to-top").click(function () {
        $('html, body').animate({
            scrollTop: $(".backgroundColor").offset().top
        }, 1000);
    });

    // function used to scroll back to the top from the contacts section
    $("#back-to-top2").click(function () {
        $('html, body').animate({
            scrollTop: $(".backgroundColor").offset().top
        }, 2000);
    });

    // function used to scroll down to the portfolio section from the top of the page
    $("#portfolioButton").click(function () {
        $('html, body').animate({
            scrollTop: $("#background2").offset().top
        }, 1000);
    });

    // function used to scroll to the contact section from the top of the page 
    $("#contactButton").click(function () {
        $('html, body').animate({
            scrollTop: $("#background3").offset().top
        }, 2000);
    });

});