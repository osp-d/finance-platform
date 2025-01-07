import { Hono } from "hono";
import { handle } from "hono/vercel";
import accounts from "@/src/app/api/[[...route]]/accounts";
import categories from "@/src/app/api/[[...route]]/categories";
import transactions from "@/src/app/api/[[...route]]/transactions";
import summary from "@/src/app/api/[[...route]]/summary";
import plans from "@/src/app/api/[[...route]]/plans";

export const runtime = "edge";

const app = new Hono().basePath("/api");
const routes = app
  .route("/accounts", accounts)
  .route("/categories", categories)
  .route("/transactions", transactions)
  .route("/summary", summary)
  .route("/plans", plans);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
