import React, { useState } from 'react';

interface CardProps {
  images: string[];
}

const Card: React.FC<CardProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    let newIndex = currentImageIndex - 1;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    setCurrentImageIndex(newIndex);
  };

  const nextImage = () => {
    let newIndex = currentImageIndex + 1;
    if (newIndex >= images.length) {
      newIndex = 0;
    }
    setCurrentImageIndex(newIndex);
  };

  const currentImage = images[currentImageIndex];
  const previousImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
  const previous = images[previousImageIndex];
  const nextImageIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
  const next = images[nextImageIndex];

  const imageStyle = {
    boxShadow: '0 0 10px 0 #848790',
    marginRight: '3rem',
    marginLeft: '3rem',
  };

  return (
    <div>
      <img src={previous} alt="" style={{ ...imageStyle, float: 'right' }} onClick={previousImage} />
      <img src={currentImage} alt="" style={imageStyle} />
      <img src={next} alt="" style={{ ...imageStyle, float: 'left' }} onClick={nextImage} />
    </div>
  );
};

export default Card;
