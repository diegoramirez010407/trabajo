<?php
include "conexion.php";
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
        $password = $_GET["password"];
        $telefono = $_GET["telefono"];
        $estado = $_GET["estado"];
        // Se define la consulta sql a realizar.
        $sql = "insert into beneficiario values (0, '$claveBeneficiario', '$nombre', '$ap', '$am', '$user', '$password', '$telefono', '$estado')";
        // Se ejecuta la consulta con bd.
        $ejecutarSQL = $conexion->query($sql) or die ("Error al insertar al beneficiario".$conexion->error);
        // Comprobar la ejecución
        if ($ejecutarSQL){
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
                $password=$_GET["password"];
                $telefono=$_GET["telefono"];
                $estado=$_GET["estado"];
                //se define la consulta sql a realizar
                $sql="update beneficiario set nombre = '$nombre' ,ap='$ap' ,am='$am', user='$user' ,password='$password' ,telefono = '$telefono' ,estado = '$estado'  where clavebeneficiario='$clave'";
                //se ejecuta la consulta con la bd
                $ejecutarSQL=$conexion->query($sql) or die ("Error al editar Beneficiario".$conexion->error);
                //comprobar la ejecucion
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
                $sql="delete from beneficiario where id='$id'";
                //se ejecuta la consulta co la bd
                $ejecutarSQL=$conexion->query($sql) or die ("Error al eliminar Beneficiario".$conexion->error);
                //comprobar la ejecucion
                if ($ejecutarSQL) {
                    echo "1";
                }
                else
                {
                    echo "0";
                }
                break;
        case 'buscaUsuario':
                $usuario=$_GET["usuario"];
                $password=$_GET["password"];
                $sql="Select *from usuario='$usuario' and password='$password'";
                $resultado=$conexion->query($sql);
                $total=$resultado->num_rows;
                if ($total==1)
                {
                    $fila=$resultado->fetch_array();
                    $tipo=$fila['tipo'];
                    switch($tipo)
                    {
                        case "1":
                            session_start();
                            $_SESSION['administrador'] =$usuario;
                        break;
                        case "2":
                            $sql="Select *from beneficiario where clavebeneficiario='$usuario'";
                            $resultado=$conexion->query($scl);
                            $fila=$resultado->fetch_array();
                            $nombre=$fila['nombre'];
                            session_start();
                            $_SESSION['beneficiario'] =$usuario;
                            $_SESSION['nombre'] =$nombre;
                        break;

                    }
                    echo $tipo;
                }
                else
                {
                    echo "0";
                }
            break;
        

}
?>