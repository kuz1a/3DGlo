const timer = (deadline) => {
  
    const timerHours  = document.getElementById('timer-hours');
    const timerMinutes  = document.getElementById('timer-minutes');
    const timerSeconds  = document.getElementById('timer-seconds');
    const addZero = (zero) => {
        if (zero > 0 && zero < 10) {
            return '0' + zero
        } else {
            return zero
        }
    }
    const getTimeRemaining = () => {
    // let deadline = '23 december 2021'
    let dateStop =  new Date(deadline).getTime()
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000

    // let days = Math.floor(timeRemaining / 60 / 60 / 24)
    let hours, minutes, seconds

    hours = Math.floor(timeRemaining / 60 / 60)
    minutes = Math.floor((timeRemaining / 60) % 60)
    seconds = Math.floor(timeRemaining % 60)

    
    return {
        timeRemaining,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }

    }
    const updateClock = () => {
        let getTime = getTimeRemaining()
        timerHours.textContent = addZero(getTime.hours)
        timerMinutes.textContent = addZero(getTime.minutes)
        timerSeconds.textContent = addZero(getTime.seconds)
        
    }
    if (getTimeRemaining().timeRemaining > 0) {
       
        updateClock()
        let timerId = setInterval(()=> {
            if (getTimeRemaining.dateNow > getTimeRemaining.dateStop) {
                clearInterval(timerId)
                
             }
             else {
                updateClock()
                
             }
        }, 1000)
    } else {
        timerHours.style.color = "red"
        timerMinutes.style.color = "red"
        timerSeconds.style.color = "red"
    }
    
    // updateClock()
    
}

export default timer