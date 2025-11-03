# Deploy options

## Netlify (easiest)
1) Create a site on Netlify and link this folder.
2) Build command: `npm run build`
3) Publish directory: `dist`
4) SPA redirect is pre-configured in `netlify.toml`.

## GitHub Pages (project site)
1) Create a repo (e.g., `sonia-portfolio`).
2) Add a remote and push the code.
3) Install: `npm i -D gh-pages`
4) Add scripts to `package.json`:
   - `"predeploy": "npm run build"`
   - `"deploy": "gh-pages -d dist"`
5) Run: `npm run deploy`

For a user site (`SahaSonia04.github.io`), no `base` is needed. For a project site, set Vite `base` to `"/REPO_NAME/"` in `vite.config.js`.

