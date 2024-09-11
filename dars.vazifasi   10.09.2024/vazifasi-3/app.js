const numbers = [3, 5, 7, 2, 4, 8, 10];
const evenSum = numbers  
    .filter(num => num % 2 === 0) 
    .reduce((acc, val) => acc + val, 0); 
console.log(`Berilgan massivdagi juft sonlar yig'indisi: ${evenSum}`);