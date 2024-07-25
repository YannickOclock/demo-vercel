import './Root.scss';
import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import Header from '../components/App/Header/Header';
import Footer from '../components/App/Footer/Footer';
import useAppStore from '../store/Store';

export default function Root() {
  const { darkTheme } = useAppStore();

  return (
    <div className={clsx('container', darkTheme && 'dark')}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
