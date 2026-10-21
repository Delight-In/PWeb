from PIL import Image
import numpy as np

src_path = r"C:\Users\priya\.gemini\antigravity\brain\aaea1c1c-79d2-4322-bebd-050a695a2cdc\.user_uploaded\media_1792400697044_970bebff.png"
img = Image.open(src_path).convert("RGBA")
arr = np.array(img)

# 1. Restore the bottom of Card 3 from Card 2
# Card 2 bottom is at y=320..354, x=840..963
# Card 3 bottom is at y=468..502, x=840..963
# Note height = 35 pixels
h_card = 35
card2_bottom = arr[355 - h_card : 355, 870 : 965].copy()
arr[503 - h_card : 503, 870 : 965] = card2_bottom

# 2. Restore the black gap between Card 3 and container bottom border
# y: 503 to 519, x: 870 to 975
# Color is [1, 1, 1, 255]
arr[503:520, 870:975] = [1, 1, 1, 255]

# 3. Restore the container bottom border:
# y=520, 521 from x=870 to 965
# Take clean border from x=840 to 870 and replicate
clean_border_sample = arr[520:522, 850:870].copy()
for x_start in range(870, 965, 20):
    x_end = min(x_start + 20, 965)
    width = x_end - x_start
    arr[520:522, x_start:x_end] = clean_border_sample[:, :width]

# 4. Restore the container bottom-right corner (around x: 963..978, y: 508..522)
# Bottom-left corner of the container is at x: 822..837, y: 508..522
# Horizontally flip the bottom-left corner to get the bottom-right corner!
bl_corner = arr[508:523, 822:837].copy()
br_corner = np.fliplr(bl_corner)
arr[508:523, 963:978] = br_corner

# 5. Restore any pixels outside the container (y > 522 or x > 977)
# Background color is [0, 12, 10, 255]
# Let's inspect outside bottom-right corner
for y in range(522, 535):
    for x in range(960, 990):
        # If it's brighter than dark background, reset to clean background
        if arr[y, x, 0] > 10 or arr[y, x, 1] > 25:
            arr[y, x] = [0, 12, 10, 255]

cleaned_img = Image.fromarray(arr)
cleaned_img.save("scripts/cleaned_watermark_test.png")

# Also save crop of bottom right to inspect
crop_br = cleaned_img.crop((819, 420, 1024, 600))
crop_br.save("scripts/cleaned_bottom_right.png")
print("Saved scripts/cleaned_bottom_right.png")
