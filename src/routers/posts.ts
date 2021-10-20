import Router from '@koa/router';

const router = new Router({
  prefix: '/posts'
});

router.get('/', (ctx, next) => {
  ctx.body = 'posts home';
});

router.get('/:id', (ctx, next) => {
  ctx.body = 'posts id: '+ ctx.params.id;
});

export default router;
