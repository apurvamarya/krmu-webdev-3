const crypto = require("crypto");

function roll(sides = 6) {
    if (!Number.isInteger(sides) || sides < 2) {
        throw new Error("Dice must have at least 2 sides.");
    }

    return crypto.randomInt(1, sides + 1);
}

function rollMultiple(count = 1, sides = 6) {
    if (!Number.isInteger(count) || count < 1) {
        throw new Error("Count must be a positive integer.");
    }

    return Array.from(
        { length: count },
        () => roll(sides)
    );
}

if (require.main === module) {
    console.log(`Dice roll: ${roll()}`);
}

module.exports = {
    roll,
    rollMultiple
};