import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

export const myContext = createContext();

const AppContext = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategory] = useState([]);
  const [ingredient, setIngredient] = useState([]);

  const fetchSearchMeals = useCallback((search) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => {
        setMeals(res.data.meals);
      });
  }, []);

  const fetchCategory = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        console.log(res.data.categories);
        setCategory(res.data.categories);
      });
  }, []);

  const fetchIngredients = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
      .then((res) => {
        console.log(res.data.meals, ingredient);
        setIngredient(res.data.meals, ingredient);
      });
  }, []);

  return (
    <myContext.Provider
      value={{
        fetchSearchMeals,
        meals,
        fetchCategory,
        categories,
        fetchIngredients,
        ingredient,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default AppContext;
