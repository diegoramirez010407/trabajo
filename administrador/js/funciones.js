$(document).ready(function(){
    // BENEFICIARIO
    // Regresar al menú donde esta la imagen y ocultando el formulario y la tabla del beneficiario:
    $("#menuInicio").click(function(event){
        $("#divAgregarBeneficiario").hide(1000);
        $("#divInicio").show(1000);
    });
    $("#menuInicio").click(function(event){
        $("#divMostrarBeneficiario").hide(1000);
        $("#divInicio").show(1000);
    });
    // PAGO
    // Regresar al menú donde esta la imagen y ocultando el formulario y la tabla de pago:
    $("#menuInicio").click(function(event){
        $("#divRegistrarPago").hide(1000);
        $("#divInicio").show(1000);
    });
    $("#menuInicio").click(function(event){
        $("#divConsultarPago").hide(1000);
        $("#divInicio").show(1000);
    });
    // RETIRO
    // Regresar al menú donde esta la imagen y ocultando el formulario y la tabla del PAGO:
    $("#menuInicio").click(function(event){
        $("#divAgregarRetiro").hide(1000);
        $("#divInicio").show(1000);
    });
    $("#menuInicio").click(function(event){
        $("#divMostrarRetiro").hide(1000);
        $("#divInicio").show(1000);
    });
    // REPORTE
    $("#menuInicio").click(function(event){
        $("#divReporte").hide(1000);
        $("#divInicio").show(1000);
    });
    // BENEFICIARIO
    // AGREGAR
    // Acción al dar click en el menú Agregar Beneficiario:
    $("#menuAgregarBeneficiario").click(function(event){
        $("#divInicio").hide("slow");
        $("#divAgregarBeneficiario").show(1000);
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        $("#txtClaveBeneficiario").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarBeneficiario").load("./php/mostrarBeneficiario.php");
    });
    // Acción al dar click en el menú MOSTRAR BENEFICIARIO estando en AGREGAR BENEFICIARIO:
    $("#menuMostrarBeneficiario").click(function(event){
        $("#divAgregarBeneficiario").hide("slow");
        $("#divMostrarBeneficiario").show(1000);
        $("#divAgregarBeneficiario").hide(1000); $("#divAgregarBeneficiario").hide("slow");
        $("#txtClaveBeneficiario").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarBeneficiario").load("./php/mostrarBeneficiario.php");
    });
    // Acción al dar click en el menú registrar Pago estando en AGREGAR BENEFICIARIO:
    $("#menuRegistrarPago").click(function(event){
        $("#divAgregarBeneficiario").hide("slow");
        $("#divRegistrarPago").show(1000);
        $("#divAgregarBeneficiario").hide(1000); $("#divAgregarBeneficiario").hide("slow");
        $("#txtClavePago").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarPago").load("./php/mostrarPago.php");
    });
    // Acción al dar click en el menú CONSULTAR PAGO estando en AGREGAR BENEFICIARIO:
    $("#menuConsultarPago").click(function(event){
        $("#divAgregarBeneficiario").hide("slow");
        $("#divConsultarPago").show(1000);
        $("#divAgregarBeneficiario").hide(1000); $("#divAgregarBeneficiario").hide("slow");
        $("#txtClavePago").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarPago").load("./php/mostrarPago.php");
    });
    // Acción al dar click en el menú AGREGAR RETIRO estando en AGREGAR BENEFICIARIO:
    $("#menuAgregarRetiro").click(function(event){
        $("#divAgregarBeneficiario").hide("slow");
        $("#divAgregarRetiro").show(1000);
        $("#divAgregarBeneficiario").hide(1000); $("#divAgregarBeneficiario").hide("slow");
        $("#txtClaveRetiro").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarRetiro").load("./php/mostrarRetiro.php");
    });
    // Acción al dar click en el menú MOSTRAR RETIRO estando en AGREGAR BENEFICIARIO:
    $("#menuMostrarRetiro").click(function(event){
        $("#divAgregarBeneficiario").hide("slow");
        $("#divMostrarRetiro").show(1000);
        $("#divAgregarBeneficiario").hide(1000); $("#divAgregarBeneficiario").hide("slow");
        $("#txtClaveRetiro").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarRetiro").load("./php/mostrarRetiro.php");
    });
    // Acción al dar click en el menú REPORTE estando en AGREGAR BENEFICIARIO:
    $("#menuReporte").click(function(event){
        $("#divAgregarBeneficiario").hide("slow");
        $("#divReporte").show(1000);
        $("#divAgregarBeneficiario").hide(1000); $("#divAgregarBeneficiario").hide("slow");
        $("#txtClaveReporte").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarReporte").load("./php/mostrarReporte.php");
    });






    // MOSTRAR
    // Acción al dar click en el menú Mostrar Beneficiario estando en INICIO:
    $("#menuMostrarBeneficiario").click(function(event){
        $("#divInicio").hide("slow");
        $("#divMostrarBeneficiario").show(1000);
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        $("#txtClaveBeneficiario").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarBeneficiario").load("./php/mostrarBeneficiario.php");
    });
    // Acción al dar click en el menú Agregar Beneficiario Estando en MOSTRAR BENEFICIARIO:
    $("#menuAgregarBeneficiario").click(function(event){
        $("#divMostrarBeneficiario").hide("slow");
        $("#divAgregarBeneficiario").show(1000);
        $("#divMostrarBeneficiario").hide(1000); $("#divMostrarBeneficiario").hide("slow");
        $("#txtClaveBeneficiario").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarBeneficiario").load("./php/mostrarBeneficiario.php");
    });
    // Acción al dar click en el menú registrar Pago estando en Mostrar Beneficiario:
    $("#menuRegistrarPago").click(function(event){
        $("#divMostrarBeneficiario").hide("slow");
        $("#divRegistrarPago").show(1000);
        $("#divMostrarBeneficiario").hide(1000); $("#divMostrarBeneficiario").hide("slow");
        $("#txtClavePago").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarPago").load("./php/mostrarPago.php");
    });
    // Acción al dar click en el menú CONSULTAR PAGO estando en MostrarBeneficiario:
    $("#menuConsultarPago").click(function(event){
        $("#divMostrarBeneficiario").hide("slow");
        $("#divConsultarPago").show(1000);
        $("#divMostrarBeneficiario").hide(1000); $("#divMostrarBeneficiario").hide("slow");
        $("#txtClavePago").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarPago").load("./php/mostrarPago.php");
    });
    // Acción al dar click en el menú AGREGAR RETIRO estando en MostrarBeneficiario:
    $("#menuAgregarRetiro").click(function(event){
        $("#divMostrarBeneficiario").hide("slow");
        $("#divAgregarRetiro").show(1000);
        $("#divMostrarBeneficiario").hide(1000); $("#divMostrarBeneficiario").hide("slow");
        $("#txtClaveRetiro").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarRetiro").load("./php/mostrarRetiro.php");
    });
    // Acción al dar click en el menú MOSTRAR RETIRO estando en MostrarBeneficiario:
    $("#menuMostrarRetiro").click(function(event){
        $("#divMostrarBeneficiario").hide("slow");
        $("#divMostrarRetiro").show(1000);
        $("#divMostrarBeneficiario").hide(1000); $("#divMostrarBeneficiario").hide("slow");
        $("#txtClaveRetiro").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarRetiro").load("./php/mostrarRetiro.php");
    });
    // Acción al dar click en el menú REPORTE estando en MostrarBeneficiario:
    $("#menuReporte").click(function(event){
        $("#divMostrarBeneficiario").hide("slow");
        $("#divReporte").show(1000);
        $("#divMostrarBeneficiario").hide(1000); $("#divMostrarBeneficiario").hide("slow");
        $("#txtClaveReporte").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarReporte").load("./php/mostrarReporte.php");
    });


    // PAGO
    // REGISTRAR
    // Acción al dar click en el menú REGISTRAR PAGO:
    $("#menuRegistrarPago").click(function(event){
        $("#divInicio").hide("slow");
        $("#divRegistrarPago").show(1000);
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        $("#txtClavePago").focus();
        // Cargamos los datos de la tabla PAGO en el div:
        $("#mostrarPago").load("./php/mostrarPago.php");
    });
    // Acción al dar click en el menú Agregar Beneficiario Estando en RegistrarPago:
    $("#menuAgregarBeneficiario").click(function(event){
        $("#divRegistrarPago").hide("slow");
        $("#divAgregarBeneficiario").show(1000);
        $("#divRegistrarPago").hide(1000); $("#divRegistrarPago").hide("slow");
        $("#txtClaveBeneficiario").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarBeneficiario").load("./php/mostrarBeneficiario.php");
    });
    // Acción al dar click en el menú MostrarBeneficiario estando en RegistrarPago:
    $("#menuMostrarBeneficiario").click(function(event){
        $("#divRegistrarPago").hide("slow");
        $("#divMostrarBeneficiario").show(1000);
        $("#divRegistrarPago").hide(1000); $("#divRegistrarPago").hide("slow");
        $("#txtClaveBeneficiario").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarBeneficiario").load("./php/mostrarBeneficiario.php");
    });
    // Acción al dar click en el menú CONSULTAR PAGO estando en RegistrarPago:
    $("#menuConsultarPago").click(function(event){
        $("#divRegistrarPago").hide("slow");
        $("#divConsultarPago").show(1000);
        $("#divRegistrarPago").hide(1000); $("#divRegistrarPago").hide("slow");
        $("#txtClavePago").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarPago").load("./php/mostrarPago.php");
    });
    // Acción al dar click en el menú AGREGAR RETIRO estando en RegistrarPago:
    $("#menuAgregarRetiro").click(function(event){
        $("#divRegistrarPago").hide("slow");
        $("#divAgregarRetiro").show(1000);
        $("#divRegistrarPago").hide(1000); $("#divRegistrarPago").hide("slow");
        $("#txtClaveRetiro").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarRetiro").load("./php/mostrarRetiro.php");
    });
    // Acción al dar click en el menú MOSTRAR RETIRO estando en RegistrarPago:
    $("#menuMostrarRetiro").click(function(event){
        $("#divRegistrarPago").hide("slow");
        $("#divMostrarRetiro").show(1000);
        $("#divRegistrarPago").hide(1000); $("#divRegistrarPago").hide("slow");
        $("#txtClaveRetiro").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarRetiro").load("./php/mostrarRetiro.php");
    });
    // Acción al dar click en el menú REPORTE estando en RegistrarPago:
    $("#menuReporte").click(function(event){
        $("#divRegistrarPago").hide("slow");
        $("#divReporte").show(1000);
        $("#divRegistrarPago").hide(1000); $("#divRegistrarPago").hide("slow");
        $("#txtClaveReporte").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarReporte").load("./php/mostrarReporte.php");
    });


    // CONSULTAR
    // Acción al dar click en el menú ConsultarPago:
    $("#menuConsultarPago").click(function(event){
        $("#divInicio").hide("slow");
        $("#divConsultarPago").show(1000);
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        $("#txtClavePago").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarPago").load("./php/mostrarPago.php");
    });
    // Acción al dar click en el menú Agregar Beneficiario Estando en ConsultarPago:
    $("#menuAgregarBeneficiario").click(function(event){
        $("#divConsultarPago").hide("slow");
        $("#divAgregarBeneficiario").show(1000);
        $("#divConsultarPago").hide(1000); $("#divConsultarPago").hide("slow");
        $("#txtClaveBeneficiario").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarBeneficiario").load("./php/mostrarBeneficiario.php");
    });
    // Acción al dar click en el menú MostrarBeneficiario estando en ConsultarPago:
    $("#menuMostrarBeneficiario").click(function(event){
        $("#divConsultarPago").hide("slow");
        $("#divMostrarBeneficiario").show(1000);
        $("#divConsultarPago").hide(1000); $("#divConsultarPago").hide("slow");
        $("#txtClaveBeneficiario").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarBeneficiario").load("./php/mostrarBeneficiario.php");
    });
    // Acción al dar click en el menú REGISTRAR PAGO estando en ConsultarPago:
    $("#menuRegistrarPago").click(function(event){
        $("#divConsultarPago").hide("slow");
        $("#divRegistrarPago").show(1000);
        $("#divConsultarPago").hide(1000); $("#divConsultarPago").hide("slow");
        $("#txtClavePago").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarPago").load("./php/mostrarPago.php");
    });
    // Acción al dar click en el menú AGREGAR RETIRO estando en ConsultarPago:
    $("#menuAgregarRetiro").click(function(event){
        $("#divConsultarPago").hide("slow");
        $("#divAgregarRetiro").show(1000);
        $("#divConsultarPago").hide(1000); $("#divConsultarPago").hide("slow");
        $("#txtClaveRetiro").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarRetiro").load("./php/mostrarRetiro.php");
    });
    // Acción al dar click en el menú MOSTRAR RETIRO estando en ConsultarPago:
    $("#menuMostrarRetiro").click(function(event){
        $("#divConsultarPago").hide("slow");
        $("#divMostrarRetiro").show(1000);
        $("#divConsultarPago").hide(1000); $("#divConsultarPago").hide("slow");
        $("#txtClaveRetiro").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarRetiro").load("./php/mostrarRetiro.php");
    });
    // Acción al dar click en el menú REPORTE estando en ConsultarPago:
    $("#menuReporte").click(function(event){
        $("#divConsultarPago").hide("slow");
        $("#divReporte").show(1000);
        $("#divConsultarPago").hide(1000); $("#divConsultarPago").hide("slow");
        $("#txtClaveReporte").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarReporte").load("./php/mostrarReporte.php");
    });


    // RETIRO
    // AGREGAR
    // Acción al dar click en el menú AGREGAR RETIRO:
    $("#menuAgregarRetiro").click(function(event){
        $("#divInicio").hide("slow");
        $("#divAgregarRetiro").show(1000);
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        $("#txtClaveRetiro").focus();
        // Cargamos los datos de la tabla RETIRO en el div:
        $("#mostrarRetiro").load("./php/mostrarRetiro.php");
    });

    // Acción al dar click en el menú Agregar Beneficiario Estando en AgregarRetiro:
    $("#menuAgregarBeneficiario").click(function(event){
        $("#divAgregarRetiro").hide("slow");
        $("#divAgregarBeneficiario").show(1000);
        $("#divAgregarRetiro").hide(1000); $("#divAgregarRetiro").hide("slow");
        $("#txtClaveBeneficiario").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarBeneficiario").load("./php/mostrarBeneficiario.php");
    });
    // Acción al dar click en el menú MostrarBeneficiario estando en AgregarRetiro:
    $("#menuMostrarBeneficiario").click(function(event){
        $("#divAgregarRetiro").hide("slow");
        $("#divMostrarBeneficiario").show(1000);
        $("#divAgregarRetiro").hide(1000); $("#divAgregarRetiro").hide("slow");
        $("#txtClaveBeneficiario").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarBeneficiario").load("./php/mostrarBeneficiario.php");
    });
    // Acción al dar click en el menú REGISTRAR PAGO estando en AgregarRetiro:
    $("#menuRegistrarPago").click(function(event){
        $("#divAgregarRetiro").hide("slow");
        $("#divRegistrarPago").show(1000);
        $("#divAgregarRetiro").hide(1000); $("#divAgregarRetiro").hide("slow");
        $("#txtClavePago").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarPago").load("./php/mostrarPago.php");
    });
    // Acción al dar click en el menú CONSULTAR PAGO estando en AgregarRetiro:
    $("#menuConsultarPago").click(function(event){
        $("#divAgregarRetiro").hide("slow");
        $("#divConsultarPago").show(1000);
        $("#divAgregarRetiro").hide(1000); $("#divAgregarRetiro").hide("slow");
        $("#txtClavePago").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarPago").load("./php/mostrarPago.php");
    });
    // Acción al dar click en el menú MOSTRAR RETIRO estando en AgregarRetiro:
    $("#menuMostrarRetiro").click(function(event){
        $("#divAgregarRetiro").hide("slow");
        $("#divMostrarRetiro").show(1000);
        $("#divAgregarRetiro").hide(1000); $("#divAgregarRetiro").hide("slow");
        $("#txtClaveRetiro").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarRetiro").load("./php/mostrarRetiro.php");
    });
    // Acción al dar click en el menú REPORTE estando en AgregarRetiro:
    $("#menuReporte").click(function(event){
        $("#divAgregarRetiro").hide("slow");
        $("#divReporte").show(1000);
        $("#divAgregarRetiro").hide(1000); $("#divAgregarRetiro").hide("slow");
        $("#txtClaveReporte").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarReporte").load("./php/mostrarReporte.php");
    });


    // MOSTRAR
    // Acción al dar click en el menú MostrarRetiro:
    $("#menuMostrarRetiro").click(function(event){
        $("#divInicio").hide("slow");
        $("#divMostrarRetiro").show(1000);
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        $("#txtClaveRetiro").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarRetiro").load("./php/mostrarRetiro.php");
    });

    // Acción al dar click en el menú Agregar Beneficiario Estando en MostrarRetiro:
    $("#menuAgregarBeneficiario").click(function(event){
        $("#divMostrarRetiro").hide("slow");
        $("#divAgregarBeneficiario").show(1000);
        $("#divMostrarRetiro").hide(1000); $("#divMostrarRetiro").hide("slow");
        $("#txtClaveBeneficiario").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarBeneficiario").load("./php/mostrarBeneficiario.php");
    });
    // Acción al dar click en el menú MostrarBeneficiario estando en MostrarRetiro:
    $("#menuMostrarBeneficiario").click(function(event){
        $("#divMostrarRetiro").hide("slow");
        $("#divMostrarBeneficiario").show(1000);
        $("#divMostrarRetiro").hide(1000); $("#divMostrarRetiro").hide("slow");
        $("#txtClaveBeneficiario").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarBeneficiario").load("./php/mostrarBeneficiario.php");
    });
    // Acción al dar click en el menú REGISTRAR PAGO estando en MostrarRetiro:
    $("#menuRegistrarPago").click(function(event){
        $("#divMostrarRetiro").hide("slow");
        $("#divRegistrarPago").show(1000);
        $("#divMostrarRetiro").hide(1000); $("#divMostrarRetiro").hide("slow");
        $("#txtClavePago").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarPago").load("./php/mostrarPago.php");
    });
    // Acción al dar click en el menú CONSULTAR PAGO estando en MostrarRetiro:
    $("#menuConsultarPago").click(function(event){
        $("#divMostrarRetiro").hide("slow");
        $("#divConsultarPago").show(1000);
        $("#divMostrarRetiro").hide(1000); $("#divMostrarRetiro").hide("slow");
        $("#txtClavePago").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarPago").load("./php/mostrarPago.php");
    });
    // Acción al dar click en el menú Agregar RETIRO estando en MostrarRetiro:
    $("#menuAgregarRetiro").click(function(event){
        $("#divMostrarRetiro").hide("slow");
        $("#divAgregarRetiro").show(1000);
        $("#divMostrarRetiro").hide(1000); $("#divMostrarRetiro").hide("slow");
        $("#txtClaveRetiro").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarRetiro").load("./php/mostrarRetiro.php");
    });
    // Acción al dar click en el menú REPORTE estando en MostrarRetiro:
    $("#menuReporte").click(function(event){
        $("#divMostrarRetiro").hide("slow");
        $("#divReporte").show(1000);
        $("#divMostrarRetiro").hide(1000); $("#divMostrarRetiro").hide("slow");
        $("#txtClaveReporte").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarReporte").load("./php/mostrarReporte.php");
    });


    // REPORTE
    // Acción al dar click en el menú Reporte:
    $("#menuReporte").click(function(event){
        $("#divInicio").hide("slow");
        $("#divReporte").show(1000);
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        $("#txtClaveReporte").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarReporte").load("./php/mostrarReporte.php");
    });

    // Acción al dar click en el menú Agregar Beneficiario Estando en MostrarRetiro:
    $("#menuAgregarBeneficiario").click(function(event){
        $("#divReporte").hide("slow");
        $("#divAgregarBeneficiario").show(1000);
        $("#divReporte").hide(1000); $("#divReporte").hide("slow");
        $("#txtClaveBeneficiario").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarBeneficiario").load("./php/mostrarBeneficiario.php");
    });
    // Acción al dar click en el menú MostrarBeneficiario estando en MostrarRetiro:
    $("#menuMostrarBeneficiario").click(function(event){
        $("#divReporte").hide("slow");
        $("#divMostrarBeneficiario").show(1000);
        $("#divReporte").hide(1000); $("#divReporte").hide("slow");
        $("#txtClaveBeneficiario").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarBeneficiario").load("./php/mostrarBeneficiario.php");
    });
    // Acción al dar click en el menú REGISTRAR PAGO estando en MostrarRetiro:
    $("#menuRegistrarPago").click(function(event){
        $("#divReporte").hide("slow");
        $("#divRegistrarPago").show(1000);
        $("#divReporte").hide(1000); $("#divReporte").hide("slow");
        $("#txtClavePago").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarPago").load("./php/mostrarPago.php");
    });
    // Acción al dar click en el menú CONSULTAR PAGO estando en MostrarRetiro:
    $("#menuConsultarPago").click(function(event){
        $("#divReporte").hide("slow");
        $("#divConsultarPago").show(1000);
        $("#divReporte").hide(1000); $("#divReporte").hide("slow");
        $("#txtClavePago").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarPago").load("./php/mostrarPago.php");
    });
    // Acción al dar click en el menú Agregar RETIRO estando en MostrarRetiro:
    $("#menuAgregarRetiro").click(function(event){
        $("#divReporte").hide("slow");
        $("#divAgregarRetiro").show(1000);
        $("#divReporte").hide(1000); $("#divReporte").hide("slow");
        $("#txtClaveRetiro").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarRetiro").load("./php/mostrarRetiro.php");
    });
    // Acción al dar click en el menú REPORTE estando en MostrarRetiro:
    $("#menuMostrarRetiro").click(function(event){
        $("#divReporte").hide("slow");
        $("#divMostrarRetiro").show(1000);
        $("#divReporte").hide(1000); $("#divReporte").hide("slow");
        $("#txtClaveRetiro").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarRetiro").load("./php/mostrarRetiro.php");
    });















































    // BENEFICIARIO
    // evento del boton guardar beneficiario:
    $("#btnGuardarBeneficiario").click(function(event){
        // Declaración de variables a usar:
        var clave,NombreAlumno,Edad,Correo,Telefono,Usuario,Contraseña,ClaveAdmin,ClaveISEMYN,accion;
        // Se recoge los datos de los campos de texto:
        NoCuenta = $("#txtClaveBeneficiario").val();
        NombreAlumno = $("#txtNombreBeneficiario").val();
        Edad = $("#txtApBeneficiario").val();
        Correo = $("#txtAmBeneficiario").val();
        Telefono = $("#txtTelefonoBeneficiario").val();
        Usuario = $("#txtUserBeneficiario").val();
        Contraseña = $("#txtPasswordBeneficiario").val();
        ClaveAdmin = $("#txtEstadoBeneficiario").val();
        ClaveISEMYN = $("#txtClaveISEMYN").val();
        // Verificamos que acción texto tiene el botón:
        if ($("#btnGuardarBeneficiario").val() == "Guardar"){
            accion = "agregarBeneficiario";
        }
        if ($("#btnGuardarBeneficiario").val() == "Editar"){
            accion = "editarBeneficiario";
        }
        // Envíamos los datos al servidor (backend), es un archivo php:
            $.ajax({
                url: "./php/servidor.php",
                type: "GET",
                data: {accion: accion, NoCuenta: NoCuenta, NombreAlumno: NombreAlumno, Edad: Edad, Correo: Correo, Telefono: Telefono, Usuario: Usuario, Contraseña: Contraseña, ClaveAdmin: ClaveAdmin, ClaveISEMYN: ClaveISEMYN},    
                success: function(respuestaPHP){
                    // Se verifica la respuesta del servidor:
                    if (respuestaPHP == "1"){
                        alertify.success("Acción " + accion + " ejecutando correctamente");
                        limpiarCamposBeneficiario();
                        $("#mostrarBeneficiario").load("./php/mostrarBeneficiario.php");
                    } 
                    else
                    {
                        alertify.error("No se registro correctamente");
                    }
                }
            });
    });
    // PAGO
    // evento del boton guardar PAGO:
    $("#btnGuardarPago").click(function(event){
        // Declaración de variables a usar:
        var clave1, NombreAse, Edad, Correo, Telefono, Usuario, Contraseña, Especialidad, ClaveAdmin, accion1;
        // Se recoge los datos de los campos de texto:
        ClaveISEMYN = $("#txtClavePago").val();
        NombreAse = $("#txtNombreBeneficiario2").val();
        Edad = $("#txtApBeneficiario2").val();
        Correo = $("#txtAmBeneficiario2").val();
        Telefono = $("#txtTelefonoBeneficiario2").val();
        Usuario = $("#txtUserBeneficiario2").val();
        Contraseña = $("#txtPasswordBeneficiario2").val();
        Especialidad = $("#txtEstadoBeneficiario2").val();
        ClaveAdmin = $("#txtClaveISEMYN2").val();
        // Verificamos que acción texto tiene el botón:
        if ($("#btnGuardarPago").val() == "Guardar"){
            accion1 = "agregarPago";
        }
        if ($("#btnGuardarPago").val() == "Editar"){
            accion1 = "editarPago";
        }
        // Envíamos los datos al servidor (backend), es un archivo php:
            $.ajax({
                url: "./php/servidor.php",
                type: "GET",
                data: {accion1: accion1, ClaveISEMYN:ClaveISEMYN, NombreAse:NombreAse, Edad:Edad, Correo:Correo,
                    Telefono:Telefono, Usuario:Usuario, Contraseña:Contraseña, Especialidad:Especialidad, ClaveAdmin:ClaveAdmin},
                success: function(respuestaPHP){
                    // Se verifica la respuesta del servidor:
                    if (respuestaPHP == "1"){
                        alertify.success("Acción " + accion1 + " ejecutando correctamente");
                        limpiarCamposPago();
                        $("#mostrarPago").load("./php/mostrarPago.php");
                    } 
                    else
                    {
                        alertify.error("No se registro correctamente");
                    }
                }
            });
    });


    
    // RETIRO
    // evento del boton guardar RETIRO:
    $("#btnGuardarRetiro").click(function(event){
        // Declaración de variables a usar:
        var clave2, NombreProy, Tipo, Fecha, NoCuenta, accion2;
        // Se recoge los datos de los campos de texto:
        IdTrabajo = $("#txtClavePago3").val();
        NombreProy = $("#txtNombreBeneficiario3").val();
        Tipo = $("#txtApBeneficiario3").val();
        Fecha = $("#txtAmBeneficiario3").val();
        NoCuenta = $("#txtTelefonoBeneficiario3").val();
        // Verificamos que acción texto tiene el botón:
        if ($("#btnGuardarRetiro").val() == "Guardar"){
            accion2 = "agregarRetiro";
        }
        if ($("#btnGuardarRetiro").val() == "Editar"){
            accion2 = "editarRetiro";
        }
        // Envíamos los datos al servidor (backend), es un archivo php:
            $.ajax({
                url: "./php/servidor.php",
                type: "GET",
                data: {accion2: accion2, IdTrabajo: IdTrabajo,
                    NombreProy: NombreProy, Tipo: Tipo, Fecha: Fecha, NoCuenta: NoCuenta},
                success: function(respuestaPHP){
                    // Se verifica la respuesta del servidor:
                    if (respuestaPHP == "1"){
                        alertify.success("Acción " + accion2 + " ejecutando correctamente");
                        limpiarCamposRetiro();
                        $("#mostrarRetiro").load("./php/mostrarRetiro.php");
                    } 
                    else
                    {
                        alertify.error("No se registro correctamente");
                    }
                }
            });
    });
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    // BENEFICIARIO
    // LIMPIAR CAMPOS BENEFICIARIOS
    function limpiarCamposBeneficiario(){
        $("#txtClaveBeneficiario").val("");
        $("#txtNombreBeneficiario").val("");
        $("#txtApBeneficiario").val("");
        $("#txtAmBeneficiario").val("");
        $("#txtTelefonoBeneficiario").val("");
        $("#txtUserBeneficiario").val("");
        $("#txtPasswordBeneficiario").val("");
        $("#txtEstadoBeneficiario").val("");
        $("#txtClaveISEMYN").val("");
        $("#txtClaveBeneficiario").focus();
        $("#btnGuardarBeneficiario").removeClass();
        $('#btnGuardarBeneficiario').addClass("btn btn-primary");
        $('#btnGuardarBeneficiario').val("Guardar");
        $("#btnGuardarBeneficiario").html("<i class = 'fas fa-cog fa-spin'></i>Guardar");
        $('#txtClaveBeneficiario').prop('readonly', false);
    }

    $('#sidebarCollapse').click(function(event){
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded = true]').attr('aria-expanded', 'false');
    });
    // PAGO
    // LIMPIAR CAMPOS PAGO
    function limpiarCamposPago(){
        $("#txtClavePago").val("");
        $("#txtNombreBeneficiario2").val("");
        $("#txtApBeneficiario2").val("");
        $("#txtAmBeneficiario2").val("");
        $("#txtTelefonoBeneficiario2").val("");
        $("#txtUserBeneficiario2").val("");
        $("#txtPasswordBeneficiario2").val("");
        $("#txtEstadoBeneficiario2").val("");
        $("#txtClaveISEMYN2").val("");
        $("#txtClavePago").focus();
        $("#btnGuardarPago").removeClass();
        $('#btnGuardarPago').addClass("btn btn-primary");
        $('#btnGuardarPago').val("Guardar");
        $("#btnGuardarPago").html("<i class = 'fas fa-cog fa-spin'></i>Guardar");
        $('#txtClavePago').prop('readonly', false);
    }

    $('#sidebarCollapse').click(function(event){
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded = true]').attr('aria-expanded', 'false');
    });
    // RETIRO
    // LIMPIAR CAMPOS RETIRO
    function limpiarCamposRetiro(){
        $("#txtClavePago3").val("");
        $("#txtNombreBeneficiario3").val("");
        $("#txtApBeneficiario3").val("");
        $("#txtAmBeneficiario3").val("");
        $("#txtTelefonoBeneficiario3").val("");
        $("#txtClavePago3").focus();
        $("#btnGuardarRetiro").removeClass();
        $('#btnGuardarRetiro').addClass("btn btn-primary");
        $('#btnGuardarRetiro').val("Guardar");
        $("#btnGuardarRetiro").html("<i class = 'fas fa-cog fa-spin'></i>Guardar");
        $('#txtClaveRetiro').prop('readonly', false);
    }

    $('#sidebarCollapse').click(function(event){
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded = true]').attr('aria-expanded', 'false');
    });
});





















