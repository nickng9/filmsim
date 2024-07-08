import math
from PIL import Image
import numpy as np
from skimage.util import random_noise

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
    img_array = np.asarray(img)
    hald_array = np.asarray(hald_img)

    if hald_array.ndim == 2:
        # Greyscale HALD CLUT
        # Convert greyscale to RGB by stacking channels
        hald_array = np.stack([hald_array] * 3, axis=-1)
        hald_array = hald_array.reshape(-1, 3)
    else:
        hald_array = np.asarray(hald_img).reshape(clut_size ** 6, 3)

    clut_r = np.rint(img_array[:, :, 0] * scale).astype(int)
    clut_g = np.rint(img_array[:, :, 1] * scale).astype(int)
    clut_b = np.rint(img_array[:, :, 2] * scale).astype(int)
    filtered_image = np.zeros((img_array.shape))
    filtered_image[:, :] = hald_array[clut_r + clut_size ** 2 * clut_g + clut_size ** 4 * clut_b]
    filtered_image = Image.fromarray(filtered_image.astype('uint8'), 'RGB')
    return filtered_image

def apply_noise(hald_clut: str, img: Image.Image, var=0.1**2) -> Image.Image:
    """
    Apply HALD CLUT and Gaussian noise to an image.

    Parameters:
    - hald_clut: Path to the HALD CLUT image.
    - img: Image to process.
    - var: Variance for Gaussian noise.

    Returns:
    - Processed image.
    """
    hald_clut = Image.open(hald_clut)
    img = Image.open(img)
    filtered_image = apply_hald_clut(hald_clut, img)
    img = np.asarray(filtered_image)

    # Apply Gaussian noise
    gaussian_noise_img = random_noise(img, mode='gaussian', var=var)
    gaussian_noise_img = (255 * gaussian_noise_img).astype(np.uint8)

    return Image.fromarray(gaussian_noise_img)

