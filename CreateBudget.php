<?php
session_start();
$data = json_decode(file_get_contents('php://input'));
if(!isset($_SESSION['userID'])){
    header("Location: http://www.google.com/");
}
$userID = $_SESSION['userID'];
$state = $data->{"StateID"};
$salary = $data->{"Salary"};
// get state tax bracket
$db = new mysqli("classroom.cs.unc.edu", "kjbass", "426password!", "kjbassdb");
$stmt = $db->prepare('SELECT StateBracketID 
                        FROM ProjStateTax s 
                        WHERE s.StateID=?
                        AND ? between s.MinIncome AND s.MaxIncome;');
$stmt->bind_param('si', $state, $salary);
$stmt->execute();
$result = $stmt->get_result();
$result = $result->fetch_assoc();
$stateBracketID = $result['StateBracketID'];
// get federal tax bracket
$stmt = $db->prepare('SELECT FedBracketID 
FROM ProjFedTax f 
WHERE ? between f.MinIncome AND f.MaxIncome;');
$stmt->bind_param('i', $salary);
$stmt->execute();
$result = $stmt->get_result();
$result = $result->fetch_assoc();
$fedBracketID = $result['FedBracketID'];
// Insert into Budget table
$stmt = $db->prepare('INSERT INTO ProjBudget(UserID, Salary, FedBracketID, StateBracketID) VALUES(?,?,?,?);
');
$stmt->bind_param('siii', $userID, $salary, $fedBracketID, $stateBracketID);
$stmt->execute();
// Insert default splits
$stmt = $db->prepare('SELECT BudgetID 
                        FROM ProjBudget b
                        WHERE b.UserID = ?;
');
$stmt->bind_param('s', $userID);
$stmt->execute();
$result = $stmt->get_result();
$result = $result->fetch_assoc();
$budgetID = $result['BudgetID'];
insertSplit($budgetID, "Necessities", 50, $db);
insertSplit($budgetID, "Goals", 20, $db);
insertSplit($budgetID, "Wants", 30, $db);


function insertSplit($budgetID, $name, $percent, $db){
    $stmt = $db->prepare('INSERT INTO ProjSplit(BudgetID, Name, Percent) VALUES(?,?,?);
    ');
    $stmt->bind_param('isi', $budgetID, $name, $percent);
    $stmt->execute();
}

?>