# Parliament 2018 - Is it possible to be just "whelmed"?

This kata set was designed to help students preparing for the Core Block Review to practise working with:

* Arrays and objects
* Reduce
* hofs incl. map, filter, forEach

Tests have been drafted though they are by no means exhaustive. Feel free to add and tweak as you see fit.

To state the rather obvious, functions have been named for my amusement rather and to conform to more sensible naming conventions. Sorrynotsorry. I recommend using better naming conventions in your code as you work through them.

Irony points are available for humour (in good taste please) and are redeemable for political capital and jars of Corbo's allotment jam in fields of wheat in the Maidenhead constituency.

## 1. #treasuryMPs 

Find all MPs who have worked in the treasury. #treasuryMPs

### Examples:

```js
treasuryMPs(madeUpData); // returns ['Mitch McConnel', 'Paul Ryan', 'Bernie Sanders']
```

## 2. #olderTories

Find all of the Conservative party MPs who have held office before 2014. 

### Examples:

```js
olderTories(madeUpData); // returns ['Jonti Jones', 'Freddie Finklebash']
```

## 3. #momentwho

Find all of the Labour party MPs who were elected to office in the June 2018 General Election. 

### Examples:

```js
momentwho(madeUpData); // returns ['Corbius the Younger', 'Abbotius the Innumerate']
```

## 4. #lazyBones

Find all MPs who have never held office.

### Examples:

```js
lazyBones(madeUpData); // returns ['Lazy Larry', 'Snoozy Sally']
```

## 5. #scousersAndWools

Find all MPs who have held seats in Liverpool or Wirral constituencies and return an object with two keys, 'Liverpool' and 'Wirral', each with the value of an array containing the names with seats of the appropriate MPs.

### Examples:

```js
scousersAndWools(madeUpData); // returns {'Liverpool' : ['Luciana Berger for Wavertree', 'CalmDown Carl for Walton'], Wirral : ['Alison McGovern for Wirral South', 'Wooly Wally for Birkenhead']} etc.
```

## 6. #digitalOrDefence

Find all MPs who have had an office position mentioning 'digital' OR 'defense' and return an object with the MP names as keys and either 'digital' or 'defence' or 'digital and defence' as the value as appropriate.

### Examples:

```js
digitalOrDefence(madeUpData); // returns {'Barry Bonker: 'digital', 'Luna Lovegood' : 'defence', 'Cranky Ivan' : 'digital and defence'}
```

## 7. #shadowMPs

Find all MPs who have been a shadow minister. 

### Examples:

```js
shadowMPs(madeUpData); // returns ['Mitch McConnel', 'Paul Ryan', 'Bernie Sanders']
```

## 8. #noMember

Find all MPs who do **not** have a position of 'member'.

### Examples:

```js
noMember(madeUpData); // returns ['Bohemian Bruce', 'Alternative Annie'] etc.
```

## 9. #whoDaSpeaker

Find the speaker of the house.

### Examples:

```js
whoDaSpeaker(madeUpData); // returns 'Stormzy Humphrey-Bogart'
```

## 10. #twoYearPlusPosish

Find all MPs who have held a position for more than two years and return an array of objects with a name, position, and yearsHeld key : value pair.

### Examples:

```js
twoYearPlusPosish(madeUpData); // returns [{name : 'Jaunty Jonti', position : 'Obfuscator in Chief', yearsHeld: 17}]
```

## 11. #flusterCuck

Find all MPs who hold a position on X committee. 

### Examples:

```js
flusterCuck(madeUpData, 'Northern Ireland Affairs Committee'); // returns ['Anthea Allbright', 'Brenda Boondoggle', 'Carla Crepe']
```

## 12. #expensesClaim

Write a function that takes a cost parameter as a memberID, cost, a quantity as a number, and an item as a string (e.g. 'duck house'). The function should return an expense claim object with the following keys: item, amount, cost per item, total cost. For a bonus irony point, include a thank you message key which has a message thanking the MP for their hard work and invaluable service. 

### Examples:

```js
expensesClaim(41386, 700, 3, 'bottle of Bollanger 68'); // returns {
  MP: "Stephen Metcalfe", 
  constituency: "South Basildon and East Thurrock", 
  item : 'bottle of Bollanger 68,
  amount : 3,
  costPerItem : 700, 
  totalCost : '£2100', 
  message: 'Thank you so much Stephen for all your hard work. You have earned every penny so enjoy that bottle of Bollanger 68!'
  }
```

## 13. #totalYearsOfService

Write a function that calculates the total years of service **all** of the MPs have between them. For a bonus point return a string stating the total years of service and what the average number of years of service per MP is.

### Examples:

```js
totalYearsOfService(madeUpData); // returns '3070 years'
totalYearsOfService(madeUpData); // returns '3070 years... that's 4.72 years per MP.'

```

## 14. #debate

Write a function that takes the person IDs of two MPs and pits them against each other in a debate. The MP who has the longer constinency name will use their cunning and guile to outwit their opponent at the dispatch box.

### Examples:

```js
debate(25358, 25169); // returns 'Andy McDonald beats Sue Hayman in a heated debate in the chamber. Yaaas queen!'
```

## Credits and Sources

Data service provided by TheyWorkForYou

This data was made available by TheyWorkForYou available under the Creative Commons Attribution-ShareAlike license version 2.5 as describer at the following URL: https://www.theyworkforyou.com/api/

The data is accurate to the best of my knowledge as of March 2018 though the use here is for purely educational (JavaScript programming), i.e. not political, purposes.# MPs-They-whelm-me
