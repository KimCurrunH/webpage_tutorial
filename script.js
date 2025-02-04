document.addEventListener("DOMContentLoaded", function() {
    const events = document.querySelectorAll(".event");
    let currentEventIndex = 0;

    // Show the first event initially
    events[currentEventIndex].classList.add("active");

    document.getElementById("next-button").addEventListener("click", function() {
        // Hide the current event
        events[currentEventIndex].classList.remove("active");

        // Increment the index to show the next event
        currentEventIndex++;

        // If we reach the end of the events, reset to the first event
        if (currentEventIndex >= events.length) {
            currentEventIndex = 0;
        }

        // Show the next event
        events[currentEventIndex].classList.add("active");
    });
});