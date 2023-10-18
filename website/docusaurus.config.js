// @ts-check
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

  // @TODO: This should error!
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          versions: {
            current: {
              label: "(local build)",
            },
          },
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
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/sponsor", label: "Sponsor", position: "left" },
          // Right
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
          },
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
            title: "Spotlight",
            items: [
              {
                label: "Users",
                to: "/users",
              },
              {
                label: "Testimonials",
                to: "/testimonials",
              },
              {
                label: "Whos Hiring?",
                to: "/jobs",
              },
              {
                label: "Media",
                to: "/media",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Slack",
                href: "https://pantsbuild.slack.com/",
              },
              {
                label: "GitHub",
                href: "https://github.com/pantsbuild/pants",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/pantsbuild",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@pantsbuild",
              },
              {
                label: "Mailing List",
                href: "https://groups.google.com/forum/#!forum/pants-devel",
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
                label: "Sponsor",
                href: "/sponsorship",
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
