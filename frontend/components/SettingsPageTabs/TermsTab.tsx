import {Page} from '@shopify/polaris';
import s from './SettingsPageTabs.module.scss';
import React from 'react';

export default function TermsTab() {
  return (
    <Page fullWidth>
      <iframe
        allowTransparency={true}
        className={s['iframe']}
        loading={'lazy'}
        src={'https://www.thr1ft.com/terms-and-conditions'}
      />
    </Page>
  );
}
