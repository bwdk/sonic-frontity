const settings = {
  name: "sonic-front",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    // {
    //   name: "@frontity/mars-theme",
    //   state: {
    //     theme: {
    //       menu: [
    //         ["Home", "/"],
    //         ["Nature", "/category/nature/"],
    //         ["Travel", "/category/travel/"],
    //         ["Japan", "/tag/japan/"],
    //         ["About Us", "/about-us/"],
    //       ],
    //       featured: {
    //         showOnList: false,
    //         showOnPost: false,
    //       },
    //     },
    //   },
    // },
    {
      name: "sonic-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "http://sonic-back.test",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
