import React from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { LoadingComponent } from "./LoadingComponent";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      <LoadingComponent isLoading={isLoading}/>


      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image} //con esto estoy esparciendo todas las propiedades de image en lugar de hacer una x una como image.title, image.url
          />
        ))}
      </div>
    </>
  );
};
