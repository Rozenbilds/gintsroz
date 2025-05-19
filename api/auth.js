// api/auth.js
import { createOAuthHandler } from "@decapcms/netlify-cms-oauth";

export default createOAuthHandler({
  origin: "https://gintsroz.pages.dev", // ← tava Decap CMS lapa
  clientId: "Ov23liWzlOWBvdlAqohZ",    // no GitHub OAuth lietotnes
  clientSecret: "3e8fc4efbb53018298fe5c5aafeb77462ec88f25", // slepenais atslēgas kods
});
