import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divGallery = document.querySelector(".gallery");

const markUp = galleryItems
  .map(
    (image) =>
      `
        <li class='gallery_itm'><a class="gallery__item" href="${image.original}">
            <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
        </a></li>
        `
  )
  .join("");

divGallery.insertAdjacentHTML("beforeend", markUp);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
