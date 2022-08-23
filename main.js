let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//step 1
secretMessage.pop();
console.log(secretMessage);

//step 2

//step 3
secretMessage.push('to');
secretMessage.push('Program');
console.log(secretMessage);

//step 4
secretMessage.splice(7, 1, "right")
console.log(secretMessage);

//step 5
secretMessage.shift();
console.log(secretMessage);

//step 6
secretMessage.unshift('Programming');
console.log(secretMessage);

//step 7
secretMessage.splice(6, 5, 'know');
console.log(secretMessage);

//step 8
console.log(secretMessage.join());
