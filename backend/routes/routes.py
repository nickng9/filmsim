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
    app.logger.info(request.form['filmStock'])
    app.logger.info(request)
    if 'image' not in request.files:
        return jsonify({'error': 'No image in the request'}), 400

    img = request.files['image']

    if img.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    hald_clut = 'backend/hald_cluts/'+request.form['filmStock']
    # hald_clut = 'backend/hald_cluts/colour/fuji/Fuji_Superia_400.png'

    img = apply_noise(hald_clut, img.stream, var=0.01)  # Adjust variance here for noise level
    img_io = io.BytesIO()
    img.save(img_io, format='PNG')  # Use the determined format
    img_io.seek(0)
    img_data = base64.b64encode(img_io.read()).decode()

    response = jsonify({'msg': 'Image processed', 'size': [img.width, img.height], 'format': 'PNG', 'img': img_data})

    return response

if __name__ == "__main__":
    app.run(debug=True)
