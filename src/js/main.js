const mobileMenuOpenBtn = document.querySelector(
  ".mobile-menu-container .menu-open-btn"
);
const mobileMenu = document.querySelector(
  ".mobile-menu-container .fullscreen-container"
);
const itemOpen = document.querySelectorAll(".menu-item-link_open .item-open");
const insideItems = document.querySelectorAll(".menu-item .inside-items");

// Mobile Menu

mobileMenuOpenBtn.addEventListener("click", () => {
  mobileMenu.classList.add("fullscreen-container-open");
});

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("fullscreen-container-open");
});

itemOpen.forEach((itemBtn, index) => {
  itemBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    itemBtn.classList.toggle("item-close");
    insideItems[index].classList.toggle("inside-items-open");
  });
});

// 2019/03/25 - Questions Accordion
const questionItem = document.querySelectorAll(".question .question-item");
const plus = document.querySelectorAll(".question .question-item .plus");
const question = document.querySelectorAll(
  ".questions-container-outside .question"
);

questionItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.parentElement.classList.contains("activ")) {
      removeActiv();
    } else {
      removeActiv();
      plus[index].innerHTML = "-";
      question[index].classList.add("activ");
    }
  });
});

function removeActiv() {
  question.forEach((item, index) => {
    item.classList.remove("activ");
    plus[index].innerHTML = "+";
  });
}

// Random Number Animation
const questionsUsers = document.querySelector("#questions-users");
const valueDisplays = document.querySelectorAll(".count-content .number");
const interval = 4000;

window.addEventListener("scroll", function () {
  if (
    window.scrollY > questionsUsers.offsetTop &&
    window.scrollY - 15 < questionsUsers.offsetTop
  ) {
    valueDisplays.forEach((item) => countUp(item));
  }
});

function countUp(valueDisplay) {
  let startValue = 0;
  let endValue = Math.floor(Math.random() * 95 + 5);
  let duration = Math.floor(interval / endValue);

  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
}

// Header Scroll Fixed
const wetlandHeader = document.querySelector("#wetland-header");

window.onscroll = () => {
  if (window.scrollY > 400) {
    wetlandHeader.classList.add("fixed");
  } else {
    wetlandHeader.classList.remove("fixed");
  }
};

// Online Ofline
const span = document.createElement("span");
const body = document.body;

body.append(span);

span.innerHTML = "Mehdi";

span.style.cssText = `
font-size: 1.3rem;
font-weight: 500;
color: #f0f0f0;
font-family: "Open Sans", sans-serif;
position: absolute;
top: -100px;
left: 50%;
transform: translateX(-50%);
padding: 17px 90px;
border: 0;
border-radius: 20px;
transition: top .6s;
`;

window.addEventListener("offline", () => {
  span.innerHTML = "You are Offline";
  span.style.cssText += `
    background-color: #ee0000; 
    box-shadow: 0 0 25px 3px #ee0000; 
    top: 50px;
    `;

  setTimeout(() => (span.style.cssText += `top: -100px`), 5000);
});

window.addEventListener("online", () => {
  span.innerHTML = "You are Online";
  span.style.cssText += `
    background-color: #33ff8c; 
    box-shadow: 0 0 25px 3px #33ff8c; 
    top: 50px;
    `;

  setTimeout(() => (span.style.cssText += `top: -100px`), 5000);
});

// Dark Mode

const darkModeBtn = document.createElement("button");
darkModeBtn.classList.add("dark-mode-btn");
body.appendChild(darkModeBtn);
darkModeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;

darkModeBtn.addEventListener("click", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    if (section.hasAttribute("data-dark")) {
      section.removeAttribute("data-dark");
    } else {
      section.setAttribute("data-dark", "true");
    }

    if (section.hasAttribute("data-dark")) {
      section.style.backgroundColor = "black";
    } else {
      section.style.backgroundColor = "white";
    }
  });
});

// Scroll Up
window.onscroll = calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");

  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.style.background = `conic-gradient(#8065fd ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};

const loginBtn = document.querySelector(".acount-buttons .login");
const loginModal = document.querySelector("#login-modal");

loginBtn.addEventListener("click", () => {
  loginModal.style.display = "flex";
});


loginModal.addEventListener("click", () => {
  loginModal.style.display = "none";
});





const submitBtn = document.querySelector(".login-form .submit-btn");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  const email = document.querySelector("input[type='email']").value;
  const pass = document.querySelector("input[type='password']").value;



  const postData = {
    email: email,
    password: pass,
  };

  if(!email || !pass){
    alert("Email or Password is Empty");
  }
  else{
    fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response from the server:", data);
    });
  }
});






function togglePassword() {
  var passwordInput = document.getElementById('password');
  event.stopPropagation();
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}