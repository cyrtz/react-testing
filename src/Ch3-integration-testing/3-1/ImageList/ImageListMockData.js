import ImageItem from "./ImageItem";

const ImageList = ({ data }) => {
    const renderImages = () => {
        return data.products.map(({ id, title, images }) => (
            <ImageItem key={id} title={title} image={images[0]} />
        ));
    }

    const renderNoDataPrompt = () => {
        return <div data-test-id="no-data-prompt"> No data to display.</div>
    };

    return (
        <>
            {!!data.products.length ? (
                <div data-test-id="image-list">{renderImages()}</div>
            ) : (
                renderNoDataPrompt()
            )}
        </>
    );
};

export default ImageList;