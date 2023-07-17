/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { sendEmail } from "./lib/sendEmail";

export interface Env {
  // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
  // MY_KV_NAMESPACE: KVNamespace;
  //
  // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
  // MY_DURABLE_OBJECT: DurableObjectNamespace;
  //
  // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
  // MY_BUCKET: R2Bucket;
  AUTH_TOKEN: string;
  DKIM_PRIVATE_KEY: string;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    console.log("handler");
    if (!request.headers.has("Authorization")) {
      return new Response("Unauthorized", {
        status: 401,
      });
    }
    const authorization = request.headers.get("Authorization") as string;
    const [scheme, token] = authorization.split(" ");
    if (!token || scheme !== "Bearer" || token !== env.AUTH_TOKEN) {
      return new Response("Unauthorized", {
        status: 401,
      });
    }

    if (!request.headers.get("Content-Type")?.includes("application/json")) {
      return new Response("Invalid Content-Type", {
        status: 415,
      });
    }

    const body: {
      email: string | string[];
      htmlMessage: string;
      textMessage: string;
      subject: string;
      bccTeam?: boolean;
      from?: string;
    } = await request.json();

    if (
      !body.email ||
      !body.htmlMessage ||
      !body.textMessage ||
      !body.subject
    ) {
      return new Response("Doesn't include all required arguments", {
        status: 400,
      });
    }

    let { email, subject, htmlMessage, textMessage } = body;
    if (!Array.isArray(email)) {
      email = [email];
    }

    const bccTeam = Boolean(body.bccTeam);
    const from = body.from;

    await sendEmail({
      to: email,
      from,
      subject,
      htmlContent: htmlMessage,
      textContent: textMessage,
      privateKey: env.DKIM_PRIVATE_KEY,
      bccTeam,
    });

    return new Response("Hello World!");
  },
};
