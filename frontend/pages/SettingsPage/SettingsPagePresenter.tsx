import SettingsPageComponent from './SettingsPageComponent';
import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const TABS = ['account', 'faq'];

export default function SettingsPagePresenter() {
  const {tab} = useParams<{tab: string}>();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = React.useState<number>(0);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const pagePrefix = '/settings';

  const handleOpenModal = () => setIsOpen(!isOpen);
  const handleTabChange = (index: number) => navigate(`${pagePrefix}/${TABS[index]}`)

  React.useEffect(() => {
    if (!tab) {
      setSelectedTab(0);
    } else if (!TABS.includes(tab)) {
      setSelectedTab(0);
    } else {
      setSelectedTab(TABS.indexOf(tab));
    }
  });

  return (
    <SettingsPageComponent
      isOpen={isOpen}
      handleOpenModal={handleOpenModal}
      selectedTab={selectedTab}
      handleTabChange={handleTabChange}
    />
  );
}
