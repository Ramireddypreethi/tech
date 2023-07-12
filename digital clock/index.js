const hourE1=document.getElementById("hour");
const minuteE1=document.getElementById("minutes");
const secondE1=document.getElementById("seconds");
const ampmE1=document.getElementById("ampm");
function updateClock()
{
    let h = new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm= "AM";
    if(h>12){
        h=h-12;
        ampm="PM";
    }
    h=h<10?"0"+h:h;/*to get 08... in hours in digital clock*/
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    hourE1.innerText=h;/** to change content in hour dynamically*/
    minuteE1.innerText=m;
    secondE1.innerText=s;
    ampmE1.innerText=ampm;
    setTimeout(() => {
/** used to call function everysecond */
    updateClock();
    },1000);
}
updateClock();

