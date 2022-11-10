import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

{
  /*//TODO Afficher les personnages par catégorie : Gentils ou Méchants*/
}

const Types = ({ state }) => {
  return (
    <div>
      <h1>Gentils ou Méchants{/*category.name*/}</h1>
    </div>
  );
};

export default connect(Types);
