// TODO
const url = "http://localhost:3000/data";

const buttonDelete = document.getElementById("delete-btn");
const buttonAdd = document.getElementById("add-btn");
const input = document.getElementById("input-task");
const ul = document.getElementById("todo-list");
console.log(input.value, "value input");

///TODO POST

async function postData(obj) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const result = await response.json();
    console.log(result);
  } catch (e) {
    console.log("Fetch data Error: ", e);
  }
}

buttonAdd.addEventListener("click", () => {
  postData({
    value: input.value,
  });
});

///TODO GET
async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayToDoList(data);
  } catch (e) {
    console.log("Ошибка при запросе данных: ", e);
  }
}
getData();

function displayToDoList(todo) {
  for (let i = 0; i < todo.length; i++) {
    const li = document.createElement("li");
    ul.appendChild(li);
    const span = document.createElement("span");
    span.innerText = todo[i].value;
    li.appendChild(span);
    const buttonDelete = document.createElement("button");
    buttonDelete.innerText = "Delete";
    li.appendChild(buttonDelete);
    const buttonEdit = document.createElement("button");
    buttonEdit.innerText = "Edit";
    li.appendChild(buttonEdit);

    buttonDelete.addEventListener("click", () => {
      const id = todo[i].id;
      deleteData(id);
    });
    buttonEdit.addEventListener("click", () => {
      const id = todo[i].id;
      editData(id);
    });
  }
}

///TODO DELETE
async function deleteData(id) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
  } catch (e) {
    console.log("Fetch data Error: ", e);
  }
}

/// TODO Edit
async function editData(id) {
  try {
    const promptWeb = prompt("Введите изменение");
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    const result = await response.json();
    console.log(result);
  } catch (e) {
    console.log("Fetch data Error: ", e);
  }
}
