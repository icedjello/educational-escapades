const PREFIXES: { [p: string]: string[] } = {
    I: ['V', 'X'],
    X: ['L', 'C'],
    C: ['D', 'M'],
};

function letterToNumber(letter: string): number {
    switch (letter) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
    }

    throw new Error(`not a roman number! [${letter}]`)
}

function isPrefix(letter: string, nextLetter: string): boolean {
    if (!nextLetter) {
        return false;
    }

    if (letter === nextLetter) {
        return false;
    }

    let potentialPrefix = Object.keys(PREFIXES).includes(letter);
    if (!potentialPrefix) {
        return false
    }

    return PREFIXES[letter].includes(nextLetter);
}

// function romanToIntegerBest(numerals: string) {
//     console.log('***********************');
//     console.log(`ROMAN: ${numerals}`);
//
//     const numeralsArray: string[] = numerals.split('');
//     let total = 0;
//     numeralsArray.forEach((letter, i) => {
//         let nextLetter = numeralsArray[i + 1];
//
//         if (isPrefix(letter, nextLetter)) {
//             total -= letterToNumber(letter);
//             // console.log(`${letter}  was subtracted, ${total}`);
//         } else {
//             total += letterToNumber(letter);
//             // console.log(`${letter}  was added, ${total}`);
//         }
//     });
//
//     return `INTEGER ${total}`;
// }

export function romanToInteger(numerals: string): number {

    const numeralsArray = numerals.split('');
    let total = 0;
    let currentIndex = 0;
    while (currentIndex < numeralsArray.length) {
        let letter = numeralsArray[currentIndex];
        let nextLetter = numeralsArray[currentIndex + 1];

        if (isPrefix(letter, nextLetter)) {
            total -= letterToNumber(letter);
            total += letterToNumber(nextLetter);
            currentIndex++;
        } else {
            total += letterToNumber(letter);
        }

        currentIndex++;
    }
    return total;
}
