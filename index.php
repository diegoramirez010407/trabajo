
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login y Register</title>
    
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
    <script src="Login.js" type="text/javascript"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">


    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>

        <main>
        <h1 style="color:#000033";><center>Bienvenidos al sistema de control de servicios de Tesis</center></h1>

            <div class="contenedor__todo">
                <div class="caja__trasera">
                    <div class="caja__trasera-login">
                    <h3>____________________________</h3>
                    </div>
                    <div class="caja__trasera-register">
                        <h1 style="color: #F2F2F2";> TESSFP </h1>
                        <h2 style="color: #F2F2F2";>¿No puedes ingresar?</h2>
                        <p style="color: #F2F2F2";>Para obtener acceso contacta al administrador</p>
                    </div>
                </div>

                <!--Formulario de Login y registro-->
                <div class="contenedor__login-register">
                    <!--Login-->
                    <form  
                        class="formulario__login">
                        <h2>Iniciar Sesión</h2>
                        <input type="text" placeholder="Usuario" id="user">
                        <input type="password" placeholder="Contraseña" id="contrasena">
                        <button  type="button" id="btnlogin" class="btn btn-success">Entrar</button>
                    </form>
                </div>
            </div>

        </main>

        <script src="js/script.js"></script>
</body>
</html>