import * as React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";

{
  //TODO: CSS Tableau + images personnages
  //TODO: Tester sans useRef et useState*/;
}

const List = ({ state }) => {
  const data = state.source.get(state.router.link);

  /* On utilise useState pour définir une variable page qui contiendra la state courante */
  const [page, setPage] = React.useState("");

  /* Déclaration de useRef qui va permettre via le useEffect 
  de sauvegarder les items de la page courante dans le state */
  //! const previousPath = React.useRef("");

  /* On utilise useEffect pour sauvegarder les items de la page courante */
  React.useEffect(() => {
    previousPath.current = page;
  }, [page]);

  return (
    <div>
      <>
        <table>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Nom</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
          {data.items.map((item) => {
            const post = state.source[item.type][item.id];
            return (
              <tr>
                <td>{item.id}</td>
                <td>image ici</td>
                {/* Au clic sur le lien et via le hook useEffect on va
                pouvoir accéder au state de la page précédente */}
                <Link
                  key={item.id}
                  link={post.link}
                  onClick={() => setPage(item.id)}
                >
                  <td> {post.title.rendered}</td>
                </Link>
                <td>type ici</td>
                <td>description ici</td>
              </tr>
            );
          })}
        </table>
      </>
    </div>
  );
};

export default connect(List);
