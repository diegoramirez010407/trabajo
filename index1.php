<?php        
session_start();
 if(isset($_SESSION['autorizado'])){
    if($_SESSION['autorizado']=='yes'){
                     echo "<script>window.location='index.php'</script>";
                     exit();
                }
              }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="css/alertify.core.css" rel="stylesheet" type="text/css" />
    <link href="css/alertify.default.css" rel="stylesheet" type="text/css" />
    <link href="css/jquery.dataTables.min.css" rel="stylesheet" type="text/css" />
    <script src="js/jquery.js" type="text/javascript"></script>
   
    <script src="js/alertify.js" type="text/javascript"></script>
    <script src="js/bootstrap.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
    <script src="js/jquery.dataTables.min.js" type="text/javascript"></script>
    <script src="js/login.js" type="text/javascript"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

</head>
<body class="m-0 vh-100 row justify-content-center aling-items-center">
<div class="col-auto p-5">
    <H1 class="text-center"> Bienvenido al sistema</H1>
    <p class = "text-center">Inicia sesion para acceder al sistema</p>
<form id="sign_in" "> 
    
        <div class="card">
        <div class="card-header">
            Inicia sesion
        </div>
        <div class="card-body">
            
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Usuario</span>
        </div>
        <input type="text" class="form-control" id="user" placeholder="user aria-label="user" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Contraseña</span>
        </div>
        <input type="password" class="form-control" id="contrasena"  placeholder="contrasena" aria-label="contrasena aria-describedby="basic-addon1">
        </div>
        
        <button type="button" id="btnlogin" class="btn btn-success">INICIAR</button>
        </div>
        </div>


</form>
</div>
</body>
</html>