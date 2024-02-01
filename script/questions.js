class Questions {
    constructor(quest) {
        this.Quest = quest;
        this.yes = 0;
        this.no = 0;
    }

    add(input) {
        if(input === 'yes') {
            this.yes += 1;
        } else {
            this.no += 1;
        }
    } 
}

module.exports = Questions;