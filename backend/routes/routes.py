from flask import Flask, jsonify, request
from PIL import Image
import sys
from flask_cors import CORS, cross_origin
import os
import json

# sys.path.append(os.path.abspath(os.path.join(os.path.pardir, 'filter')))
# sys.path.insert(0, '/Users/alan/Documents/film-filter-project/backend/filter.py')
# from filter import applyNoise

app = Flask(__name__)
# CORS(app, resources={r'/*': {'origins': 'http://localhost:3000'}}, supports_credentials=True)
CORS(app)

# haldCut = Image.open('Kodak Portra 400 1 -.png')
# imageTwo = Image.open('IMG_4764.JPG')

@app.route('/')
def helloWorld():
    return 'Hello World'
    # image = applyNoise(haldCut, imageTwo)
    # return image

@app.route('/processPicture', methods=['POST', 'OPTIONS'])
@cross_origin()
def processPicture():
    app.logger.info(request.files)
    if 'picture' not in request.files:
        return jsonify({'error': 'No picture part in the request'}), 400

    img = request.files['picture']
    if img.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    response = jsonify({'picture': 'sack!'})

    return response

@app.route('/getPicture', methods=['GET', 'OPTIONS'])
@cross_origin()
def getPicture():
    response = jsonify({'picture': 'sack!'})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    return response

if __name__ == "__main__":
    app.run(debug=True)
