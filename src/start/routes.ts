import { createRouter } from "h3";
import get_root from "../routes/get_root.js";

export const router = createRouter();

router.get("/", get_root);
