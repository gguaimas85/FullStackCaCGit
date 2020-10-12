function ingreso(){
    let usuario=document.getElementById("usuario").value;
    let clave=document.getElementById("clave").value;

    if(usuario=="" || clave==""){
        alert("Ingreso denegado, hay campos vacios");
    }else{

        let arroba="@";
        let posicion = usuario.indexOf(arroba);

        if(posicion !== -1){
            alert("Bienvenido "+usuario);
        }else{
            alert("Falta el arroba en el usuario");
        }
    }
}
