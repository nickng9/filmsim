import math
from PIL import Image
import numpy as np
from skimage.util import random_noise 

def apply_hald_clut(hald_img: Image.Image, img: Image.Image) -> Image.Image:
    hald_w, _ = hald_img.size
    clut_size = int(round(math.pow(hald_w, 1/3)))
    # We square the clut_size because a 12-bit hald_clut has the same amount of information as a 144-bit 3D CLUT
    scale = (clut_size * clut_size - 1) / 255
    # Convert the PIL image to numpy array
    img = np.asarray(img)
    # We are reshaping to (144 * 144 * 144, 3) - it helps with indexing
    hald_img = np.asarray(hald_img).reshape(clut_size ** 6, 3)
    # Figure out the 3D CLUT indexes corresponding to the pixels in our image
    clut_r = np.rint(img[:, :, 0] * scale).astype(int)
    clut_g = np.rint(img[:, :, 1] * scale).astype(int)
    clut_b = np.rint(img[:, :, 2] * scale).astype(int)
    filtered_image = np.zeros((img.shape))
    # Convert the 3D CLUT indexes into indexes for our hald_clut numpy array and copy over the colors to the new image
    filtered_image[:, :] = hald_img[clut_r + clut_size ** 2 * clut_g + clut_size ** 4 * clut_b]
    filtered_image = Image.fromarray(filtered_image.astype('uint8'), 'RGB')
    return filtered_image

def apply_noise(hald_clut: str, img: Image.Image) -> Image.Image:
    hald_clut = Image.open(hald_clut)
    img = Image.open(img)
    filtered_image = apply_hald_clut(hald_clut, img)
    img = np.asarray(filtered_image)
    gaussian_noise_img = random_noise(img, mode='gaussian', var=0.1**2)
    gaussian_noise_img = (255*gaussian_noise_img).astype(np.uint8)
    img = Image.fromarray(gaussian_noise_img)

    # Convert the NumPy array back to a PIL Image -- for testing purposes
    img = Image.fromarray(img.astype('uint8'), 'RGB')

    return img
