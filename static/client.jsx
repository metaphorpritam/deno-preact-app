import { hydrate } from "preact";
import { App } from "../src/App.tsx";

// Wait for the DOM to be fully loaded
globalThis.addEventListener("DOMContentLoaded", () => {
  // Use hydrate instead of render to attach to the server-rendered HTML
  const appElement = document.getElementById("app");
  if (appElement) {
    hydrate(<App />, appElement);
    console.log("Application hydrated successfully");
  } else {
    console.error("Could not find app element to hydrate");
  }
});
