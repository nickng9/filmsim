import base64
import io
from flask import Flask, jsonify, request
import sys
from flask_cors import CORS, cross_origin
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from filter import apply_noise

app = Flask(__name__)
CORS(app)

@app.route('/processPicture', methods=['POST', 'OPTIONS'])
@cross_origin()
def processPicture():
    app.logger.info(request.files)
    if 'picture' not in request.files:
        return jsonify({'error': 'No picture in the request'}), 400

    img = request.files['picture']

    if img.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    hald_clut = '/Users/nicholas.ng/Documents/Developer/filmsim/backend/hald_cluts/Kodak Portra 400 1 -.png'
    img = apply_noise(hald_clut, img.stream)
    img_io = io.BytesIO()
    img.save(img_io, format='PNG')  # Use the determined format
    img_io.seek(0)
    img_data = base64.b64encode(img_io.read()).decode()

    response = jsonify({'msg': 'Image processed', 'size': [img.width, img.height], 'format': 'PNG', 'img': img_data})

    return response

if __name__ == "__main__":
    app.run(debug=True)
