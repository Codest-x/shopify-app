import {Page, Button, Text, ButtonGroup, Banner} from '@shopify/polaris';
import s from './HomePage.module.scss';
import {
  EnergyIconPink,
  EnergyIconPurple,
  ThumbUpIcon,
  MarketIcon,
} from '../../assets/icons/index';
import FormSellerPresenter from '../../components/FormSellerModal/FormSellerPresenter';
import React from 'react';
const DescriptionThr1ft = ({icon}: {icon: React.ReactNode}) => {
  return (
    <div className={s['textContainer']}>
      {icon}
      <div className={s['right']}>
        <Text variant={'headingXl'} as={'h1'}>
          Largest sustainability community
        </Text>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          augue ipsum, accumsan nec turpis vel, hendrerit vestibulum lorem.
          Maecenas ipsum turpis, euismod sit amet pellentesque non, pellentesque
          at dolor.
        </p>
      </div>
    </div>
  );
};

export default function HomePageComponent({
  isOpen,
  handleCloseModal,
  pingResponse,
}: {
  isOpen: boolean;
  handleCloseModal: () => void;
  pingResponse?: {
    message: string;
  };
}) {
  return (
    <Page fullWidth>
      <FormSellerPresenter open={isOpen} onClose={handleCloseModal} />
      <Banner
        status={pingResponse?.message ? 'success' : 'critical'}
        title="API Status"
        onDismiss={() => {}}>
        {pingResponse?.message
          ? 'The API is working fine'
          : 'We have some problems with the API'}
      </Banner>
      <div className={s['container']}>
        <Text fontWeight={'bold'} variant={'heading3xl'} as={'h1'}>
          Welcome To Thr1ft Marketplace
        </Text>
        <div className={s['information']}>
          <div className={s['left']}>
            <Text variant={'headingXl'} as={'h1'}>
              Why join Thr1ft as a seller ?
            </Text>
            <DescriptionThr1ft icon={<EnergyIconPink />} />
            <DescriptionThr1ft icon={<ThumbUpIcon />} />
            <DescriptionThr1ft icon={<EnergyIconPurple />} />
            <ButtonGroup>
              <Button onClick={handleCloseModal} primary>
                Apply Now
              </Button>
              <Button>Connect Account</Button>
            </ButtonGroup>
          </div>
          <MarketIcon />
        </div>
      </div>
    </Page>
  );
}
