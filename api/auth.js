// api/auth.js
import { createOAuthHandler } from "@decapcms/netlify-cms-oauth";

export default createOAuthHandler({
  origin: "https://gintsroz.pages.dev", // ← tava Decap CMS lapa
  clientId: "Ov23liWzlOWBvdlAqohZ",    // no GitHub OAuth lietotnes
  clientSecret: "d72afc0dc12318fdc482a2f5fc42eb651d797cda", // slepenais atslēgas kods
});
