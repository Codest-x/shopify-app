import SettingsPageComponent from './SettingsPageComponent';
import React from 'react';

export default function SettingsPagePresenter() {
  const [selectedTab, setSelectedTab] = React.useState<number>(0);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleOpenModal = () => setIsOpen(!isOpen);

  const handleTabChange = (index: number) => setSelectedTab(index);

  return (
    <SettingsPageComponent
      isOpen={isOpen}
      handleOpenModal={handleOpenModal}
      selectedTab={selectedTab}
      handleTabChange={handleTabChange}
    />
  );
}
