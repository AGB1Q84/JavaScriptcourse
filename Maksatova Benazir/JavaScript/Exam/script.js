const url = "http://localhost:3000/posts";

const urlBasket = "http://localhost:3000/basket";

const ul = document.getElementById("container_content");

const btnPrice = document.getElementById("btn_price");
const btnNew = document.getElementById("btn_new");
const btnOld = document.getElementById("btn_old");

const btnFooter = document.getElementById("button_footer");

const searchContainer = document.getElementById("search");
const searchButton = document.getElementById("btn__search");
const searchInput = document.getElementById("search-input");

// GET запрос
async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayToDoList(data);
  } catch (e) {
    console.log("Ошибка при запросе данных: ", e);
  }
}
getData();

const todoList = [
  {
    price: 136,
    title: "Продукт2",
    id: 2,
    img: "Rectangle2.jpg",
    date: "19.10.23",
  },
  {
    price: 1266,
    title: "Продукт3",
    id: 3,
    img: "Rectangle3.jpg",
    date: "18.10.23",
  },
  {
    price: 123674,
    title: "Продукт1",
    id: 1,
    img: "Rectangle1.jpg",
    date: "20.10.23",
  },
  {
    price: 8471,
    title: "Продукт4",
    id: 4,
    img: "Rectangle4.jpg",
    date: "15.10.23",
  },
  {
    price: 957,
    title: "Продукт5",
    id: 5,
    img: "Rectangle5.jpg",
    date: "10.10.23",
  },
  {
    price: 7102,
    title: "Продукт6",
    id: 6,
    img: "Rectangle6.jpg",
    date: "07.10.23",
  },
  {
    price: 8921,
    title: "Продукт7",
    id: 7,
    img: "Rectangle7.jpg",
    date: "10.09.23",
  },
  {
    price: 745,
    title: "Продукт8",
    id: 8,
    img: "Rectangle8.jpg",
    date: "02.10.23",
  },
  {
    price: 180,
    title: "Продукт9",
    id: 9,
    img: "Rectangle9.jpg",
    date: "05.10.23",
  },
  {
    price: 250,
    title: "Продукт10",
    id: 10,
    img: "Rectangle10.jpg",
    date: "08.09.23",
  },
  {
    price: 1000,
    title: "Продукт11",
    id: 11,
    img: "Rectangle11.jpg",
    date: "03.09.23",
  },
  {
    price: 900,
    title: "Продукт12",
    id: 12,
    img: "Rectangle12.jpg",
    date: "20.09.23",
  },
];
//Сортировка товаров
function dateToSeconds(item) {
  return Date.parse(item.date) / 1000;
}
btnNew.addEventListener("click", () => {
  todoList.sort((a, b) => {
    const dateA = dateToSeconds(a);
    const dateB = dateToSeconds(b);
    return dateA - dateB;
  });
  displayToDoList(todoList);
});

btnOld.addEventListener("click", () => {
  todoList.sort((a, b) => {
    const dateA = dateToSeconds(a);
    const dateB = dateToSeconds(b);
    return dateB - dateA;
  });
  displayToDoList(todoList);
});

btnPrice.addEventListener("click", () => {
  todoList.sort((a, b) => a.price - b.price);
  displayToDoList(todoList);
});

//функция для создания элементов

function displayToDoList(todo) {
  ul.innerHTML = "";
  for (let i = 0; i < todo.length; i++) {
    const li = document.createElement("li");
    li.classList.add("content");
    ul.appendChild(li);

    const img = document.createElement("img");
    img.setAttribute("src", `${todo[i].img}`);
    img.classList.add("img_container");
    li.appendChild(img);

    //при нажатии на изображение появляется описание
    img.addEventListener("click", () => {
      const product = todo[i];
      window.location.href = `indexDescription.html?id=${product.id}`;
    });

    const title = document.createElement("p");
    title.innerText = todo[i].title;
    li.appendChild(title);

    const price = document.createElement("p");
    price.innerText = `Цена ${todo[i].price}`;
    li.appendChild(price);

    const buttonEdit = document.createElement("button");
    buttonEdit.innerText = "Редактировать";
    buttonEdit.classList.add("button_edit");
    li.appendChild(buttonEdit);

    //редактирование
    buttonEdit.addEventListener("click", () => {
      const productId = todo[i].id;
      const editUrl = `indexPost.html?id=${productId}`;
      window.location.href = editUrl;
    });

    const buttonBasket = document.createElement("button");
    buttonBasket.innerText = "Добавить в корзину";
    buttonBasket.classList.add("button_basket");
    buttonBasket.addEventListener("click", () => {
      const product = {
        id: todo[i].id,
        img: todo[i].img,
        title: todo[i].title,
        price: todo[i].price,
      };
      postData(product);
    });
    li.appendChild(buttonBasket);
  }
}

function addToBasket(product) {
  todo.push(product);
  console.log("Товар добавлен в корзину:", product);
}
/// PATCH
async function editData(id) {
  try {
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

//Post запрос
async function postData(obj) {
  try {
    const response = await fetch(urlBasket, {
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

// Создать товар
btnFooter.addEventListener("click", () => {
  const postUrl = "indexPost.html";
  window.location.href = postUrl;
});

// Кнопка для поиска товара
function searchProductsOnPage(query) {
  query = query.toLowerCase();
  const products = ul.getElementsByClassName("content");
  for (let i = 0; i < products.length; i++) {
    const titleElement = products[i].querySelector("p");
    const title = titleElement.innerText.toLowerCase();
    if (title.includes(query)) {
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
}
searchButton.addEventListener("click", () => {
  const searchInput = document.getElementById("search-input").value;
  const result = document.createElement("div");
  searchContainer.appendChild(result);

  if (searchInput.length === 0) {
    result.innerHTML = "Введите, пожалуйста название";
    return;
  }

  searchProductsOnPage(searchInput);
});
