# Apsara
Repository to store ReactJS frontend (Progressive Web App) of TechAmbit

# set up
- Change to frontend directory
	`cd frontend`
- install the packages using *yarn* package manager.(Avoid using npm, which causes dependency issues)
	`yarn install`
- run it using
 `yarn start`
 

# Rules to follow
- Use prettier extension(for code linting)
#### Configuration - Settings.json

```json
{
  "files.trimTrailingWhitespace": true,
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true
}
```
- Files should be kept in the their folders, which belong to part of a UI.
- Use Pascal case naming convention for naming files
