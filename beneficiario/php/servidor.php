<?php
    include "conexion.php";
    // BENEFICIARIO
    //Se recibe la acción a realizar.
    $accion = $_GET["accion"];
    //Se evalua la accion (registrar, etc...)
    switch ($accion){
        case 'agregarBeneficiario':
        // Se reciben los datos a insertar
            $claveBeneficiario = $_GET["claveBeneficiario"];
            $nombre = $_GET["nombre"];
            $ap = $_GET["ap"];
            $am = $_GET["am"];
            $user = $_GET["user"];
            $contrasena = $_GET["contrasena"];
            $telefono = $_GET["telefono"];
            $estado = $_GET["estado"];
            // Se define la consulta sql a realizar.
            $sql1 = "insert into beneficiario values (0, '$claveBeneficiario', '$nombre', '$ap', '$am', '$user', '$contrasena', '$telefono', '$estado')";
            // Se ejecuta la consulta con bd.
            $ejecutarSQL1 = $conexion->query($sql1) or die ("Error al insertar al beneficiario".$conexion->error);
            
            // INSERTAR PARA TABLA usuario
            $tipo=2;
            $sql2 = "insert into usuarios values (0, '$claveBeneficiario', '$user', '$contrasena', '$estado')";
            // Se ejecuta la consulta con bd.
            $ejecutarSQL2 = $conexion->query($sql2) or die ("Error al insertar al beneficiario".$conexion->error);
            // Comprobar la ejecución
            if ($ejecutarSQL1 && $ejecutarSQL2){
                echo "1";
            }
            else 
            {
                echo "0";
            }
            break;
            case 'editarBeneficiario':
                //se resiviran los datos a modificar
                    $clave=$_GET["claveBeneficiario"];
                    $nombre=$_GET["nombre"];
                    $ap=$_GET["ap"];
                    $am=$_GET["am"];
                    $user=$_GET["user"];
                    $contrasena=$_GET["contrasena"];
                    $telefono=$_GET["telefono"];
                    $estado=$_GET["estado"];
                    //se define la consulta sql a realizar
                    $sql1="update beneficiario set nombre = '$nombre' ,ap='$ap' ,am='$am', user='$user' ,contrasena='$contrasena' ,telefono = '$telefono' ,estado = '$estado' where clavebeneficiario='$clave'";
                    //se ejecuta la consulta con la bd
                    $ejecutarSQL1=$conexion->query($sql1) or die ("Error al editar Beneficiario".$conexion->error);
                
                    //USUARIO
                    $tipo=2;
                    //se define la consulta sql a realizar
                    $sql2="update usuarios set user='$user' ,contrasena='$contrasena' ,estado = '$estado' where clavebeneficiario='$clave'";
                    //se ejecuta la consulta con la bd
                    $ejecutarSQL2=$conexion->query($sql2) or die ("Error al editar Beneficiario".$conexion->error);
                    //comprobar la ejecucion
                    if ($ejecutarSQL1 && $ejecutarSQL2){
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
                    $idLogin=$_GET["idLogin"];
                    //se define la consulta sql a realizar
                    $sql1="delete from beneficiario where id='$id'";
                    //se ejecuta la consulta co la bd
                    $ejecutarSQL1=$conexion->query($sql1) or die ("Error al eliminar Beneficiario".$conexion->error);
                    
                    // USUARIO
                    $tipo=2;
                    //se define la consulta sql a realizar
                    $sql2="delete from usuarios where id='$id'";
                    //se ejecuta la consulta co la bd
                    $ejecutarSQL2=$conexion->query($sql2) or die ("Error al eliminar Beneficiario".$conexion->error);
                    //comprobar la ejecucion
                    if ($ejecutarSQL1 && $ejecutarSQL2){
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
            $clavePago = $_GET["clavePago"];
            $cantidad = $_GET["cantidad"];
            $mes = $_GET["mes"];
            // Se define la consulta sql a realizar.
            $sql3 = "insert into pago values (0, '$clavePago', '$cantidad', '$mes')";
            // Se ejecuta la consulta con bd.
            $ejecutarSQL3 = $conexion->query($sql3) or die ("Error al insertar a pago".$conexion->error);
            
            $tipo=2;
            // Se define la consulta sql a realizar.
            $sql4 = "insert into reporte values (0, '$clavePago', '$cantidad', '$mes')";
            // Se ejecuta la consulta con bd.
            $ejecutarSQL4 = $conexion->query($sql4) or die ("Error al insertar a pago".$conexion->error);
            //comprobar la ejecucion
            if ($ejecutarSQL3 && $ejecutarSQL4){
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
                    //Reporte
                    $tipo=2;
                    //se define la consulta sql a realizar
                    $sql4="update reporte set cantidad = '$cantidad', mes ='$mes' where clavepago='$clave1'";
                    //se ejecuta la consulta con la bd
                    $ejecutarSQL4=$conexion->query($sql4) or die ("Error al editar Pago".$conexion->error);
                    //comprobar la ejecucion
                    if ($ejecutarSQL3 && $ejecutarSQL4){
                        echo "1";
                    }
                    else 
                    {
                        echo "0";
                    }
                    break;
            case 'eliminarPago':
                //se reciviran los datos a incertar
                    $idPago=$_GET["idPago"];
                    //se define la consulta sql a realizar
                    $sql3="delete from pago where idPago='$idPago'";
                    //se ejecuta la consulta co la bd
                    $ejecutarSQL3=$conexion->query($sql3) or die ("Error al eliminar Pago".$conexion->error);
                    
                    $tipo=2;
                    //se define la consulta sql a realizar
                    $sql4="delete from reporte where idPago='$idPago'";
                    //se ejecuta la consulta co la bd
                    $ejecutarSQL4=$conexion->query($sql4) or die ("Error al eliminar Pago".$conexion->error);
                    if ($ejecutarSQL3 && $ejecutarSQL4){
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
            $claveRetiro = $_GET["claveRetiro"];
            $motivo = $_GET["motivo"];
            $cantidad = $_GET["cantidad"];
            $fecha = $_GET["fecha"];
            // Se define la consulta sql a realizar.
            $sql5 = "insert into retiro values (0, '$claveRetiro', '$motivo', '$cantidad', '$fecha')";
            // Se ejecuta la consulta con bd.
            $ejecutarSQL5 = $conexion->query($sql5) or die ("Error al insertar el retiro".$conexion->error);
            // INSERTAR PARA TABLA reporte
            $tipo=2;
            $sql6 = "insert into reporte values (0, '$claveRetiro', '$cantidad', '$motivo')";
            // Se ejecuta la consulta con bd.
            $ejecutarSQL6 = $conexion->query($sql6) or die ("Error al insertar el retiro".$conexion->error);
            // Comprobar la ejecución
            if ($ejecutarSQL5 && $ejecutarSQL6){
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
                    
                    //Reporte
                    $tipo=2;
                    //se define la consulta sql a realizar
                    $sql6="update reporte set cantidad='$cantidad', motivo = '$motivo'  where claveretiro='$clave2'";
                    //se ejecuta la consulta con la bd
                    $ejecutarSQL6=$conexion->query($sql6) or die ("Error al editar Retiro".$conexion->error);
                    //comprobar la ejecucion
                    if ($ejecutarSQL5 && $ejecutarSQL6){
                        echo "1";
                    }
                    else 
                    {
                        echo "0";
                    }
            case 'eliminarRetiro':
                //se reciviran los datos a incertar
                    $idRetiro=$_GET["idRetiro"];
                    //se define la consulta sql a realizar
                    $sql5="delete from retiro where idRetiro='$idRetiro'";
                    //se ejecuta la consulta co la bd
                    $ejecutarSQL5=$conexion->query($sql5) or die ("Error al eliminar Retiro".$conexion->error);
                    // USUARIO
                    $tipo=2;
                    //se define la consulta sql a realizar
                    $sql6="delete from reporte where idRetiro='$idRetiro'";
                    //se ejecuta la consulta co la bd
                    $ejecutarSQL6=$conexion->query($sql6) or die ("Error al eliminar Retiro".$conexion->error);
                    //comprobar la ejecucion
                    if ($ejecutarSQL5 && $ejecutarSQL6){
                        echo "1";
                    }
                    else 
                    {
                        echo "0";
                    }

    }
?>