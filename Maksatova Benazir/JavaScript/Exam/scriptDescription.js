const url = "http://localhost:3000/description";
const div = document.getElementById("container");

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

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

function displayToDoList(todo) {
  const product = todo.find((item) => item.id === parseInt(productId));

  if (product) {
    const img = document.createElement("img");
    img.setAttribute("src", product.img);
    img.classList.add("img_description");
    div.appendChild(img);

    const p = document.createElement("p");
    p.innerText = product.description;
    p.classList.add("p_description");
    div.appendChild(p);
  }
}
