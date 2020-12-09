function createArrayFromNumber(numberToReverse: number): string[] {
    return numberToReverse.toString().split('');
}

function arrayToNumber(array: string[], isNegative: boolean): number {
    let rawString = array.toString();
    let numString = rawString.replaceAll(',', '');
    if (isNegative) numString = '-' + numString;
    return parseInt(numString);
}

export function reverseNumber(numberToReverse: number): number {
    let array: string[] = createArrayFromNumber(numberToReverse);
    let reversedArray: string[] = array.reverse();
    return arrayToNumber(reversedArray, numberToReverse < 0);
}
