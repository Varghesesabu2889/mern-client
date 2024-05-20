import React from 'react';
import CardFeature from '../components/CardFeature';

const tourList = () => {
  const tours = [
    { image: '', name: 'tour 1', category: 'Category 1' },
    { image: 'path/to/image2.jpg', name: 'tour 2', category: 'Category 2' },
    // Add more tours as needed
  ];

  return (
    <div className='flex justify-center gap-4'>
      {tours.map((tour, index) => (
        <CardFeature key={index} {...tour} />
      ))}
    </div>
  );
};

export default tourList;
