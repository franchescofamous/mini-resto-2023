import { useState } from "react";
import style from "./Menu.module.css";

const Menu = () => {
  let [mealList, setMealList] = useState([
    {
      nom: "spagheti Bolognaise",
      description: "oate viande haché",
      prix: 3500,
    },
    { nom: "Pizza", description: "fromage,viande hachée", prix: 5000 },
    { nom: "Burger", description: "fromage,viande", prix: 1500 },
    {
      nom: "frites Au Poulet",
      description: "pomme de terre, poulet",
      prix: 3500,
    },
  ]);
  let [drinkList, setList] = useState([
    { nom: "Coca", prix: 1000 },
    { nom: "sprite", prix: 1000 },
    { nom: "Malta", prix: 1200 },
    { nom: "Racine", prix: 1500 },
  ]);

  let myMealList = mealList.map((meal, indice) => {
    return (
      <article className={style.meals__card} key={indice}>
        <aside className={style.meals__card__image}></aside>
        <aside>
          <span>Nom: {meal.nom} </span>
        </aside>
        <aside className={style.meals__card__description}>
          <span> Description: {meal.description}</span>
        </aside>
        <aside>
          <span>Prix: {meal.prix} </span>
        </aside>
      </article>
    );
  });
  let myDrinkList = drinkList.map((drink, indice) => {
    return (
      <article className={style.drinks__card}>
        <aside className={style.drinks__card__image}></aside>
        <aside>
          <span>Nom: {drink.nom} </span>
        </aside>
        <aside>
          <span>Prix: {drink.prix} </span>
        </aside>
      </article>
    );
  });
  return (
    <div>
      <header className={style.header}>
        <h2>MERN STACK</h2>
      </header>
      <section>
        <h2 className={style.pageHeading}>Notre Menu</h2>
        <section className={style.meals}>
          <h2 className={style.meals__heading}>Plats</h2>
          <section className={style.meals__list}>{myMealList}</section>
        </section>
        <section className={style.drinks}>
          <h2 className={style.drinks__heading}>Boissons</h2>
          <section className={style.drinks__list}>{myDrinkList}</section>
        </section>
      </section>
    </div>
  );
};

export default Menu;
