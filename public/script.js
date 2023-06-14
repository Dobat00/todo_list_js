const teste = document.getElementById('teste');
const add = document.getElementById('add');
const input = document.getElementById('input');
let output = document.getElementById('output');
let lista = [];


teste.addEventListener('click', function(){
    console.log('funcionando')
})


add.addEventListener('click', render)

input.addEventListener('keydown', function(e){
    if(e.code === "Enter"){
        add.click();
    }
})

// function render(){
//     let element = input.value
//     lista.push(element);
//     console.log(lista)
//     let string = '';
//     for (let i = 0; i< lista.length;i++){
//         string += `<li>${lista[i]}</li><button class='delete-btn' onclick=deleteTask(${i})>delete</button>`
//     }
//     output.innerHTML = string;
//     input.value =''
// }
    function render(){
        let taskText = input.value;
        if(taskText.trim() ===""){
            alert('Por favor, digite uma tarefa')
            return;
        }
        
        let taskItem = document.createElement('li');
        taskItem.innerHTML = taskText;

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = 'delete';
        
        deleteButton.addEventListener('click', function(){
            deleteTask(deleteButton)
        })

        taskItem.appendChild(deleteButton);
        output.appendChild(taskItem);

        input.value = ''

    }


// function deleteTask(index) {
//     lista.splice(index, 1)
//     render();
//   }

    function deleteTask(deleteButton){
        let taskItem = deleteButton.parentNode
        output.removeChild(taskItem)
    }
