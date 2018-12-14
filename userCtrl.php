<?php
require("userRep.php");
$users = new UserRepository();
if(isset($_POST["request"])){
    switch($_POST["request"]){
        case "getAll":
        echo $users::getAll();
        break;

        case "search":
        echo $users::search($_POST["search"]);
        break;

        case "add":
        echo $users::add($_POST["login"]);
        break;
    }
}