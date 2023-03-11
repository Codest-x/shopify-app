import {
  Button,
  ButtonGroup,
  Columns,
  IndexTable,
  LegacyCard,
  Page,
  Text,
  Thumbnail,
  useIndexResourceState,
} from '@shopify/polaris';
import s from './ProductsPage.module.scss';
import {Link} from 'react-router-dom';
import LogoBlack from '../../assets/logo-black.svg';
import {ImportProductsModalPresenter} from '../../components';
import PlaceHolder from '../../assets/placeholder.jpeg';
import Thr1ftLogo from '../../assets/logo-black.svg';
interface Props {
  thr1ftProducts: any[];
  isOpen: boolean;
  handleIsOpenModal: () => void;
}

const EmptyComponent = ({
  handleIsOpenModal,
}: Pick<Props, 'handleIsOpenModal'>) => {
  return (
    <LegacyCard sectioned>
      <div className={s['emptyCard']}>
        <img
          src={
            'https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png'
          }
          alt={'empty_png'}
        />
        <Text fontWeight={'bold'} variant={'headingXl'} as={'h2'}>
          Manage your <img src={Thr1ftLogo} alt={'thr1ft_logo'} /> Inventory
        </Text>
        <Text as={'p'}>
          You don't have any products in your Thr1ft inventory, start importing
          products.
        </Text>
        <ButtonGroup>
          <Link className={s['link']} to={'/settings'}>
            Learn More
          </Link>
          <Button onClick={handleIsOpenModal} primary>
            Import Products
          </Button>
        </ButtonGroup>
      </div>
    </LegacyCard>
  );
};

export default function ProductsPageComponent({
  thr1ftProducts,
  isOpen,
  handleIsOpenModal,
}: Props) {
  if (thr1ftProducts.length === 0) {
    return (
      <Page fullWidth>
        <ImportProductsModalPresenter
          open={isOpen}
          onClose={handleIsOpenModal}
        />
        <EmptyComponent handleIsOpenModal={handleIsOpenModal} />
      </Page>
    );
  }

  const resourceName = {
    singular: 'Product',
    plural: 'Products',
  };

  const {selectedResources, allResourcesSelected, handleSelectionChange} =
    useIndexResourceState(thr1ftProducts);

  return (
    <Page fullWidth>
      <ImportProductsModalPresenter open={isOpen} onClose={handleIsOpenModal} />
      <Columns gap={'6'}>
        <div className={s['header']}>
          <div className={s['logo']}>
            <img src={LogoBlack} alt={'logo'} />
          </div>
          <ButtonGroup>
            <Button>Re-Sync Products</Button>
            <Button onClick={handleIsOpenModal} primary>
              Add Products
            </Button>
          </ButtonGroup>
        </div>
        <LegacyCard>
          <IndexTable
            resourceName={resourceName}
            itemCount={thr1ftProducts?.length || 0}
            selectedItemsCount={
              allResourcesSelected ? 'All' : selectedResources.length
            }
            onSelectionChange={handleSelectionChange}
            headings={[
              {
                id: 'name',
                title: 'Name',
              },
              {
                id: 'price',
                title: 'Price',
              },
            ]}>
            {thr1ftProducts?.map(({id, title, price, images}, index) => (
              <IndexTable.Row
                id={id}
                key={id}
                selected={selectedResources.includes(id)}
                position={index}>
                <IndexTable.Cell className={s['productName']}>
                  <Thumbnail
                    source={images?.length > 0 ? images[0]?.src : PlaceHolder}
                    alt={`${title}_img`}
                  />
                  <Text fontWeight="bold" as="span">
                    {title}
                  </Text>
                </IndexTable.Cell>
                <IndexTable.Cell>
                  <Text as="span" numeric>
                    {price}
                  </Text>
                </IndexTable.Cell>
              </IndexTable.Row>
            ))}
          </IndexTable>
        </LegacyCard>
      </Columns>
    </Page>
  );
}
