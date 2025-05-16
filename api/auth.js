// api/auth.js
import { createOAuthHandler } from "@decapcms/netlify-cms-oauth";

export default createOAuthHandler({
  origin: "https://gintsroz.pages.dev", // ← tava Decap CMS lapa
  clientId: "Ov23liyxrfMZt3mFgdGQ",    // no GitHub OAuth lietotnes
  clientSecret: "56b4cf213ade71e282c55bea070199b90b6a1a92", // slepenais atslēgas kods
});
