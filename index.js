let ramadan = new Date("March 10 2024 00:00:00").getTime();

const countDown = ()=>{
    let today = new Date().getTime();

    let gap = ramadan - today;
    let seconds = 1000;
    let minute = seconds *60
    let hour = minute *60
    let day = hour *24

    let d = Math.floor(gap /day)
    let h = Math.floor(gap % day /hour)
    let m = Math.floor(gap % hour /minute)
    let s = Math.floor(gap % minute /seconds)

    document.getElementById("days").innerHTML= d
    document.getElementById("Hours").innerHTML= h
    document.getElementById("minutes").innerHTML= m
    document.getElementById("seconds").innerHTML= s
}

setInterval(()=>{
    countDown();
},1000)