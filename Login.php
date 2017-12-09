<?php
$data = json_decode(file_get_contents('php://input'));
$db = new mysqli("classroom.cs.unc.edu", "kjbass", "426password!", "kjbassdb");

$stmt = $db->prepare('SELECT * FROM ProjUser u WHERE u.UserID=?;');
$userID = $data->{"UserID"};
$stmt->bind_param('s', $userID);
$stmt->execute();
$result = $stmt->get_result();
if($result->num_rows === 0){
    // userID not in DB
    $response = (object) ['error' => 'Username Does Not Exist'];
    echo json_encode($response);
    return;
} else {
    $result = $result->fetch_assoc();
    $userID =  $result["UserID"];
    $salt =  $result["Salt"];
    $HashedPassword = $result["HashedPassword"];
    $SubmittedPassword = hash('md5', $data->{'Password'}.$salt);
    if($HashedPassword === $SubmittedPassword){
        return;
    } else {
        $response = (object) ['error' => 'Password Incorrect'];
        echo(json_encode($response));
    }
}
?>