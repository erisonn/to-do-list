const nova_tarefa = document.querySelector('#nova-tarefa');
const add_tarefa = document.querySelector('#add-tarefa');

 newTask = () => {
     if (nova_tarefa.value == '') {
         window.alert('Digite uma tarefa!')
     } else {
// adiciona tarefa para a lista
    var tarefas_lista = document.querySelector('.tarefas-lista');
    var item = document.createElement('li');
    item.textContent = nova_tarefa.value;
    item.classList.add('tarefa-item')
    tarefas_lista.appendChild(item);

// criar botão de excluir tarefa
    var tarefa_item = document.querySelectorAll('.tarefa-item');
    var apagar_tarefa = document.createElement('span');
    apagar_tarefa.innerHTML = '<i class="fas fa-trash-alt"></i>';
    apagar_tarefa.classList.add('apagar-tarefa');
    for(i in tarefa_item) {
        tarefa_item[i].appendChild(apagar_tarefa);
        
// exclui item da lista ao clicar no icone da lixeira
        let del_tarefa = document.querySelectorAll('.apagar-tarefa');
        Array.from(del_tarefa).forEach(function(element) {
        element.addEventListener('click', function() {
        element.parentElement.classList.add('delete');
                })
            })
        }
    }
}
add_tarefa.addEventListener('click', newTask);

// conclui tarefa ao clicar
var tarefas_adicionadas = document.querySelector('ul');
tarefas_adicionadas.addEventListener('click', function (click) {
    if(click.target.tagName === 'LI') {
        click.target.classList.toggle('tarefa-feita');
    }
})