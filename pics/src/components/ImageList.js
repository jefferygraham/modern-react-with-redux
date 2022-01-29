import React from 'react';

import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = ({ images }) => {
  const foundImages = images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));

  return <div className='image-list'>{foundImages}</div>;
};

export default ImageList;
