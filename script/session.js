const Questions = require('./questions');
const WriteInFile = require('../files/writeIn');

class Session {
    constructor() {
        this.allQuestions = [];
        this.isRunning = false;
    }

    addQuestion(question) {
        this.save();
        const quest = new Questions(question);
        this.playerMadeQuestion = 0;
        this.allQuestions.push(quest);
    }

    restart(countPlayer) {
        this.isRunning = true;
        this.countPlayer = countPlayer;
        this.playerMadeQuestion = 0;
    }

    close() {
        this.save();
        this.isRunning = false;
    }

    startIntro() {
        this.allQuestions = [];
        this.isRunning = true;
    }

    add(input) {
        this.playerMadeQuestion++;
        this.allQuestions[this.allQuestions.length - 1].add(input);
    }

    everyoneIsReady() {
        return this.countPlayer === this.playerMadeQuestion;
    }

    startCheck() {
        return this.isRunning === 2;
    }

    getLastQuestion() {
        const index = this.allQuestions.length - 1;
        if(index < 0)
            return '';
        return this.allQuestions[index].Quest;
    }

    save() {
        if (this.allQuestions.length !== 0) {
            const index = this.allQuestions.length - 1;
            const message = this.allQuestions[index].Quest + '?  Ja:' + this.allQuestions[index].yes + '  Nein:' + this.allQuestions[index].no + '\n';
            WriteInFile.WriteInFile(message);
        }
    }
}

module.exports = Session;