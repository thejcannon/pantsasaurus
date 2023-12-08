# Automation

## ✅ Building the docs site: .github/workflows/deploy.yml

For some trigger, builds the docs site and publishes it using GitHub Pages.

## 🛠️ Merging the Pants repo docs into this repo

For some trigger (right now, likely a button press), merges the relevant branch from the Pants repo
to this one.

`main` -> `/website/docs`
`<release branch>` -> `/website/versioned_docs/<version?`

(The idea would be this would happen after a release, such that the PEX was already uploaded and "published"
that way the automation can generate the reference docs leveraging the just-released version, as-shipped)

## 🛠️ Making a new version

This is as easy as `npm run docusaurus docs:version <version>`, however we could technically automate
this so that a cut of a branch on the Pants repo triggers this.

It's OK if this is a manual step for now though.
