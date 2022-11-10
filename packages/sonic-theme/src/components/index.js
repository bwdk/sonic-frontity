import React from "react";
import { connect, Global, css, styled } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";
import Page from "./page";
import Types from "./types";

// Le composant App est le composant racine du thème.
const Root = ({ state }) => {
  // On récupère les données de la page courante dans `state.source`.
  const data = state.source.get(state.router.link);

  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
          }
        `}
      />
      <Header>
        <span>SONIC TEAM</span>
        <nav>
          <Link link="/">Home</Link>
          <br />
          <Link link="/creators">Creators</Link>
        </nav>
      </Header>
      {/*<p>Current URL: {state.router.link}</p>*/}
      <Main>
        <Switch>
          <List when={data.isPostArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
          <Types when={data.isCategory} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Root);

const Header = styled.header`
  background-color: #007bff;
`;

const Main = styled.main`
  max-width: 1200px;
  padding: 1em;
  margin: auto;
  display: flex;

  img {
    max-width: 100%;
    height: auto;
  }
`;
