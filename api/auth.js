// api/auth.js
import { createOAuthHandler } from "@decapcms/netlify-cms-oauth";

export default createOAuthHandler({
  origin: "https://gintsroz.pages.dev", // ← tava Decap CMS lapa
  clientId: "Ov23liWzlOWBvdlAqohZ",    // no GitHub OAuth lietotnes
  clientSecret: "339d9c72678fffefa1fe3aef437efd6a4eaf5efa", // slepenais atslēgas kods
});
