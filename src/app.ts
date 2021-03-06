import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import 'reflect-metadata'; // shim for typeorm
import { createConnection } from 'typeorm';

import users from './routers/users';
import posts from './routers/posts';
import logger from './middleware/logger';


createConnection()
  .then(() => {
    startApp();
  })
  .catch((err: string) => console.log('TypeORM connection error:', err));

const startApp = () => {
  // 初始化 Koa 应用实例
  const app = new Koa();

  // 注册中间件
  app.use(bodyParser());
  app.use(logger());

  // app.use((ctx) => {
  //   ctx.body = 'Hello Koa';
  // });

  // 响应用户请求
  app.use(users.routes()).use(users.allowedMethods());
  app.use(posts.routes()).use(posts.allowedMethods())

  // 运行服务器
  app.listen(3000);

};