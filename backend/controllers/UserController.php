<?php
include_once("../models/User.php");

class UserController
{
    public static function getUsers()
    {
        $users = User::getAll();
        echo json_encode($users);
    }
}
