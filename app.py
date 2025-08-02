from flask import Flask, render_template, request
import os
import random
from PIL import Image
import numpy as np

app = Flask(__name__)
UPLOAD_FOLDER = "static"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def predict_image(img_path):
    # Open the image, resize, and preprocess (dummy logic for now)
    img = Image.open(img_path).resize((128, 128)).convert("RGB")
    img_array = np.array(img) / 255.0

    # Random prediction for demo purposes
    prediction = random.random()
    return "It's a Dog 🐶" if prediction > 0.5 else "It's a Cat 🐱"

@app.route("/", methods=["GET", "POST"])
def index():
    result = None
    image_path = None
    if request.method == "POST":
        file = request.files["file"]
        if file:
            image_path = os.path.join(UPLOAD_FOLDER, file.filename)
            file.save(image_path)
            result = predict_image(image_path)
    return render_template("index.html", prediction=result, image_path=image_path)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
