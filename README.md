# Hypercore Dev Tools

If you do not have an .npmrc file in your project create it and add the following. If you already have one, just add the following. This will ensure the package is installed from the correct registry.

```
@LeadsNearby:registry=https://npm.pkg.github.com/
```
Then run

```
npm install @LeadsNearby/hypercore-dev-tools
```

## Installing Hypercore VSCode Snippets

After install, the vscode snippets file will be automatically created. To manually install/re-install, run the following in your project directory.

```
npx install-hypercore-snippets
```