// carrega as tarefas salvas em localStorage ao carregar a pagina;
carregarTarefas = () => {
  var tarefasArray = JSON.parse(localStorage.getItem('tarefas'));
  Array.from(tarefasArray).forEach(function(element) {
    var item = document.createElement('li');
    item.textContent = element;
    item.classList.add('tarefa-item');
    tarefas_lista.append(item);
    var tarefa_item = document.querySelectorAll('.tarefa-item');
    var apagar_tarefa = document.createElement('span');
    apagar_tarefa.innerHTML = '<i class="fas fa-trash-alt"></i>';
    apagar_tarefa.classList.add('apagar-tarefa');
    Array.from(tarefa_item).forEach(function(item) {
        item.append(apagar_tarefa);
        })
    })
}
// adiciona os eventlisteners as tarefas carregadas;
salvarTarefas = () => {
    var tarefa_item = document.querySelectorAll('.tarefa-item');
    Array.from(tarefa_item).forEach(function(item) {
        tarefasArray.push(item.textContent);
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
            element.parentElement.remove();
            })
        })
    })
}

window.onload = carregarTarefas(); salvarTarefas(); nova_tarefa.value = ''