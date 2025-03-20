<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include_once("../config/database.php");
include_once("../controllers/TodoController.php");

$request_method = $_SERVER["REQUEST_METHOD"];

if ($request_method == "GET") {
    $id = $_GET['id'];
    TodoController::changeStat($id);
} else {
    echo json_encode(["message" => "Invalid request"]);
}

mysqli_close($conn);
