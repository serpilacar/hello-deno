import { serve } from "https://deno.land/std@0.54.0/http/server.ts";

const PORT = 8080;
const server = serve({ port: PORT });

console.log("server listening on port " + PORT);
for await (const req of server) {
  req.respond({ body: "Hello Deno\n" });
}
