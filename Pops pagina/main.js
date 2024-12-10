function login(){
    var usu, contra;

    usu = document.getElementById("Usuario").value;
    contra = document.getElementById("Contraseña").value;

    if (usu == "Pao" && contra == "2508"){

        window.location = "Index.html";
    }
    if (usu == "Rosa" && contra == "0303"){

        window.location = "Index.html";
    }
}