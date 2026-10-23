// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Shown in the footer so a deploy can be confirmed at a glance: the date this build ran
// and the commit it was built from (GITHUB_SHA is set by the deploy workflow).
const buildDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Chicago',
});
const buildCommit = (process.env.GITHUB_SHA || 'local').slice(0, 7);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ManageMemberships Knowledge Base',
  tagline: '',
  favicon: 'img/favicon.ico',
  // Builds each page as /path/index.html: the S3 website origin serves that for /path/ (and redirects /path there).
  // With false it built /path.html, which S3 never serves for /path, so every direct link to a doc 404'd.
  trailingSlash: true,
  // Set the production url of your site here
  url: 'https://help.managememberships.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ManageMemberships', // Usually your GitHub org/user name.
  projectName: 'ManageMemberships', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({ 
      algolia: {
        appId: '93ROKAFR6E',
        apiKey: '62c1a1f61ea38840160cc6271da06fcb',
        indexName: 'help-managememberships',
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ManageMemberships',
        logo: {
          alt: 'ManageMemberships',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guide',
          },
          {
            to: '/faq', // 👈 This links to src/pages/faq.mdx
            label: 'FAQ',
            position: 'left',
          },
          {
            to: '/changelog', // 👈 This links to src/pages/faq.mdx
            label: 'Change Log',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Socials',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/managememberships',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/managememberships',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/ManMemberships',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ManageMemberships. Last updated ${buildDate} (build ${buildCommit}).`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
