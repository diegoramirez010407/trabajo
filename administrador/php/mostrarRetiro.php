<?php
    include "conexion.php";
    $consultaSQL="Select *from trabajos";

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
    echo "<table id= 'tablaPago'><thead><th>IdTrabajo</th><th>Nombre</th><th>Tipo</th><th>Fecha</th><th>No. Cuenta</th><th>Eliminar</th><th></th></thead>";
    while ($fila=$ejecutarConsulta->fetch_array()){
        //mostrar cada fila del array
        echo "<tr>";
        echo "<td>".$fila[0]."</td><td>" . $fila[1]."</td><td>" . $fila[2]."</td> <td>".$fila[3]. "</td><td>". $fila[4]."</td><td><p class='btn btn-warning' onclick='eliminarRetiro(".$fila[0].")'>
        <i class='fas fa-trash-alt'></i> Eliminar</p></td><td></td>";
        echo "</tr>"; 
    }
    echo "</table>";
    ?>

</script>