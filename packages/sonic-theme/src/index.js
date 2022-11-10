import Root from "./components";

// ici on défini le composant Root du fichier components/index.js comme étant
// le composant racine du thème
const SonicTheme = {
  name: "sonic-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {},
  },
  actions: {
    theme: {},
  },
};

export default SonicTheme;
