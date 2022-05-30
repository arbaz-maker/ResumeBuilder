import { Link } from 'react-router-dom';
import styles from './Sidebar.scss';

export default function SideMenuBar() {
  return (
    <div className={styles.container}>
    <div>
        <aside>
          <nav>
            <ul>
              <li>
                <Link to="/">Redux counter</Link>
              </li>
              <li>
                <Link to="/modal-example">Modal Example</Link>
              </li>
              <li>
                <Link to="/todo-use-state">Todo useState</Link>
              </li>
              <li>
                <Link to="/todo-use-reducer">Todo use reducer</Link>
              </li>
              <li>
                <Link to="/todo-saga-fetch">Fetch todo saga</Link>
              </li>
              <li>
                <Link to="/posts-saga">Fetch posts saga</Link>
              </li>
              <li>
                <Link to="/i18n-example">i18n Example</Link>
              </li>
            </ul>
          </nav>
        </aside>
        </div></div>
  );
}