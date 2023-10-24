// write js code here if required
function updateTimer() {
    const timerElement = document.getElementById("timer");
    const now = new Date();
    
    const day = now.getDate();
    const month = now.getMonth() + 1; // Months are 0-based, so add 1
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the date and time as per your requirement
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // Update the content of the <p> element
    timerElement.textContent = `${formattedDate}, ${formattedTime}`;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to display the timer
updateTimer();
