# Cat_and_Dog_CNN
A deep learning-based image classifier built to distinguish between images of cats and dogs using Convolutional Neural Networks (CNNs). The project includes model training from scratch, CNN architecture design, data augmentation, evaluation through accuracy/loss plots, and deployment using a simple Flask app.

🚀 Features
Train CNN from scratch or with transfer learning
Use of essential CNN layers: Conv, Pooling, Flatten, Dense
Data Augmentation for improved generalization
Accuracy and Loss curve visualization
Simple Flask web interface to test predictions
Ready-to-run Jupyter Notebook (.ipynb) and Flask app (app.py)
🗂 Project Structure
├── Screenshots/ # Example screenshots of the model and app ├── Static/ # Static files (CSS/JS for Flask) ├── templates/ # HTML templates for Flask ├── ImageClassificationUsingCNN.ipynb # Jupyter Notebook for model training ├── LICENSE ├── README.md ├── app.py # Flask application ├── requirements.txt # Python dependencies


🧪 How to Run
1. Clone the Repository https://github.com/tanishq-0708/Cat_and_Dog_CNN
git clone https://github.com/your-username/Cat_and_Dog_CNN.git cd Cat_and_Dog_CNN

Set Up a Virtual Environment (Optional but Recommended) python -m venv venv source venv/bin/activate # On Windows: venv\Scripts\activate

Install Dependencies pip install -r requirements.txt

Run the Jupyter Notebook (for training/testing) jupyter notebook ImageClassificationUsingCNN.ipynb

Run the Flask App (for deployment demo) python app.py Then, go to http://127.0.0.1:5000/ in your browser.

📷 Screenshots Add screenshots inside the Screenshots/ directory and link them here:

Training accuracy/loss over epochs

Flask web interface for real-time predictions

🧠 Model Architecture Input Layer: 128x128 RGB images

Conv2D + MaxPooling2D blocks

Flatten → Dense → Dropout layers

Output: Binary classification (cat/dog)

📦 Dataset The model expects labeled images of cats and dogs. You can use the Kaggle Dogs vs Cats dataset or any similarly structured folder of images.

🛠 Technologies Used Python

TensorFlow / Keras

OpenCV / PIL

Flask

HTML, CSS (via Static and templates)

🔍 To-Do Add validation accuracy/loss

Dockerize the app

Add unit tests for Flask backend

Upload pretrained model weights

📄 License This project is licensed under the MIT License – see the LICENSE file for details.

🤝 Contributing Feel free to fork the repository, make enhancements, and create a pull request. All contributions are welcome!

🙋‍♂ Author Tanishq0708 email- tanishqalp23@gmail.com
⭐ Show Your Support If you found this project helpful, please consider starring 🌟 the repository!
