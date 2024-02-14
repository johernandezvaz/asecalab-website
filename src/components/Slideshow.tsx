import { useState, useEffect } from 'react';

interface SlideshowProps {
  images: string[];
}

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    };

    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, [currentImage, images]);

  const changeSlide = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <>
      <div className='bg-blue-500'>
        <div className="bg-blue-500 top-4 inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-3xl font-bold text-white mb-0 text-center mt-8">
            Nuestros Servicios
          </h1>
          <div className="bg-blue-500 p-4  items-center justify-center z-0 h-screen relative overflow-hidden">
            <div className="border-4 border-red-700 bg-red-700 opacity-100 w-full mx-auto relative overflow-hidden mt-4">
              <img
                src={images[currentImage]}
                alt={`Slide ${currentImage + 1}`}
                className="w-full object-cover sm:h-64 md:h-80 lg:h-96 xl:h-112"
              />
            </div>
            <div className="static mt-8 bottom-4 left-0 right-0 flex items-center justify-center space-x-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  onClick={() => changeSlide(index)}
                  className={`h-4 w-4 rounded-full cursor-pointer ${
                    currentImage === index ? 'bg-white' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slideshow;

// src/components/Slideshow.tsx

import React, { useState, useEffect } from 'react';

interface SlideshowProps {
  images: string[];
}

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    };

    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, [currentImage, images]);

  const changeSlide = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <>
    <div className='bg-blue-500'>
      <div className="bg-blue-500 top-4 inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-3xl font-bold text-white mb-0 text-center mt-8">
          Nuestros Servicios
        </h1>
        <div className="bg-blue-500 p-4  items-center justify-center z-0 h-screen relative overflow-hidden">
          <div className="border-4 border-red-700 bg-red-700 opacity-100 w-full h-3/4 mx-auto relative overflow-hidden mt-4">
            <img
              src={images[currentImage]}
              alt={`Slide ${currentImage + 1}`}
              className="w-full h-full object-fill"
            />
          </div>
          <div className="static mt-8 bottom-4 left-0 right-0 flex items-center justify-center space-x-2">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => changeSlide(index)}
                className={`h-4 w-4 rounded-full cursor-pointer ${
                  currentImage === index ? 'bg-white' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Slideshow;
