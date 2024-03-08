
const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    let randomNumber = Math.floor(Math.random()*16);
    //console.log(randomNumber);
    for(let i=0;i<6;i++){
        color+=hex[randomNumber];
    }
    //console.log(color)
    return color;
}
let interval;
let startChangingColor = function(){
    function changeBgColor (){
         document.body.style.backgroundColor=randomColor();
    };
    interval = setInterval(changeBgColor,1000);
    document.getElementById('heading').innerText='Press the STOP button to stop ';
};


let stopChangingColor = function(){
    document.getElementById('heading').innerText='Clicking on the "START" button will again change the background color every second';
    clearInterval(interval);
};

document.querySelector('#start').addEventListener('click',startChangingColor);


document.querySelector('#stop').addEventListener('click',stopChangingColor);
