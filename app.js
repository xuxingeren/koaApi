const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const koaBody = require('koa-body');
const app = new Koa();
app.use(serve('.'));
const router = new Router();
app.use(serve(__dirname + '/assets'));

router.post('/set_data', koaBody(), async(ctx, next) => {
    try {
        var body = ctx.request.body
        let data = {
            name: body.name,
            age: body.age,
            date: Date.now()
        }
        console.log(ctx.request.body)
        ctx.body = {
            success: true,
            data
        }
    } catch (error) {
        console.log(error)
        ctx.body = error
    }
    next();
});

router.get('/get_users', async(ctx, next) => {
    try {
        ctx.response.status = 500
        ctx.body = {
            message: '哈哈哈哈哈哈哈'
        }
    } catch (error) {
        console.log(error);
        ctx.body = error
    }
    next();
})

router.get('/get_data', async(ctx, next) => {
    ctx.status = 200
    ctx.body = {
        code: 200,
        data: {
            aaa: 1111
        }
    }
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, "127.0.0.1");