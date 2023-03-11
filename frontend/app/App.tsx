import {BrowserRouter} from 'react-router-dom';
import {NavigationMenu} from '@shopify/app-bridge-react';
import {AppBridgeProvider, QueryProvider, PolarisProvider} from '../providers';
import MainRouter from '../routing/MainRouter';

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
                  destination: '/',
                },
                {
                  label: 'Products',
                  destination: '/products',
                },
                {
                  label: 'Settings',
                  destination: '/settings/account',
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
