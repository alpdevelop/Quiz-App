const quiz = new Quiz(questions);
const ui = new UI();

ui.btn_start.addEventListener("click" , function(){
        ui.quiz_bx.classList.add("active");
        startTimer(10);
        startTimerLine();
        ui.showQuestion(quiz.getQuestion());
        ui.showQuestionCount(quiz.questionIndex + 1 , quiz.questions.length);
        ui.bt_next.classList.remove("show")
})

ui.bt_next.addEventListener("click", function(){
    if(quiz.questions.length != quiz.questionIndex + 1){
        quiz.questionIndex += 1;
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(10);
        startTimerLine();
        ui.showQuestion(quiz.getQuestion());
        ui.showQuestionCount(quiz.questionIndex + 1 , quiz.questions.length);
        ui.bt_next.classList.remove("show")
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        ui.quiz_bx.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.showResultCount(quiz.questions.length, quiz.countOfTrue);
    }
})

ui.btn_quit.addEventListener("click", function(){
    window.location.reload();
})

ui.btn_replay.addEventListener("click", function(){
    quiz.questionIndex = 0;
    quiz.countOfTrue = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active")
})

function optSelected(opt){
    clearInterval(counter);
    clearInterval(counterLine);
    let ans = opt.querySelector("span b").textContent;
    let ques = quiz.getQuestion();


    if(ques.checkAnswer(ans)){
        quiz.countOfTrue += 1 
        opt.classList.add("correct")
        opt.insertAdjacentHTML("beforeend" , ui.correctIcon)
    }else{
        opt.classList.add("incorrect")
        opt.insertAdjacentHTML("beforeend" , ui.incorrectIcon) //! attention
    }

    for(let i=0 ; i<ui.opt_list.children.length;  i++ ){
        ui.opt_list.children[i].classList.add("disabled")
    }
    
    ui.bt_next.classList.add("show");
}

let counter;
function startTimer(time){
    
    counter = setInterval(timer, 1000);
    function timer(){
        ui.time_second.textContent = time;
        time--;
        if(time<0){
            clearInterval(counter);
            ui.time_text.textContent= "Time is over"

            let answer = quiz.getQuestion().trueAnswer;
            for(let opt of ui.opt_list.children){
                if(opt.querySelector("span b").textContent == answer) {
                opt.classList.add("correct");
                opt.insertAdjacentHTML("beforeend" , ui.correctIcon)
            }
            opt.classList.add("disabled");
            }
            ui.bt_next.classList.add("show")
        }
    }

}


function startTimerLine(){
    let line_width = 0;
    counterLine = setInterval(timer, 100)
    function timer(){
        line_width += 5.5;
        ui.time_line.style.width = line_width + "px";

        if(line_width > 546){
        clearInterval(counterLine);
    }
    }
}