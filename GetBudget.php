<?php
session_start();
include("AuxFunctions.php");
$db = new mysqli("classroom.cs.unc.edu", "kjbass", "426password!", "kjbassdb");
if(!isset($_SESSION['userID'])){
    header("Location: http://www.google.com/");
}
$userID = $_SESSION['userID']; 

$stmt = $db->prepare('SELECT BudgetID 
                        FROM ProjBudget b
                        WHERE b.UserID = ?;
');
$stmt->bind_param('s', $userID);
$stmt->execute();
$result = $stmt->get_result();
$result = $result->fetch_assoc();
$budgetID = $result['BudgetID'];

echo json_encode(getBudget($budgetID, $db));
?>