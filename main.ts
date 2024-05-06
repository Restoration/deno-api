import { Application, Router, RouterContext } from "https://deno.land/x/oak@v6.5.0/mod.ts";
import PostController from './presenter/PostController.ts';
import PostInteractor from './application/PostInteractor.ts';
import PostRepository from './repository/PostRepository.ts';


const app = new Application();
const router = new Router();

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${hostname ??
      "localhost"}:${port}`,
  );
});

app.addEventListener("error", (evt) => {
  console.log(evt.error);
});

router.get('/', async (ctx: RouterContext) => {
  const repository = new PostRepository();
  const interactor = new PostInteractor(repository);
  const controller = new PostController(interactor);
  const result = await controller.FindAll();
  console.log(result)
  ctx.response.body = "Hello World!";
})

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8080 });
