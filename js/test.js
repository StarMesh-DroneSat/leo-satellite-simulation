var responses = ["Well hello there!","Hello","Hola!","Go fuck yourself", "Biyatch!!!"];
var totalResponses = responses.length;
var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
var response = responses[responseIndex];
console.log(response);