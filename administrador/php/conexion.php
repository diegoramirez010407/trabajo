<?php
$server = "localhost";
$user="root";
$password = "1234";
$bd="proyectotbd";
$conexion =new mysqli($server,$user,$password,$bd) or die ("Error al conectar con la base de datos".$mysqli->error);
?>