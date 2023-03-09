import React from 'react';
import FormSellerComponent from './FormSellerComponent';

export default function FormSellerPresenter({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return <FormSellerComponent open={open} onClose={onClose} />;
}
