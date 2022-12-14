<?php
    session_start();
    $connect = mysqli_connect("localhost","root","1234","proyectotbd");
    
    //conexion a base de datos
    //if(isset($_POST["user"]) && isset($_POST["contrasena"])){ 
        $user = $_POST["user"];
        $password = $_POST["password"];
        $sql = "SELECT *FROM usuarios WHERE user='$user' AND contrasena='$password'";
        $result = mysqli_query($connect, $sql);
        $num_row = mysqli_num_rows($result);
    ///estado de admin o user
        if ($num_row == "1"){
            $data = mysqli_fetch_array($result);
                    $_SESSION["user"] = $data["user"];
                    $_SESSION["estado"] = $data["estado"];
                    if ($_SESSION["estado"]=="1"){
                        echo "1";
                    }
    
                    if ($_SESSION["estado"]=="2"){
                        echo "2";
                    }
        }
    
        else{
            echo "error no se encontro ninguno".$user;
        }
   // }else{
        //    echo "error no me llego los datos del formulario";
    //    }
    
?>

