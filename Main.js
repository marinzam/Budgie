$(document).ready(function () {
alert("Hello World");   // Does not work

    var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/kjbass/Budgie/";

// NEW USER CREATE BUDGET
    $('#start_budget_button').on('click',
    function (e) {
        e.preventDefault();

        $.ajax(url_base + "/CreateBudget.php",
            {type: "GET",
            dataType: "json",
            data: JSON.Stringify({
                StateID: $("#selectstate").val(),
                Salary: $("#new_user_salary").val()
            }),
            success: function(data, response) {
                console.log(response);
                var budget = JSON.parse(data);
                var afterTax = budget['afterTaxSalary'];
                var num_cat = budget.['split'].length;
                // populate table
            },
            error: function(response) {
                console.log(response);
            }
        }); // get budget
    }); //start budget button click

// EXISTING USER GET BUDGET
    $.ajax(url_base + "/GetBudget.php",
        {type: "GET",
        dataType: "json",
        success: function(data, response) {
            console.log(response);
            var budget = JSON.parse(data);
            var afterTax = budget['afterTaxSalary'];
            var num_cat = budget.['split'].length;
            // populate table
        },
        error: function(response) {
            console.log(response);
        }
    }); // get budget

// EDIT TABLE SAVE CHANGES


// LOGOUT FUNCTIONALITY
$('#logout').on('click',
function (e) {
    e.preventDefault();

    $.ajax(url_base + "/Logout.php",
        {type: "POST",
        dataType: "json",
        success: function(response) {
            console.log(response);
        },
        error: function(response) {
            console.log(response);
        }
    });
}); //logout button click

}); //doc ready