// BENEFICIARIO
//agregamos las funciones para editar un beneficiario
function editarBeneficiario (id, clave, NombreAlumno, Edad, Correo, Telefono, Usuario , Contraseña, ClaveAdmin, ClaveISEMYN){
    $("#txtClaveBeneficiario").val(clave);
    $("#txtClaveBeneficiario").attr("readonly","true");
    $("#txtNombreBeneficiario").val(NombreAlumno);
    $("#txtApBeneficiario").val(Edad);
    $("#txtAmBeneficiario").val(Correo);
    $("#txtTelefonoBeneficiario").val(Telefono);
    $("#txtUserBeneficiario").val(Usuario);
    $("#txtPasswordBeneficiario").val(Contraseña);
    $("#txtEstadoBeneficiario").val(ClaveAdmin);
    $("#txtClaveISEMYN").val(ClaveISEMYN);
    $("#btnGuardarBeneficiario").removeClass();
    $('#btnGuardarBeneficiario').addClass("btn btn-primary");
    $('#btnGuardarBeneficiario').val("Editar");
    $("#btnGuardarBeneficiario").html("<i class = 'fas fa-user-edit'></i>Actualizar");
}
// PAGO
//agregamos las funciones para editar un PAGO
function editarPago ( idPago, clave1, cantidad, mes){
    $("#txtClavePago").val(clave1);
    $("#txtClavePago").attr("readonly","true");
    $("#txtCantidadPago").val(cantidad);
    $("#txtMesPago").val(mes);
    $("#btnGuardarPago").removeClass();
    $('#btnGuardarPago').addClass("btn btn-primary");
    $('#btnGuardarPago').val("Editar");
    $("#btnGuardarPago").html("<i class = 'fas fa-user-edit'></i>Actualizar");
}
// RETIRO
//agregamos las funciones para editar un RETIRO
function editarRetiro ( idRetiro, clave2, motivo, cantidad, fecha){
    $("#txtClaveRetiro").val(clave2);
    $("#txtClaveRetiro").attr("readonly","true");
    $("#txtMotivoRetiro").val(motivo);
    $("#txtCantidadRetiro").val(cantidad);
    $("#txtFechaRetiro").val(fecha);
    $("#btnGuardarRetiro").removeClass();
    $('#btnGuardarRetiro').addClass("btn btn-primary");
    $('#btnGuardarRetiro').val("Editar");
    $("#btnGuardarRetiro").html("<i class = 'fas fa-user-edit'></i>Actualizar");
}



























