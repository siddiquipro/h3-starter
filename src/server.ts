import { toNodeListener } from "h3";
import { createServer } from "http";
import { app } from "./start/app.js";
import { env } from "./start/env.js";

const server = createServer(toNodeListener(app));

server.listen(env.PORT, () => console.log(`Listening on http://${env.HOST}:${env.PORT}`));
