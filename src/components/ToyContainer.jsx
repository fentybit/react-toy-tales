import React from "react";
import ToyCard from "./ToyCard";

const ToyContainer = (props) => {
  const allToys = props.toys.map((toy) => (
    <ToyCard
      key={toy.id}
      id={toy.id}
      name={toy.name}
      image={toy.image}
      likes={toy.likes}
      deleteToy={props.deleteToy}
      updateToy={props.updateToy}
    />
  ));

  return <div id="toy-collection">{allToys}</div>;
};

export default ToyContainer;
