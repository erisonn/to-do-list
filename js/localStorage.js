carregarTarefas = () => {
  var tarefasArray = JSON.parse(localStorage.getItem('tarefas'));
  Array.from(tarefasArray).forEach(function(element) {
    var tarefa_salva = document.createElement('li');
    tarefa_salva.textContent = element;
    tarefa_salva.classList.add('tarefa-item');
    tarefas_lista.appendChild(tarefa_salva);
    var tarefa_item = document.querySelectorAll('.tarefa-item');
    var apagar_tarefa = document.createElement('span');
    apagar_tarefa.innerHTML = '<i class="fas fa-trash-alt"></i>';
    apagar_tarefa.classList.add('apagar-tarefa');
    Array.from(tarefa_item).forEach(function(item) {
        item.appendChild(apagar_tarefa);
        })
    })
}
salvarTarefas = () => {
    var tarefa_item = document.querySelectorAll('.tarefa-item');
    Array.from(tarefa_item).forEach(function(item) {
        tarefasArray.push(item.textContent);
    })
}

window.onload = carregarTarefas(); salvarTarefas();