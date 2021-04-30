const nova_tarefa = document.querySelector('#nova-tarefa');
const add_tarefa = document.querySelector('#add-tarefa');

 newTask = () => {
// adiciona tarefa para a lista
    var tarefas_lista = document.querySelector('.tarefas-lista');
    var item = document.createElement('li');
    item.textContent = nova_tarefa.value;
    item.classList.add('tarefa-item')
    tarefas_lista.appendChild(item);

// criar botão de excluir tarefa
    var tarefa_item = document.querySelectorAll('.tarefa-item');
    var apagar_tarefa = document.createElement('span');
    var txt = document.createTextNode ("\u00D7")
    apagar_tarefa.appendChild(txt);
    apagar_tarefa.classList.add('apagar-tarefa')
    for(pos in tarefa_item) {
        tarefa_item[pos].appendChild(apagar_tarefa);
    }
}
add_tarefa.addEventListener('click', newTask);