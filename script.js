const hourHand = document.querySelector("#hour-hand");
const minuteHand = document.querySelector("#minute-hand");
const secondHand = document.querySelector("#second-hand");

function setRotation(hand, rotation) {
    hand.style.setProperty("--rotation", rotation)
}

function setClock() {
    const d = new Date();
    const secondNum = d.getSeconds() / 60;
    const minuteNum = (secondNum + d.getMinutes()) / 60;
    const hourNum = (minuteNum + d.getHours()) / 12;


    setRotation(hourHand, hourNum * 360);
    setRotation(minuteHand, minuteNum * 360);
    setRotation(secondHand, secondNum * 360);

    console.log(d);
}



setInterval(setClock, 1000)
