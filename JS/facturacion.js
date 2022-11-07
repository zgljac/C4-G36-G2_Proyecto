//PRUEBAS FACTURA
const formDetalle = document.getElementById("formDetalle");
const cantidadCuotas = document.getElementById("cantidadCuotas");
const Selectobservaciones = document.getElementById("Selectobservaciones");
const valAnterior = document.getElementById("valAnterior");
const valMes = document.getElementById("valMes");
const valTotal = document.getElementById("valTotal");
const cuerpoTabla = document.getElementById("cuerpoTabla");

let arregloDetalleFact = [];

const agregaTabla = () => {
    cuerpoTabla.innerHTML = "";
	arregloDetalleFact.forEach((detalle) => {
		let fila = document.createElement("tr")
		fila.innerHTML = `	<td>${detalle.cantidadCuotas}</td>
							<td>${detalle.Selectobservaciones}</td>
							<td>${detalle.valAnterior}</td>
							<td>${detalle.valMes}</td>
							<td>${detalle.valTotal}</td>`;
		let tdEliminar = document.createElement("td");
		let btnELiminar = document.createElement("button");
		btnELiminar.classList.add("btn","btn-danger");
		btnELiminar.innerText = "Eliminar";
		tdEliminar.appendChild(btnELiminar);
		fila.appendChild(tdEliminar);
		cuerpoTabla.appendChild(fila);
	});
};

formDetalle.onsubmit = (e) => {
	e.preventDefault();
	// SE CREA UN OBJETO DEL DETALLE DE FACTURA
	const objDetalleFact = {
		cantidadCuotas : cantidadCuotas.value,
		Selectobservaciones : Selectobservaciones.value,
		valAnterior : valAnterior.value,
		valMes : valMes.value,
		valTotal : valTotal.value,
	};
    console.log(objDetalleFact);
	arregloDetalleFact.push(objDetalleFact);
    agregaTabla();
}