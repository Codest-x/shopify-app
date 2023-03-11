import ImportProductsModalComponent from './ImportProductsModalComponent';
import {useIndexResourceState} from '@shopify/polaris';
import {useAppQuery} from '../../hooks';
import React from "react";

export default function ImportProductsModalPresenter({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [isLoading, setIsLoading] = React.useState(true);
  const resourceName = {
    singular: 'Product',
    plural: 'Products',
  };

  const {data} = useAppQuery({
    url: '/api/products',
    reactQueryOptions: {
      onSuccess: () => {
        setIsLoading(false);
      }
    }
  });

  const products = React.useMemo(() => data?.error ? [] : data, [data]);

  const {selectedResources, allResourcesSelected, handleSelectionChange} =
    useIndexResourceState(products);

  return (
    <ImportProductsModalComponent
      products={products}
      resourceName={resourceName}
      open={open}
      onClose={onClose}
      handleSelectionChange={handleSelectionChange}
      allResourcesSelected={allResourcesSelected}
      selectedResources={selectedResources}
      isLoading={isLoading}
    />
  );
}
