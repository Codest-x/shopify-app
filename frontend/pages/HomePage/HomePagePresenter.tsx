import React from 'react';
import HomePageComponent from './HomePageComponent';
import {useAppQuery} from '../../hooks';

export default function HomePagePresenter() {
  const [isOpen, setIsOpen] = React.useState(false);
  const {data} = useAppQuery({
    url: '/api/ping',
  });

  const handleCloseModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HomePageComponent
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      pingResponse={data}
    />
  );
}
