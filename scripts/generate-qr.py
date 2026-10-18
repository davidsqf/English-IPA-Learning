"""Regenerate the static website QR assets. Requires reportlab and Pillow (authoring only)."""
from pathlib import Path
from reportlab.graphics.barcode.qr import QrCodeWidget
from PIL import Image, ImageDraw

URL = 'https://davidsqf.github.io/English-IPA-Learning/'
DEST = Path(__file__).resolve().parents[1] / 'public'
qr = QrCodeWidget(URL, barLevel='M')
qr.qr.make()
modules = qr.qr.modules
quiet = 4
size = len(modules) + quiet * 2
scale = 8
image = Image.new('RGB', (size * scale, size * scale), 'white')
draw = ImageDraw.Draw(image)
rectangles = []
for y, row in enumerate(modules):
    for x, dark in enumerate(row):
        if dark:
            left, top = x + quiet, y + quiet
            draw.rectangle((left * scale, top * scale, (left + 1) * scale - 1, (top + 1) * scale - 1), fill='black')
            rectangles.append(f'M{left} {top}h1v1h-1z')
image.save(DEST / 'website-qr.png')
(DEST / 'website-qr.svg').write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" role="img" aria-labelledby="title" shape-rendering="crispEdges"><title id="title">IPA 音标入门：{URL}</title><path fill="white" d="M0 0h{size}v{size}H0z"/><path fill="black" d="{"".join(rectangles)}"/></svg>\n')
print(f'Created {size * scale}px QR with four-module quiet zone: {URL}')
