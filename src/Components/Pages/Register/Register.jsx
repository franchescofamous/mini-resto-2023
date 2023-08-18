import React, { useState } from "react";
import style from "./Register.module.css";
import { useNavigate } from "react-router-dom";

const Register = ({ setMealList, mealList }) => {
  let [showMealForm, setShowMealForm] = useState(false);
  let [showDrinkForm, setShowDrinkForm] = useState(false);
  let [mealNameInput, setMealNameInput] = useState("");
  let [mealDescriptionInput, setMealDescriptionInput] = useState("");
  let [mealPriceInput, setMealPriceInput] = useState("");
  let navigate = useNavigate();
  let hanDleShowDrinkForm = () => {
    setShowDrinkForm((prevState) => !prevState);
  };
  let hanDleShowMealForm = () => {
    setShowMealForm((prevState) => !prevState);
  };

  let mealForm = showMealForm && (
    <form
      className={style.meal}
      onSubmit={(e) => {
        e.preventDefault();
        let meal = {
          nom: mealNameInput,
          description: mealDescriptionInput,
          prix: Number(mealPriceInput),
        };
        console.log(meal);
        let newList = [...mealList];
        newList.push(meal);
        setMealList(newList);
        navigate("/menu");
      }}
    >
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="nom">Nom du plat:</label>
            </td>
            <td>
              <input
                type="text"
                name=""
                id="nom"
                onInput={(e) => {
                  setMealNameInput(e.target.value);
                  console.log(mealNameInput);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="prix">Prix du plat:</label>
            </td>
            <td>
              <input
                type="number"
                name=""
                id="prix"
                onInput={(e) => setMealPriceInput(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="desc">Description du plat:</label>
            </td>
            <td>
              <input
                type="text"
                name=""
                id="desc"
                onInput={(e) => setMealDescriptionInput(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="submit">Valider</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );

  let drinkForm = showDrinkForm && (
    <form className={style.drink}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="nomBoisson">Nom de la boisson:</label>
            </td>
            <td>
              <input type="text" name="" id="nomBoisson" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="prixBoisson">Prix de la boisson:</label>
            </td>
            <td>
              <input type="number" name="" id="prixBoisson" />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="submit">Valider</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
  return (
    <div className={style.register}>
      <h1>Enregistrer Menu</h1>
      <section>
        <section className={style.register__actions}>
          <button onClick={hanDleShowMealForm}>Ajouter Plat</button>
          <button onClick={hanDleShowDrinkForm}>Ajouter Boisson</button>
        </section>
        <section>
          <section>
            <h2>Enregistrer un nouveau plats</h2>
            {mealForm}
          </section>
          <section>
            <h2>Enregister une nouvelle boisson</h2>
            {drinkForm}
          </section>
        </section>
      </section>
    </div>
  );
};

export default Register;
