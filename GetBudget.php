<?php
session_start();
if(!isset($_SESSION['userID'])){
    header("Location: http://www.google.com/");
}
$userID = $_SESSION['userID']; 
echo($userID);
?>