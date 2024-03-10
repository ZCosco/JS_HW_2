// Here is my solution for the Python Codewars Question but in JavaScript

function past(h, m, s) {
    let hours = h * 60 * 60 * 1000;
    let minutes = m * 60 * 1000;
    let seconds = s * 1000;
    
    // Add up milliseconds for HMS
    let total_ms = hours + minutes + seconds;
    
    return total_ms;
}


// Instructions for the JavaScript Codewars question that I have not previously attempted.
// After attempted it passed and was submitted to CodeWars

function solution(str){
    return str.split('').reverse().join('');
  }