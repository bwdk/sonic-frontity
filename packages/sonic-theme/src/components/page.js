import React from "react";
import { connect, styled } from "frontity";

{
  /* //TODO récupérer les images + textes créateurs */
}

const Page = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  return (
    <div>
      <Title>{page.title.rendered}</Title>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </div>
  );
};

export default connect(Page);

const Title = styled.h2`
  color: #fff;
  text-align: left;
  font-size: 30px;
  text-transform: uppercase;
  background-color: #424242;
  padding: 1.5em;
  margin: 0;
  border-radius: 0.4em;
  font-family: Arial Narrow, Arial, sans-serif;
  font-style: italic;
`;
