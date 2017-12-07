 var ui_table = $("#spending_table");

 var ReloadTable = function(budget, ui_table) {
      ui_table.empty();

     var numCategory = budget.split.length;
     for(int i = 0; i < numCategory; i++) {
         var new_row = $("<tr class='category'></tr>");
         var new_category = $("<td>"+budget.split[i].name+"</td>");
         var new_percentage = $("<td>"+budget.split[i].percentage+"</td>");
         var amount = budget.afterTaxSalary * budget.split[i].percentage / 100;
         var new_amount = $("<td>"+amount+"</td>");
         new_row.append(new_category);
         new_row.append(new_percentage);
         new_row.append(new_amount);
         ui_table.append(new_row);
     }
 }
