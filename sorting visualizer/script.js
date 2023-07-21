const n=20;
const array=[];
init();
function init(){
    
        for(let i=0;i<n;i++)
        {
    array[i]=Math.random(); //random values from 0 to 1
        }
    showBars();
}
function play()
{  const copy=[...array];
   const moves= bubbleSort(copy);
    animate(moves);
}
function animate(moves)
{
    if(moves.length==0)
    { showBars();//if we call this without any parameter at the end bars wont appear red
        return;
    }
    const move=moves.shift();
    const [i,j]=move.indices;
    if(move.type=="swap")
    {

    [array[i],array[j]]=[array[j],array[i]];
    }
    showBars(move);
    setTimeout(function(){
        animate(moves);
    },50); //200 milliseconds for each swap
}
// console.log(array); //it shows randomly generated numbers from 0 to 1
function bubbleSort(array)
{   //recording the swaps
    const moves=[];
do{
    var swapped=false;
    for(let i=1;i<array.length;i++)
    {     moves.push({indices:[i-1,i],type:"comp"}); //while doing comparison
        if(array[i-1]>array[i])
        {  
            swapped=true;
            moves.push({indices:[i-1,i],type:"swap"}); //this says which indices is involved in the move
            [array[i-1],array[i]]=[array[i],array[i-1]];
        }
    }
}while(swapped);
return moves;
}
function showBars(move)
{
    container.innerHTML="";
for(let i=0;i<array.length;i++) //use of this for loop is to add values as indivisual bar
{
  const bar=document.createElement("div");//creating the bar and making that bar as div
  bar.style.height=array[i]*100+"%";    // height set to 100 times value of the bar
  bar.classList.add("bar"); //if u use this all bar effected at one time
  
  if(move && move.indices.includes(i))
{
    bar.style.backgroundColor=
    move.type=="swap"?"red":"blue";//bars which are swapping are in red
   
}
container.appendChild(bar); //adding bars to container

}
}