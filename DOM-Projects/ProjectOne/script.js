const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function(e){
        //console.log(e);
        //console.log(e.target);

        if(e.target.id==='columbiaBlue'){
            body.style.backgroundColor='#BFD7EA';
        }
        if(e.target.id==='cadetGray'){
            body.style.backgroundColor='#91AEC1';
        }
        if(e.target.id==='airForceBlue'){
            body.style.backgroundColor='#508CA4';
        }
        if(e.target.id==='seaGreen'){
            body.style.backgroundColor='#0A8754';
        }
    });
});