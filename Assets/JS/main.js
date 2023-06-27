//Ver HTML y CSS en vídeo

class Gasto {
  constructor(id, nombre, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.cantidad = cantidad;
  }
}

function nuevoGasto(gastos) {
  const tr = document.createElement("tr");
  const tbody = document.getElementById("tbody");

  tr.id = `elemento${gastos.id}`;
  tr.innerHTML = `<tr id="elemento${gastos.id}">
    <td>${gastos.nombre}</td>
    <td>${gastos.cantidad}</td>
    <td>
        <a href="#" class="delete-icon" onclick="borrarGastos(${gastos.id},${gastos.cantidad})">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg></a>
    </td>
    </tr>`;
  tbody.appendChild(tr);
}

//Llamar a los inputs con queryselector
//parse int

let presupuesto = 0;
function inputPresupuesto() {
  const button = document.getElementById("enviarPresupuesto");
  presupuesto = document.getElementById("presupuestoInput").value;
  if (presupuesto == null || parseInt(presupuesto) < 0 || presupuesto == "") {
    alert("Es necesario ingresar un presupuesto valido!!!");
  } else {
    document.getElementById("cantidadPresupuesto").innerHTML = presupuesto;
    document.getElementById("presupuestoInput").value = "";
    button.disabled = true;
  }
}

let = sumaGastos = 0;
let gastos = [];
let balance = 0;
function inputGasto() {
  let titulo = document.getElementById("gastoInput").value;
  let cantidad = document.getElementById("cantidadInput").value;
  if (
    (cantidad == null || parseInt(cantidad) < 0 || cantidad == "") &&
    (titulo == null || titulo == "")
  ) {
    alert("Es necesario ingresar un Gasto valido!!!");
  } else {
    let gasto = new Gasto(
      Math.floor(Math.random() * 100 + 1),
      titulo,
      cantidad
    );
    sumaGastos = sumaGastos + parseInt(gasto.cantidad);
    if (sumaGastos > parseInt(presupuesto)) {
      alert("Se te acabo el dinerito ;c");
      sumaGastos = sumaGastos - parseInt(gasto.cantidad);
    } else {
      document.getElementById("cantidadGasto").innerHTML = sumaGastos;
      gastos.push(gasto);
      balance = parseInt(presupuesto) - sumaGastos;
      document.getElementById("cantidadBalance").innerHTML = balance;
      nuevoGasto(gasto);
      document.getElementById("gastoInput").value = "";
      document.getElementById("cantidadInput").value = "";
    }
  }
}

function borrarGastos(id, cantidad) {
  console.log(id);
  console.log(cantidad);

  for (let i = 0; i < gastos.length; i++) {
    if (id === gastos[i].id) {
      let paraBorrar = document.getElementById("elemento" + id);
      paraBorrar.remove();
      gastos.splice(i, 1); // [i, , n] toma la posición y la borra de a uno.
    }
  }

  sumaGastos = sumaGastos - parseInt(cantidad);
  console.log("suma gastos --->" + sumaGastos);
  document.getElementById("cantidadGasto").innerHTML = sumaGastos;
  balance = parseInt(presupuesto) - sumaGastos;
  document.getElementById("cantidadBalance").innerHTML = balance;
}
