
// counter design ===================================
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
      let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
          current += increment;
          obj.textContent = current;
          if (current == end) {
            clearInterval(timer);
          }
        }, step);
    }
    counter("count1", 0, 128, 3000);
    counter("count2", 100, 57, 3000);
    counter("count3", 0, 144, 3000);
    counter("count4", 0, 511, 3000);
  });
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "12/21/",
      sale = dayMonth + yyyy;
  
    today = mm + "/" + dd + "/" + yyyy;
    if (today > sale) {
      sale = dayMonth + nextYear;
    }
    //end
  
    const countDown = new Date(sale).getTime(),
      x = setInterval(function () {
  
        const now = new Date().getTime(),
          distance = countDown - now;
  
        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "Sale has ended";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "Expired";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());






  