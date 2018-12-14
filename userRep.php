<?php
require("bdd.php");

class UserRepository {

    public function getAll(){
        $sql = "SELECT * FROM users";
        $stat = DB::engine()->prepare($sql);
        $stat->execute();
        $data = $stat->fetchAll();
        return json_encode($data);
    }

    public function search($search){
        $sql = "SELECT * FROM users WHERE LOGIN LIKE '%$search%'";
        $stat = DB::engine()->prepare($sql);
        $stat->execute();
        $data = $stat->fetchAll();
        return json_encode($data);
    }

    public function add($login){
        $sql = "INSERT INTO users VALUES(null, '$login')";
        $stat = DB::engine()->prepare($sql);
        $stat->execute();
        $data = $stat->fetchAll();
        return json_encode($data);
    }
}
?>
