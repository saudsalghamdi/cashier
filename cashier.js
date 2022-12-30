// list of current Saudi Arabian Riyal currencies
let oneSar = 0;
let twoSar = 0;
let fiveSar = 0;
let tenSar = 0;
let fiftySar = 0;
let oneHundredSar = 0;
let fiveHundredSar = 0;

// generate a random whole number between 1 and 1000
let randomCost = Math.floor((Math.random() * 10000) + 1);
// store the random number
const totalMoneyToCustomer = randomCost
// calculating the number of 500 SAR notes to be given
{
    while (randomCost >= 500) 
    {
        randomCost = randomCost - 500;
        fiveHundredSar ++;
    }
}

// calculating the number of 100 SAR notes to be given
{
    while (randomCost >= 100) 
    {
        randomCost = randomCost - 100;
        oneHundredSar ++;
    }
}

// calculating the number of 50 SAR notes to be given
{
    while (randomCost >= 50) 
    {
        randomCost = randomCost - 50;
        fiftySar ++;
    }
}

// calculating the number of 10 SAR notes to be given
{
    while (randomCost >= 10) 
    {
        randomCost = randomCost - 10;
        tenSar ++;
    }
}

//calulating the number of 5 SAR notes to be given
{
    while (randomCost >= 5) 
    {
        randomCost = randomCost - 5;
        fiveSar ++;
    }
}

// calculating the number of 2 SAR coins to be given
{
    while (randomCost >= 2) 
    {
        randomCost = randomCost - 2;
        twoSar ++;
    }
}

// calculating the number of 1 SAR coin to be given
{
    while (randomCost >= 1) 
    {
        randomCost = randomCost - 1;
        oneSar ++;
    }
}

console.log('Total money to be returned to the customer is: ' + totalMoneyToCustomer + ' SAR\nFull break down:\n' + fiveHundredSar + ' 500 SAR notes\n' + oneHundredSar + ' 100 SAR notes\n' + fiftySar + ' 50 SAR notes\n' + tenSar + ' 10 SAR notes\n' + fiveSar + ' 5 SAR notes\n' + twoSar + ' 2 SAR coins\n' + oneSar + ' 1 SAR coins\n');