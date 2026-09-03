/// <reference types="vite/client" />

import {createClient} from "pexels";

const pexelsClient = createClient(import.meta.env.VITE_PEXELS_API_KEY);

//generates image using Pexels API given a search query
export async function generateImage(query: string) {
  const response = await pexelsClient.photos.search({ query, per_page: 1 });
  return response;
}

export interface ImageData {
  id: number;
  width: number;
    height: number;
    url: string;
    photographer: string;
    src: {
        original: string;
        large: string;
        medium: string;
        small: string;
        portrait: string;
        landscape: string;
        tiny: string;
    };
}