// BENEFICIARIO
//agregamos las funciones para eliminar a un beneficiario
function eliminarBeneficiario(id){
    alertify.confirm("¿Desea eliminar al alumno con id "+id+"?",function(respuesta){
        if(respuesta)
        {
            accion="eliminarBeneficiario";
            $.ajax({
                url:"./php/servidor.php",
                type:"GET",
                data:{accion:accion,id:id},
                success:function(respuestaPHP){
                    //se verifica la respuesta del servidor
                    if(respuestaPHP=="1"){
                        alertify.success("Alumno eliminado exitosamente");
                        $("#mostrarBeneficiario").hide();
                        $("#mostrarBeneficiario").load("./php/mostrarBeneficiario.php");
                        $("#mostrarBeneficiario").show(100);
                    }
                    else
                    {
                        alertify.error("No se registro correctamente");
                    }
                }
        });

        }
    });
}
// PAGO
function eliminarPago(idAse){
    alertify.confirm("¿Desea eliminar el asesor con id "+idAse+"?",function(respuesta){
    if(respuesta)
    {
        accion1="eliminarPago";
        $.ajax({
            url:"./php/servidor.php",
            type:"GET",
            data:{accion1:accion1,idAse:idAse},
                success:function(respuestaPHP){
                    //se verifica la respuesta del servidor
                    if(respuestaPHP=="1"){
                        alertify.success("Asesor eliminado exitosamente");
                        $("#mostrarPago").hide();
                        $("#mostrarPago").load("./php/mostrarPago.php");
                        $("#mostrarPago").show(100);
                    }
                    else
                    {
                        alertify.error("No se registro correctamente");
                    }
                }
            });

    }
});
}

// RETIRO
//agregamos las funciones para eliminar a un RETIRO
function eliminarRetiro(IdTrabajo){
    alertify.confirm("¿Desea eliminar el trabajo con IdTrabajo "+IdTrabajo+"?",function(respuesta){
        if(respuesta)
        {
            accion2="eliminarRetiro";
            $.ajax({
                url:"./php/servidor.php",
                type:"GET",
                data:{accion2:accion2,IdTrabajo: IdTrabajo},
                success:function(respuestaPHP){
                    //se verifica la respuesta del servidor
                    if(respuestaPHP=="1"){
                        alertify.success("Trabajo eliminado exitosamente");
                        $("#mostrarRetiro").hide();
                        $("#mostrarRetiro").load("./php/mostrarRetiro.php");
                        $("#mostrarRetiro").show(100);
                    }
                    else
                    {
                        alertify.error("No se registro correctamente");
                    }
                }
            });

    }
});

}