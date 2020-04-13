import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState('true');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    try {
      (async () => {
        const request = await fetch(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`
        );
        const data = await request.json();
        setImages(data.hits);
        setIsLoading(false);
      })();
    } catch (err) {
      console.log(err);
    }
    //eslint-disable-next-line
  }, [searchTerm]);

  return (
    <>
      <ImageSearch searchText={text => setSearchTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className='text-5xl text-center mx-auto mt-32'>
          No images found for this term
        </h1>
      )}
      {isLoading ? (
        <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1>
      ) : (
        <div className='w-full flex md:flex-row justify-around m-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-20 '>
            {images &&
              images.map(image => {
                return <ImageCard key={image.id} image={image} />;
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default App;
