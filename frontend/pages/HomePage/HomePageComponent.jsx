import {Page, Button, Text, ButtonGroup} from '@shopify/polaris';
import s from './HomePage.module.scss';
import {
  EnergyIconPink,
  EnergyIconPurple,
  ThumbUpIcon,
  MarketIcon,
} from '../../assets/icons/index.js';
import FormModalPresenter from '../../components/FormModalComponent/FormModalPresenter.jsx';

const DescriptionThr1ft = ({icon}) => {
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

export default function HomePageComponent({isOpen, handleCloseModal}) {
  return (
    <Page fullWidth>
      <FormModalPresenter open={isOpen} onClose={handleCloseModal} />
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
