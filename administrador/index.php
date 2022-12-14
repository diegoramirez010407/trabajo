<!DOCTYPE html>
<html">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
    <link href="css/alertify.core.css" rel="stylesheet" type="text/css"/>
    <link href="css/alertify.default.css" rel="stylesheet" type="text/css"/>
    <link href="css/jquery.dataTables.min.css" rel="stylesheet" type="text/css"/>
    <script src="js/jquery.js" type="text/javascript"></script>
    <script src="js/alertify.js" type="text/javascript"></script>
    <script src="js/bootstrap.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
    <script src="js/funciones.js" type="text/javascript"></script>
    <script src="js/jquery.dataTables.min.js" type="text/javascript"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
</head>
<body>
 <br>
<div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a class="navbar-brand" href="#">TESIS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggle-icon "></span></button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
                <!-- Interfaz de Inicio -->
                <a  class= "nav-link"href="#" id="menuInicio" style="color:white;"><span class="fas fa home"> </span>Inicio</a>
                <!-- Interfaz de agregar beneficiario -->
                <li class="nav-item dropdown">
                    <a  class= "nav-link "href="#" id="menuAgregarBeneficiario" style="color:white;"><span class="fas fa-user-plus"> </span>Alumnos</a>
                </li>
                <!-- Interfaz de pagos -->      
                <li class="nav-item dropdown">
                    <a  class= "nav-link "href="#" id="menuRegistrarPago" style="color:white;"><span class="fas fa-user-plus"> </span>Asesores</a>
                </li>
                <!-- Interfaz de REPORTE -->
                <li class="nav-item dropdown">
                    <a  class= "nav-link "href="#" id="menuAgregarRetiro" style="color:white;"><span class="fas fa-table"> </span>Trabajos</a>
                </li>
                <!-- boton salida-->
                <p>
                    <a href="/sistemaa/sistemaa" 
                    class="btn btn-danger" style="float: right;">Cerrar Sesión</a>
                </p>
                <li class="nav-item dropdown">
                    <a  class= "nav-link "href="#" id="" style="color:white;"></a>
                </li>
                <img src="img/logo.png" alt="" style="width: 120px; height: 50px;">
            </ul>
        </div>
        
    </nav>
    <br>
    <!-- APARTADO INICIO DEL SISTEMA  -->
    <div class="row" id="divInicio">
        <div class="col-12" style="text-align:center;">
        <img src="img/tessf.jpg" alt="" style="width: 900px; height: 500px;border-radius:50px;">
        </div>
    </div>
        <!-- Apartado de AgregarBeneficiario -->
         <div class="row" id="divAgregarBeneficiario" style="display: none;">
            <div class="col-3">
                <p class="alert alert-success" style="text-align: center;">Agregar alumno</p>
                <label for=""> No. Cuenta</label>
                <input type="number" class="form-control form-control-sm" id="txtClaveBeneficiario" placeholder="No. Cuenta...">
                <label> Nombre</label>
                <input type="text" class="form-control form-control-sm" id="txtNombreBeneficiario" placeholder="Apellido Paterno/ Materno/ Nombre..">
                <label > Edad</label>
                <input type="number" class="form-control form-control-sm" id="txtApBeneficiario" placeholder="Edad..">
                <label> Correo</label>
                <input type="text" class="form-control form-control-sm" id="txtAmBeneficiario" placeholder="Correo..">
                <label >Teléfono</label>
                <input type="number" class="form-control form-control-sm" id="txtTelefonoBeneficiario" placeholder="Teléfono..">
                <label >Usuario</label>
                <input type="text" class="form-control form-control-sm" id="txtUserBeneficiario" placeholder="Usuario..">
                <label >Contraseña</label>
                <input type="text" class="form-control form-control-sm" id="txtPasswordBeneficiario" placeholder="Contraseña..">
                <label >Clave Administrador</label>
                <input type="number" class="form-control form-control-sm" id="txtEstadoBeneficiario" placeholder="Clave Administrador..">
                <label >Clave Asesor</label>
                <input type="text" class="form-control form-control-sm" id="txtClaveISEMYN" placeholder="Clave Asesor..">
                <label for=""></label>
                <div style="text-align: center;">
                    <button type="button" class="btn btn-success" id="btnGuardarBeneficiario" value="Guardar">
                        <i class="fas fa-save"></i>Guardar
                    </button>
                </div>
            </div>
            <div class="col-8" style="text-align: center;" id="mostrarBeneficiario"></div>
         </div>
         <!-- Apartado de mostrar -->
         <div class="row" id="divMostrarBeneficiario" style="display: none;">
            <div class="col-3">
                <p class="alert alert-success" style="text-align: center;"> Beneficiarios</p>
                <label for="">Clave beneficiario</label>
                <input type="number" class="form-control form-control-sm" id="txtClaveBeneficiario" placeholder="Clave...">
                <label for=""></label>
                <div style="text-align: center;">
                    <button type="button" class="btn btn-success" id="btnBuscarBeneficiario" value="Buscar">
                        <i class="fas fa-save"></i>Buscar Beneficiario
                    </button>
                </div>
            </div>
            <div class="col-8" style="text-align: center;" id="mostrarBeneficiario"></div>
         </div>

         <!-- Apartado de RegistrarPago -->
         <div class="row" id="divRegistrarPago" style="display: none;">
            <div class="col-3">
                <p class="alert alert-success" style="text-align: center;">Agregar Asesor</p>
                <label for="">Clave ISEMYN</label>
                <input type="text" class="form-control form-control-sm" id="txtClavePago" placeholder="Clave ISEMYN...">
                <label> Nombre  </label>
                <input type="text" class="form-control form-control-sm" id="txtNombreBeneficiario2" placeholder="Apellido Paterno/ Materno/ Nombre..">
                <label > Edad</label>
                <input type="number" class="form-control form-control-sm" id="txtApBeneficiario2" placeholder="Edad..">
                <label> Correo</label>
                <input type="text" class="form-control form-control-sm" id="txtAmBeneficiario2" placeholder="Correo..">
                <label >Teléfono</label>
                <input type="number" class="form-control form-control-sm" id="txtTelefonoBeneficiario2" placeholder="Teléfono..">
                <label >Usuario</label>
                <input type="text" class="form-control form-control-sm" id="txtUserBeneficiario2" placeholder="Usuario..">
                <label >Contraseña</label>
                <input type="text" class="form-control form-control-sm" id="txtPasswordBeneficiario2" placeholder="Contraseña..">
                <label >Especialidad</label>
                <input type="text" class="form-control form-control-sm" id="txtEstadoBeneficiario2" placeholder="Especialidad.. ">
                <label >Clave administrador</label>
                <input type="number" class="form-control form-control-sm" id="txtClaveISEMYN2" placeholder="Clave Administrador..">               
                <label for=""></label>
                <div style="text-align: center;">
                    <button type="button" class="btn btn-success" id="btnGuardarPago" value="Guardar">
                        <i class="fas fa-save"></i>Guardar
                    </button>
                    
                </div>
            </div>
            <div class="col-8" style="text-align: center;" id="mostrarPago"></div>
         </div>

         <!-- Apartado de ConsultarPago -->
         <div class="row" id="divConsultarPago" style="display: none;">
            <div class="col-8" style="text-align: center;" id="mostrarPago1"></div>
         </div>
         <!-- Apartado de Reporte -->

         <div class="row" id="divReporte1" style="display: none;">
            <div class="col-3">
                <p class="alert alert-success" style="text-align: center;">TRABAJOS <BR> Se encuentran todos los trabajos que se han desarrolado en la carrera de ingeniería informática</BR></p>
            </div>
            <div class="col-8" style="text-align: center;" id="mostrarReporte1"></div>
         </div>


         <div class="row" id="divAgregarRetiro" style="display: none;">
            <div class="col-3">
                <p class="alert alert-success" style="text-align: center;">Agregar Trabajo</p>
                <label for="">Id Trabajo</label>
                <input type="number" class="form-control form-control-sm" id="txtClavePago3" placeholder="Id de Trabajo...">
                <label> Nombre  </label>
                <input type="text" class="form-control form-control-sm" id="txtNombreBeneficiario3" placeholder="Nombre del trabajo..">
                <label> Tipo</label>
                <input type="text" class="form-control form-control-sm" id="txtApBeneficiario3" placeholder="Tipo..">
                <label> Fecha</label>
                <input type="text" class="form-control form-control-sm" id="txtAmBeneficiario3" placeholder="Fecha (Mes, año).. ">
                <label> No. Cuenta</label>
                <input type="number" class="form-control form-control-sm" id="txtTelefonoBeneficiario3" placeholder="No Cuenta..">               
                <label for=""></label>
                <div style="text-align: center;">
                    <button type="button" class="btn btn-success" id="btnGuardarRetiro" value="Guardar">
                        <i class="fas fa-save"></i>Guardar trabajo
                    </button>
                </div>
            </div>
            <div class="col-8" style="text-align: center;" id="mostrarRetiro"></div>
         </div>
    </div>   
    </body>
</html>
<!-- Apartado de ConsultarTrabajo -->
<div class="row" id="divConsultarRetiro" style="display: none;">
            <div class="col-8" style="text-align: center;" id="mostrarRetiro"></div>
         </div>