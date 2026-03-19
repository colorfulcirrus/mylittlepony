(function () {

  // 24) Задаем единицы времени
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  // 25) Задаем дату окончания (формат месяц/день)
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "05/15/",  // ДАТА ОКОНЧАНИЯ: 15 МАЯ
      date = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > date) {
    date = dayMonth + nextYear;
  }

  // 26) Функции отображения даты
  const countDown = new Date(date).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day));
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        if (distance < 0) {
          document.getElementById("headline").innerText = "Акция!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 1000); // ИСПРАВЛЕНО: было 0, нужно 1000 для обновления каждую секунду

}());

// 27) Динамика раскрытия спойлера
var divToggleVis = document.getElementById('spoiler_text');
var button = document.getElementById('spoiler_button');

button.onclick = function() {
    if (divToggleVis.className === 'fadeout') {
        divToggleVis.className = 'fadein';
    } else {
        divToggleVis.className = 'fadeout';
    }

    if (button.innerHTML === 'узнать') {
        button.innerHTML = 'скрыть';
    } else {
        button.innerHTML = 'узнать';
    }
};