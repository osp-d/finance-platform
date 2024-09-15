import { Hono } from "hono";
import { handle } from "hono/vercel";
// import { z } from "zod";
// import { zValidator } from "@hono/zod-validator";
import test from "./test";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.route("/test", test);

export const GET = handle(app);
export const POST = handle(app);
