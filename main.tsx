import { serveDir } from "https://deno.land/std@0.208.0/http/file_server.ts";
import { renderToString } from "preact-render-to-string";
import { App } from "./src/App.tsx";

// Process CSS with Tailwind using a more compatible approach
import postcss from "npm:postcss@8.4.31";
import tailwindcss from "npm:tailwindcss@3.3.5";

// Import the config
const twConfig = await import("./tailwind.config.js").then((m) => m.default);

// Read the CSS file
const css = await Deno.readTextFile("./src/styles.css");

// Process the CSS with Tailwind
try {
  const result = await postcss([tailwindcss(twConfig)]).process(css, {
    from: "./src/styles.css",
  });

  // Write the processed CSS
  await Deno.writeTextFile("./static/styles.css", result.css);
  console.log("✅ Tailwind CSS processed successfully");
} catch (error) {
  console.error("❌ Error processing Tailwind CSS:", error);
}

// Server function
async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const pathname = url.pathname;

  // Serve static files
  if (pathname.startsWith("/static/")) {
    const response = await serveDir(req, {
      fsRoot: ".",
      urlRoot: "",
    });

    return response;
  }

  // Serve main page
  const rendered = renderToString(<App />);
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preact To-Do App</title>
    <link rel="stylesheet" href="/static/styles.css">
  </head>
  <body>
    <div id="app">${rendered}</div>
    <!-- Regular script for debugging -->
    <script src="/static/debug.js"></script>
    <!-- Pure JS implementation of todo app -->
    <script src="/static/client-todo.js"></script>
    <!-- Module script for Preact hydration (disabled for now) -->
    <!-- <script type="module" src="/static/client.jsx"></script> -->
  </body>
  </html>`;

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}

console.log("Server running at http://localhost:8000");
Deno.serve({ port: 8000 }, handler);
