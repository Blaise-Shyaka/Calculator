import { Link } from 'react-router-dom';
import * as navStyles from '../styles/nav.module.css';

export default function Navigation() {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.logo}>
        <p>Math Magicians</p>
      </div>
      <div className={navStyles.links}>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quotes">Quotes</Link>
      </div>
    </nav>
  );
}
