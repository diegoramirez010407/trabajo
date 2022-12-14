$(document).ready(function(){
    
    $('#login').click(function(){
        var user,password; 
  
        user=$("#user").val(); //validamos variables
        password=$("#contrasena").val(); 
        //alertify.error("Elejistes cancela"+user+" "+pass);
        if($.trim(user).length > 0 && $.trim(password).length > 0){
            $.ajax({
            url:"php/login_usuario.php",
            method:"POST",
            data:{user:user, password:password},
            cache:"false",
            beforeSend:function(){
                $('#login').val("Conectando..");
            },
            success:function(data){
                $('#login').val("Login");
                //alertify.error(""+data);
                if(data==1){        
                $(location).attr('href','beneficiario.php');
                }
  
                else if(data==2){        
                  $(location).attr('href','bienvenida.php');
                  }
  
                else{
               
                //$("#result").html("<div class='alert alert-dismissible alert-dancer'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Error!</strong> las credenciales son incorrectas.</div>");
                alertify.error("¡Error! Las credenciales son incorrectas.");
      
              }
            }
            });
        };
    });
  
  });
  