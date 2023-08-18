import Menu from "./Components/Pages/Menu/Menu";
import Register from "./Components/Pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
const App = () => {
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

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Register setMealList={setMealList} mealList={mealList} />}
        />
        <Route path="/menu" element={<Menu mealList={mealList} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
