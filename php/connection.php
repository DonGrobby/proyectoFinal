<?php

    $pdo = null;

    try {
        $pdo = new PDO('mysql:host=localhost:3307;dbname=proyectofinal', 'root', '');
        echo 'exito';
    } catch (\Throwable $th) {
        echo 'Error al conectar: ' . $th->getMessage();
    }
?>