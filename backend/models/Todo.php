<?php
include_once('../config/database.php');

class Todo
{
    public static function getAll()
    {
        global $conn;

        $stmt = 'SELECT * FROM todo';
        $result = $conn->query($stmt);
        $todos = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_object()) {
                $todos[] = $row;
            }
        }

        return $todos;
    }
    public static function completed()
    {
        global $conn;

        $stmt = 'SELECT * FROM todo WHERE stat = TRUE';
        $result = $conn->query($stmt);
        $todos = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_object()) {
                $todos[] = $row;
            }
        }

        return $todos;
    }

    public static function deleteTodo(int $id)
    {
        if (!$id) {
            return json_encode(["success" => false, "message" => "Invalid Inputs"]);
        }
        global $conn;
        $stmt = $conn->prepare('DELETE FROM todo WHERE id = ?');
        $stmt->bind_param('i', $id);
        $stmt->execute();
        return json_encode(["success" => true]);
    }
    public static function createTodo($name, $description)
    {
        if (!$name) {
            return json_encode(["success" => false, "message" => "Invalid Inputs"]);
        }
        global $conn;
        $stmt = $conn->prepare('INSERT INTO todo (stat, description, name) VALUES (false, ?, ?)');
        $stmt->bind_param('ss', $description, $name);
        $stmt->execute();

        header('Location: ' . $_SERVER['HTTP_REFERER']);
        return json_encode(["success" => true]);
    }
    public static function changeTodo($id, $name, $description)
    {
        if (!$name || !$id) {
            return json_encode(["success" => $id, "message" => "Invalid Inputs"]);
        }
        global $conn;
        $stmt = $conn->prepare('UPDATE todo set name = ?, description = ? where id = ?');
        $stmt->bind_param('ssi', $name, $description, $id);
        $stmt->execute();

        header('Location: ' . $_SERVER['HTTP_REFERER']);
        return json_encode(["success" => true]);
    }
    public static function changeStat(int $id)
    {
        if (!$id) {
            return json_encode(["success" => false, "message" => "Invalid Inputs"]);
        }
        global $conn;
        $stmt = $conn->prepare('UPDATE todo SET stat = CASE WHEN stat = 1 THEN 0 ELSE 1 END WHERE id = ?');
        $stmt->bind_param('i', $id);
        $stmt->execute();
        return json_encode(["success" => true]);
    }
}
