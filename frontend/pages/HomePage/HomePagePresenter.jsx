import React from 'react';
import HomePageComponent from './HomePageComponent.jsx';

export default function HomePagePresenter() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleCloseModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HomePageComponent isOpen={isOpen} handleCloseModal={handleCloseModal} />
  );
}
