// FUNCION PARA CONSULTAR UN PROPIETARIO
function ConsultaPropietarios ()
{
var datos = {"Numero_Identificacion" : document.getElementById("Numero_Identificacion").value,
}
console.log(datos)

$.ajax({
        type: "post",
        url: "http://localhost:3000/Consultar_Propietarios",
        data : datos,
        dataType: "json",
        success: function (data) {
            if (data.result.length > 0)
            {
                let propietario = ""
                let cant = 0

                for (i = 0; i < data.result.length; i++)
                {
                    $('#gm').remove();
                }
                for (i = 0; i < data.result.length; i++)
                {
                    cant = cant + 1
                    propietario = cant +' '+'Primer_Nombre:'+' '+data.result[i].Primer_Nombre+' '+data.result[i].Segundo_Nombre+' '+data.result[i].Primer_Apellido+' '+data.result[i].Segundo_Apellido+' '+data.result[i].correo+' '+data.result[i].Telefono+' '+data.result[i].Direccion_Contacto+'\n'
                    $('#propietario').append('<p id="gm">'+propietario+'</p>')
                }
            }
            else
            {
                console.log("No existe en DB")
                alert ('El propietario no existe');
            }
        }
});
}

// FUNCION PARA CONSULTAR UN PROPIETARIO  --> no funciona ko
function ListarUsers(){

    var datos={}    

$.ajax({
    type:"post",
    url:"http://localhost:3000/MostrarPropietario",
    data:datos,
    dataType:"json",
    success:function(data){
            if(data.result.length>0)
            { 
                let user=""
                let cant=0

                for(i=0;i<data.result.length;i++)
                {
                   $('#gm').remove()
                }
                  for(i=0;i<    data.result.length;i++)
                {             
                    cant=cant+1                       
                    user=cant +' '+'Numero_Identificacion:'+' '+data.result[i].Numero_Identificacion+' '+ data.result[i].Primer_Nombre+' '+data.result[i].Segundo_Nombre+' '+data.result[i].Primer_Apellido+' '+ data.result[i].Segundo_Apellido+' '+data.result[i].correo+' '+data.result[i].Telefono+' '+data.result[i].Direccion_Contacto+'\n'
                    $('#user').append('<p id="gm">'+user+'</p>')                                  
                }   
            }
            else
            {console.log('No hay registros de Usuarios')

                alert('No hay registros de Usuarios')
            }
    }
})
}

// FUNCION PARA REGISTRAR UN PROPIETARIO  --> funciona ok
function insertar()
{
    var datos={
        "Numero_Identificacion":document.getElementById("Numero_Identificacion").value,
        "Primer_Nombre":document.getElementById("Primer_Nombre").value,
        "Segundo_Nombre":document.getElementById("Segundo_Nombre").value,
        "Primer_Apellido":document.getElementById("Primer_Apellido").value,
        "Segundo_Apellido":document.getElementById("Segundo_Apellido").value,
        "correo":document.getElementById("correo").value,
        "Telefono":document.getElementById("Telefono").value,
        "Direccion_Contacto":document.getElementById("Direccion_Contacto").value
    }
console.log(datos)
$.ajax({
    type:"post",
    url:"http://localhost:3000/insertar_User",
    data:datos,
    dataType:"json",
    success:function(data){
        if (data.save == 1)
        {
            console.log('Propietario Almacenado - OK')
            alert('El Propietario fue almacenado Satisfactoriamente')
            location.href='../VISTAS/propietarios.html'
        }
        else
        {
            console.log('Fatal Error - Propietario NO almacenado')
            alert('Fatal Error - Propietario NO Almacenado')
        }
    }
})
}

