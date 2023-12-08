# pantsasaurus

This repo houses the new Pants docs and blog site!

## Goals and non-goals

### Goals

- A new docs-site that is polished and familiar, but only leveraging off-the-shelf free technology
- All the existing features of today's docs site (no regressing)
  - Versioned docs
  - Generated reference docs
  - Markdown docs
  - Categorization
- The ability to run the docs site "locally"
- A port of the existing docs with _minimal_ changes

### Nice-to-haves

- A big mapping from old->new URLs to be leveraged by a redirect server
- internal URL validation
- the ability to host docs for "blessed" third party plugins?
- the ability to see docs changes as a preview in PR

### Non-goals

- Maintaining every existing URL

## Development

The docs site is a JS/TS project, so you'll want `nvm` installed.

Afterwards

```bash
cd website
nvm use
```

### Dev server

The following command will start the dev server:

```bash
npm start
```

By default, only the "next" docs (e.g. the docs for the version that maps to `main`) will get built.

To include the blog, use:

```bash
PANTSASAURUS_INCLUDE_BLOG=1 npm start
```

To include any single version in addition to the "next" version:

```bash
PANTSASAURUS_INCLUDE_VERSION=$VERSION npm start
```

### Building the real deal

To build the site, run:

```bash
NODE_OPTIONS="--max-old-space-size=6144" npm build
```

## Tech

The site is fully managed via https://docusaurus.io/ and is published via GitHub Actions to GitHub Pages.
