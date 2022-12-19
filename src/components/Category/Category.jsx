import { myContext } from '../Context/Context';
import { useEffect, useContext } from 'react';
import style from './style.module.css';

const Category = () => {
  const { fetchCategory, categories } = useContext(myContext);

  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);
  return (
    <div className={style.mealCategory}>
      {categories.map((category) => (
        <div key={category.idCategory} className={style.category}>
          <img
            src={category.strCategoryThumb}
            alt="#"
            className={style.categoryPic}
          />
          <h3>{category.strCategory}</h3>
        </div>
      ))}
    </div>
  );
};

export default Category;
