var input = document.getElementById("taskInput");
var addButon = document.getElementById("addButton");
var myList = document.getElementById("lista");

addButon.addEventListener("click", function () {

  //Remove espaços em branco extras
  var inputText = input.value.trim();

  //Verifica se o input está vazio.
  if (inputText == "") {
    window.alert("Escreva alguma coisa!");
    return;
  }

  //Verfiica se a tarefa já existe
  var tasks = document.querySelectorAll("#lista .newItem p");
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].textContent === inputText) {
      window.alert("Essa tarefa já existe na lista!");
      return;
    }
  }

  function createNewTask() {

    //Cria os elementos no HTML
    var newTaskItem = document.createElement("div");
    newTaskItem.classList.add("newItem");

    var newTaskText = document.createElement("p");
    newTaskText.textContent = inputText;

    var newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";

    var newTitleTask = document.querySelector("#lista h1");
    newTitleTask.textContent = "Suas Tarefas";

    newTaskItem.appendChild(newTaskText);
    newTaskItem.appendChild(newCheckbox);

    myList.appendChild(newTaskItem);

    //Adiciona estilos se o input checkbox for marcado
    newCheckbox.addEventListener("click", () => {
      if (newCheckbox.checked) {
        newTaskText.style.textDecoration = "line-through";
        newTaskText.style.color = "white";
        newTaskItem.style.background = "green";
      } else {
        newTaskText.style.textDecoration = "none";
        newTaskText.style.color = "black";
        newTaskItem.style.background = "white";
      }
    });
  }

  input.value = ""  

  createNewTask();
});
