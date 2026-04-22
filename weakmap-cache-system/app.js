import { getImageData } from "./cache.js";

const images = document.querySelectorAll("img");
const output = document.getElementById("output");

// Add click event to all images
images.forEach(img => {
  img.addEventListener("click", () => {

    const data = getImageData(img);

    output.innerText = `
      Width: ${data.width},
      Height: ${data.height},
      Total Pixels: ${data.size}
    `;
  });
});
