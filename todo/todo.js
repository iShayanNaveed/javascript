window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const listEl = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value;
    if (!task) {
      alert("Please fill the field");
      return;
    }
    const task_el = document.createElement("div");
    task_el.classList.add("task");
    const task_el_content = document.createElement("div");
    task_el_content.classList.add("content");
    // task_el_content.innerText = task;
    task_el.appendChild(task_el_content);

    const task_el_input = document.createElement("input");
    task_el_input.classList.add("text");
    task_el_input.type = "text";
    task_el_input.value = task;
    task_el_input.setAttribute("readonly", "readonly");
    task_el_content.appendChild(task_el_input);
    const task_el_actions = document.createElement("div");
    task_el_actions.classList.add("actions");
    task_el_edit = document.createElement("button");
    task_el_edit.classList.add("edit");
    task_el_edit.innerHTML = "Edit";

    task_el_delete = document.createElement("button");
    task_el_delete.classList.add("del");
    task_el_delete.innerHTML = "Delete";
    task_el_actions.appendChild(task_el_edit);
    task_el_actions.appendChild(task_el_delete);
    task_el.appendChild(task_el_actions);
    listEl.appendChild(task_el);
    input.value = "";
    task_el_edit.addEventListener("click", () => {
      if (task_el_edit.innerText.toLowerCase() == "edit") {
        task_el_input.removeAttribute("readonly");
        task_el_input.focus();
        task_el_edit.innerText = "Uptade";
      } else {
        task_el_input.setAttribute("readonly", "readonly");
        task_el_edit.innerText = "Edit";
      }
    });
    task_el_delete.addEventListener("click", () => {
      listEl.removeChild(task_el);
    });
  });
});
