<?php
function insertSplit($budgetID, $name, $percent, $db){
    $stmt = $db->prepare('INSERT INTO ProjSplit(BudgetID, Name, Percent) VALUES(?,?,?);
    ');
    $stmt->bind_param('isi', $budgetID, $name, $percent);
    $stmt->execute();
}

function getBudget($budgetID, $userID, $db){
   $stmt = $db->prepare("Select B.Salary, S.StateID, B.Salary-(B.Salary*S.Percent*F.Percent) as AfterTax
                            FROM ProjBudget B, ProjFedTax F, ProjStateTax S
                            WHERE B.BudgetID=?
                            AND B.FedBracketID=F.FedBracketID
                            AND B.StateBracketID=S.StateBracketID;
    ");
    $stmt->bind_param("i", $budgetID);
    $stmt->execute();
    $result = $stmt->get_result();
    $result = $result->fetch_assoc();
    $salary = $result["Salary"];
    $state = $result["StateID"];
    $afterTaxSalary = $result["AfterTax"];
    $name = getFirstName($db, $userID);
    $split = [];
    $stmt = $db->prepare("SELECT S.Name, S.Percent
                            FROM ProjSplit S
                            WHERE S.BudgetID = ?;
    ");
    $stmt->bind_param("i", $budgetID);
    $stmt->execute();
    $result = $stmt->get_result();
    while ($row = $result->fetch_array()) {
        $split[] = new Split($row['Name'], $row['Percent']);
    }
    
    return new Budget($salary, $state, $afterTaxSalary, $split, $name);
}

function getBudgetID($db, $userID){
$stmt = $db->prepare('SELECT BudgetID 
    FROM ProjBudget b
    WHERE b.UserID = ?;
');
$stmt->bind_param('s', $userID);
$stmt->execute();
$result = $stmt->get_result();
$result = $result->fetch_assoc();
$budgetID = $result['BudgetID'];
return $budgetID;
}

function getFirstName($db, $userID){
    $stmt = $db->prepare('SELECT  FirstName
    FROM ProjUser u
    WHERE u.UserID = ?;
');
$stmt->bind_param('s', $userID);
$stmt->execute();
$result = $stmt->get_result();
$result = $result->fetch_assoc();
$userID = $result['FirstName'];
return $userID;
}

class Budget
{
    var $salary;
    var $state;
    var $afterTaxSalary;
    var $split;
    var $name;
    function __construct($sal, $stat, $afterTax, $splt, $name){
        $this->salary = $sal;
        $this->state = $stat;
        $this->afterTaxSalary = (int)$afterTax;
        $this->split = $splt;
        $this->name = $name;
    }
    public function constructJSON($data) {
        foreach ($data as $key => $value) $this->{$key} = $value;
    }
    public function getDiff($otherBudget){
        $splitSize = count($this->split);
        $differences = [];
        for ($i = 0; $i < $splitSize; $i++) {
            $thisSplit = $this->split[$i];
            $otherSplit = $otherBudget->split[$i];
            if($thisSplit->name != $otherSplit->name ||
                $thisSplit->percentage != $otherSplit->percentage
            ){
                $differences[] = $thisSplit;
            }
        }
        return $differences;
    }
}

class Split
{
    function __construct($nam, $perc){
        $this->name = $nam;
        $this->percentage = $perc;
    }
    var $name;
    var $percentage;
}
?>