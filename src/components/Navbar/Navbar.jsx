import style from './style.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navbarHeader}>
        <h1>Meal Recipe</h1>
      </div>
      <div className={style.navbarLinks}>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/category">
            <li>Category</li>
          </Link>
          <Link to="/ingredients">
            <li>Ingredients</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
