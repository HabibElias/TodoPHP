<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include_once("../config/database.php");
include_once("../controllers/UserController.php");

$request_method = $_SERVER["REQUEST_METHOD"];

if ($request_method == "GET") {
    UserController::getUsers();
} else {
    echo json_encode(["message" => "Invalid request"]);
}

mysqli_close($conn);
