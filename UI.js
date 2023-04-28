function UI(){
    this.btn_start = document.querySelector(".btn-start"),
    this.bt_next = document.querySelector(".nxt-btn"),
    this.btn_quit = document.querySelector(".btn-quit"),
    this.btn_replay = document.querySelector(".btn-replay"),
    this.quiz_bx = document.querySelector(".quiz_box"),
    this.score_box = document.querySelector(".score-box"),
    this.opt_list = document.querySelector(".options_list"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
    this.time_text = document.querySelector(".time-text")
    this.time_second = document.querySelector(".time_second")
    this.time_line = document.querySelector(".time_line")
}

UI.prototype.showQuestion = function(question){
    let questionHead = `<span>${question.question}</span>`;
    let opts = "";

    for( let answr in question.options){
        opts += 
        `
                <div class="option">
                    <span><b>${answr}</b>: ${question.options[answr]}</span>
                </div>
        `
    }
    
    document.querySelector(".question_text").innerHTML = questionHead;
    this.opt_list.innerHTML = opts;
    
    const cheOptions = this.opt_list.querySelectorAll(".option");
    
    for(let opt of cheOptions){
        opt.setAttribute("onclick", "optSelected(this)")
    }
}

UI.prototype.showQuestionCount = function(countIndex, totalIndex){
    let content = `<span class="badge bg-warning">${countIndex} / ${totalIndex}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = content;
}

UI.prototype.showResultCount = function(countIndex, countTrue){
    let content = ` Toplam ${countIndex} sorudan ${countTrue} doğru cevap verdiniz.`
    document.querySelector(".score-box .score_text").innerHTML = content;
}