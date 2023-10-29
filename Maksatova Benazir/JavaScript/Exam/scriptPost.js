const url = "http://localhost:3000/posts";
const ul = document.getElementById("ul_post");
const buttonAdd = document.getElementById("post_button");

//POST
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
    title: input_title.value,
    description: input_description.value,
    price: input_price.value,
    img: input_img.value,
  });
});
