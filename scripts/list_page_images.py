import json, re

with open('src/data/platformPagesData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Find each capability or hero and its image
pattern = re.compile(r'\"id\":\s*\"([^\"]+)\"[\s\S]*?\"title\":\s*\"([^\"]+)\"[\s\S]*?\"image\":\s*\"([^\"]+)\"')
for match in pattern.finditer(text):
    print(f"ID: {match.group(1)} | Title: {match.group(2)[:40]} | Image: {match.group(3)}")
