import React from 'react';
import '../assets/modal.css';
import Modal from './Modal';
import useModal from '../hooks/useModal';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');
  const { isOpen, toggle } = useModal();

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg mx-auto'>
      <img
        src={image.webformatURL}
        alt='random pic from api'
        className='w-full'
        style={{ height: '400px', width: '640px' }}
        onClick={toggle}
      />
      <Modal isOpen={isOpen} hide={toggle} image={image.largeImageURL} />
      <div className='px-6 py-4'>
        <div className='flex items-center mb-2'>
          <div className='font-bold text-purple-500 text-lg mb-2 mr-auto'>
            Photo by {image.user}
          </div>
          {image.userImageURL ? (
            <img
              src={image.userImageURL}
              alt='user profile pic'
              className='rounded-full h-12 w-12'
            />
          ) : (
            <img
              src=''
              alt=''
              className='h-12 w-12 rounded-full border-2 border-gray-300'
            />
          )}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className='px-4 py-4 mt-2 w-12/12 border-t-2 border-teal-100 flex justify-start'>
        {tags.map((tag, index) => (
          <span
            key={index}
            className='bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2 m-1'
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
