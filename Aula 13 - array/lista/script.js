let tarefas =[]

function adicionarTarefa(){

const tarefa = document.getElementById("nova-tarefa").value

if (tarefa){
    tarefas.push(tarefas)
    exibeTarefas()
    tarefa = ""
}


console.log(tarefas);

}

function exibeTarefas(){
let listaTarefas = document.getElementById("lista-tarefas")
listaTarefas.innerHTML = ""

tarefas.forEach((tarefa)=>{
    let li = document.createElement("li")
    li.innerHTML = tarefa
    listaTarefas.appendChild(li)

})

}