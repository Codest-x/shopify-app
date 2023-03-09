import FormModalComponent from './FormModalComponent.jsx';

export default function FormModalPresenter({open, onClose}) {
  return <FormModalComponent open={open} onClose={onClose} />;
}
