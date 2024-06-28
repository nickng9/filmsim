from flask import Flask
from PIL import Image
import sys
from flask_cors import CORS, cross_origin
import os

# sys.path.append(os.path.abspath(os.path.join(os.path.pardir, 'filter')))
# sys.path.insert(0, '/Users/alan/Documents/film-filter-project/backend/filter.py')
# from filter import applyNoise

app = Flask(__name__)
CORS(app)

# haldCut = Image.open('Kodak Portra 400 1 -.png')
# imageTwo = Image.open('IMG_4764.JPG')

@app.route('/')
@cross_origin()
def helloWorld():
    return 'Hello World'
    # image = applyNoise(haldCut, imageTwo)
    # return image

@app.route('/processPicture', methods=["GET"])
@cross_origin()
def processPicture():
    return 'alls!'

if __name__ == "__main__":
    app.run(debug=True)
