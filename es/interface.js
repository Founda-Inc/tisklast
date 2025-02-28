function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
        alert("Please, enter a task.");
        return;
    }

    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox"; // Tipo de input es checkbox
    li.appendChild(checkbox); // Agregar checkbox al li
    var textSpan = document.createElement("span"); // Crear un span para el texto
    textSpan.textContent = input; // Agregar texto al span
    li.appendChild(textSpan); // Agregar span al li
    taskList.appendChild(li); // Agregar li a la lista

    
    document.getElementById("taskInput").value = "";
}