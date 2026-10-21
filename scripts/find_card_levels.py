from PIL import Image
import numpy as np

src_path = r"C:\Users\priya\.gemini\antigravity\brain\aaea1c1c-79d2-4322-bebd-050a695a2cdc\.user_uploaded\media_1792400697044_970bebff.png"
img = Image.open(src_path).convert("RGBA")
arr = np.array(img)

# Let's inspect x=850, y from 50 to 550
# Let's find pixels where background of card is ~36, 36, 36
# Card 1 (Cloud Application)
# Card 2 (Enterprise Systems)
# Card 3 (Cloud LLMs)

# Let's check card 2:
# What are the y bounds of Card 2?
# Let's print colors at x=850 from y=210 to y=370:
for y in range(215, 365, 5):
    print(f"y={y}: {arr[y, 850]}")

print("--- Card 3 ---")
for y in range(365, 510, 5):
    print(f"y={y}: {arr[y, 850]}")
