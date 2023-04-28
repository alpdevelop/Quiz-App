function Question(question, options, answer){
    this.question = question;
    this.options = options;
    this.trueAnswer = answer;
}

Question.prototype.checkAnswer = function(answer){
    return answer === this.trueAnswer
}

let questions = [
    new Question("1-Hangisi javascript paket yönetim uygulacısıdır?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Question("2-Hangisi frontend kapsamında değerlendirilmez?", { a: "css", b: "html", c: "javascipt", d: "sql" }, "d"),
    new Question("3-Hangisi backend kapsamında değerlendirilir?", { a: "node.js", b: "typescript", c: "angular", d: "react" }, "a"),
    new Question("4-Hangisi javascript programlama dilini kullanmaz?", { a: "react", b: "angular", c: "vuejs", d: "asp.net" }, "d")
];