import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "j74ecvo33s",
  apiKey: process.env.API_KEY,
});
