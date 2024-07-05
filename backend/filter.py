import math
from PIL import Image
import numpy as np
import noise

def generate_perlin_noise(size, scale):
    """
    Generate Perlin noise.

    Parameters:
    - size: Tuple (height, width) of the noise array.
    - scale: Scale of the noise pattern.

    Returns:
    - 2D numpy array of Perlin noise.
    """
    def f(x, y):
        return noise.pnoise2(x / scale, y / scale, octaves=6, persistence=0.5, lacunarity=2.0, repeatx=1024, repeaty=1024, base=42)
    
    return np.vectorize(f)(*np.indices(size)).astype(np.float32)

def apply_hald_clut(hald_img: Image.Image, img: Image.Image) -> Image.Image:
    """
    Apply HALD CLUT to an image.

    Parameters:
    - hald_img: HALD CLUT image.
    - img: Image to apply the CLUT to.

    Returns:
    - Image with CLUT applied.
    """
    hald_w, _ = hald_img.size
    clut_size = int(round(math.pow(hald_w, 1/3)))
    scale = (clut_size * clut_size - 1) / 255
    img = np.asarray(img)
    hald_img = np.asarray(hald_img).reshape(clut_size ** 6, 3)
    clut_r = np.rint(img[:, :, 0] * scale).astype(int)
    clut_g = np.rint(img[:, :, 1] * scale).astype(int)
    clut_b = np.rint(img[:, :, 2] * scale).astype(int)
    filtered_image = np.zeros((img.shape))
    filtered_image[:, :] = hald_img[clut_r + clut_size ** 2 * clut_g + clut_size ** 4 * clut_b]
    filtered_image = Image.fromarray(filtered_image.astype('uint8'), 'RGB')
    return filtered_image

def apply_noise(hald_clut: str, img: Image.Image, scale=10, amount=0.2) -> Image.Image:
    """
    Apply HALD CLUT and Perlin noise to an image.

    Parameters:
    - hald_clut: Path to the HALD CLUT image.
    - img: Image to process.
    - scale: Scale for Perlin noise generation.
    - amount: Amount of noise to add.

    Returns:
    - Processed image.
    """
    hald_clut = Image.open(hald_clut)
    filtered_image = apply_hald_clut(hald_clut, img)
    img = np.asarray(filtered_image)

    # Generate Perlin noise
    noise_array = generate_perlin_noise(img.shape[:2], scale)
    noise_array = (noise_array - noise_array.min()) / (noise_array.max() - noise_array.min())  # Normalize to 0-1
    noise_array = (noise_array * 255).astype(np.uint8)  # Convert to 0-255

    # Blend noise with image
    img = np.clip(img + amount * noise_array[:, :, np.newaxis], 0, 255).astype(np.uint8)

    return Image.fromarray(img)
