// @ts-check
import { join } from "path";
import { readFileSync } from "fs";
import express from "express";
import serveStatic from "serve-static";
import shopify from "./shopify.js";
import GDPRWebhookHandlers from "./gdpr.js";

const PORT = parseInt(process.env.BACKEND_PORT || process.env.PORT, 10);
const { pathname: root } = new URL("../", import.meta.url);

const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? join(root, "frontend/dist")
    : join(root, "frontend/");

const app = express();

// Set up Shopify authentication and webhook handling
app.get(shopify.config.auth.path, shopify.auth.begin());
app.get(
  shopify.config.auth.callbackPath,
  shopify.auth.callback(),
  shopify.redirectToShopifyOrAppRoot()
);
app.post(
  shopify.config.webhooks.path,
  shopify.processWebhooks({ webhookHandlers: GDPRWebhookHandlers })
);

app.use("/api/*", shopify.validateAuthenticatedSession());
app.use(express.json());

app.get("/api/ping", (_req, res) => {
  const forceError = false;
  if (!forceError) {
    res.send(
        JSON.stringify({
          message: "pong",
        })
    );
  } else {
    res.status(500).send("Internal Server Error");
  }
});

app.get('/api/products', async (_req, res) => {
  try {
    const products = await shopify.api.rest.Product.all({
      session: res.locals.shopify.session,
    })
    res.send(products)
  } catch(err) {
    res.send({ error: err.message })
  }
});

app.use(serveStatic(STATIC_PATH, { index: false }));

app.use("/*", shopify.ensureInstalledOnShop(), async (_req, res, _next) => {
  return res
    .status(200)
    .set("Content-Type", "text/html")
    .send(readFileSync(join(STATIC_PATH, "public/index.html")));
});

app.listen(PORT);
