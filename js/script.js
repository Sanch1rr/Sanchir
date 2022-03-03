// Use window.addEventListener("scroll",) Event listener.
// then add callback function that includes when the window height scroll down to 100vh and add 'fixed-top' class on Navbar element.
// For your mind: object.classList.add('class') this method is add class on selected element
// e.target.scrollingElement.scrollTop use that method when track scrolling amount

function scrollDetect(e) {
  let st = e.target.scrollingElement.scrollTop;
  const navbar = document.querySelector(".navbar");

  if (st > window.innerHeight / 1.5) {
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("fixed-top");
  }
}
console.log(window.innerHeight);

// Add scrollDetect callback function on window.addEventlistener('scroll', callback) Listener
window.addEventListener("scroll", scrollDetect);

// Define Play button variable
const playButton = document.querySelector(".btn-video-player");

// Create a modal with a single line of JavaScript: https://getbootstrap.com/docs/5.1/components/modal/#via-javascript
// Define finsetModal then use Bootstrap modal Object request
let finsetModal = new bootstrap.Modal(document.getElementById("finsetModal"), {
  keyboard: false,
});

// Create Click Event Listener on Play button variable (you already created above)
// add finsetModal.show() on callback function
// Select '.modal-body' class from finsetModal variable then use innerHTML method and add Youtube embed code
// playButton.addEventListener("click", function () {
//   finsetModal.show();
//   // console.log(finsetModal);
//   finsetModal._element.querySelector(
//     ".modal-body"
//   ).innerHTML = `<iframe width="100%" height="600"`;
// });
// Create an XMLHttpRequest object
// Create a callback function
// Open a GET request and use data from ../data/company_intro.json
// Send the request
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let data = JSON.parse(xhr.responseText);
  }
};
xhr.open("GET", "/data/company_intro.json");
xhr.send();

/*  Add subscription email action. When subscription POST request is successful, 
    change the email element and subscribe button into "Your subscription is successful" Text. 
    POST request should be done by AJAX request. We need a POST request end point for subscription email. 
*/
// Define Subscribe by ID name

// Add CLICK Event Listener on the button
// Then using Fetch method POST input value to http://52.221.191.153/subscribe/subscription/create
