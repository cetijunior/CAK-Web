import React, { useState } from 'react';

const SpotlightImages = ({ images }) => {
    const [focusedImage, setFocusedImage] = useState(null);

    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 overflow-hidden cursor-pointer transition-opacity duration-300 ${focusedImage === index ? 'opacity-100' : 'opacity-50'}`}
                    onMouseEnter={() => setFocusedImage(index)}
                    onMouseLeave={() => setFocusedImage(null)}
                >
                    <img src={image.src} alt={image.alt} className="w-[900px] h-auto object-cover" />
                    <p className="text-center mt-2">{image.description}</p>
                </div>
            ))}
        </div>
    );
};

export default SpotlightImages;
