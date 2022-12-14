<?php
    include "conexion.php";
    $consultaSQL="Select *from pago ";

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
    echo "<table id= 'tablaPago'><thead><th>Clave</th><th>Cantidad</th><th>Mes</th><th>Imprimir</th></thead>";
    while ($fila=$ejecutarConsulta->fetch_array()){
        //mostrar cada fila del array
        echo "<tr>";
        echo "<td>".$fila[1]."</td><td>" . $fila[2]."</td> <td>".$fila[3]."</td><td>
        <p class='btn btn-info' id='imprimirPago' onclick='imprimirPago(".$fila[0].")'>
        <i class='fas fa-file-pdf'></i> Imprimir</p></td>";
        echo "</tr>"; 
    }
    echo "</table>";
    ?>

<script type="text/javascript">
    $("#imprimirPago").click(function(event){
        window.open("php/imprime_pagos.php","","fullscreen");
    });
</script>