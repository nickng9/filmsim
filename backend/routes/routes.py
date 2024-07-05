import base64
import io
from flask import Flask, jsonify, request
from PIL import Image
from flask_cors import CORS, cross_origin
import os
import sys

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

    # Adjust the path to your HALD CLUT file
    hald_clut_path = '/Users/nicholas.ng/Documents/Developer/filmsim/backend/hald_cluts/colour/kodak/Kodak_Ektachrome_100.png'

    # Open image file as PIL image
    img_pil = Image.open(img.stream)

    # Apply noise and process the image
    processed_img = apply_noise(hald_clut_path, img_pil)

    # Save processed image to in-memory buffer
    img_io = io.BytesIO()
    processed_img.save(img_io, format='PNG')
    img_io.seek(0)
    img_data = base64.b64encode(img_io.read()).decode()

    response = jsonify({
        'msg': 'Image processed',
        'size': [processed_img.width, processed_img.height],
        'format': 'PNG',
        'img': img_data
    })

    return response

if __name__ == "__main__":
    app.run(debug=True)
