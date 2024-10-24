class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        this.lastGuess = this.min + Math.round((this.max - this.min) / 2)
        return this.lastGuess
    }

    lower() {
        this.max = this.lastGuess
    }

    greater() {
        this.min = this.lastGuess
    }
}

module.exports = GuessingGame;
