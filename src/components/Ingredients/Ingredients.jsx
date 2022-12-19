import { myContext } from '../Context/Context';
import { useEffect, useContext } from 'react';
import style from './style.module.css';

const Ingredients = () => {
  const { fetchIngredients, ingredient } = useContext(myContext);

  useEffect(() => {
    fetchIngredients();
  }, [fetchIngredients]);
  return (
    <div className={style.mealBox}>
      {ingredient.map((ingredients) => (
        <div key={ingredients.idIngredient} className={style.ingredients}>
          <div>
            <h2>{ingredients.strIngredient}</h2>
          </div>
          <div className={style.ingredientBox}>
            <h3>{ingredients.strDescription}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
