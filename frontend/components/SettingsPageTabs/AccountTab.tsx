import {Button, Columns, Page, Text, TextField} from '@shopify/polaris';
import s from './SettingsPageTabs.module.scss';
import Input from '../Input/Input';

export default function AccountTab({handleAction}: {handleAction: () => void}) {
  return (
    <Page fullWidth>
      <Columns gap={'8'}>
        <Input
          tooltip={
            'You can find your Thr1ft Store Token in your Thr1ft account settings page.'
          }
          autoComplete={'off'}
          label={'Thr1ft Store Token'}
          action={<Button primary>Connect Store</Button>}
          requiredIndicator
          clearButton
        />
        <div className={s['textContainer']}>
          <Text fontWeight={'bold'} variant={'bodyMd'} as={'h2'}>
            Request Delete Store
          </Text>
          <p>
            Clicking the button below will send a request to remove your store,
            all your products and information from will be removed from Thr1ft.
          </p>
          <Button onClick={handleAction} destructive>Delete Store</Button>
        </div>
      </Columns>
    </Page>
  );
}
