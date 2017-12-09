<?php
session_start();
if(!isset($_SESSION['userID'])){
    header("Location: http://www.google.com/");
}
$db = new mysqli("classroom.cs.unc.edu", "kjbass", "426password!", "kjbassdb");
$stmt = $db->prepare('SELECT * FROM ProjFedTax u WHERE u.UserID=?;');
?>