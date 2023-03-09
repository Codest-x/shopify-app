import {Modal, Text} from '@shopify/polaris';
import React from 'react';
export default function FormModalComponent({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Apply to be a seller"
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
        <Text variant={'headingXl'} as={'h2'}>
          Complete this Form
        </Text>
      </Modal.Section>
    </Modal>
  );
}
