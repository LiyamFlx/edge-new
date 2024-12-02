function startApp() {
    navigateTo("upload-record-screen");
}

function navigateTo(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
    document.getElementById(screenId).classList.add("active");
}

function analyzeUpload() {
    const progressText = document.getElementById("progress-text");
    progressText.textContent = "Analyzing uploaded file...";
    setTimeout(() => {
        progressText.textContent = "Analysis Complete!";
        navigateTo("results-screen");
        renderChart();
    }, 3000);
}

function startRecording() {
    document.getElementById("startRecording").disabled = true;
    document.getElementById("stopRecording").disabled = false;
    document.getElementById("progress-text").textContent = "Recording in progress...";
}

function stopRecording() {
    document.getElementById("startRecording").disabled = false;
    document.getElementById("stopRecording").disabled = true;
    document.getElementById("progress-text").textContent = "Recording stopped.";
}

function analyzeRecording() {
    const progressText = document.getElementById("progress-text");
    progressText.textContent = "Analyzing recorded audio...";
    setTimeout(() => {
        progressText.textContent = "Analysis Complete!";
        navigateTo("results-screen");
        renderChart();
    }, 3000);
}

function renderChart() {
    const ctx = document.getElementById("engagementChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Physical", "Emotional", "Mental", "Spiritual"],
            datasets: [{
                label: "Engagement (%)",
                data: [85, 78, 92, 67],
                backgroundColor: ["#f87979", "#79a6f8", "#c479f8", "#f8d479"]
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}
