function startLoading() {
  document.getElementById("spinner").style.display = "block";
  document.getElementById("loadingBar").style.display = "block";

  let progress = document.getElementById("loadingProgress");
  progress.style.width = "0%";

  let i = 0;
  let interval = setInterval(() => {
    if (i >= 100) {
      clearInterval(interval);
    } else {
      progress.style.width = i + "%";
      i += 10;
    }
  }, 100);
}

// Simulate prediction logic
function handlePrediction(event) {
  event.preventDefault(); // Prevent actual form submission
  startLoading();

  const fileInput = document.getElementById("fileInput");
  const resultBox = document.getElementById("result");
  const predictionText = document.getElementById("predictionText");
  const previewImage = document.getElementById("previewImage");

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      previewImage.src = e.target.result;
      previewImage.style.display = "block";
    };

    reader.readAsDataURL(file);

    setTimeout(() => {
      // Simulated prediction
      const prediction = Math.random() > 0.5 ? "🐱 Cat" : "🐶 Dog";

      predictionText.textContent = "Prediction: " + prediction;
      resultBox.style.display = "block";

      // Stop spinner
      document.getElementById("spinner").style.display = "none";
    }, 1500); // Simulate delay
  }
}
