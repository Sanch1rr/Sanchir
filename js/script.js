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
playButton.addEventListener("click", function () {
  finsetModal.show();
  // console.log(finsetModal);
  finsetModal._element.querySelector(
    ".modal-body"
  ).innerHTML = `<iframe width="100%" height="600" src="https://www.youtube.com/embed/o0KmjcGd6jw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
});
// Create an XMLHttpRequest object
// Create a callback function
// Open a GET request and use data from ../data/company_intro.json
// Send the request

const cardURL = "/data/company_intro.json";

getJSON(cardURL);

function getJSON(cardURL) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let parse = JSON.parse(xhr.responseText);
      // callback(parse);
      // console.log(parse.data);
      generateHTML(parse.data);
    }
  };
  xhr.open("GET", cardURL);
  xhr.send();
}

function generateHTML(data) {
  console.log(data);
  let section = document.querySelector(".ro");
  let section8 = document.querySelector(".sec8");
  data.forEach((e) => {
    section.innerHTML += `<div class="col-12 col-md-6 col-lg-3">
  <div class="card">
      <img src="${e.thumbnail}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${e.title}</h5>
        <p class="card-text p1">${e.content}.</p>
        <a href="#" class="btn btn-primary">Learn More &#8594;</a>
      </div>
    </div>
</div>
    `;
  });
  let some = "";
  for (let key in data) {
    if (data[key].hasOwnProperty("title")) {
      some += `<div class="col-12 col-md-6 col-lg-3">
  <div class="card">
      <img src="${data[key].thumbnail}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${data[key].title}</h5>
        <p class="card-text p1">${data[key].content}.</p>
        <a href="#" class="btn btn-primary">Learn More &#8594;</a>
      </div>
    </div>
</div>
       `;
    } else {
      console.log("None");
    }
  }
  section8.innerHTML = some;
}
/*  Add subscription email action. When subscription POST request is successful, 
    change the email element and subscribe button into "Your subscription is successful" Text. 
    POST request should be done by AJAX request. We need a POST request end point for subscription email. 
*/
// Define Subscribe by ID name

// Add CLICK Event Listener on the button
// Then using Fetch method POST input value to http://52.221.191.153/subscribe/subscription/create
