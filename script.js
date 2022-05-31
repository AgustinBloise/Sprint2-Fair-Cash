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

/* codigo */ 

boton.addEventListener('click', agregar)

nombre.addEventListener('keypress', enter)

gasto.addEventListener('keypress', enter)

/* funciones */

function agregar(){

    if(nombre.value && gasto.value){

        anexoAmigo()

        anexoTotal()

        anexoDivisor()

        limpiar()

    }

    else if(!nombre.value && gasto.value){
        alert('Ingresá un nombre')
    }

    else if(nombre.value && !gasto.value){
        alert('Ingresá la cantidad que gastó')
    }

    else{
        alert('Ingresá un nombre y la cantidad que gastó')
    }

}

function anexoAmigo(){

    cantAmigos.push(nombre.value)
    let newDiv = document.createElement('div')
    newDiv.classList.add('centrado')
    newDiv.classList.add('borders')
    newDiv.textContent = `${nombre.value} $${gasto.value}`
    amigos.appendChild(newDiv)

}

function anexoTotal(){

    gastos.push(gasto.value)
    sumGastos = 0
    for( i = 0; i < gastos.length; i++){
        sumGastos += parseFloat(gastos[i])
    } 
    total.classList.add('centrado')
    total.classList.add('borders')
    total.textContent = ''
    total.textContent = `$ ${sumGastos}`

}

function anexoDivisor(){

    divisionGastos = sumGastos / cantAmigos.length
    divisor.classList.add('centrado')
    divisor.classList.add('borders')
    divisor.textContent = ''
    divisor.textContent = `$ ${divisionGastos}`

}

// function anexoResto(){

//     restoAmigo = 0
//     restoAmigo = divisionGastos - gastos[gastos.length-1] 
    
//     let newDiv = document.createElement('div')
//     newDiv.classList.add('centrado')
//     newDiv.classList.add('borders')
//     newDiv.textContent = ``

// }

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

