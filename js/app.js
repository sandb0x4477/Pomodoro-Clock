var session = 'session', isOn = false, breakLength = 5, sessionLength = 25, currentTime = 0, minutes = 0, seconds = 0;

window.onload = function() {

  document.getElementById('break-val').innerHTML = breakLength;
  document.getElementById('session-val').innerHTML = sessionLength;
  resetTimer(session, 'session');

  document.getElementById('break-minus').onclick = function() {
    if (!isOn && breakLength > 1) {
      breakLength--;
      document.getElementById('break-val').innerHTML = breakLength;
      resetTimer(session, 'break');
    }
  }

  document.getElementById('break-plus').onclick = function() {
    if (!isOn) {
      breakLength++;
      document.getElementById('break-val').innerHTML = breakLength;
      resetTimer(session, 'break');
    }
  }

  document.getElementById('session-minus').onclick = function() {
    if (!isOn && sessionLength > 1) {
      sessionLength--;
      document.getElementById('session-val').innerHTML = sessionLength;
      resetTimer(session, 'session');
    }
  }

  document.getElementById('session-plus').onclick = function() {
    if (!isOn) {
      sessionLength++;
      document.getElementById('session-val').innerHTML = sessionLength;
      resetTimer(session, 'session');
    }
  }

  document.getElementById('circle').onclick = function() {
    if (!isOn) {
      isOn = true;
      startTimer();
    } else {
      isOn = false;
      stopTimer();
    }
  }

  function startTimer() {
    myTimer = setInterval(timerTick, 1000);
  }

  function stopTimer() {
    clearInterval(myTimer);
  }

  function resetTimer(sessionNow, sessionClicked) {
    if (sessionNow == sessionClicked) {
      sessionNow == 'session' ? currentTime = sessionLength*60 : currentTime = breakLength*60;
      document.getElementById('timer').innerHTML = currentTime/60 + ':00';
    }
  }

  function switchSession() {
    if (session == 'session') {
      document.getElementById('name').innerHTML = 'Break';
      session = 'break';
      resetTimer(session, 'break');
    } else {
      document.getElementById('name').innerHTML = 'Session';
      session = 'session';
      resetTimer(session, 'session');
    }
  }

  function timerTick() {
    if (currentTime <= 0) {
      playBeep();
      stopTimer();
      switchSession();
      startTimer();
    } else {
      currentTime--;
      minutes = parseInt(currentTime/60, 10);
      seconds = parseInt(currentTime%60, 10);
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      document.getElementById('timer').innerHTML = minutes + ':' + seconds;
    }
  }
}

function playBeep() {
  document.getElementById('beep').play();
}
