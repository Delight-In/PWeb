from PIL import Image
import numpy as np

src_path = r"C:\Users\priya\.gemini\antigravity\brain\aaea1c1c-79d2-4322-bebd-050a695a2cdc\.user_uploaded\media_1792400697044_970bebff.png"
img = Image.open(src_path).convert("RGBA")
arr = np.array(img)

# 1. Inside Card 3 below "Meta" (y: 486 to 500, x: 880 to 955)
# Solid card background color [37, 37, 37, 255]
arr[486:501, 880:955] = [37, 37, 37, 255]

# 2. Bottom border of Card 3 (y=501, 502, x: 880 to 955)
arr[501, 880:955] = arr[501, 850:870].mean(axis=0).astype(np.uint8)
arr[502, 880:955] = arr[502, 850:870].mean(axis=0).astype(np.uint8)

# 3. Card 3 rounded bottom-right corner (y: 495 to 503, x: 955 to 964)
# Copy from Card 2's corner (y: 347 to 355, x: 955 to 964)
arr[495:503, 955:964] = arr[347:355, 955:964].copy()

# 4. Black gap between Card 3 and container bottom border (y: 503 to 519, x: 880 to 976)
arr[503:520, 880:976] = [1, 1, 1, 255]

# 5. Container bottom border line (y: 520, 521, x: 870 to 968)
arr[520, 870:968] = arr[520, 840:860].mean(axis=0).astype(np.uint8)
arr[521, 870:968] = arr[521, 840:860].mean(axis=0).astype(np.uint8)

# 6. Container bottom-right rounded corner (y: 512 to 522, x: 968 to 978)
tr_corner = arr[79:89, 968:978].copy()
br_corner = np.flipud(tr_corner)
arr[512:522, 968:978] = br_corner

# 7. Outside container below bottom border (y >= 522, x: 900 to 985)
# Set to clean background [0, 12, 10, 255]
# Also outside container right border (x >= 978, y: 500 to 530)
for y in range(522, 550):
    for x in range(910, 990):
        # Sample background pixel from x=900, y
        arr[y, x] = arr[y, 900].copy()

for y in range(500, 522):
    for x in range(978, 1000):
        arr[y, x] = arr[y - 50, x].copy()

cleaned_img = Image.fromarray(arr)
# Save full clean image
cleaned_img.save("public/images/platform/modern-industrial-data-foundation.png")

# Save crop for inspection
crop_br = cleaned_img.crop((819, 420, 1024, 600))
crop_br.save("scripts/perfect_crop_test_v3.png")
print("Saved public/images/platform/modern-industrial-data-foundation.png and scripts/perfect_crop_test_v3.png")
