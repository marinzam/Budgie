// Javscript communication with PHP
$(document).ready(function () {

    var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/kjbass/Budgie/";
    $('#login_button').on('click',
    function (e) {
        e.preventDefault();

        $.ajax(url_base + "/Login.php",
            {type: "POST",
            dataType: "json",
            data: JSON.Stringify({
                UserID: $("#input_email_login").val(),
                Password: $("#input_password_login").val()
            }),
            success:
            //redirect to Main.html to load budget info into tables
            });
    });

    $('#signup_button').on('click',
    function (e) {
        e.preventDefault();

        $.ajax(url_base + "/CreateUser.php",
            {type: "POST",
            dataType: "json",
            data: JSON.Stringify({
                FirstName : $("#input_first_name").val(),
                LastName: $("#input_last_name").val(),
                UserID: $("#input_email_signup").val(),
                Password: $("#input_password_signup").val()
            }),
            success:
            //redirect to Main.html to create a budget
            });
    });
});
