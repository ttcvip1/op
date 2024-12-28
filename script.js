document.getElementById("signal-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const startTime = document.getElementById("start-time").value;
    const endTime = document.getElementById("end-time").value;
    const days = document.getElementById("days").value;
    const pairs = document.getElementById("pairs").value;
    const mode = document.getElementById("mode").value;
    const minPercentage = document.getElementById("min-percentage").value;
    const filter = document.getElementById("filter").value;
    const separate = document.getElementById("separate").value;

    const url = `https://alltradingapi.com/signal_list_gen/qx_signal.js?start_time=${startTime}&end_time=${endTime}&days=${days}&pairs=${pairs}&mode=${mode}&min_percentage=${minPercentage}&filter=${filter}&separate=${separate}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("results").textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById("results").textContent = "Error fetching data: " + error;
        });
});
