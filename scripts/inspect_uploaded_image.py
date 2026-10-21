from PIL import Image

src_path = r"C:\Users\priya\.gemini\antigravity\brain\aaea1c1c-79d2-4322-bebd-050a695a2cdc\.user_uploaded\media_1792400697044_970bebff.png"
img = Image.open(src_path)
print("Image format:", img.format, "size:", img.size, "mode:", img.mode)

# Let's crop around the bottom-right area to see where the watermark is:
w, h = img.size
# Crop around bottom-right (e.g. x: 800 to 1000, y: 700 to 900)
crop_box = (int(w * 0.8), int(h * 0.7), w, h)
print("Bottom right crop box:", crop_box)
cropped = img.crop(crop_box)
cropped.save("scripts/bottom_right_preview.png")
print("Saved scripts/bottom_right_preview.png")
