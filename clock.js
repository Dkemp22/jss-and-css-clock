const secondHand = document.querySelector(".second-hand")
const firstHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

function setdate() {
    const now = new Date();

    //seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    //minutes
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    firstHand.style.transform = `rotate(${minsDegrees}deg)`;

    //hours
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setdate, 1000);