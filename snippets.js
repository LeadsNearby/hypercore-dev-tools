"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.installSnippets = installSnippets;
const snippets = [{
  name: 'hypercore_footer_widget_count',
  description: 'Change the number of footer widgets. Default is 3',
  body: ["add_filter('hypercore_footer_widget_count', function (\\$count) {", '\treturn $0;', '});']
}];

const {
  access,
  constants,
  writeFile,
  mkdir
} = require('fs');

const path = require('path');

function installSnippets(location) {
  const file = path.join(location, '.vscode/hypercore.code-snippets');
  access(file, constants.F_OK | constants.W_OK, err => {
    if (err) {
      mkdir(path.dirname(file), {
        recursive: true
      }, err => {
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
  snippets.forEach(snippet => {
    formattedSnippets[snippet.name] = {
      description: snippet.description,
      prefix: snippet.name,
      body: snippet.body,
      scope: 'php'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zbmlwcGV0cy5qcyJdLCJuYW1lcyI6WyJzbmlwcGV0cyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImJvZHkiLCJhY2Nlc3MiLCJjb25zdGFudHMiLCJ3cml0ZUZpbGUiLCJta2RpciIsInJlcXVpcmUiLCJwYXRoIiwiaW5zdGFsbFNuaXBwZXRzIiwibG9jYXRpb24iLCJmaWxlIiwiam9pbiIsIkZfT0siLCJXX09LIiwiZXJyIiwiZGlybmFtZSIsInJlY3Vyc2l2ZSIsImxvZ0Vycm9yIiwiX2luc3RhbGxTbmlwcGV0cyIsImZvcm1hdFNuaXBwZXRzIiwiZm9ybWF0dGVkU25pcHBldHMiLCJmb3JFYWNoIiwic25pcHBldCIsInByZWZpeCIsInNjb3BlIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTUEsUUFBUSxHQUFHLENBQ2Y7QUFDRUMsRUFBQUEsSUFBSSxFQUFFLCtCQURSO0FBRUVDLEVBQUFBLFdBQVcsRUFBRSxtREFGZjtBQUdFQyxFQUFBQSxJQUFJLEVBQUUsQ0FBQyxtRUFBRCxFQUFzRSxjQUF0RSxFQUFzRixLQUF0RjtBQUhSLENBRGUsQ0FBakI7O0FBUUEsTUFBTTtBQUFFQyxFQUFBQSxNQUFGO0FBQVVDLEVBQUFBLFNBQVY7QUFBcUJDLEVBQUFBLFNBQXJCO0FBQWdDQyxFQUFBQTtBQUFoQyxJQUEwQ0MsT0FBTyxDQUFDLElBQUQsQ0FBdkQ7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHRCxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFFQSxTQUFTRSxlQUFULENBQXlCQyxRQUF6QixFQUFtQztBQUNqQyxRQUFNQyxJQUFJLEdBQUdILElBQUksQ0FBQ0ksSUFBTCxDQUFVRixRQUFWLEVBQW9CLGlDQUFwQixDQUFiO0FBQ0FQLEVBQUFBLE1BQU0sQ0FBQ1EsSUFBRCxFQUFPUCxTQUFTLENBQUNTLElBQVYsR0FBaUJULFNBQVMsQ0FBQ1UsSUFBbEMsRUFBeUNDLEdBQUQsSUFBUztBQUNyRCxRQUFJQSxHQUFKLEVBQVM7QUFDUFQsTUFBQUEsS0FBSyxDQUFDRSxJQUFJLENBQUNRLE9BQUwsQ0FBYUwsSUFBYixDQUFELEVBQXFCO0FBQUVNLFFBQUFBLFNBQVMsRUFBRTtBQUFiLE9BQXJCLEVBQTJDRixHQUFELElBQVM7QUFDdEQsWUFBSUEsR0FBSixFQUFTO0FBQ1BHLFVBQUFBLFFBQVEsQ0FBQ0gsR0FBRCxDQUFSO0FBQ0QsU0FGRCxNQUVPO0FBQ0xJLFVBQUFBLGdCQUFnQixDQUFDUixJQUFELENBQWhCO0FBQ0Q7QUFDRixPQU5JLENBQUw7QUFPRCxLQVJELE1BUU87QUFDTFEsTUFBQUEsZ0JBQWdCLENBQUNSLElBQUQsQ0FBaEI7QUFDRDtBQUNGLEdBWkssQ0FBTjtBQWFEOztBQUVELFNBQVNTLGNBQVQsQ0FBd0JyQixRQUF4QixFQUFrQztBQUNoQyxNQUFJc0IsaUJBQWlCLEdBQUcsRUFBeEI7QUFDQXRCLEVBQUFBLFFBQVEsQ0FBQ3VCLE9BQVQsQ0FBa0JDLE9BQUQsSUFBYTtBQUM1QkYsSUFBQUEsaUJBQWlCLENBQUNFLE9BQU8sQ0FBQ3ZCLElBQVQsQ0FBakIsR0FBa0M7QUFDaENDLE1BQUFBLFdBQVcsRUFBRXNCLE9BQU8sQ0FBQ3RCLFdBRFc7QUFFaEN1QixNQUFBQSxNQUFNLEVBQUVELE9BQU8sQ0FBQ3ZCLElBRmdCO0FBR2hDRSxNQUFBQSxJQUFJLEVBQUVxQixPQUFPLENBQUNyQixJQUhrQjtBQUloQ3VCLE1BQUFBLEtBQUssRUFBRTtBQUp5QixLQUFsQztBQU1ELEdBUEQ7QUFRQSxTQUFPQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4saUJBQWYsQ0FBUDtBQUNEOztBQUVELFNBQVNGLGdCQUFULENBQTBCUixJQUExQixFQUFnQztBQUM5Qk4sRUFBQUEsU0FBUyxDQUFDTSxJQUFELEVBQVEsR0FBRVMsY0FBYyxDQUFDckIsUUFBRCxDQUFXLEVBQW5DLEVBQXNDbUIsUUFBdEMsQ0FBVDtBQUNEOztBQUVELFNBQVNBLFFBQVQsQ0FBa0JVLEtBQWxCLEVBQXlCO0FBQ3ZCLE1BQUlBLEtBQUosRUFBVztBQUNUQyxJQUFBQSxPQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzbmlwcGV0cyA9IFtcbiAge1xuICAgIG5hbWU6ICdoeXBlcmNvcmVfZm9vdGVyX3dpZGdldF9jb3VudCcsXG4gICAgZGVzY3JpcHRpb246ICdDaGFuZ2UgdGhlIG51bWJlciBvZiBmb290ZXIgd2lkZ2V0cy4gRGVmYXVsdCBpcyAzJyxcbiAgICBib2R5OiBbXCJhZGRfZmlsdGVyKCdoeXBlcmNvcmVfZm9vdGVyX3dpZGdldF9jb3VudCcsIGZ1bmN0aW9uIChcXFxcJGNvdW50KSB7XCIsICdcXHRyZXR1cm4gJDA7JywgJ30pOyddLFxuICB9LFxuXTtcblxuY29uc3QgeyBhY2Nlc3MsIGNvbnN0YW50cywgd3JpdGVGaWxlLCBta2RpciB9ID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmZ1bmN0aW9uIGluc3RhbGxTbmlwcGV0cyhsb2NhdGlvbikge1xuICBjb25zdCBmaWxlID0gcGF0aC5qb2luKGxvY2F0aW9uLCAnLnZzY29kZS9oeXBlcmNvcmUuY29kZS1zbmlwcGV0cycpO1xuICBhY2Nlc3MoZmlsZSwgY29uc3RhbnRzLkZfT0sgfCBjb25zdGFudHMuV19PSywgKGVycikgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIG1rZGlyKHBhdGguZGlybmFtZShmaWxlKSwgeyByZWN1cnNpdmU6IHRydWUgfSwgKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgbG9nRXJyb3IoZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfaW5zdGFsbFNuaXBwZXRzKGZpbGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2luc3RhbGxTbmlwcGV0cyhmaWxlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRTbmlwcGV0cyhzbmlwcGV0cykge1xuICBsZXQgZm9ybWF0dGVkU25pcHBldHMgPSB7fTtcbiAgc25pcHBldHMuZm9yRWFjaCgoc25pcHBldCkgPT4ge1xuICAgIGZvcm1hdHRlZFNuaXBwZXRzW3NuaXBwZXQubmFtZV0gPSB7XG4gICAgICBkZXNjcmlwdGlvbjogc25pcHBldC5kZXNjcmlwdGlvbixcbiAgICAgIHByZWZpeDogc25pcHBldC5uYW1lLFxuICAgICAgYm9keTogc25pcHBldC5ib2R5LFxuICAgICAgc2NvcGU6ICdwaHAnLFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZm9ybWF0dGVkU25pcHBldHMpO1xufVxuXG5mdW5jdGlvbiBfaW5zdGFsbFNuaXBwZXRzKGZpbGUpIHtcbiAgd3JpdGVGaWxlKGZpbGUsIGAke2Zvcm1hdFNuaXBwZXRzKHNuaXBwZXRzKX1gLCBsb2dFcnJvcik7XG59XG5cbmZ1bmN0aW9uIGxvZ0Vycm9yKGVycm9yKSB7XG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCB7IGluc3RhbGxTbmlwcGV0cyB9O1xuIl19