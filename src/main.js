"use strict";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


import { getImagesByQuery } from './js/pixabay-api';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader
} from './js/render-functions';

const form = document.querySelector(".form")

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const query = event.target.elements["search-text"].value
    if (query.trim() === "") {
        iziToast.warning({ message: "Введіть дані для пошуку" })
        return
    }
    showLoader()
    clearGallery()
    try {
        const { hits } = await getImagesByQuery(query)
     if (hits.length === 0) {
         iziToast.error({
            class: 'css-error',
            message: `Sorry, there are no images matching your search query. Please try again!`,
            position: 'topRight',
            });
    }
     else {
        createGallery(hits)
    }

    }
    catch (error) {
        iziToast.error({
        message: error.message,
    });
    }
    finally {
    hideLoader()
}
  
})

