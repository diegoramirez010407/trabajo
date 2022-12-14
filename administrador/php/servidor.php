<?php
    include "conexion.php";
    // BENEFICIARIO
    //Se recibe la acción a realizar.
    $accion = $_GET["accion"];
    //Se evalua la accion (registrar, etc...)
    switch ($accion){
        case 'agregarBeneficiario':
        // Se reciben los datos a insertar
            $NoCuenta = $_GET["NoCuenta"];
            $NombreAlumno = $_GET["NombreAlumno"];
            $Edad = $_GET["Edad"];
            $Correo = $_GET["Correo"];
            $Telefono = $_GET["Telefono"];
            $Usuario = $_GET["Usuario"];
            $Contraseña = $_GET["Contraseña"];
            $ClaveAdmin = $_GET["ClaveAdmin"];
            $ClaveISEMYN = $_GET["ClaveISEMYN"];
            // Se define la consulta sql a realizar.
            $sql = "insert into alumno values (0, '$NoCuenta', '$NombreAlumno', '$Edad', '$Correo', '$Telefono', '$Usuario', '$Contraseña', '$ClaveAdmin', '$ClaveISEMYN')";
            // Se ejecuta la consulta con bd.
            $ejecutarSQL = $conexion->query($sql) or die ("Error al insertar al alumno".$conexion->error);
            if ($ejecutarSQL){
                echo "1";
            }
            else 
            {
                echo "0";
            }
            break;
            case 'editarBeneficiario':
                //se resibiran los datos a modificar
                    $clave = $_GET["NoCuenta"];
                    $NombreAlumno = $_GET["NombreAlumno"];
                    $Edad = $_GET["Edad"];
                    $Correo = $_GET["Correo"];
                    $Telefono = $_GET["Telefono"];
                    $Usuario = $_GET["Usuario"];
                    $Contraseña = $_GET["Contraseña"];
                    $ClaveAdmin = $_GET["ClaveAdmin"];
                    $ClaveISEMYN = $_GET["ClaveISEMYN"];
                    //se define la consulta sql a realizar
                    $sql="update alumno set NombreAlumno ='$NombreAlumno', Edad='$Edad', Correo='$Correo', Telefono='$Telefono',
                        Usuario='$Usuario', Contraseña='$Contraseña', ClaveAdmin='$ClaveAdmin', ClaveISEMYN='$ClaveISEMYN' where nocuenta='$clave'";
                    //se ejecuta la consulta con la bd
                    $ejecutarSQL=$conexion->query($sql) or die ("Error al editar Alumno".$conexion->error);
                    if ($ejecutarSQL) {
                        echo "1";
                    }
                    else 
                    {
                        echo "0";
                    }
                    break;
            case 'eliminarBeneficiario':
                //se reciviran los datos a incertar
                    $id=$_GET["id"];
                    //se define la consulta sql a realizar
                    $sql1="delete from alumno where id='$id'";
                    //se ejecuta la consulta co la bd
                    $ejecutarSQL1=$conexion->query($sql1) or die ("Error al eliminar Alumno".$conexion->error);
                    
                    if ($ejecutarSQL1){
                        echo "1";
                    }
                    else 
                    {
                        echo "0";
                    }
                    break;
    }
    // PAGO
    $accion1 = $_GET["accion1"];
    //Se evalua la accion (registrar, etc...)
    switch ($accion1){
        case 'agregarPago':
        // Se reciben los datos a insertar
            $ClaveISEMYN = $_GET["ClaveISEMYN"];
            $NombreAse = $_GET["NombreAse"];
            $Edad = $_GET["Edad"];
            $Correo = $_GET["Correo"];
            $Telefono = $_GET["Telefono"];
            $Usuario = $_GET["Usuario"];
            $Contraseña = $_GET["Contraseña"];
            $Especialidad = $_GET["Especialidad"];
            $ClaveAdmin = $_GET["ClaveAdmin"];
            // Se define la consulta sql a realizar.
            $sql3 = "insert into asesor values (0, '$ClaveISEMYN', '$NombreAse', '$Edad', '$Correo', '$Telefono', 
            '$Usuario', '$Contraseña', '$Especialidad', '$ClaveAdmin')";
            // Se ejecuta la consulta con bd.
            $ejecutarSQL3 = $conexion->query($sql3) or die ("Error al insertar a Asesor".$conexion->error);
            //comprobar la ejecucion
            if ($ejecutarSQL3){
                echo "1";
            }
            else 
            {
                echo "0";
            }
            break;
            case 'editarPago':
                //se resiviran los datos a modificar
                    $clave1 = $_GET["clavePago"];
                    $cantidad = $_GET["cantidad"];
                    $mes = $_GET["mes"];
                    //se define la consulta sql a realizar
                    $sql3="update pago set cantidad = '$cantidad', mes ='$mes' where clavepago='$clave1'";
                    //se ejecuta la consulta con la bd
                    $ejecutarSQL3=$conexion->query($sql3) or die ("Error al editar pago".$conexion->error);
                    
                    //comprobar la ejecucion
                    if ($ejecutarSQL3){
                        echo "1";
                    }
                    else 
                    {
                        echo "0";
                    }
                    break;
            case 'eliminarPago':
                //se reciviran los datos a incertar
                    $idAse=$_GET["idAse"];
                    //se define la consulta sql a realizar
                    $sql3="delete from asesor where idAse='$idAse'";
                    //se ejecuta la consulta co la bd
                    $ejecutarSQL3=$conexion->query($sql3) or die ("Error al eliminar Asesor".$conexion->error);
                    
                    if ($ejecutarSQL3){
                        echo "1";
                    }
                    else 
                    {
                        echo "0";
                    }
                    break;

    }
    // RETIRO
    //Se recibe la acción a realizar.
    $accion2 = $_GET["accion2"];
    //Se evalua la accion (registrar, etc...)
    switch ($accion2){
        case 'agregarRetiro':
        // Se reciben los datos a insertar
            $IdTrabajo = $_GET["IdTrabajo"];
            $NombreProy = $_GET["NombreProy"];
            $Tipo = $_GET["Tipo"];
            $Fecha = $_GET["Fecha"];
            $NoCuenta = $_GET["NoCuenta"];
            // Se define la consulta sql a realizar.
            $sql5 = "insert into trabajos values ('$IdTrabajo', '$NombreProy', '$Tipo', '$Fecha', '$NoCuenta')";
            // Se ejecuta la consulta con bd.
            $ejecutarSQL5 = $conexion->query($sql5) or die ("Error al insertar el retiro".$conexion->error);
            // Comprobar la ejecución
            if ($ejecutarSQL5){
                echo "1";
            }
            else 
            {
                echo "0";
            }
            break;
            case 'editarRetiro':
                //se resiviran los datos a modificar
                    $clave2=$_GET["claveRetiro"];
                    $motivo=$_GET["motivo"];
                    $cantidad=$_GET["cantidad"];
                    $fecha=$_GET["fecha"];
                    //se define la consulta sql a realizar
                    $sql5="update retiro set motivo = '$motivo' ,cantidad='$cantidad' ,fecha='$fecha' where claveretiro='$clave2'";
                    //se ejecuta la consulta con la bd
                    $ejecutarSQL5=$conexion->query($sql5) or die ("Error al editar Retiro".$conexion->error);
                    //comprobar la ejecucion
                    if ($ejecutarSQL5){
                        echo "1";
                    }
                    else 
                    {
                        echo "0";
                    }
                    break;
            case 'eliminarRetiro':
                //se reciviran los datos a incertar
                    $IdTrabajo=$_GET["IdTrabajo"];
                    //se define la consulta sql a realizar
                    $sql5="delete from trabajos where IdTrabajo='$IdTrabajo'";
                    //se ejecuta la consulta co la bd
                    $ejecutarSQL5=$conexion->query($sql5) or die ("Error al eliminar trabajo".$conexion->error);
                    //comprobar la ejecucion
                    if ($ejecutarSQL5){
                        echo "1";
                    }
                    else 
                    {
                        echo "0";
                    }
                    break;

    }
?>