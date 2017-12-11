// Javscript communication with PHP
$(document).ready(function () {

alert("Hello World"); //Does not affect HTML needs troubleshooting

var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/kjbass/Budgie/";

// Fill in tables
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
