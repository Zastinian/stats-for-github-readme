import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import readmeStats from "./api/index";

const port: number = Number(process.env.PORT) || 3000;

export default class Server extends Elysia {
  constructor({ port }: { port: number }) {
    super();
    this.use(html());
    this.get("/", (ctx) => ctx.redirect("https://docs.hedystia.com/stats/start"));
    this.get("/api", (ctx) => readmeStats(ctx));
    this.listen(port);
    console.log(`Running at ${this.server?.hostname}:${this.server?.port}`);
  }
}

new Server({
  port,
});
