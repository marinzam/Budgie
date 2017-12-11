// Javscript communication with PHP
$(document).ready(function () {

    var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/kjbass/Budgie/";
    document.getElementById('login_button').on('click',
    function (e) {
        e.preventDefault();
        var myUserID = document.getElementById("input_email_login").value;
        var myPassword = document.getElementById("input_password_login").value;
        $.ajax(url_base + "/Login.php",
            {type: "POST",
            dataType: "json",
            data: {
                UserID : myUserID,
                Password: myPassword },
            success:
            //redirect to Main.html to load budget info into tables
            });
    });

    document.getElementById('#signup_button').on('click',
    function (e) {
        e.preventDefault();
        var myFirstName = document.getElementById("input_first_name").value;
        var myLastName = document.getElementById("input_last_name").value;
        var myUserID = document.getElementById("input_email_signup").value;
        var myPassword = document.getElementById("input_password_signup").value;
        $.ajax(url_base + "/CreateUser.php",
            {type: "POST",
            dataType: "json",
            data: {
                FirstName : myFirstName,
                LastName: myLastName,
                UserID: myUserID,
                Password: myPassword },
            success:
            //redirect to Main.html to create a budget
            });
    });
});
