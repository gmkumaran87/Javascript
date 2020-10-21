const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand') ;

function setDate(){
    const currentTime = new Date()
    const second = currentTime.getSeconds()

    const minute = currentTime.getMinutes();
    const hour = currentTime.getHours();

 
    const secDegrees = ((second / 60) *360)+90;
    const minDegree = ((minute / 60) *360)+ ((second/60)*6)+90;
    const hourDegree = ((hour/12 ) *360 )+ ((minute/60)*30) +90;

    console.log(`Seconds - ${secDegrees}`) ;
    console.log(`Minutes - ${minDegree}`) ;
    secondHand.style.transform = `rotate(${secDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

}
setInterval(setDate, 1000);
console.log(secondHand);