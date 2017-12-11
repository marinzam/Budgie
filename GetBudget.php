<?php
session_start();
include("AuxFunctions.php");
$db = new mysqli("classroom.cs.unc.edu", "kjbass", "426password!", "kjbassdb");
if(!isset($_SESSION['userID'])){
    header("Location: http://www.google.com/");
}
$userID = $_SESSION['userID']; 
$budgetID = getBudgetID($db, $userID);


echo json_encode(getBudget($budgetID, $userID, $db));
?>