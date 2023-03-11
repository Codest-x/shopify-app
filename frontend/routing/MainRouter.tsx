import {Routes, Route} from 'react-router-dom';
import {
  SettingsPagePresenter,
  HomePagePresenter,
  ProductsPagePresenter,
} from '../pages';

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePagePresenter />} />
      <Route path="/settings">
        <Route path="" element={<SettingsPagePresenter />} />
        <Route path=":tab" element={<SettingsPagePresenter />} />
      </Route>
      <Route path="/products" element={<ProductsPagePresenter />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}
