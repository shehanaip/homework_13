function startProgressBars() {
    const progressBar1 = document.getElementById("progress-bar1");
    const progressBar2 = document.getElementById("progress-bar2");
    const progressBar3 = document.getElementById("progress-bar3");
    const progressBar4 = document.getElementById("progress-bar4");

  
    startProgressBar(progressBar1, 90);
    startProgressBar(progressBar2, 85);
    startProgressBar(progressBar3, 75);
    startProgressBar(progressBar4, 80);
}

function startProgressBar(progressBar, percentage) {
    progressBar.style.setProperty('--percentage', percentage + '%');
    progressBar.style.animation = 'fillProgress 2s ease-in-out forwards';

    const progressLabel = progressBar.querySelector(".progress-label");
    progressLabel.textContent = percentage + '%';
}


window.addEventListener("load", startProgressBars);

console.log("temporary amount of time");