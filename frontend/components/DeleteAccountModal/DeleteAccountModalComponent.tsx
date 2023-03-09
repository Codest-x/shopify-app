import {ChoiceList, Modal} from '@shopify/polaris';
import React from 'react';
import Input from '../Input/Input';
import s from './DeleteAccounModal.module.scss';
export default function DeleteAccountModalComponent({
  open,
  onClose,
  selected,
  handleChange,
}: {
  open: boolean;
  onClose: () => void;
  selected: string[];
  handleChange: (selected: string[]) => void;
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Why you are deleting your account ?."
      primaryAction={{
        content: 'Submit',
        onAction: onClose,
      }}
      secondaryActions={[
        {
          content: 'Close',
          onAction: onClose,
        },
      ]}>
      <Modal.Section>
        <div className={s['content']}>
          <ChoiceList
            title=""
            choices={[
              {label: 'Not useful', value: 'not'},
              {label: 'Not useful', value: 'not-two'},
              {label: 'Other', value: 'other'},
            ]}
            selected={selected}
            onChange={handleChange}
          />
          {selected.includes('other') && (
            <Input fullWidth label={'Specify What'} autoComplete={'off'} />
          )}
        </div>
      </Modal.Section>
    </Modal>
  );
}
