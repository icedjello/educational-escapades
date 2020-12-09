export function isPalindrome(number: number): boolean {
    const array = number.toString().split('');
    let arrayLength = array.length;
    let leftPointer = 0;
    let rightPointer = arrayLength - 1;

    for (let i = 0; i < arrayLength; i++) {
        let leftNumber = array[leftPointer];
        let rightNumber = array[rightPointer];
        if (leftNumber !== rightNumber) {
            return false;
        }
        leftPointer++;
        rightPointer--;
        if (leftPointer >= rightPointer) {
            return true;
        }
    }
    throw new Error('unexpected');
    // change to a while loop to avoid requiring this.
}




