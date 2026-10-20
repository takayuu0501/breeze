import createWispServer from 'wisp-server-node';
import { createServer } from 'http';

const server = createServer();

createWispServer(server);

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Wisp server is running on port ${port}`);
});
