from PIL import Image
import numpy as np

src_path = r"C:\Users\priya\.gemini\antigravity\brain\aaea1c1c-79d2-4322-bebd-050a695a2cdc\.user_uploaded\media_1792400697044_970bebff.png"
img = Image.open(src_path).convert("RGBA")
arr = np.array(img)

# Let's inspect x=850 (inside cards horizontally)
# Card 1: Cloud Application
# Card 2: Enterprise Systems
# Card 3: Cloud LLMs

def find_card_y(x):
    in_card = False
    cards = []
    start_y = 0
    for y in range(50, 560):
        # Card background is roughly [37, 37, 37] or > 30, whereas outer is [0, 0, 0] or [0, 12, 10]
        brightness = int(arr[y, x, 0]) + int(arr[y, x, 1]) + int(arr[y, x, 2])
        if brightness > 80: # inside card
            if not in_card:
                in_card = True
                start_y = y
        else:
            if in_card:
                in_card = False
                cards.append((start_y, y))
    if in_card:
        cards.append((start_y, 560))
    return cards

print("Cards at x=880:", find_card_y(880))

# Let's find horizontal bounds of card 2 (between y=250 and y=320)
def find_card_x(y):
    in_card = False
    start_x = 0
    end_x = 0
    for x in range(800, 990):
        brightness = int(arr[y, x, 0]) + int(arr[y, x, 1]) + int(arr[y, x, 2])
        if brightness > 80:
            if not start_x:
                start_x = x
            end_x = x
    return start_x, end_x

print("Card 2 x range at y=280:", find_card_x(280))
print("Card 3 x range at y=450:", find_card_x(450))

# Outer container bounding box
def find_outer_container():
    # Outer border is a line with color around [70, 81, 75]
    # Let's find its right edge and bottom edge
    for x in range(950, 1010):
        val = arr[300, x]
        if val[1] > 60: # green/gray border
            print("Outer right border at y=300, x=", x, val)
    for y in range(500, 560):
        val = arr[y, 900]
        if val[1] > 60:
            print("Outer bottom border at x=900, y=", y, val)

find_outer_container()
