<?php
include_once("../config/database.php");

class User
{
    public static function getAll()
    {
        global $conn;
        $stmt = "SELECT * FROM user";
        $result = $conn->query($stmt);
        $users = [];

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_object()) {
                $users[] = $row;
            }
        } else {
            echo "No results found";
        }

        return $users;
    }
}
