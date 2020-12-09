// Go through array with a counter.
// Counter +1 if != 0.
// At each '0', add another '0', counter +2.

export function duplicateZeros(inputArray: number[]): number[] {
    const inputArrayLength: number = inputArray.length;
    let counter: number = 0;

    while (counter <= inputArrayLength) {
        let currentElement: number = inputArray[counter];
        if (currentElement === 0) {
            inputArray.splice(counter + 1, 0, 0);
            counter++;
        }
        counter++;
    }
    inputArray.length = inputArrayLength;
    return inputArray;
}
