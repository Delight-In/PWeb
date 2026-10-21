from PIL import Image
import numpy as np

src_path = r"C:\Users\priya\.gemini\antigravity\brain\aaea1c1c-79d2-4322-bebd-050a695a2cdc\.user_uploaded\media_1792400697044_970bebff.png"
img = Image.open(src_path).convert("RGBA")
arr = np.array(img)

# Let's inspect the cards in the right column ("Enterprise Cloud")
# Let's find the bounding box of the 3 cards in the right column
# Cloud Application, Enterprise Systems, Cloud LLMs
# Let's find their coordinates
print("Shape:", arr.shape)

# Let's crop the entire right column to inspect:
# x from ~800 to 980, y from ~100 to 550
col_crop = img.crop((800, 100, 980, 550))
col_crop.save("scripts/right_column.png")
print("Saved scripts/right_column.png")
