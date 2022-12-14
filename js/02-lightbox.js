import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const imageLink = document.createElement("a");
  imageLink.classList.add("gallery__item");
  imageLink.setAttribute("href", item.original);

  const imagePhoto = document.createElement("img");
  imagePhoto.classList.add("gallery__image");
  imagePhoto.src = item.preview;
  imagePhoto.setAttribute("alt", item.description);

  imageLink.append(imagePhoto);
  gallery.append(imageLink);
});

var lightbox = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
