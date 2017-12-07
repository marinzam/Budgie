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
//console.log(result);

//console.log(result.salary);
//console.log(result.split.length);
//console.log(budget.split);
//console.log(budget.split[1]);
//console.log(budget.split[1].name);