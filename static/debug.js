// This is a simple script to verify client-side JavaScript is loading
console.log("Debug script loaded successfully!");

// Add a visible indicator on the page
document.addEventListener("DOMContentLoaded", () => {
  const debugElement = document.createElement("div");
  debugElement.style.position = "fixed";
  debugElement.style.bottom = "10px";
  debugElement.style.right = "10px";
  debugElement.style.padding = "5px 10px";
  debugElement.style.backgroundColor = "green";
  debugElement.style.color = "white";
  debugElement.style.borderRadius = "4px";
  debugElement.textContent = "Debug Script Active";
  document.body.appendChild(debugElement);
});
