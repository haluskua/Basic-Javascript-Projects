
/*
----------------------------------------COUNTER JS
*/


let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowerCountBtn');

let count = 0;

addCount.addEventListener('click',incrementCounter);
lowerCount.addEventListener('click',decrementCounter);

function incrementCounter (){
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML > '0'){
        counter.style.color = '#85ff8a'
    }
    else if(counter.innerHTML = '0'){
        counter.style.color = 'white';
    }
    counter.animate([{opacity: '0.2'},{opacity: '1.0'}],
    {duration:800, fill: 'forwards'});
}

function decrementCounter (){
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML <'0'){
        counter.style.color = 'red';
    }
    else if(counter.innerHTML ==='0' ) {
        counter.style.color = 'white';
    }
    counter.animate([{opacity: '0.2'},{opacity: '1.0'}],
    {duration:800, fill: 'forwards'});
}

