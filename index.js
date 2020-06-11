const { access, constants, writeFile, mkdir } = require('fs');
const path = require('path');
const snippets = require('./snippets');

const file = '../../../.vscode/hypercore.code-snippets';
access(file, constants.F_OK | constants.W_OK, (err) => {
  if (err) {
    mkdir(path.dirname(file), { recursive: true }, (err) => {
      if (err) {
        logError(err);
      } else {
        installSnippets(file);
      }
    });
  } else {
    installSnippets(file);
  }
});

function formatSnippets(snippets) {
  let formattedSnippets = {};
  snippets.forEach((snippet) => {
    formattedSnippets[snippet.name] = {
      description: snippet.description,
      prefix: snippet.name,
      body: snippet.body,
      scope: 'php',
    };
  });
  return JSON.stringify(formattedSnippets);
}

function installSnippets(file) {
  writeFile(file, `${formatSnippets(snippets)}`, logError);
}

function logError(error) {
  if (error) {
    console.error(error);
  }
}
