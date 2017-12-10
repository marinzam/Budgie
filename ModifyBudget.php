<?php
session_start();
$data = json_decode(file_get_contents('php://input'));
include("AuxFunctions.php");
$db = new mysqli("classroom.cs.unc.edu", "kjbass", "426password!", "kjbassdb");
if(!isset($_SESSION['userID'])){
    header("Location: http://www.google.com/");
}
$userID = $_SESSION['userID']; 

$budget = new Budget(NULL,NULL,NULL,NULL);
$budget->constructJSON($data);
$budgetID = getBudgetID($db, $userID);
$savedBudget = getBudget($budgetID, $db);
$difference = $budget->getDiff($savedBudget);
if(is_null($difference)){
    echo json_encode($budget);
    return;
}
//delete splits for old split
$stmt = $db->prepare("DELETE 
                        FROM ProjSplit
                        WHERE BudgetID=?;
");
$stmt->bind_param("i", $budgetID);
$stmt->execute();
foreach ($difference as $key => $split){
    insertSplit($budgetID, $split->name, $split->percentage, $db);
}
echo json_encode(getBudget($budgetID, $db));
?>