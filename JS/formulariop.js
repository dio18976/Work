function validarFormulario(){
 
    var txtNombre = document.getElementById('nombre').value;
    var txtEdad = document.getElementById('edad').value;
    var txtCorreo = document.getElementById('correo').value;
    var txtFecha = document.getElementById('fecha').value;
 
    var banderaRBTN = false;
 
    //Test campo obligatorio
    if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
      alert('El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
      return false;
    }
 
    //Test edad
    if(txtEdad == null || txtEdad.length == 0 || isNaN(txtEdad)){
      alert('Debe ingresar una edad');
      return false;
    }
 
    //Test correo
    if(!(/\S+@\S+\.\S+/.test(txtCorreo))){
      alert('Debe escribir un correo válido');
      return false;
    }
 
    //Test fecha
    if(!isNaN(txtFecha)){
      alert('Debe elegir una fecha');
      return false;
    }

    for(var i = 0; i < rbtEstado.length; i++){
      if(rbtEstado[i].checked){
        banderaRBTN = true;
        break;
      }
    }
    
    
 
    return true;
  }
