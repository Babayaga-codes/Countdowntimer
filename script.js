var countdownInterval;
        var timerElement = document.getElementById("timer");
        var startButton = document.getElementById("start-button");

        function startCountdown() {
            var durationInput = document.getElementById("duration-input");
            var duration = parseInt(durationInput.value, 10);

            if (isNaN(duration) || duration <= 0) {
                alert("Please enter a valid duration in seconds.");
                return;
            }

            var timer = duration, minutes, seconds;
            countdownInterval = setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                timerElement.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    clearInterval(countdownInterval);
                    timerElement.textContent = "Time's up!";
                    startButton.disabled = false;
                }
            }, 1000);

            startButton.disabled = true;
        }

        startButton.addEventListener("click", startCountdown);