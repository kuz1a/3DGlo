const currentDate = document.getElementById('today');
const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];


const addZero = (zero) => {
    if (zero > 0 && zero < 10) {
        return '0' + zero
    } else {
        return zero
    }
}

const timeFormat = () => {
  const date = new Date();
  const day = days[new Date().getDay() - 1];
  const hour = date.getHours();
  let howPartDay = ''; //Приветствие
  if (hour >= 5 && hour < 10) {
    howPartDay = 'Доброе утро';
  } else if (hour >= 10 && hour < 16) {
    howPartDay = 'Добрый день';
  } else if (hour >= 16 && hour < 23) {
    howPartDay = 'Добрый вечер';
  } else if (hour >= 23 && hour < 5) {
    howPartDay = 'Доброй ночи';
  }
  const amPM = hour >= 12 ? 'PM' : 'AM';
  const hours = hour > 12 ? hour - 12 : hour;
  const minutes = addZero(date.getMinutes());
  const seconds = addZero(date.getSeconds());
  return {
    howPartDay,
    amPM,
    day,
    hours,
    minutes,
    seconds
  };
};

const getTimeRemaining = () => {
  const dateStop = new Date('1 January 2022').getTime();
  const dateNow = new Date().getTime();
  const newYear = dateNow > dateStop ? true : false;
  const timeRemaining = (dateStop - dateNow) / 1000;
  // const hours = Math.floor(timeRemaining / 60 / 60) % 24;
  const day = Math.floor(timeRemaining / 60 / 60 / 24);
  return {
    timeRemaining,
    day,
    newYear
  };
};

const textDate = () => {
  const time = timeFormat();
  const timer = getTimeRemaining();
  currentDate.innerHTML = `${time.howPartDay} <br>
  Сегодня: ${time.day} <br>
  Текущее время: ${addZero(time.hours)}:${time.minutes}:${time.seconds} ${time.amPM}<br>
  До нового года осталось ${timer.day} дней`;
};
if (getTimeRemaining().timeRemaining > 0) {
  textDate();
  const timerId = setInterval(() => {
    if (getTimeRemaining().newYear) {
      clearInterval(timerId);
    } else {
      textDate();
    }
  }, 1000);
}