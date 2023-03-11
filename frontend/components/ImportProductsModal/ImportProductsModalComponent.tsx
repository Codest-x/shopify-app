import {IndexTable, Modal, Text, Thumbnail} from '@shopify/polaris';
import React from 'react';
import {SelectionType} from '@shopify/polaris/build/ts/latest/src/utilities/index-provider';
import {Range} from '@shopify/polaris/build/ts/latest/src/utilities/index-provider/types';
import s from './ImportProductsModal.module.scss';
import PlaceHolder from '../../assets/placeholder.jpeg'
export default function ImportProductsModalComponent({
  open,
  onClose,
  products,
  resourceName,
  handleSelectionChange,
  selectedResources,
  allResourcesSelected,
  isLoading,
}: {
  open: boolean;
  onClose: () => void;
  products?: any[];
  resourceName?: {singular: string; plural: string};
  handleSelectionChange?: (
    selectionType: SelectionType,
    toggleType: boolean,
    selection?: string | Range,
  ) => void;
  selectedResources: string[];
  allResourcesSelected?: boolean;
  isLoading: boolean;
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="My Store Products"
      primaryAction={{
        content: 'Import',
        onAction: onClose,
      }}
      secondaryActions={[
        {
          content: 'Close',
          onAction: onClose,
        },
      ]}>
      <Modal.Section>
        <IndexTable
          loading={isLoading}
          resourceName={resourceName}
          itemCount={products?.length || 0}
          selectedItemsCount={
            allResourcesSelected ? 'All' : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          headings={[{id: 'name', title: 'Name'}]}>
          {products?.map(({id, title, images}, index) => (
            <IndexTable.Row
              id={id}
              key={id}
              selected={selectedResources.includes(id)}
              position={index}>
              <IndexTable.Cell className={s['productName']}>
                <Thumbnail
                  source={
                    images?.length > 0
                      ? images[0].src
                      : PlaceHolder
                  }
                  alt={`${title}_img`}
                />
                <Text fontWeight="bold" as="span">
                  {title}
                </Text>
              </IndexTable.Cell>
            </IndexTable.Row>
          ))}
        </IndexTable>
      </Modal.Section>
    </Modal>
  );
}
