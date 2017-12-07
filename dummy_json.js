//var dummyjson = require('dummy-json');
var template_budget = '{\
    "salary" : 50000,\
    "state" : "North Carolina",\
    "afterTaxSalary" : 35000,\
    "split" : [\
        {\
            "name" : "Essentials",\
            "percentage" : 50\
        },\
        {\
        	"name" : "Personal",\
            "percentage" : 30\
        },\
        {\
        	"name" : "Savings",\
            "percentage" : 20\
        }\
    ]\
}';

var budget = JSON.parse(template_budget); 
// console.log(budget)
// console.log(budget.state);

// console.log(JSON.stringify(budget.state));

// var budget_string = JSON.stringify(budget);
// console.log(budget_string);
// console.log(budget_string.state);
