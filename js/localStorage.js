// carrega as tarefas salvas em localStorage ao carregar a pagina;
carregarTarefas = () => {
    var tarefasArray = JSON.parse(localStorage.getItem('tarefas'));
    var tarefasConcluidasArray = JSON.parse(localStorage.getItem('tarefas concluidas'));
    Array.from(tarefasArray).forEach(function(element) {
    var item = document.createElement('li');
    item.textContent = element;
    item.classList.add('tarefa-item');
    if(tarefasConcluidasArray.includes(item.textContent) === true) {
        item.classList.add('tarefa-feita');
    }
    tarefas_lista.append(item);
    lixeiraIcone();
    })
}

salvarTarefas = () => {
    var tarefa_item = document.querySelectorAll('.tarefa-item');
    var tarefa_feita = document.querySelectorAll('.tarefa-feita');
    Array.from(tarefa_feita).forEach(function(item) {
        tarefasConcluidasArray.push(item.textContent);
    })
    Array.from(tarefa_item).forEach(function(item) {
        tarefasArray.push(item.textContent);
        delTask();
    })  
}

window.onload = completeTask(); nova_tarefa.value = ''; carregarTarefas(); salvarTarefas();