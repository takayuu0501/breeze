import { createServer } from 'node:http';
import { server as wisp } from '@mercuryworkshop/wisp-js/server';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Wisp server is running\n');
});

// 接続のアップグレード（WebSocket要求）をWispサーバーに転送する設定
server.on('upgrade', (req, socket, head) => {
  wisp.routeRequest(req, socket, head);
});

const port = process.env.PORT || 8080;
server.listen(port, '0.0.0.0', () => {
  console.log(`Wisp server is listening on port ${port}`);
});
