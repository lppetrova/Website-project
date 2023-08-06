$('document').ready(function () {
    $('#register').on('click', function () {
        $('#loginForm').animate({left: "-=200px", opacity: 0 },1000, function () {
            $(this).fadeOut();
        });
        $('#registerForm').css({opacity: 0 }).show().animate({ left: "0", opacity: 1 }, 1500);
        // $('#registerForm').toggle(500);
    });

    $('#registerButton').on('click', function () {
        $('#successPopup').fadeIn(300);
    });
    // Close the success popup when the "Close" button is clicked
    $('#closePopup').on('click', function () {
        $('#successPopup').fadeOut(300);
    });

    $('#login').on('click', function () {
        $('#registerForm').animate({ left: "50%", opacity: 0 }, 1000, function () {
            $(this).fadeOut();
        });
        $('#loginForm').css({ left: "-5%", opacity: 0 }).show().animate({ left: "20%", opacity: 1 }, 1500);
    });

})