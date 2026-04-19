const net = require('net');
const zeroFill = i => (i < 10 ? '0' : '') + i;

const server = net.createServer(function (socket) {
  const d = new Date();
  const dateStr = d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes()) + '\n';
  socket.end(dateStr);
});
server.listen(Number(process.argv[2]));
