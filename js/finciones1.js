$(document).ready(function(){
    // Regresar al menú donde esta la imagen y ocultando el formulario y la tabla del beneficiario:
    $("#menuInicio").click(function(event){
        $("#divAgregarRegistro").hide(1000);
        $("#divInicio").show(1000);
    });
    // Acción al dar click en el menú Agregar Beneficiario:
    $("#menuAgregarRegistro").click(function(event){
        $("#divInicio").hide("slow");
        $("#divAgregarRegistro").show(1000);
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        $("#txtClaveBeneficiario").focus();
        // Cargamos los datos de la tabla beneficiario en el div:
        $("#mostrarBeneficiario").load("./php/mostrarBeneficiario.php");
    });
    
    // evento del boton guardar beneficiario:
    $("#btnGuardarregistro").click(function(event){
        // Declaración de variables a usar:
        var clave,nombre,ap,am,user,password,telefono,estado,accion;
        // Se recoge los datos de los campos de texto:
        claveBeneficiario = $("#txtClaveBeneficiario").val();
        nombre = $("#txtNombreBeneficiario").val();
        ap = $("#txtApBeneficiario").val();
        am = $("#txtAmBeneficiario").val();
        user = $("#txtUserBeneficiario").val();
        password = $("#txtPasswordBeneficiario").val();
        telefono = $("#txtTelefonoBeneficiario").val();
        estado = $("#txtEstadoBeneficiario").val();
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
                data: {accion: accion, claveBeneficiario: claveBeneficiario,
                nombre: nombre, ap: ap, am: am, user: user, password: password, telefono: telefono, estado:estado},
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

    function limpiarCamposBeneficiario(){
        $("#txtClaveBeneficiario").val("");
        $("#txtNombreBeneficiario").val("");
        $("#txtApBeneficiario").val("");
        $("#txtAmBeneficiario").val("");
        $("#txtUserBeneficiario").val("");
        $("#txtPasswordBeneficiario").val("");
        $("#txtTelefonoBeneficiario").val("");
        $("#txtEstadoBeneficiario").val("");
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
});
//agregamos las funciones para editar un beneficiario
function editarBeneficiario ( id, clave, nombre, ap, am, user, password, telefono, estado){
    $("#txtClaveBeneficiario").val(clave);
    $("#txtClaveBeneficiario").attr("readonly","true");
    $("#txtNombreBeneficiario").val(nombre);
    $("#txtApBeneficiario").val(ap);
    $("#txtAmBeneficiario").val(am);
    $("#txtUserBeneficiario").val(user);
    $("#txtPasswordBeneficiario").val(password);
    $("#txtTelefonoBeneficiario").val(telefono);
    $("#txtEstadoBeneficiario").val(estado);
    $("#btnGuardarBeneficiario").removeClass();
    $('#btnGuardarBeneficiario').addClass("btn btn-primary");
    $('#btnGuardarBeneficiario').val("Editar");
    $("#btnGuardarBeneficiario").html("<i class = 'fas fa-user-edit'></i>Actualizar");
}
//agregamos las funciones para eliminar a un beneficiario
function eliminarBeneficiario(id){
    alertify.confirm("¿Desea eliminar el beneficiario con id "+id+"?",function(respuesta){
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
                        alertify.success("Beneficiario eliminado exitosamente");
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