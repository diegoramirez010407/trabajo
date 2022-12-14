<?php
    include "conexion.php";
    $consultaSQL="Select *from asesor";

    //ejecutamos la consulta
    $ejecutarConsulta=$conexion->query($consultaSQL);

    //recorre los elementos de la consulta dentro de un 
    //array y almacenarlos en una variable cada fila
    ?>
    <script type="text/javascript">
        $(document).ready (function(){
            $("#tablaPago").DataTable();
        });
    </script>
    <?php
    echo "<table id= 'tablaPago'><thead><th>ISEMYN</th><th>Nombre</th>
    <th>Edad</th> <th>Correo</th> <th>Teléfono</th> <th>Usuario</th> <th>Contraseña</th>
    <th>Especialidad</th><th>Clave Adm</th><th>Eliminar</th><th>Editar</th></thead>";
    while ($fila=$ejecutarConsulta->fetch_array()){
        //mostrar cada fila del array
        echo "<tr>";
        echo "<td>".$fila[1]."</td> <td>".$fila[2]."</td> <td>".$fila[3]."</td> <td>".$fila[4]."</td> <td>".$fila[5]."</td>
        <td>". $fila[6]."</td> <td>". $fila[7]."</td> <td>". $fila[8]."</td> <td>".$fila[9]."</td><td>
        <p class='btn btn-warning' onclick='eliminarPago(".$fila[0].")'>
        <i class='fas fa-trash-alt'></i> Eliminar</p></td><td></td>";
        echo "</tr>"; 
    }
    echo "</table>";
    ?>

</script>