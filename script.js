at = document.querySelectorAll("select")
btn = document.querySelectorAll("button")
let showAlarmTime = document.getElementById("showAlarmTime")
let getAlarmTime;
let ringAlarm = new Audio("alarmSound.mp3")


for (let i = 1; i <= 12; i++) {
    i = i < 10 ? "0" + i : i
    let opt = `<option value="${i}">${i}</option>`
    at[0].firstElementChild.insertAdjacentHTML("afterend", opt)
}
for (let i = 1; i <= 60; i++) {
    i = i < 10 ? "0" + i : i
    let opt = `<option value="${i}">${i}</option>`
    at[1].firstElementChild.insertAdjacentHTML("afterend", opt)
}
setInterval(() => {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    let am = "AM"
    if (h >= 12) {
        h -= 12;
        am = "PM"
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? h = "0" + h : h
    m = m < 10 ? m = "0" + m : m
    s = s < 10 ? s = "0" + s : s

    time.innerText = `${h}  :  ${m}   :  ${s}   ${am}`

    if (getAlarmTime == `${h}:${m} ${am}`) {
        console.log("alarm going to ring..")
        ringAlarm.play();
        ringAlarm.loop = false
    }
}, 1000);

function getSetAlarm() {
    let setAlarmTime = `${at[0].value}:${at[1].value} ${at[2].value}`
    console.log(" Alarm is set to be ring at " + setAlarmTime)
    showAlarmTime.innerText = `ALARM : ${setAlarmTime}`
    getAlarmTime = setAlarmTime
}
setAlarmBtn.addEventListener("click", getSetAlarm)

function clearAlarm() {
    document.forms[0].reset()
}

clearAlarmBtn.addEventListener("click", clearAlarm)

setAlarmBtn.addEventListener("click", bgchange = () => {
    btn[1].style.backgroundColor = " rgb(101, 93, 93)"
})
clearAlarmBtn.addEventListener("click", bgchange = () => {
    btn[0].style.backgroundColor = "white"

})
