document.addEventListener("DOMContentLoaded", () => {
  const critiquePoints = document.querySelectorAll(".critique-point");

  // EXAMPLE SHAPE DEFINITIONS:
  // Each data-target can hold an ARRAY of shape definitions.
  // We'll add a "polygon" example in oil-region2 to demonstrate.
  const highlightDefs = {
    "oil-region1": [
      // {
      //   shape: "circle",
      //   x: 587,
      //   y: 748,
      //   r: 230,
      //   fillColor: "rgba(255, 0, 0, 0.1)",
      //   strokeColor: "red",
      //   strokeWidth: 3,
      // },
      // {
      //   shape: "circle",
      //   x: 755,
      //   y: 1165,
      //   r: 220,
      //   fillColor: "rgba(255, 0, 0, 0.1)",
      //   strokeColor: "red",
      //   strokeWidth: 3,
      // }
      {
        shape: "polygon",
        points: [
          { x: 598, y: 469 },
          { x: 242, y: 689 },
          { x: 242, y: 764 },
          { x: 488, y: 1010 },
          { x: 748, y: 940 },
          { x: 957, y: 836 },
          { x: 957, y: 689 },
        ],
        fillColor: "rgba(255, 0, 0, 0.05)", 
        strokeColor: "red",
        strokeWidth: 3
      },
      {
        shape: "polygon",
        points: [
          { x: 488, y: 1010 },
          { x: 748, y: 940 },
          { x: 957, y: 836 },
          { x: 957, y: 1300 },
          { x: 805, y: 1388 },
          { x: 655, y: 1442 },
          { x: 441, y: 1105 },
        ],
        fillColor: "rgba(255, 255, 0, 0.05)", 
        strokeColor: "yellow",
        strokeWidth: 3
      }
      
    ],
    "oil-region2": [
      {
        shape: "rect",
        x: 43,
        y: 1550,
        width: 800,
        height: 225,
        fillColor: "rgba(0, 0, 255, 0.05)",
        strokeColor: "blue",
        strokeWidth: 2
      },
      {
        shape: "rect",
        x: 39,
        y: 309,
        width: 1100,
        height: 1230,
        fillColor: "rgba(137, 107, 0, 0.05)",
        strokeColor: "orange",
        strokeWidth: 2
      },
    ],
    "oil-region3": [
      {
        shape: "circle",
        x: 995,
        y: 1396,
        r: 45,
        fillColor: "rgba(0, 0, 255, 0.05)",
        strokeColor: "blue",
        strokeWidth: 2
      },
      {
        shape: "circle",
        x: 553,
        y: 453,
        r: 45,
        fillColor: "rgba(0, 255, 0, 0.05)",
        strokeColor: "green",
        strokeWidth: 2
      },
    ],
    "oil-region4": [
      
      {
        shape: "polygon",
        points: [
          { x: 242, y: 1091 },
          { x: 242, y: 1420 },
          { x: 293, y: 1460 },
          { x: 375, y: 1480 },
          { x: 459, y: 1495 },
          { x: 635, y: 1497 },
          { x: 655, y: 1441 },
          { x: 440, y: 1104 },
        ],
        fillColor: "rgba(255, 183, 0, 0.05)", 
        strokeColor: "orange",
        strokeWidth: 3
      },
      {
        shape: "rect",
        x: 287,
        y: 1639,
        width: 95,
        height: 125,
        fillColor: "rgba(255, 183, 0, 0.05)",
        strokeColor: "orange",
        strokeWidth: 2
      }
    ],
    "startup-region1": [
      {
        shape: "rect",
        x: 200,
        y: 725,
        width: 60,
        height: 60,
        fillColor: "rgba(0, 255, 17, 0.05)",
        strokeColor: "lightgreen",
        strokeWidth: 2
      },
      {
        shape: "rect",
        x: 312,
        y: 602,
        width: 70,
        height: 30,
        fillColor: "rgba(0, 255, 17, 0.05)",
        strokeColor: "lightgreen",
        strokeWidth: 2
      },
      {
        shape: "rect",
        x: 415,
        y: 1100,
        width: 65,
        height: 65,
        fillColor: "rgba(255, 183, 0, 0.05)",
        strokeColor: "orange",
        strokeWidth: 2
      },
      {
        shape: "rect",
        x: 744,
        y: 1090,
        width: 50,
        height: 30,
        fillColor: "rgba(255, 183, 0, 0.05)",
        strokeColor: "orange",
        strokeWidth: 2
      },
      {
        shape: "rect",
        x: 603,
        y: 865,
        width: 60,
        height: 60,
        fillColor: "rgba(34, 0, 255, 0.05)",
        strokeColor: "white",
        strokeWidth: 2
      },
      {
        shape: "rect",
        x: 554,
        y: 835,
        width: 49,
        height: 30,
        fillColor: "rgba(34, 0, 255, 0.05)",
        strokeColor: "white",
        strokeWidth: 2
      },
      {
        shape: "rect",
        x: 1075,
        y: 680,
        width: 60,
        height: 60,
        fillColor: "rgba(255, 0, 234, 0.05)",
        strokeColor: "pink",
        strokeWidth: 2
      },
      {
        shape: "rect",
        x: 887,
        y: 693,
        width: 55,
        height: 30,
        fillColor: "rgba(255, 0, 234, 0.05)",
        strokeColor: "pink",
        strokeWidth: 2
      },
    ],
    "startup-region2": [
      {
        shape: "polygon",
        points: [
          { x: 21, y: 220 },
          { x: 288, y: 216 },
          { x: 625, y: 646 },
          { x: 1180, y: 893 },
          { x: 1180, y: 1110 },
          { x: 489, y: 771 },
          { x: 282, y: 450 }, // prev y is 496
          { x: 21, y: 450 }, // prev y is 496
        ],
        fillColor: "rgba(255, 183, 0, 0.05)", 
        strokeColor: "yellow",
        strokeWidth: 3
      }
    ],
    "startup-region3": [
      {
        shape: "rect",
        x: 20,
        y: 1245,
        width: 65,
        height: 65,
        fillColor: "rgba(255, 234, 0, 0.05)",
        strokeColor: "white",
        strokeWidth: 3
      }
    ],
  };

  critiquePoints.forEach((point) => {
    point.addEventListener("mouseenter", () => {
      const targetRegion = point.getAttribute("data-target");
      if (!highlightDefs[targetRegion]) return;

      // Identify which overlay <svg> we should draw on
      let overlayId = "";
      if (targetRegion.startsWith("oil-")) {
        overlayId = "oilOverlay";
      } else if (targetRegion.startsWith("startup-")) {
        overlayId = "startupOverlay";
      }
      if (!overlayId) return;

      const overlaySvg = document.getElementById(overlayId);
      if (!overlaySvg) return;

      // Decide which <img> to use so we can compute scaling
      let usedImgEl;
      if (targetRegion.startsWith("oil-")) {
        usedImgEl = document.getElementById("oilProductionImage");
      } else if (targetRegion.startsWith("startup-")) {
        usedImgEl = document.getElementById("startupImage");
      }

      const imageInfo = {
        naturalWidth: usedImgEl.naturalWidth,
        naturalHeight: usedImgEl.naturalHeight,
        displayedWidth: usedImgEl.clientWidth,
        displayedHeight: usedImgEl.clientHeight
      };

      // Compute uniform scale, assuming aspect ratio is preserved
      const scaleX = imageInfo.displayedWidth / imageInfo.naturalWidth;
      const scaleY = imageInfo.displayedHeight / imageInfo.naturalHeight;
      const scale = Math.min(scaleX, scaleY);

      // We'll keep references to all shapes we create, so we can remove them on mouseleave
      const allShapes = [];

      highlightDefs[targetRegion].forEach((shapeDef) => {
        const svgSelection = d3.select(overlaySvg);

        // Start with fillOpacity=0 and strokeOpacity=0 to avoid flicker
        let shapeSelection;

        // Circle
        if (shapeDef.shape === "circle") {
          shapeSelection = svgSelection
            .append("circle")
            .attr("cx", shapeDef.x * scale)
            .attr("cy", shapeDef.y * scale)
            .attr("r", (shapeDef.r || 40) * scale)
            .attr("fill", shapeDef.fillColor || "rgba(255,0,0,0.3)")
            .attr("fill-opacity", 0)
            .attr("stroke", shapeDef.strokeColor || "red")
            .attr("stroke-width", shapeDef.strokeWidth || 2)
            .attr("stroke-opacity", 0)
            .style("filter", `drop-shadow(0px 0px 5px ${
              shapeDef.strokeColor || "red"
            })`);

        // Rectangle
        } else if (shapeDef.shape === "rect") {
          shapeSelection = svgSelection
            .append("rect")
            .attr("x", shapeDef.x * scale)
            .attr("y", shapeDef.y * scale)
            .attr("width", (shapeDef.width || 100) * scale)
            .attr("height", (shapeDef.height || 60) * scale)
            .attr("fill", shapeDef.fillColor || "rgba(0,255,0,0.3)")
            .attr("fill-opacity", 0)
            .attr("stroke", shapeDef.strokeColor || "green")
            .attr("stroke-width", shapeDef.strokeWidth || 2)
            .attr("stroke-opacity", 0)
            .style("filter", `drop-shadow(0px 0px 5px ${
              shapeDef.strokeColor || "green"
            })`);

        // Polygon
        } else if (shapeDef.shape === "polygon") {
          // shapeDef.points should be an array of {x, y}
          // We must convert each point's (x,y) to scaled coords, then build a string "x1,y1 x2,y2 ..."
          const scaledPoints = (shapeDef.points || [])
            .map(pt => [(pt.x * scale).toFixed(2), (pt.y * scale).toFixed(2)])
            .map(pair => pair.join(","))
            .join(" ");

          shapeSelection = svgSelection
            .append("polygon")
            .attr("points", scaledPoints)
            .attr("fill", shapeDef.fillColor || "rgba(255,165,0,0.3)")
            .attr("fill-opacity", 0)
            .attr("stroke", shapeDef.strokeColor || "orange")
            .attr("stroke-width", shapeDef.strokeWidth || 2)
            .attr("stroke-opacity", 0)
            .style("filter", `drop-shadow(0px 0px 5px ${
              shapeDef.strokeColor || "orange"
            })`);
        }

        // Animate fade in
        shapeSelection
          .transition()
          .duration(300)
          .attr("fill-opacity", 1)
          .attr("stroke-opacity", 1);

        allShapes.push(shapeSelection);
      });

      point._currentShapes = allShapes;
    });

    point.addEventListener("mouseleave", () => {
      if (!point._currentShapes) return;

      // Fade out fill/stroke, then remove from DOM
      point._currentShapes.forEach((shapeSel) => {
        shapeSel
          .transition()
          .duration(300)
          .attr("fill-opacity", 0)
          .attr("stroke-opacity", 0)
          .remove();
      });

      point._currentShapes = null;
    });
  });
});
