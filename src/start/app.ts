import { createApp } from "h3";
import { router } from "./routes.js";

export const app = createApp();

app.use(router);
