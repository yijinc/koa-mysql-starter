import Router from '@koa/router';

const router = new Router({
  prefix: '/users'
});

router.get('/', (ctx, next) => {
  ctx.body = 'users home';
});

router.get('/:id', (ctx, next) => {
  ctx.body = 'users id';
});

export default router;
