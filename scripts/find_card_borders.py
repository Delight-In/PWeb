from PIL import Image
import numpy as np

src_path = r"C:\Users\priya\.gemini\antigravity\brain\aaea1c1c-79d2-4322-bebd-050a695a2cdc\.user_uploaded\media_1792400697044_970bebff.png"
img = Image.open(src_path).convert("RGBA")
arr = np.array(img)

# Let's find left and right borders of Card 2 at y=280
print("Left border of Card 2:")
for x in range(815, 835):
    print(f"x={x}: {arr[280, x]}")

print("Right border of Card 2:")
for x in range(920, 940):
    print(f"x={x}: {arr[280, x]}")
