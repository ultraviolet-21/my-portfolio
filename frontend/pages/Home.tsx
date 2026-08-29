//this page will be the home page, contents: welcome message and image generation (include button) 

//incorporate Pexels API for image generation

import { useState } from "react";
import { generateImage, type ImageData } from "../components/ImageGen";

export function randomlyGenerateQuery(): string {
    const queries = [
        "technology", "space", "ocean", "mountains", "forest", 
        "cityscape", "sunset", "wildlife", "food", "music", "sports"
    ];
    const randomIndex = Math.floor(Math.random() * queries.length);
    return queries[randomIndex];
}

//also need to generate caption - consider moving to separate page?

export default function Home() {
    const [image, setImage] = useState<ImageData | null>(null);

    return (
        <div className="max-w-5xl mx-auto px-4 py-12 bg-rose-300">
            <h1 className="text-4xl font-bold mb-8" style={{ color: "white" }}>
                Welcome to My Portfolio
            </h1>

            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded" 
            onClick={async () => {
                const query = randomlyGenerateQuery(); // implementing function for random query generation
                if (query) {
                    const imageData = await generateImage(query);
                    if ("photos" in imageData) {
                        setImage(imageData.photos[0] ?? null);
                    }
                }
            }}>
                Generate Image
            </button>
            {image && (
                <img
                    src={image.src.large}
                    alt={`Pexels image by ${image.photographer}`}
                    className="mt-8 w-full bg-rose-300 rounded-lg shadow-lg"
                />
            )}
            <p className="text-white">
                Feel free to explore my projects and get in touch if you'd like to collaborate!
            </p>
        </div>
    );
}