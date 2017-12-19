// Use the openweather API https://www.apixu.com/,
// (there are many weather APIs out there, but this one was particularly simple to use)
// You can sign up quickly and they automatically will generate a free key for you.
// Go to "my account", then click "get started" next to your api key.
// This brings you to the interactive API explorer, try entering a city under "value".
// it then shows you the sample "call" - you can even enter that in the browser
// url bar and it will give you the same response that it shows in the response body in the API explorer.

// use my key "463d2ded40814894889154200180901"

// send a request to get the current weather for a city that the user enters.
// display the relevant information to the user.
// in the url replace "yourkey" with your key

let content = document.getElementById('content');
let input = document.getElementById('input');

// Define the HTTP request object.
let request = new XMLHttpRequest();

// The function that will run when the load event has been triggered.
function reqListener () {
  // this request returns JSON = which is not quite the same as Javascript, we need to convert it to a JS object
  // look into JSON.parse https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
  console.log(request.responseText);
}

// When the request has been successfully completed it triggers the "load" event.
// this line tells it to run the "reqListener" function when "load" is triggered.
// There are other possible events too, such as: "error", "abort", "progress".
request.addEventListener("load", reqListener);

input.onchange = function() {
  // The most common request types are "get" and post"
  // GET - Requests data from a specified resource
  // POST - Submits data to be processed to a specified resource
  // ready a "get" request to this address.
  request.open("GET", "http://api.apixu.com/v1/current.json?key=yourkey&q=toronto");
  // Send the request. This is the same thing that happens when you visit the address in your url bar.
  request.send();
}
