import {BrowserRouter} from 'react-router-dom';
import {NavigationMenu} from '@shopify/app-bridge-react';
import {AppBridgeProvider, QueryProvider, PolarisProvider} from '../providers';
import MainRouter from '../routing/MainRouter.jsx';

export default function App() {
  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <QueryProvider>
            <NavigationMenu
              navigationLinks={[
                {
                  label: 'Home',
                  url: '/',
                },
                {
                  label: 'Settings',
                  url: '/settings',
                },
              ]}
            />
            <MainRouter />
          </QueryProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
