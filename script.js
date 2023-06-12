const teste = document.getElementById('teste');
const add = document.getElementById('add');
const input = document.getElementById('input');
let output = document.getElementById('output');
let lista = [];

teste.addEventListener('click', function(){
    console.log('funcionando')
})

add.addEventListener('click', render)//{
add.addEventListener('keydown', render)
    // let element = input.value
    // lista.push(element);
    // console.log(lista)
    // input.value =''
    // render();
// })

function render(){
    let element = input.value
    lista.push(element);
    console.log(lista)
    let string = '';
    for (let i = 0; i< lista.length;i++){
        string += `<li>${lista[i]}</li>`
    }
    output.innerHTML = string;
    input.value =''
}