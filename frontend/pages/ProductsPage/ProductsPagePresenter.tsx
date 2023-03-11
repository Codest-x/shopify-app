import ProductsPageComponent from './ProductsPageComponent';
import React from 'react';

export default function ProductsPagePresenter() {
  const thr1ftProducts: any[] = [];
  const [isOpen, setIsOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(!isOpen);
  };

  return (
    <ProductsPageComponent
      isOpen={isOpen}
      handleIsOpenModal={handleOpenModal}
      thr1ftProducts={thr1ftProducts}
    />
  );
}
