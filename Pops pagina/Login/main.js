function login(){
    var usu, contra;

    usu = document.getElementById("Usuario").value;
    contra = document.getElementById("Contraseña").value;

    if (usu == "Pao" && contra == "250820"){

        window.location = "pagina.html";
    }
}