const question=document.querySelector('.faq-question');
const answer=document.querySelector('.faq-answer');

const hide=document.querySelector('.hideButton');

let isAnswerShowing=false;

function showAnswer(){
    if(isAnswerShowing === false){
        answer.innerHTML=`<button onclick="hideAnswer()" class="hideButton">Depends on the needs of the clients, as well as the number of revisions. But it usually takes four to seven working days</button>`;

        isAnswerShowing= true;
    } else{
        answer.innerHTML="";

        isAnswerShowing= false;
    }
}

function hideAnswer(){
    hide.innerHTML='';
}


function moveToForm(){
    window.location.href="form.html"
}