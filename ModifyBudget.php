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












echo json_encode($budget->equals($savedBudget));
?>