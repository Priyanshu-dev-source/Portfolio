import sys
try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def remove_white_bg(img_path, out_path, threshold=240):
    img = Image.open(img_path).convert("RGBA")
    data = img.getdata()
    new_data = []
    for item in data:
        # if r, g, b are all high enough, it's white background
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            new_data.append((255, 255, 255, 0)) # transparent
        else:
            new_data.append(item)
    img.putdata(new_data)
    img.save(out_path, "PNG")

remove_white_bg(r"d:\Portfolio\public\hero.png", r"d:\Portfolio\public\hero_transparent.png")
print("Done")
