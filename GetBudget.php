<?php
session_start();
if(!isset($_SESSION['userID'])){
    header("Location: http://www.google.com/");
} else {
    $userID = $_SESSION['userID'];
    
}
?>