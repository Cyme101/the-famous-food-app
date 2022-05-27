import { Fragment } from 'react';

import ketoMealsImage from '../../assets/keto-meals.png';
import classes from './Header.module.css';

const Header = (props) => {
  return <Fragment>
    <header className={classes.header}>
      <h1>Keto Meals</h1>
      <button>Cart</button>
    </header>
    <div className={classes['main-image']}>
      <img src={ketoMealsImage} alt="Awesome keto meals" />
    </div>
  </Fragment>
};

export default Header;
