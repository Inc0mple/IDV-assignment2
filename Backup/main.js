// main.js

document.addEventListener("DOMContentLoaded", () => {
  // Grab all critique bullet points
  const critiquePoints = document.querySelectorAll(".critique-point");

  // When we hover over a critique bullet, show a highlight shape on the corresponding overlay.
  critiquePoints.forEach((point) => {
    point.addEventListener("mouseenter", (e) => {
      const targetRegion = e.target.getAttribute("data-target");

      // Decide which overlay to draw on based on the example
      // For instance, if your data-target names begin with "oil-", use the oilOverlay
      // If they begin with "startup-", use the startupOverlay, etc.
      let overlayId = "";
      if (targetRegion.startsWith("oil-")) {
        overlayId = "oilOverlay";
      } else if (targetRegion.startsWith("startup-")) {
        overlayId = "startupOverlay";
      }
      if (!overlayId) return; // no known overlay

      const overlaySvg = document.getElementById(overlayId);
      if (!overlaySvg) return;

      // Example: Draw a simple red circle
      // In a real scenario, you'd store the correct coordinate for each region somewhere
      const circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
      circle.setAttribute("cx", "200");    // Hard-coded; you could map this from real data
      circle.setAttribute("cy", "150");
      circle.setAttribute("r", "30");
      circle.setAttribute("fill", "rgba(255,0,0,0.3)");
      circle.setAttribute("stroke", "red");
      circle.setAttribute("stroke-width", "2");
      circle.classList.add("temp-highlight");

      overlaySvg.appendChild(circle);
    });

    // On mouse leave, remove the highlight shape
    point.addEventListener("mouseleave", (e) => {
      const targetRegion = e.target.getAttribute("data-target");

      let overlayId = "";
      if (targetRegion.startsWith("oil-")) {
        overlayId = "oilOverlay";
      } else if (targetRegion.startsWith("startup-")) {
        overlayId = "startupOverlay";
      }
      const overlaySvg = document.getElementById(overlayId);
      if (!overlaySvg) return;

      // Remove the circle(s) created on mouse enter
      // Here we remove all .temp-highlight shapes
      const tempHighlights = overlaySvg.querySelectorAll(".temp-highlight");
      tempHighlights.forEach((el) => el.remove());
    });
  });
});
