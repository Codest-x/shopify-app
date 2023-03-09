import React from 'react';
import FormModalComponent from './FormModalComponent';

export default function FormModalPresenter({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return <FormModalComponent open={open} onClose={onClose} />;
}
