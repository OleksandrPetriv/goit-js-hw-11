"use strict";
import axios from "axios";

const url = "https://pixabay.com/api/";
const API_KEY = "57604076-2ca9fc931dc441a1039dbd39e";

export async function getImagesByQuery(query) {
    const response = await axios.get(url, {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        }
    });
    return response.data;
}
