const url = "http://localhost:3000/basket";
const ul = document.getElementById("ul_basket");
const buttonClean = document.getElementById("button_clean");
const basketContainer = document.getElementById("basket-container");

// GET запрос
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

//DELETE
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

function displayToDoList(todo) {
  for (let i = 0; i < todo.length; i++) {
    const li = document.createElement("li");
    li.classList.add("content");
    ul.appendChild(li);
    const img = document.createElement("img");
    img.setAttribute("src", `${todo[i].img}`);
    li.appendChild(img);
    const title = document.createElement("p");
    title.innerText = "Название товара";
    li.appendChild(title);
    const price = document.createElement("p");
    price.innerText = `Цена ${todo[i].price}`;
    li.appendChild(price);
    const buttonDelete = document.createElement("button");
    buttonDelete.innerText = "Удалить";
    buttonDelete.setAttribute("button", `${todo[i].id}`);
    buttonDelete.classList.add("button_delete");
    buttonDelete.addEventListener("click", () => {
      const id = todo[i].id;
      deleteData(id);
    });
    li.appendChild(buttonDelete);
  }
}
// для очистки корзины
const btnClearBasket = document.getElementById("btn_clear_basket");
btnClearBasket.addEventListener("click", () => {
  function clearBasket() {
    if (response.status === 204) {
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }
    } else {
      console.error("Не удалось очистить корзину на сервере.");
    }
  }
  clearBasket();
});
