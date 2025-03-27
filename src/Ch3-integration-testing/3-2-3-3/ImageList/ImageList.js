import { useEffect, useState } from "react";
import ImageItem from "./ImageItem";

const ImageList = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setImages(data.products);

        }
        fetchData();
    }, []);

    const renderImages = () => {
        return images.map(({ id, title, image }) => (
            <ImageItem key={id} title={title} image={images[0]} />
        ));
    };

    return (
        <>
            {images.length !== 0 ? (
                renderImages()
            ) : (
                <div data-test-id="no-data-prompt">No data to display.</div>
            )}
        </>
    )
}

export default ImageList;