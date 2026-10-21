#!/usr/bin/env python3
"""The archive color heuristic must stay on unless a real review is recorded."""
import io
from pathlib import Path
import tempfile
from PIL import Image
import fetch_images as F

with tempfile.TemporaryDirectory() as directory:
    F.IMG_DIR=directory
    image=Image.new('RGB',(800,600),(135,140,138))
    stream=io.BytesIO();image.save(stream,'PNG');raw=stream.getvalue()
    assert F.process(raw,'default','',800) is None
    assert F.process(raw,'empty','',800,color_review='') is None
    assert F.process(raw,'short','',800,color_review='looks fine') is None
    reason='Full-size review verified a color photograph of white food with a low-saturation background.'
    meta=F.process(raw,'reviewed','',800,color_review=reason)
    assert meta['w']==800 and meta['h']==600
    assert Image.open(Path(directory)/'reviewed.jpg').size==(800,600)
    assert Image.open(Path(directory)/'reviewed.webp').size==(800,600)
print('6 photo-processing checks passed')
