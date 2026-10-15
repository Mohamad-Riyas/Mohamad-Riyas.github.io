// Set your start and end dates
let startDate = new Date("2025-01-01T00:00:00").getTime();  // Project start
let targetDate = new Date("2025-12-31T23:59:59").getTime(); // Launch date

function updateCountdown() {
    let now = new Date().getTime();
    let diff = targetDate - now;
    let total = targetDate - startDate;

    if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "🚀 My Portfolio is Live!";
    document.getElementById("progress").style.width = "100%";
    clearInterval(timer);
    return;
    }

    // Time calculations
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update countdown text
    document.getElementById("countdown").innerHTML =
    days + "d " +
    hours.toString().padStart(2, "0") + "h " +
    minutes.toString().padStart(2, "0") + "m " +
    seconds.toString().padStart(2, "0") + "s";

    // Update progress bar width
    let progressPercent = ((total - diff) / total) * 100;
    document.getElementById("progress").style.width = progressPercent + "%";
}

let timer = setInterval(updateCountdown, 1000);
updateCountdown();
