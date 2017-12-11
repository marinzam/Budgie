// Javscript communication with PHP
$(document).ready(function () {

    var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/kjbass/Budgie/";
    $('#login_button').on('click',
    function (e) {
        e.preventDefault();
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

    $('#signup_button').on('click',
    function (e) {
        e.preventDefault();
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
