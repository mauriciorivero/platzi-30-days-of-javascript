/*

    This function calculates the tip of the service for a restaurant or bar based on the bill amount

*/
function calculateTip(billAmount, tipPercentage) {
    return (billAmount*tipPercentage)/100;
}

console.log(calculateTip(56800,10));