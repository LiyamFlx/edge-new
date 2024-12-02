let currentChartType = "bar";

function startApp() {
    navigateTo("upload-record-screen");
}

function showLearnMore() {
    alert("EngageSense is an AI-powered engagement analysis tool.");
}

function navigateTo(screenId) {
    document.querySelectorAll(".screen").forEach(screen => screen.classList.remove("active"));
    document.getElementById(screenId).classList.add("active");
}

function analyzeUpload() {
    simulateProgress("Analyzing uploaded file...");
}

function startRecording() {
    document.getElementById("startRecording").disabled = true;
    document.getElementById("stopRecording").disabled = false;
    simulateProgress("Recording...");
}

function stopRecording() {
    document.getElementById("startRecording").disabled = false;
    document.getElementById("stopRecording").disabled = true;
    document.getElementById("progress-bar").style.width = "0";
}

function analyzeRecording() {
    simulateProgress("Analyzing recorded audio...");
}

function simulateProgress(message) {
    const progressBar = document.getElementById("progress-bar");
    progressBar.style.width = "0";
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            navigateTo("results-screen");
            renderChart();
        } else {
            width += 10;
            progressBar.style.width = width + "%";
        }
    }, 300);
}

function renderChart() {
    const ctx = document.getElementById("engagementChart").getContext("2d");
    new Chart(ctx, {
        type: currentChartType,
        data: {
            labels: ["Physical", "Emotional", "Mental", "Spiritual"],
            datasets: [{
                label: "Engagement (%)",
                data: [85, 78, 92, 67],
                backgroundColor: ["#f87979", "#79a6f8", "#c479f8", "#f8d479"]
            }]
        },
        options: { responsive: true, scales: { y: { beginAtZero: true } } }
    });
}

function toggleChartType() {
    currentChartType = currentChartType === "bar" ? "pie" : "bar";
    renderChart();
}
