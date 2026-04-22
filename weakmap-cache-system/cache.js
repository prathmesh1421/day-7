// WeakMap cache
const imageCache = new WeakMap();

export function getImageData(img) {

  // Check cache
  if (imageCache.has(img)) {
    console.log("From Cache ✅");
    return imageCache.get(img);
  }

  console.log("Calculating... ⏳");

  // Simulate heavy calculation
  const data = {
    width: img.naturalWidth,
    height: img.naturalHeight,
    size: img.naturalWidth * img.naturalHeight
  };

  // Store in cache
  imageCache.set(img, data);

  return data;
}
