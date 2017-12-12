// Javscript communication with PHP
$(document).ready(function () {

    var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/marinzam/Budgie/";
    $('#login_button').on('click',
    function (e) {
        e.preventDefault();

        $.ajax(url_base + "/Login.php",
            {type: "POST",
            dataType: "json",
            data: JSON.stringify({
                UserID: $("#input_email_login").val(),
                Password: $("#input_password_login").val()
            }),
            success: function(response) {
                console.log(response);
            },
            error: function(response) {
                console.log(response);

            }});
    }); //login button push

    $('#signup_button').on('click',
    function (e) {
        e.preventDefault();

        $.ajax(url_base + "/CreateUser.php",
            {type: "POST",
            dataType: "json",
            data: JSON.stringify({
                FirstName : $("#input_first_name").val(),
                LastName: $("#input_last_name").val(),
                UserID: $("#input_email_signup").val(),
                Password: $("#input_password_signup").val()
            }),
            success: function(response) {
                console.log(response);
            },
            error: function(response) {
                console.log(response);
            }});
    }); //signup button push

}); //doc ready
