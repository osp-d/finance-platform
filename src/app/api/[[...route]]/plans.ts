import { Hono } from "hono";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { db } from "@/db/drizzle";
import { plans, subscriptions } from "@/db/schema";
import { eq } from "drizzle-orm";
import CryptoJS from "crypto-js";
import {
  processWebhookEvent,
  storeWebhookEvent,
} from "@/features/plans/actions/actions";
import { webhookHasMeta } from "@/lib/typeguards";
import { timingSafeEqual } from "@/lib/utils";

const app = new Hono()
  .get("/", clerkMiddleware(), async (c) => {
    const auth = getAuth(c);

    if (!auth?.userId) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const data = await db.select().from(plans);

    return c.json({ data });
  })
  .get("/subscriptions", clerkMiddleware(), async (c) => {
    const auth = getAuth(c);

    if (!auth?.userId) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const data = await db
      .select()
      .from(subscriptions)
      .where(eq(subscriptions.userId, auth.userId));

    return c.json({ data });
  })
  .post("/webhook", clerkMiddleware(), async (c) => {
    const auth = getAuth(c);

    if (!auth?.userId) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    if (!process.env.LEMONSQUEEZY_WEBHOOK_SECRET) {
      return new Response("Lemon Squeezy Webhook Secret not set in .env", {
        status: 500,
      });
    }

    const rawBody = await c.req.text();
    const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;

    const hmac = CryptoJS.HmacSHA256(rawBody, secret);
    const digest = hmac.toString(CryptoJS.enc.Hex);
    const signatureHeader = c.req.header("X-Signature") || "";
    const signature = CryptoJS.enc.Hex.stringify(
      CryptoJS.enc.Utf8.parse(signatureHeader),
    );

    if (!timingSafeEqual(digest, signature)) {
      throw new Error("Invalid signature.");
    }

    const data = JSON.parse(rawBody) as unknown;

    // Type guard to check if the object has a 'meta' property.
    if (webhookHasMeta(data)) {
      const webhookEventId = await storeWebhookEvent(
        data.meta.event_name,
        data,
      );

      // Non-blocking call to process the webhook event.
      void processWebhookEvent(webhookEventId);

      return new Response("OK", { status: 200 });
    }

    return new Response("Data invalid", { status: 400 });
  });

export default app;
