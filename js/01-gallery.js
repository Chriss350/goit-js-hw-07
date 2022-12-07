import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const imageBox = document.createElement("div");
  imageBox.classList.add("gallery__item");

  const imageLink = document.createElement("a");
  imageLink.classList.add("gallery__link");
  imageLink.setAttribute("href", item.original);

  const imagePhoto = document.createElement("img");
  imagePhoto.classList.add("gallery__image");
  imagePhoto.src = item.preview;
  imagePhoto.setAttribute("data-source", item.original);
  imagePhoto.setAttribute("alt", item.description);

  imageLink.append(imagePhoto);
  imageBox.append(imageLink);
  gallery.append(imageBox);
});

let instance = basicLightbox.create("");

const imgHandler = (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  instance = basicLightbox.create(`
    <img src=${event.target.getAttribute("data-source")} alt=${event.target.getAttribute("alt")} >
    `);

  instance.show();
};

gallery.addEventListener("click", imgHandler);

gallery.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "Escape") {
    instance.close();
  }
});

console.log(galleryItems);
