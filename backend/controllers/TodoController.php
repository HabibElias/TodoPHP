<?php
include_once("../models/Todo.php");

class TodoController
{
    public static function getTodos()
    {
        $todos = Todo::getAll();
        echo json_encode($todos);
    }
    public static function deleteTodo(int $id)
    {
        echo Todo::deleteTodo($id);
    }
    public static function completeTodo()
    {
        $todos = Todo::completed();
        echo json_encode($todos);
    }
    public static function changeStat(int $id)
    {
        echo Todo::changeStat($id);
    }
    public static function createTodo($name, $description)
    {
        echo Todo::createTodo($name, $description);
    }
    public static function changeTodo($id, $name, $description)
    {
        echo Todo::changeTodo($id,$name, $description);
    }
}
