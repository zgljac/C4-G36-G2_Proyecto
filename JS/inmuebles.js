// FUNCION PARA CONSULTAR UN INMUEBLE
function Consultainmueble ()
{
var datos = {"id_inmueble" : document.getElementById("id_inmueble").value,
}
console.log(datos)

$.ajax({
        type: "post",
        url: "http://localhost:3000/Consultar_inmuebles",
        data : datos,
        dataType: "json",
        success: function (data) {
            if (data.result.length > 0)
            {
                let inmuebles = ""
                let cant = 0

                for (i = 0; i < data.result.length; i++)
                {

                    $('#gm').remove();
                }
                for (i = 0; i < data.result.length; i++)
                {
                    cant = cant + 1
                    inmuebles = cant +' '+'direccion:'+' '+data.result[i].direccion+' '+data.result[i].numero_identificacion+' '+data.result[i].numero_identificacion+' '+data.result[i].id_tarifa+' '+data.result[i].id_tarifa+'\n'
                    $('#inmuebles').append('<p id="gm">'+inmuebles+'</p>')
                }
            }
            else
            {
                console.log("No existe en DB")
                alert ('El inmueble no existe');
            }
        }
});
}

// FUNCION PARA CONSULTAR UN INMUEBLE 
function ListarUsers(){

	var datos={}	

$.ajax({
	type:"post",
	url:"http://localhost:3003/MostrarUsuarios",
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
                  for(i=0;i<	data.result.length;i++)
                {             
                    cant=cant+1                       
                    user=cant +' '+'Nombre:'+' '+data.result[i].Nombre+' '+ data.result[i].Correo+' '+data.result[i].UserName+ " "+data.result[i].Id+'\n'
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

// FUNCION PARA REGISTRAR UN INMUEBLE
function Agregar_Inmueble()
{
	var datos={
        "id_inmueble":document.getElementById("id_inmueble").value,
        "direccion":document.getElementById("direccion").value,
		"numero_identificacion":document.getElementById("numero_identificacion").value,
        "id_tarifa":document.getElementById("id_tarifa").value
	}
console.log(datos)
$.ajax({
	type:"post",
	url:"http://localhost:3000/Agregar_Inmueble",
	data:datos,
	dataType:"json",
	success:function(data){
		if (data.save == 1)
		{
			console.log('Inmueble agregado - OK')
			alert('El Inmueble fue agregado Satisfactoriamente')
			location.href='../VISTAS/Inmuebles.html'
		}
		else
		{
			console.log('Fatal Error - Inmueble NO almacenado')
			alert('Fatal Error - Inmueble NO Almacenado')
		}
	}
})
}

// FUNCION PARA ACTUALIZAR UN INMUEBLE 
function Actualizar_Inmueble(){
	var datos={
        "id_inmueble":document.getElementById("id_inmueble").value,
        "direccion":document.getElementById("direccion").value,
		"numero_identificacion":document.getElementById("numero_identificacion").value,
        "id_tarifa":document.getElementById("id_tarifa").value
	}
	console.log(datos)
	$.ajax({
		type:"post",
		url:"http://localhost:3000/update",
		data:datos,
		dataType:"json",
		success:function(data){
		if(data.save == 1)
		{
			console.log('Inmueble Actualizado Satisfactoriamente')
			alert('Inmueble Actualizado Satisfactoriamente')
			location.href='../VISTAS/menu.html'
		}
		else
		{
			console.log('Error - Inmueble NO Actualizado')
			alert('Error - Inmueble NO Actualizado')
		}
	}
})
}

// FUNCION PARA ELIMINAR UN INMUEBLE 

function Eliminar_Inmueble(){

	var datos={
		"id_inmueble":document.getElementById("id_inmueble").value,		
	}

	console.log(datos)
$.ajax({
	type:"post",
	url:"http://localhost:3003/delete_inmuebles",
	data:datos,
	dataType:"json",
	success:function(data){
		if(data.eliminado==1)
		{
			console.log('Inmueble Eliminado Satisfactoriamente')
			alert('Inmueble Eliminado Satisfactoriamente')
			location.href='../VISTAS/inmuebles.html'
		}
		else
		{
			console.log('Error')
			alert('Error - Inmueble No Eliminado')
		}
	}
})
}
