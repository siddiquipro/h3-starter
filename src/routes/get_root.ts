import { defineEventHandler } from "h3";

export default defineEventHandler((c) => {
  return { status: 200, path: c.path, method: c.method };
});
