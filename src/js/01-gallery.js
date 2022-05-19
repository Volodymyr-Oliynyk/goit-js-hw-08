// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector(".gallery");
const galleryItemsList = galleryItems;

const imagesList = galleryItemsList
  .map((element) => {
    const { preview, original, description } = element;

    return `
  <a class="gallery__link" href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
   alt="${description}"
  />
</a> 
`;
  })
  .join("");

galleryList.insertAdjacentHTML("afterbegin", imagesList);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250ms",
});

