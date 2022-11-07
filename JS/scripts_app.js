// FUNCION LOGIN
function Ingresar ()
{
// alert("Hola esta funcionando")
var datos = {"usuario" : document.getElementById("usuario").value,
                    "contrasena" : $("#contrasena").val()
}
$.ajax({
        type: "post",
        url: "http://localhost:3000/login",
        data : datos,
        dataType: "json",
        success: function (data) {
            if (data.existe == 1)
            {
                location.href = 'VISTAS/menu.html'
            }
            else
            {
                console.log("No existe en DB")
                alert ('Usuario o contrasena incorrectas');
            }
        }
});
}
