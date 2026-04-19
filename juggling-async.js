const http = require('http');
const results = [];
let count = 0;

function printResults() {
  results.forEach(res => console.log(res));
}

function httpGet(index) {
  http.get(process.argv[2 + index], function (response) {
    let content = '';
    response.setEncoding('utf8');
    response.on('data', data => content += data);
    response.on('end', () => {
      results[index] = content;
      count++;
      if (count === 3) printResults();
    });
  });
}

for (let i = 0; i < 3; i++) httpGet(i);
