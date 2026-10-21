from PIL import Image
import numpy as np

src_path = r"C:\Users\priya\.gemini\antigravity\brain\aaea1c1c-79d2-4322-bebd-050a695a2cdc\.user_uploaded\media_1792400697044_970bebff.png"
img = Image.open(src_path).convert("RGBA")
arr = np.array(img)

# 1. Clear the watermark inside Card 3 (x: 880 to 956, y: 468 to 500)
# Fill with card background color [37, 37, 37, 255]
arr[468:501, 880:956] = [37, 37, 37, 255]

# 2. Bottom border of Card 3 (y=501, 502, x: 880 to 956)
arr[501, 880:956] = arr[501, 850:870].mean(axis=0).astype(np.uint8)
arr[502, 880:956] = arr[502, 850:870].mean(axis=0).astype(np.uint8)

# 3. Card 3 rounded bottom-right corner (x: 955 to 963, y: 494 to 503)
# Copy from Card 2's bottom-right corner (x: 955 to 963, y: 346 to 355)
arr[494:503, 955:964] = arr[346:355, 955:964].copy()

# 4. Fill the black gap between Card 3 and container border (y: 503 to 519, x: 880 to 975)
arr[503:520, 880:975] = [1, 1, 1, 255]

# 5. Container bottom border line (y: 520, 521 from x: 880 to 968)
border_520 = arr[520, 850:870].mean(axis=0).astype(np.uint8)
border_521 = arr[521, 850:870].mean(axis=0).astype(np.uint8)
arr[520, 880:968] = border_520
arr[521, 880:968] = border_521

# 6. Container bottom-right rounded corner:
# Top-right corner is at y: 79 to 88, x: 968 to 978
# Vertically flip top-right corner to get bottom-right corner (y: 512 to 522, x: 968 to 978)
tr_corner = arr[79:89, 968:978].copy()
br_corner = np.flipud(tr_corner)
arr[512:522, 968:978] = br_corner

# 7. Outside container (y >= 522 or x >= 978)
# If any watermark remnants exist, fill with clean background [0, 12, 10, 255]
for y in range(522, 540):
    for x in range(965, 985):
        if arr[y, x, 0] > 15 or arr[y, x, 1] > 25:
            arr[y, x] = [0, 12, 10, 255]

cleaned_img = Image.fromarray(arr)

# Save test crop
crop_br = cleaned_img.crop((819, 420, 1024, 600))
crop_br.save("scripts/cleaned_bottom_right_v2.png")
print("Saved scripts/cleaned_bottom_right_v2.png")
