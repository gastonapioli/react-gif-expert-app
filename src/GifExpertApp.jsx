import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newValue) => {
    if (categories.includes(newValue)) return;

    setCategories([newValue, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* Input */}

      <AddCategory
        // setCategories={setCategories}
        onNewValue={onAddCategory}
      />

      {/* Listado de Gifs */}

      {categories.map((category) => (
        //en este caso se quita en la funcion de flecha el return y las llaves xq solo retorna un bloque
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif Item */}
    </>
  );
};
