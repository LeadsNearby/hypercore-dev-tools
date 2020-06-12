const snippets = [
  {
    name: 'hypercore_footer_widget_count',
    description: 'Change the number of footer widgets. Default is 3',
    body: ["add_filter('hypercore_footer_widget_count', function (\\$count) {", '\treturn $0;', '});'],
  },
];

const { access, constants, writeFile, mkdir } = require('fs');
const path = require('path');

function installSnippets(location) {
  const file = path.join(location, '.vscode/hypercore.code-snippets');
  access(file, constants.F_OK | constants.W_OK, (err) => {
    if (err) {
      mkdir(path.dirname(file), { recursive: true }, (err) => {
        if (err) {
          logError(err);
        } else {
          _installSnippets(file);
        }
      });
    } else {
      _installSnippets(file);
    }
  });
}

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

function _installSnippets(file) {
  writeFile(file, `${formatSnippets(snippets)}`, logError);
}

function logError(error) {
  if (error) {
    console.error(error);
  }
}

export { installSnippets };
