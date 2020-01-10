function myReverse(inputArray) {
    let reverseArray = []
    for(i=inputArray.length-1; i>=0; i--)
    {
        reverseArray.push(inputArray[i])
    }
    return reverseArray;
}
