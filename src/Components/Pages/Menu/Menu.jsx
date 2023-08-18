import React from "react";
import style from "./Menu.module.css";

const Menu = () => {
  return (
    <div>
      <header className={style.header}>
        <h2>MERN STACK</h2>
      </header>
      <section>
        <h2 className={style.pageHeading}>Notre Menu</h2>
        <section className={style.meals}>
          <h2 className={style.meals__heading}>Plats</h2>
          <section className={style.meals__list}>
            <article>
              <aside></aside>
              <aside>
                <span>Nom: </span>
              </aside>
              <aside>
                <span> Description:</span>
              </aside>
              <aside>
                <span>Prix</span>
              </aside>
            </article>
          </section>
        </section>
        <section className={style.drinks}>
          <h2 className={style.drinks__heading}>Boissons</h2>
          <section className={style.drinks__list}></section>
        </section>
      </section>
    </div>
  );
};

export default Menu;
