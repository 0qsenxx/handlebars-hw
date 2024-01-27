import Handlebars from "handlebars";
import { appleProducts } from "./appleProducts";
import template from "../template/appleProductsList.hbs";

const markup = template({ items: appleProducts });
document.querySelector("main").innerHTML = markup;

const lowPticeButtonRef = document.querySelector("[data-filter=low]");
const highPticeButtonRef = document.querySelector("[data-filter=high]");
const mainRef = document.querySelector("main");

lowPticeButtonRef.addEventListener("click", () => {
  const sortProducts = appleProducts.toSorted(
    (lastProduct, nextProduct) => lastProduct.price - nextProduct.price
  );
  const markup = template({ items: sortProducts });
  mainRef.innerHTML = markup;
});

highPticeButtonRef.addEventListener("click", () => {
  const sortProducts = appleProducts.toSorted(
    (lastProduct, nextProduct) => nextProduct.price - lastProduct.price
  );
  const markup = template({ items: sortProducts });
  mainRef.innerHTML = markup;
});
