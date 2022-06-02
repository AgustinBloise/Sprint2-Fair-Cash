/* variables */

let nombre = document.querySelector('#name')

let gasto = document.querySelector('#gasto')

let boton = document.querySelector('a')

let amigos = document.querySelector('.amigos')

let total = document.querySelector('.total')

let divisor = document.querySelector('.divisor')

let resto = document.querySelector('.resto')

let cantAmigos = []

let gastos = []

let sumGastos

let divisionGastos

let restoAmigo 

let borroAnexo = []

let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

/* código */ 

boton.addEventListener('click', agregar)

nombre.addEventListener('keypress', enter)

gasto.addEventListener('keypress', enter)

/* funciones */

function agregar(){

    if(nombre.value && gasto.value){

        anexoAmigo()

        anexoTotal()

        anexoDivisor()

        anexoResto()

        limpiar()

    }

    else if(!nombre.value && gasto.value){
        alert('Ingresá un nombre')
    }

    else if(nombre.value && !gasto.value){
        alert('Ingresá la cantidad que gastó, recordá usar solo números')
    }

    else{
        alert('Ingresá un nombre y la cantidad que gastó')
    }

}

function anexoAmigo(){

    cantAmigos.push(nombre.value)
    let newDiv = document.createElement('div')
    newDiv.classList.add('centrado','borders')
    newDiv.textContent = `${nombre.value}: ${formatter.format(gasto.value)}`
    amigos.appendChild(newDiv)

}

function anexoTotal(){

    gastos.push(gasto.value)
    sumGastos = 0
    for(i = 0; i < gastos.length; i++){
        sumGastos += parseFloat(gastos[i])
    } 
    total.classList.add('centrado','borders')
    total.textContent = ''
    total.textContent = formatter.format(sumGastos)

}

function anexoDivisor(){

    divisionGastos = sumGastos / cantAmigos.length
    divisor.classList.add('centrado','borders')
    divisor.textContent = ''
    divisor.textContent = formatter.format(divisionGastos)

}

function anexoResto(){

    borrar()

    for(i = 0; i < cantAmigos.length; i++){
        restoAmigo = 0
        restoAmigo = divisionGastos - gastos[i]
        let newDiv = document.createElement('div')
        newDiv.classList.add('centrado','borders','anexo')
        newDiv.textContent = `${cantAmigos[i]}: ${formatter.format(restoAmigo)}`
        resto.appendChild(newDiv)
    }
}

function borrar(){
    borroAnexo = document.querySelectorAll('.anexo')
    if(borroAnexo.length > 0){
        for(i = 0; i < borroAnexo.length; i++){
            borroAnexo[i].remove()
        }
    }
}

function limpiar(){
    nombre.value = ''
    nombre.textContent = ''
    gasto.value = ''
    gasto.textContent = ''
}

function enter(e){
    if(e.keyCode === 13){
        agregar()
    }
}
