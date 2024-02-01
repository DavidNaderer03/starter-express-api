const Questions = require('./questions');
const WriteInFile = require('../files/writeIn');

class Session {
    constructor() {
        this.allQuestions = [];
    }

    addQuestion(question) {
        if (this.allQuestions.length !== 0) {
            const index = this.allQuestions.length - 1;
            const message = this.allQuestions[index].Quest + '?  Ja:' + this.allQuestions[index].yes + '  Nein:' + this.allQuestions[index].no + '\n';
            WriteInFile.WriteInFile(message);
        }
        const quest = new Questions(question);
        this.playerMadeQuestion = 0;
        this.allQuestions.push(quest);
    }

    restart(countPlayer) {
        this.allQuestions = [];
        this.countPlayer = countPlayer;
        this.playerMadeQuestion = 0;
    }

    add(input) {
        this.playerMadeQuestion++;
        this.allQuestions[this.allQuestions.length - 1].add(input);
    }

    everyoneIsReady() {
        return this.countPlayer === this.playerMadeQuestion;
    }
}

module.exports = Session;