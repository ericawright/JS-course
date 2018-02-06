// Use the function you created in the terminal for obfuscating passwords and 
// display the obfuscated password in the content element

// obfuscate each password, such that:
// Every "a" in the string should be replaced with a "4".
// Every "e" in the string should be replaced with a "3".
// Every "o" (oh) in the string should be replaced with a "0" (zero).
// Every "l" (el) in the string should be replaced with a "1" (one).


let content = document.getElementById('content');
let passwordInput = document.getElementById('password');

passwordInput.onchange = function() {
  content.innerHTML = "The obfuscated password is: ";
}
