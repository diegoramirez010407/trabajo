
$(document).ready(function(){
    
    $('#btnlogin').click(function(){
      
        var user,password, estado; 

        user=$("#user").val(); //validamos variables
        password=$("#contrasena").val(); 
        //alert(user+password);
        //estado=$("#estado").val(); 
        //alertify.error("Elejistes cancela"+user+" "+pass);
        if($.trim(user).length > 0 && $.trim(password).length > 0){
          //alert("entro al if");
            $.ajax({
            url:"login_usuario.php",
            method:"POST",
            data:{user:user, password:password},
            cache:"false",
            beforeSend:function(){
                $('#btnlogin').val("Conectando..");
            },
            success:function(data){
                //$('#btnlogin').val("Login");
                alertify.error(""+data);
               if(data==1){        
                $(location).attr('href','administrador/index.php');
                }
  
                else if(data==2){        
                  $(location).attr('href','beneficiario/index.php');
                  }
  
                else{
               
                //$("#result").html("<div class='alert alert-dismissible alert-dancer'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Error!</strong> las credenciales son incorrectas.</div>");
                alertify.error("¡Error! Las credenciales son incorrectas.");
      
              }
            }
            });
        }
        
    });
  
  });