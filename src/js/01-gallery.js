// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const picturesMarkup = createGalleryCards(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);

function createGalleryCards() {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
    `;
    }).join('');
}

const galleryImage = document.querySelectorAll('.gallery__image');


const lightbox = new SimpleLightbox('.gallery a',
  { captionDelay: 250, captionsData: "alt" });

