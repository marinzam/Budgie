<?php
$data = json_decode(file_get_contents('php://input'));
$db = new mysqli("classroom.cs.unc.edu", "kjbass", "426password!", "kjbassdb");

?>