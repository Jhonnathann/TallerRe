class Empleado {

    constructor(nombre, apellido, sexo, fechaNac, fechaIngreso, salario) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.sexo = sexo;
      this.fechaNac = new Date(fechaNac);
      this.fechaIngreso = new Date(fechaIngreso);
      this.salario = salario;
    }

    darNombre(){
        return this.nombre;
    }

    darApellido(){
        return this.apellido;
    }

    darSexo(){
        return this.sexo;
    }

    darfechaNac(){
        return this.fechaNac;
    }

    darfechaIngreso(){
        return this.fechaIngreso;
    }

    darSalario(){
        return this.salario;
    }


    //Metodos para la seccion Calculos
    calcularEdad() {
        //Obtiene el elemento del input mediante su id que es "Fecha_Nacimiento"
        var inputFechaNacimiento = document.getElementById("Fecha_Nacimiento");

        // Obtiene el contenido del input utilizando la propiedad value
        var fechaNacimiento = new Date(inputFechaNacimiento.value);
    
        // Obtiene la fecha actual
        var fechaActual = new Date();
    
        // Calcula la diferencia en años entre las dos fechas
        var edadEmpleado = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    
        // Verifica si el mes actual es anterior al mes de nacimiento o si es el mismo mes pero el día actual es anterior al día de nacimiento
        if (fechaActual.getMonth() < fechaNacimiento.getMonth() || (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate())) {
            edadEmpleado--;
        }
        return edadEmpleado;
    }

    calcularAntiguedad(){
        // Obtiene el elemento de la fecha de ingreso mediante su id
        var inputFechaIngreso = document.getElementById("Fecha_Antiguedad");

        // Obtiene el valor de la fecha de ingreso
        var fechaIngreso = new Date(inputFechaIngreso.value);

        // Obtiene la fecha actual
        var fechaActual = new Date();

        // Calcula la diferencia en años entre las dos fechas
        var antiguedadEmpleado = fechaActual.getFullYear() - fechaIngreso.getFullYear();

        // Verifica si el mes actual es anterior al mes de ingreso o si es el mismo mes pero el día actual es anterior al día de ingreso
        if (fechaActual.getMonth() < fechaIngreso.getMonth() || (fechaActual.getMonth() === fechaIngreso.getMonth() && fechaActual.getDate() < fechaIngreso.getDate())) {
            antiguedadEmpleado--;
        }
        return antiguedadEmpleado;
    }

    calcularPrestaciones(){
        const antiguedad = this.calcularAntiguedad();
        const prestaciones = antiguedad * this.salario * 0.15;
        return prestaciones;
    }
}

//creamos un empleado
let E1 = new Empleado();

//---------------------------funciones para los botones---------------------------
function calcular_edad(){
    var edad_empleado = E1.calcularEdad();
    if(edad_empleado < 1){
		alert ('la edad no puede ser menor que 1');
    }else{
        //document.getElementById("edad").innerHTML = "->" + edadEmpleado;
        alert ('La edad es: '+ edad_empleado);
    }
}

function calcular_antiguedad(){
    var antiguedad_empleado = E1.calcularAntiguedad();
    if(antiguedad_empleado < 1){
		alert ('la antiguedad no puede ser menor que 1');
    }else{
        //document.getElementById("edad").innerHTML = "->" + edadEmpleado;
        alert ('La antiguedad del empleado es: '+ antiguedad_empleado+' años');
    }
}

function calcular_prestaciones(){

}


  
  