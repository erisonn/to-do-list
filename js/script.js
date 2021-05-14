const nova_tarefa = document.querySelector('#nova-tarefa');
const add_tarefa = document.querySelector('#add-tarefa');
const tarefas_lista = document.querySelector('.tarefas-lista');
var tarefasArray = [];
var tarefasConcluidasArray = [];

add_tarefa.addEventListener('click', () => {
    newTask();
})

newTask = () => {
    if (nova_tarefa.value == '') {
        window.alert('Digite uma tarefa!')
    } else {
        var item = document.createElement('li');
        item.textContent = nova_tarefa.value;
        tarefasArray.push(item.textContent);
        localStorage.setItem('tarefas', JSON.stringify(tarefasArray));
        item.classList.add('tarefa-item');
        tarefas_lista.append(item);
        nova_tarefa.value = ''
        lixeiraIcone();
        delTask();
    }
}

lixeiraIcone = () => {
    var tarefa_item = document.querySelectorAll('.tarefa-item');
    var apagar_tarefa = document.createElement('span');
    apagar_tarefa.innerHTML = '<i class="fas fa-trash-alt"></i>';
    apagar_tarefa.classList.add('apagar-tarefa');
    Array.from(tarefa_item).forEach(function(item) {
        item.append(apagar_tarefa);
    })
}

delTask = () => {
    let del_tarefa = document.querySelectorAll('.apagar-tarefa');
    Array.from(del_tarefa).forEach(function(element) {
        element.addEventListener('click', function() {
            var tarefa_removida = element.parentElement.textContent;
            for(i in tarefasArray) {
                 if(tarefasArray[i] === tarefa_removida) {
                    tarefasArray.splice(i, 1);
                    localStorage.setItem('tarefas', JSON.stringify(tarefasArray));
                 }
             }
            for(i in tarefasConcluidasArray) {
                if(tarefasConcluidasArray[i] === tarefa_removida) {
                    tarefasConcluidasArray.splice(i, 1);
                    localStorage.setItem('tarefas concluidas', JSON.stringify(tarefasConcluidasArray));
                }
            }
            element.parentElement.remove();
        })
    })
}

// conclui tarefa ao clicar;
completeTask = () => {
    var tarefas_adicionadas = document.querySelector('ul');
    tarefas_adicionadas.addEventListener('click', function (click) {
    if(click.target.tagName === 'LI') {
        click.target.classList.toggle('tarefa-feita');
        var tarefa_feita = click.target.textContent;
        if(tarefasConcluidasArray.includes(tarefa_feita) === false) {
            tarefasConcluidasArray.push(tarefa_feita);
            localStorage.setItem('tarefas concluidas', JSON.stringify(tarefasConcluidasArray));
            console.log(tarefasConcluidasArray);
            }
        }
    })
}
