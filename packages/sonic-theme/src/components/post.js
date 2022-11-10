import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

{
  //TODO CSS + Blocs Types et Personnages */;
}

const Post = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const category = state.source.category[post.categories[0]];

  return (
    <div>
      <Title>{post.title.rendered}</Title>
      <Category>Classe: {category.name}</Category>
      <Content dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      <BlockCharacters>
        <h3>Personnages</h3>
        {
          // Boucle sur tous les personnages
          Object.keys(state.source.post).map((item) => {
            const post = state.source.post[item];
            return (
              <div>
                <Link key={item.id} link={post.link}>
                  <td> {post.title.rendered}</td>
                </Link>
              </div>
            );
          })
        }
      </BlockCharacters>
      {/*//TODO Loop sur les catégories : Gentils & Méchants
      //TODO Ajouter useState>useRef>useEffect> */}
      <BlockTypes>
        <h3>Types</h3>
        {
          // Boucle sur toutes les catégories
          Object.keys(state.source.category).map((item) => {
            const category = state.source.category[item];
            return (
              <div>
                <Link key={item.id} link={category.link}>
                  <td>{category.name}</td>
                </Link>
              </div>
            );
          })
        }
      </BlockTypes>
    </div>
  );
};

export default connect(Post);

const Title = styled.h2`
  color: #fff;
  text-align: left;
  font-size: 1.6rem;
  text-transform: uppercase;
  background-color: #424242;
  padding: 2.2em 0 2.2em 1.6em;
  margin: 0;
  border-radius: 0.2em;
  font-family: Candara, sans-serif;
  font-style: italic;
`;

const Category = styled.h3`
  font-size: 25px;
  padding: 1.5em;
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    width: 50%;
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
`;

const BlockCharacters = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlockTypes = styled.div`
  display: flex;
  flex-direction: column;
`;
