const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');
    const dscrp = document.querySelector('.description');

    if(height==''||height<0||isNaN(height)){
        result.innerHTML='Please enter valid height';
    }else if(weight==''||weight<0||isNaN(weight)){
        result.innerHTML='Please enter valid weight';
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>BMI : ${bmi}</span>`;
        if(bmi<18.6){
            dscrp.innerHTML=`<span>You are Underweight</span>`;
        }else if(18.5<bmi && bmi<25){
            dscrp.innerHTML=`<span>Your weight is Normal</span>`;
        }
        else if(bmi>25){
            dscrp.innerHTML=`<span>You are Overweight</span>`;
        }
    } 
})