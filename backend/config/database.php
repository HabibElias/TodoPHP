<?php
include_once('../config/config.php');

$servername = $db_host;
$username = $db_user;
$password = $db_pass;

// Create connection 
$conn = new mysqli($servername, $username, $password);

// Check connection 
if ($conn->connect_error) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    if (!$conn->select_db($db_name)) {
        $createDbQuery = "CREATE DATABASE " . $db_name;
        if ($conn->query($createDbQuery) === TRUE) {
            echo "Database created successfully.";
            $conn->select_db($db_name);

            $tableQuery = "CREATE TABLE IF NOT EXISTS todo (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description VARCHAR(255),
                stat BOOLEAN DEFAULT FALSE
            )";

            if ($conn->query($tableQuery) === TRUE) {
                echo "Table 'todo' created successfully.";
            } else {
                die("Error creating table: " . $conn->error);
            }

        } else {
            die("Error creating database: " . $conn->error);
        }
    }
}
