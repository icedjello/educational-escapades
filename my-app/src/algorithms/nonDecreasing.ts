export function isIncreasingWithAtMostOneException(inputArray: number[]): boolean {
    let counter: number = 0;
    let exceptionFound: boolean = false;
    let searching: boolean = true;

    let currentNumber: number = inputArray[0];
    let nextNumber: number = inputArray[1];

    while (searching) {
        if (currentNumber >= nextNumber) { // number out of order
            if (exceptionFound) {
                return false;
            }

            exceptionFound = true;
            counter++;
            currentNumber = currentNumber+1;
            nextNumber = inputArray[counter + 1];
        } else {
            counter++;
            currentNumber = inputArray[counter];
            nextNumber = inputArray[counter + 1];
            if (counter >= inputArray.length -1) {
                searching = false;
            }
        }

    }
    return true;
}

