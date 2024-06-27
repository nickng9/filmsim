from flask import Flask
from PIL import Image
import sys
from filter import applyNoise

sys.path.insert(0, '/Users/alan/Documents/film-filter-project/backend/filter.py')

app = Flask(__name__)

# haldCut = Image.open('Kodak Portra 400 1 -.png')
# imageTwo = Image.open('IMG_4764.JPG')

@app.route('/')
def helloWorld():
    return '<p>Hello, World!</p>'
    # image = applyNoise(haldCut, imageTwo)
    # return image

@app.route('/processPicture')
def processPicture():
    return '<p>Balls!</p>'
