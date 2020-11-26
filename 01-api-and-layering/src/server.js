const express = require('express');
const { resolve } = require('path');
const { promisify } = require('util');
const initControllers = require('./controllers');

const server = express();
const port = parseInt(process.env.PORT || '9000');
const publicDir = resolve('public');

async function bootstrap() {
  server.use(express.static(publicDir));
  server.use(await initControllers());
  // 方便我们快捷的把原来的异步回调方法改成返回 Promise 实例的方法，接下来，想继续用队列，还是 await 就看需要了。
  await promisify(server.listen.bind(server, port))();
  console.log(`> Started on port ${port}`);
}

bootstrap();
