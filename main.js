window.addEventListener("load", () => {
  const form = document.querySelector("#forms");
  const input = document.querySelector("#taskInput");
  const list = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;
    if (!task) {
      alert("Fill in a To-Do");
      return;
    }

    const taskEl = document.createElement("div");
    taskEl.classList.add("task");

    const content = document.createElement("div");
    content.classList.add("content");

    taskEl.appendChild(content);

    const taskInput = document.createElement("input");
    taskInput.classList.add("text");
    taskInput.type = "text";
    taskInput.value = task;
    taskInput.setAttribute("readonly", "readonly");

    content.appendChild(taskInput);

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerHTML = "Edit";

    const toDelete = document.createElement("button");
    toDelete.classList.add("delete");
    toDelete.innerHTML = "Done";

    actions.appendChild(edit);
    actions.appendChild(toDelete);

    taskEl.appendChild(actions);

    list.appendChild(taskEl);

    input.value = "";

    edit.addEventListener("click", () => {
      if (edit.innerText.toLowerCase() == "edit") {
        taskInput.removeAttribute("readonly");
        taskInput.focus();
        edit.innerText = "Save";
      } else {
        taskInput.setAttribute("readonly", "readonly");
        edit.innerText = "Edit";
      }
    });
    toDelete.addEventListener("click", (e) => {
      list.removeChild(taskEl);
    });
  });
});
const clear = document.querySelector(".delete")
function reload(){
  reload = location.reload();
}
clear.addEventListener('click', reload, false);