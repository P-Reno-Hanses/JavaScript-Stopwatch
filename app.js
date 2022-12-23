const timerMilliseconds = document.querySelector('.timer__milliseconds')
const timerSeconds = document.querySelector('.timer__seconds')
const timerMinutes = document.querySelector('.timer__minutes')


    let startTime;
    let interval;
    let running = false;
  
    function start() {
        console.log('start')
      startTime = new Date().getTime();
      interval = setInterval(updateTime, 10);
      running = true;
    }
  
    function stop() {
      clearInterval(interval);
      interval = null;
      running = false;
    }

    function reset() {
        startTime = Date.now()
        
        timerMilliseconds.innerHTML = '000'
        timerSeconds.innerHTML = '00'
        timerMinutes.innerHTML = '00'
    }
  
    function updateTime() {
      let currentTime = new Date().getTime();
      let elapsedTime = currentTime - startTime;
  
      let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
      let milliseconds = Math.floor((elapsedTime % 1000) / 10);
  
      let timeDisplay = `${minutes}:${seconds}:${milliseconds}`;
  
      console.log(timeDisplay);
      timerMilliseconds.innerHTML = milliseconds
      timerSeconds.innerHTML = seconds
      timerMinutes.innerHTML = minutes
    }
  

   interval = requestAnimationFrame(updateTime)



  let stopwatch = startStopwatch();
  
  stopwatch.start(); // start the stopwatch
  stopwatch.stop(); // stop the stopwatch
  stopwatch.reset();
  
