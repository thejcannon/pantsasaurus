// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Pantsbuild",
  tagline: "The ergonomic build system",
  favicon: "img/favicon.ico",

  url: "https://thejcannon.github.io",
  baseUrl: "/pantsasaurus/",
  trailingSlash: false,

  organizationName: "pantsbuild",
  projectName: "pants",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/thejcannon/pantsasaurus/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/thejcannon/pantsasaurus/edit/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "reference",
        path: "reference",
        routeBasePath: "reference",
        sidebarPath: require.resolve("./sidebarsReference.js"),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social-card.png",
      navbar: {
        title: "Pantsbuild",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "docsSidebar",
            label: "Docs",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "referenceSidebar",
            label: "Reference",
            docsPluginId: 'reference',
          },
          { to: "/404", label: "Community", position: "left" },
          { to: "/404", label: "Testimonials", position: "left" },
          { to: "/404", label: "Users", position: "left" },
          { to: "/404", label: "Jobs", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/pantsbuild/pants",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pants project contributors.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
