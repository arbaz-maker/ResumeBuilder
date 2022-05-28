import { Outlet } from 'react-router-dom';
import SideMenuBar from '../sidebar/Sidebar';
import styles from './Layout.scss';

export default function PageLayout() {
  return (
    <>
        <SideMenuBar />
        <section className={styles.container}>
          <Outlet />
        </section>
        </>
  );
}