import type { Env } from "bun";
import { Elysia, type Context } from "elysia";
import readmeStats from "./api/index";

export class Server extends Elysia {
  constructor() {
    super({
      aot: false,
    });
    this.get("/", (ctx) => {
      ctx.set.status = 404;
      return { docs: "https://docs.hedystia.com/stats/start" };
    });
    this.all("/api", (ctx) => readmeStats(ctx));
  }
}

interface NewEnv extends Env {
  GH_TOKEN: string;
}

const app = new Server();

export default {
  async fetch(request: Request, env: NewEnv, _ctx: Context): Promise<Response> {
    const newResponse = new Request(request);
    newResponse.headers.set("Authorization", env.GH_TOKEN);
    return await app.fetch(newResponse);
  },
};
