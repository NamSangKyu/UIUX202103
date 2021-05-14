<?php
    header('Access-Control-Allow-Origin: http://127.0.0.1:5500');
    if($_POST['id']!="" AND $_POST['pass']!=""  )
        $result = array("resultCode" => "200", "message" => $_POST['name']."가입완료");
    else
        $result = array("resultCode" => "500", "message" => "회원 가입 실패");
    Header('Content-Type: application/json');
    print json_encode($result);
?>