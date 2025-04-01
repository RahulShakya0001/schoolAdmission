<?php

session_start();
// sesstion_destroy ();
$connection = new mysqli("localhost", "root", "", "school");

define('BASE_URL', 'http://localhost/schoolAdmission/');
$current_path = $_SERVER['REQUEST_URI'];
if($current_path == "/schoolAdmission" || $current_path == "/schoolAdmission/" || $current_path == "/schoolAdmission/index.php"){
if(!empty($_SESSION['login'])){
    header("Location:".BASE_URL."dashboard/dashboard.php");
    }
}else{
    if(empty($_SESSION['login'])){
        header("Location:".BASE_URL."index.php");
    }
}



?>