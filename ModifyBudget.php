<?php
session_start();
$data = json_decode(file_get_contents('php://input'));
include("AuxFunctions.php");
$db = new mysqli("classroom.cs.unc.edu", "kjbass", "426password!", "kjbassdb");
if(!isset($_SESSION['userID'])){
    header("Location: ./Login.html");
}
$userID = $_SESSION['userID']; 

$budget = new Budget(NULL,NULL,NULL,NULL, NULL);
$budget->constructJSON($data);
$budgetID = getBudgetID($db, $userID);
$savedBudget = getBudget($budgetID, $userID, $db);

$split = $budget->split;
//delete splits for old split
$stmt = $db->prepare("DELETE 
                        FROM ProjSplit
                        WHERE BudgetID=?;
");
$stmt->bind_param("i", $budgetID);
$stmt->execute();
foreach ($split as $key => $value){
    insertSplit($budgetID, $value->name, $value->percentage, $db);
}
echo json_encode(getBudget($budgetID, $userID, $db));
?>