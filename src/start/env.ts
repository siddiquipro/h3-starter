import "dotenv/config";
import zod from "zod";

const envSchema = zod.object({
  PORT: zod.coerce.number().default(3000),
  HOST: zod.string().default("127.0.0.1"),
});

export const env = envSchema.parse(process.env);
