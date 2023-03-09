import React from 'react';
import DeleteAccountModalComponent from './DeleteAccountModalComponent';

export default function DeleteAccountModalPresenter({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const initial_value = ['not']
  const [selected, setSelected] = React.useState(initial_value);

  const handleChange = (selected: string[]) => setSelected(selected);

  return (
    <DeleteAccountModalComponent
      selected={selected}
      handleChange={handleChange}
      open={open}
      onClose={() => {
        onClose()
        setSelected(initial_value)
      }}
    />
  );
}
