const nova_tarefa = document.querySelector('#nova-tarefa');
const add_tarefa = document.querySelector('#add-tarefa');
const tarefas_lista = document.querySelector('.tarefas-lista');
let tarefasArray = [];

newTask = () => {
    if (nova_tarefa.value == '') {
        window.alert('Digite uma tarefa!')
    } else {

// adiciona tarefa para a lista
        var item = document.createElement('li');
        item.textContent = nova_tarefa.value;
        tarefasArray.push(item.textContent);
        localStorage.setItem('tarefas', JSON.stringify(tarefasArray));
        console.log(tarefasArray);
        item.classList.add('tarefa-item');
        tarefas_lista.appendChild(item);
        var tarefa_item = document.querySelectorAll('.tarefa-item');
    
// criar botão de excluir tarefa
        var apagar_tarefa = document.createElement('span');
        apagar_tarefa.innerHTML = '<i class="fas fa-trash-alt"></i>';
        apagar_tarefa.classList.add('apagar-tarefa');
        for(i in tarefa_item) {
        tarefa_item[i].appendChild(apagar_tarefa);

// exclui item da lista ao clicar no icone da lixeira
        let del_tarefa = document.querySelectorAll('.apagar-tarefa');
        Array.from(del_tarefa).forEach(function(element) {
            element.addEventListener('click', function() {
                var tarefa_removida = element.parentElement.textContent;
                for(i in tarefasArray) {
                    if(tarefasArray[i] === tarefa_removida) {
                        tarefasArray.splice(i, 1);
                        console.log(tarefasArray)
                        localStorage.setItem('tarefas', JSON.stringify(tarefasArray));
                    }
                }
                element.parentElement.remove();
                })
            })
        }
    }
}

add_tarefa.addEventListener('click', () => {
    newTask();
})

// conclui tarefa ao clicar
var tarefas_adicionadas = document.querySelector('ul');
tarefas_adicionadas.addEventListener('click', function (click) {
    if(click.target.tagName === 'LI') {
        click.target.classList.toggle('tarefa-feita');
    }
})