// FUNCION PARA ACTUALIZAR UN PROPIETARIO
function Actualizar(){

    var datos={
        "Numero_Identificacion":document.getElementById("Numero_Identificacion").value,
        "Primer_Nombre":document.getElementById("Primer_Nombre").value,
        "Segundo_Nombre":document.getElementById("Segundo_Nombre").value,
        "Primer_Apellido":document.getElementById("Primer_Apellido").value,
        "Segundo_Apellido":document.getElementById("Segundo_Apellido").value,
        "correo":document.getElementById("correo").value,
        "Telefono":document.getElementById("Telefono").value,
        "Direccion_Contacto":document.getElementById("Direccion_Contacto").value



    }
    console.log(datos)
    $.ajax({
        type:"post",
        url:"http://localhost:3000/update",
        data:datos,
        dataType:"json",
        success:function(data){
            if(data.save==1)
            {
                console.log('Usuario Actualizado Satisfactoriamente')
                alert('Usuario Actualizado Satisfactoriamente')
                location.href='../VISTAS/propietarios.html' //pagina donde será redireccionado tras actualizar o la función que tenga programado

            }
            else
            {
                console.log('Error')
                alert('Error - Usuario No Actualizado Registrado')

            }


        }

    })
}

// FUNCION PARA ELIMINAR UN PROPIETARIO  ---> funciona ok
function Eliminar(){

    var datos={
        "Numero_Identificacion":document.getElementById("Numero_Identificacion").value,     
    }

    console.log(datos)
$.ajax({
    type:"post",
    url:"http://localhost:3000/delete_propietarios",
    data:datos,
    dataType:"json",
    success:function(data){
        if(data.eliminado==1)
        {
            console.log('Usuario Eliminado Satisfactoriamente')
            alert('Usuario Eliminado Satisfactoriamente')
            location.href='../VISTAS/propietarios.html'

        }
        else
        {
            console.log('Error')
            alert('Error - Usuario No Eliminado')

        }


    }

})

}


function iratras(){

location.href='../VISTAS/menu.html'

}



//para buscar por id de propietario ---> funciona hasta el back pero no se muestra en el front

function UserById(){

    var datos={

        "Numero_Identificacion":document.getElementById("Numero_Identificacion").value,


    }
    
console.log(datos)

$.ajax({
    type:"post",
    url:"http://localhost:3000/showuser",
    data:datos,
    dataType:"json",
    success:function(data){
    
            if(data.result.length>0)
            { 

                let user=""
                let cant=0

                for(i=0;i<data.result.length;i++)
                {

                     $('#gm').remove();

                }

                for (i=0;i<data.result.length;i++)
                {
                    cant=cant+1         
                    user= cant+' '+data.result[i].Numero_Identificacion+' '+data.result[i].Primer_Nombre+' '+ data.result[i].Segundo_Nombre+' '+data.result[i].Primer_Apellido+' '+data.result[i].Segundo_Apellido+' '+data.result[i].correo+' '+data.result[i].Telefono+' '+data.result[i].Direccion_Contacto+'\n'
                    
                     //$('#user').append('<p id="gm">'+user+'</p>') //esta etiqueta se usa para mostrar por por medio de etiqueta

                      //con este código de más abajo se agregan los datos de la base de datos en los campos de la tabla propietarios

                     document.getElementById("Numero_Identificacion").value = data.result[i].Numero_Identificacion
                     document.getElementById("Primer_Nombre").value = data.result[i].Primer_Nombre
                     document.getElementById("Segundo_Nombre").value = data.result[i].Segundo_Nombre
                     document.getElementById("Primer_Apellido").value = data.result[i].Primer_Apellido
                     document.getElementById("Segundo_Apellido").value = data.result[i].Segundo_Apellido
                     document.getElementById("correo").value = data.result[i].correo
                     document.getElementById("Telefono").value = data.result[i].Telefono
                     document.getElementById("Direccion_Contacto").value = data.result[i].Direccion_Contacto






                }
            
                     
           console.log("todo hasta aqui")
 
            }
            else
            {console.log('No hay registros de usuario')

                alert('No hay registros de usuario')
            }


    }

})

}