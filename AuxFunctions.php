<?php
function insertSplit($budgetID, $name, $percent, $db){
    $stmt = $db->prepare('INSERT INTO ProjSplit(BudgetID, Name, Percent) VALUES(?,?,?);
    ');
    $stmt->bind_param('isi', $budgetID, $name, $percent);
    $stmt->execute();
}

// function buildBudget($Budget){

// }
?>