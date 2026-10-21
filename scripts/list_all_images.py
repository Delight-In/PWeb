import re

with open('src/data/platformPagesData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

pattern = re.compile(r'\"image\":\s*\"([^\"]+)\"')
images = list(set(pattern.findall(text)))
print('Total unique images in platformPagesData:', len(images))
for img in sorted(images):
    print(img)
