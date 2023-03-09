import {Page, Tabs} from '@shopify/polaris';
import React from 'react';
import {TabDescriptor} from '@shopify/polaris/build/ts/latest/src/components/Tabs/types';
import {AccountTab, FAQTab} from '../../components/SettingsPageTabs';
import DeleteAccountModalPresenter from '../../components/DeleteAccountModal/DeleteAccountModalPresenter';

export default function SettingsPageComponent({
  selectedTab,
  handleTabChange,
  isOpen,
  handleOpenModal,
}: {
  selectedTab: number;
  handleTabChange: (index: number) => void;
  isOpen: boolean;
  handleOpenModal: () => void;
}) {
  const tabs: TabDescriptor[] = [
    {
      id: 'account-settings',
      content: 'Account Settings',
      accessibilityLabel: 'Account Connection',
    },
    {
      id: 'faq',
      content: 'FAQ',
      accessibilityLabel: 'FAQ'
    }
  ];

  const TabContent = () => {
    switch (selectedTab) {
      case 0:
        return <AccountTab handleAction={handleOpenModal} />;
      case 1:
        return <FAQTab />
      default:
        return null;
    }
  };

  return (
    <Page fullWidth>
      <DeleteAccountModalPresenter open={isOpen} onClose={handleOpenModal} />
      <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange}>
        <TabContent />
      </Tabs>
    </Page>
  );
}
