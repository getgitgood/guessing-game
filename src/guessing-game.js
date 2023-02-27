class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.guessResult = 0;
    }

    guess() {
        this.guessResult = Math.round((this.min + this.max) / 2);
        return this.guessResult
    }

    lower() {
        this.max = this.guess()
    }

    greater() {
        this.min = this.guess()
    }
}

module.exports = GuessingGame;
