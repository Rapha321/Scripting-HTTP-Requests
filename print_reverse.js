var getHTML = require('./http-functions');

function printReverse(html) {
  console.log(html.split('').reverse().join(''));
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML(requestOptions, printReverse);