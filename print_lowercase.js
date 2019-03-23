var getHTML = require('./http-functions');

function printLowerCase(html) {
  console.log(html.toLowerCase());
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHTML(requestOptions, printLowerCase);