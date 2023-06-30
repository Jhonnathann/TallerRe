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


    //-----------------------------------------------------------Metodos para la seccion Calculos-----------------------------------------------------------
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
        // Obtiene el elemento de la fecha de ingreso mediante su id
        var ValorSalario = document.getElementById("Salario").value;

        //obtiene la antiguedad del empleado
        var antiguedadEmp = this.calcularAntiguedad();

        //hacemos el calculo con la formula para las prestaciones del empleado y retornamos el valor
        var prestaciones;
        prestaciones = (( antiguedadEmp * ValorSalario )/12);

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
        document.getElementById("edad").value = edad_empleado;
    }
}

function calcular_antiguedad(){
    var antiguedad_empleado = E1.calcularAntiguedad();
    if(antiguedad_empleado < 1){
		alert ('la antiguedad no puede ser menor que 1');
    }else{
        //document.getElementById("edad").innerHTML = "->" + edadEmpleado;
       // alert ('La antiguedad del empleado es: '+ antiguedad_empleado+' años');
        document.getElementById("antigue").value = antiguedad_empleado;
    }
}

function calcular_prestaciones(){
    var prestaciones_empleado = E1.calcularPrestaciones();
    //alert ('Las prestaciones del empleado es: $'+ prestaciones_empleado+' pesos');
    document.getElementById("presta").value = prestaciones_empleado;
}
//--------------------------Opcion1----------------------------------------------------------


function ingresar(){
    var NombreE = localStorage.getItem("valorArchivo1");
    var ApellidoE = localStorage.getItem("valorArchivo2");
    var SexoE = localStorage.getItem("valorArchivo3");

    var NivelAcademico = document.getElementById("Nacademico").value;
    var correo = document.getElementById("Email").value;;
    var tel = document.getElementById("Telefono").value;;

    var datosEmpleado = [NombreE, ApellidoE,SexoE, NivelAcademico, correo, tel];

    if (tel.length < 10 ||tel.length > 10) {
        alert("el telefono debe tener 10 caracteres");
        return false;
    }else{
        if (!correo.includes("@")) {
            alert("Ingrese una dirección de correo electrónico válida");
            return false;
        }else{
            if (NivelAcademico.length < 3){
                alert("Digite su nivel academico");
                return false;
            }
        }
    }
    
    alert ("--------------DATOS DEL EMPLEADO-------------- \n"
            +datosEmpleado.join("\n")+"\n----------------------------------------------------");
}

//--------------------------------------------------------------------------------------------

function cambiar(){

    //---------------
    var salarioE = localStorage.getItem("valorArchivo4");
    
    document.getElementById("Salario").value = salarioE;
}

function Generar(){
    

    var min = 5;
    var max = 15000;
    var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("Naleatorio").value = numeroAleatorio;
}





  
  