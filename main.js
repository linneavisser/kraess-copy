// BURGER MENU
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

/* FEATURE DROP DOWN */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var filter, ul, li, a, i;
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
}

// PRODUCT LIST & PRODUCT VIEW
window.addEventListener("DOMContentLoaded", init);

function init(event) {
  let params = new URLSearchParams(document.location.search);
  let id = params.get("id");
  let url = "https://thordiskara.com/wp_kraess/wp-json/wp/v2/product";

  if (id) {
    url += `/${id}`;
  }

  getData(url + "?_embed");

  async function getData(fetchurl) {
    console.log(fetchurl);
    let result = await fetch(fetchurl);
    if (id) {
      showSingleProduct(await result.json());
    } else {
      showProducts(await result.json());
    }
  }
}

function showProducts(productArray) {
  console.log(productArray);
  const template = document.querySelector(".productlistTemplate").content;
  const parentElement = document.querySelector(".productlist");
  productArray.forEach((product) => {
    const copy = template.cloneNode(true);
    copy.querySelector(".name").textContent = product.title.rendered;
    copy.querySelector(".artist").textContent = product.designer;
    copy
      .querySelector("a")
      .setAttribute("href", `productView.html?id=${product.id}`);
    copy.querySelector(".price span").textContent = product.price;
    copy.querySelector(".img").src =
      product._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.medium_large.source_url;
    parentElement.appendChild(copy);
  });
}

// function showSingleProduct(singleproduct) {
//   console.log(singleproduct);
//   document.querySelector(".name").textContent = singleproduct.title.rendered;
//   document.querySelector(".price span").textContent = singleproduct.price;

//   document.querySelector(".description").textContent = singleproduct.description;
//   document.querySelector(".color").textContent = singleproduct.color;
//   document.querySelector(".stock").textContent = singleproduct.stock;
//   document.querySelector(".designerinfo").textContent =
//     singleproduct.designer_info;
//   document.querySelector(".img").src =
//     singleproduct._embedded[
//       "wp:featuredmedia"
//     ][0].media_details.sizes.medium_large.source_url;
// }
