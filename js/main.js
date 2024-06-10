//solicitar prestamo
function solicitarPrestamo() {
    // Confirmación de mayor de edad
    if (!confirm("Debe ser mayor de 18 años para solicitar un préstamo")) {
        alert("Lo siento, debe ser mayor de 18 años para usar nuestros servicios.")
        return
    }
    //inicializacion de primeras variables
    const nombre = prompt("ingrese su nombre")
    const edad = parseInt(prompt ("ingrese su edad"))
    let monto = 0
    let valorCuota = 0

    // comprobacion de edad
    if (edad<18 || isNaN(edad) ) {
    alert(" lo siento "+ nombre + "debes ser mayor de edad para usar nuestros servicios.")
    return solicitarPrestamo()
    } 

    //consultar monto
    monto = parseInt(prompt("Ingrese el monto que desea solicitar"))
    if (isNaN(monto)) {
    alert("Debe ingresar un monto valido")
    return solicitarPrestamo()
    }   

    //Cantidad de cuotas
    let cuotas = parseInt(prompt("ingrese la cantidad de cuotas: 3, 6, 12, 18 o 24"))
    const cuotasPosibles = [3,6,12,18,24]
    const comprobacion = cuotasPosibles.includes(cuotas)
    if (comprobacion == false ){
        alert("cantidad de cuotas no validas")
        return solicitarPrestamo()
    }
    const salario = parseInt(prompt("ingrese su salario neto" ))
    if (salario<0 || isNaN(salario)){
        alert("el salario ingresado no es valido")
        return solicitarPrestamo()
    }

    //calculo valor de cuota
    switch(cuotas){
        case 3:
            valorCuota = (monto + monto * 0.25) / 3;
            break;
        case 6:
            valorCuota = (monto + monto * 0.5) / 6;
            break;
        case 12:
            valorCuota = (monto + monto * 1) / 12;
            break;
        case 18:
            valorCuota = (monto + monto * 1.5) / 18;
            break;
        case 24:
            valorCuota = (monto + monto * 2) / 24;
            break
        }

    let venta = prompt("ha ingresado "+ monto +" a pagar en " + cuotas + " cuotas de $" + valorCuota+". Ecriba 1 para solicitar o 2 para cancelar")

    const solicitantes = []
    const agregarSolicitante = () =>  {
    const solicitante = { nombre, edad, monto ,cuotas, valorCuota, salario }
    solicitantes.push(solicitante)
    }
    
    //crear solicitud de prestamo
    if (venta == "2"){
        alert("Muchas gracias por utilizar nuestros servicios, que tenga buen día!")
        return solicitarPrestamo()
    }else if (venta !== "1" ){
        alert("lo siento dato ingresado no valido")
        return solicitarPrestamo()
    }else{
        agregarSolicitante()
        alert("gracias su solicitud de prestamo ya ha sido creada")}

console.log(solicitantes)
    
}
solicitarPrestamo()

