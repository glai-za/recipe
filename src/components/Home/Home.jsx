import style from './style.module.css';
import { useState, useCallback, useContext } from 'react';
import { myContext } from '../Context/Context';

const Home = () => {
  const [search, setSearch] = useState('');

  const { fetchSearchMeals, meals } = useContext(myContext);

  const fetchFood = useCallback(() => {
    fetchSearchMeals(search);
  }, [search, fetchSearchMeals]);

  return (
    <div className={style.home}>
      <div className={style.searchBar}>
        <input
          className={style.inputBox}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={style.searchButton} onClick={fetchFood}>
          search
        </button>
      </div>

      <div className={style.mealsBox}>
        {meals ? (
          meals.map((meal) => (
            <div className={style.mealChoice} key={meal.idMeal}>
              <img src={meal.strMealThumb} alt="#" />
              <h3>{meal.strMeal}</h3>
            </div>
          ))
        ) : (
          <h4>Search not found!</h4>
        )}
      </div>
    </div>
  );
};

export default Home;
