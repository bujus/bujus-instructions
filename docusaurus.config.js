// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bujus Anleitung",
  tagline: "",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://instructions.bujus.de",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "juliushuck", // Usually your GitHub org/user name.
  projectName: "bujus-instructions", // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
      },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Bujus Anleitung",
        logo: {
          alt: "Bujus Logo",
          src: "img/logo.png",
        },
        items: [
          {
            to: "https://bujus.de",
            label: "Webseite",
            position: "left",
          },
          {
            to: "https://bujus.de/#contact-section",
            label: "Kontakt / Hilfe",
            position: "left",
          },
          {
            to: "https://school-app.bujus.de",
            label: "Schul-App",
            position: "right",
          },
          {
            type: "dropdown",
            label: "Helfer-App",
            position: "right",
            items: [
              {
                to: "https://apps.apple.com/de/app/bujus-helfer/id1638017365",
                label: "Apple AppStore",
              },
              {
                to: "https://play.google.com/store/apps/details?id=de.bujus.helper_app",
                label: "Google PlayStore",
              },
            ],
          },
        ],
      },
      // footer: {
      //   style: "dark",
      //   links: [
      //     {
      //       title: "Docs",
      //       items: [
      //         {
      //           label: "Tutorial",
      //           to: "/docs/intro",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Community",
      //       items: [
      //         {
      //           label: "Stack Overflow",
      //           href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //         },
      //         {
      //           label: "Discord",
      //           href: "https://discordapp.com/invite/docusaurus",
      //         },
      //         {
      //           label: "Twitter",
      //           href: "https://twitter.com/docusaurus",
      //         },
      //       ],
      //     },
      //     {
      //       title: "More",
      //       items: [
      //         {
      //           label: "Blog",
      //           to: "/blog",
      //         },
      //         {
      //           label: "GitHub",
      //           href: "https://github.com/facebook/docusaurus",
      //         },
      //       ],
      //     },
      //   ],
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        docsRouteBasePath: "/",
        language: ["de"],
        highlightSearchTermsOnTargetPage: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],
};

module.exports = config;
