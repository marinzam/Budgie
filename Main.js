$(document).ready(function () {
alert("Hello World");   // Does not work

    var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/marinzam/Budgie/";

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
            success: function(response) {
                var budget = JSON.parse(response);
                var myState = budget['state'];
                var mySalary = budget['salary'];
                var myAfterTaxSalary = budget['afterTaxSalary'];
                // populate table
                for(var i=0; i<budget.split.length; i++){
                    var e = budget.split[i].name;
                    var p = budget.split[i].percentage;
                    enter_into_table(e,p);
                }
            },
            error: function(response) {
                console.log(response);
            }
        }); // get budget
    }); //start budget button click

// EXISTING USER GET BUDGET
// if X != SignUp
    $.ajax(url_base + "/GetBudget.php",
        {type: "GET",
        dataType: "json",
        success: function(response) {
            console.log(response);
            var budget = JSON.parse(response);
            var myFirstName = budget['name'];
            var myState = budget['state'];
            var mySalary = budget['salary'];
            var myAfterTaxSalary = budget['afterTaxSalary'];
            // populate table
            for(var i=0; i<budget.split.length; i++){
                var e = budget.split[i].name;
                var p = budget.split[i].percentage;
                enter_into_table(e,p);
            }
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

    function enter_into_table(e,p) {
        var new_row = document.createElement("tr");
        var row_cell_e = document.createElement("td");
        row_cell_e.innerHTML = e;
        row_cell_e.className = 'expense_cell';
        var row_cell_p = document.createElement("td");
        row_cell_p.innerHTML = parseInt(p, 10);
        row_cell_p.className = 'percent_cell';
        var row_cell_d = document.createElement("td");
        row_cell_d.innerHTML = '$'+after_tax_salary*parseInt(p)/100;
        row_cell_d.className = 'dollar_cell';
        var bottom_row = document.getElementById('add_row');
        new_row.append(row_cell_e);
        new_row.append(row_cell_p);
        new_row.append(row_cell_d);
        bottom_row.parentNode.insertBefore(new_row, bottom_row);

        document.getElementById('new_expense').value = "";
        document.getElementById('new_percent').value = "";

        calc_total_p();
        calc_total_d();
    }

}); //doc ready
