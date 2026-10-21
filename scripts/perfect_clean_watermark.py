from PIL import Image
import numpy as np

src_path = r"C:\Users\priya\.gemini\antigravity\brain\aaea1c1c-79d2-4322-bebd-050a695a2cdc\.user_uploaded\media_1792400697044_970bebff.png"
img = Image.open(src_path).convert("RGBA")
arr = np.array(img)

# 1. Copy pristine bottom of Card 2 (y: 338 to 355, x: 840 to 965) to Card 3 (y: 486 to 503, x: 840 to 965)
card2_bottom_slice = arr[338:355, 840:965].copy()
arr[486:503, 840:965] = card2_bottom_slice

# 2. Black gap between Card 3 and container bottom border (y: 503 to 519, x: 840 to 976)
arr[503:520, 840:976] = [1, 1, 1, 255]

# 3. Container bottom border (y: 520, 521 from x: 870 to 968)
border_sample = arr[520:522, 850:870].copy()
for x_start in range(870, 968, 18):
    x_end = min(x_start + 18, 968)
    arr[520:522, x_start:x_end] = border_sample[:, : x_end - x_start]

# 4. Container bottom-right corner (y: 512 to 522, x: 968 to 978)
tr_corner = arr[79:89, 968:978].copy()
br_corner = np.flipud(tr_corner)
arr[512:522, 968:978] = br_corner

# 5. Outside container (y >= 522 or x >= 978)
for y in range(520, 540):
    for x in range(965, 995):
        if y > 521 or x > 977:
            # Check if this pixel is inside the background
            # If it's a watermark gray pixel, reset to [0, 12, 10, 255]
            if arr[y, x, 0] > 15 or arr[y, x, 1] > 25:
                arr[y, x] = [0, 12, 10, 255]

cleaned_img = Image.fromarray(arr)
# Save full clean image
cleaned_img.save("public/images/platform/modern-industrial-data-foundation.png")

# Save crop for inspection
crop_br = cleaned_img.crop((819, 420, 1024, 600))
crop_br.save("scripts/perfect_crop_test.png")
print("Saved public/images/platform/modern-industrial-data-foundation.png and scripts/perfect_crop_test.png")
