const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');


sendBtn.addEventListener('click', sendMsg)

function sendMsg (){
    let content = messageIn.value;
    // console.log(content);
    if(content === ''){
        alert('Please Enter a valid value as current value is empty')
    }
    messageOut.innerHTML = content;
    messageIn.value = '';
}

