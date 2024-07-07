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

window.addEventListener("scroll",() => {
  if (window.scrollY > 400) {
    wetlandHeader.classList.add("fixed");
    console.log("sdfswfsa");
  } else {
    wetlandHeader.classList.remove("fixed");
  }
})


// Online Offline
const span = document.createElement("span");
const body = document.body;

body.append(span);

span.innerHTML = "Your are offline";

span.style.cssText = `
font-size: 1rem;
font-weight: 500;
color: #f0f0f0;
font-family: "Open Sans", sans-serif;
position: absolute;
top: -200px;
left: 50%;
transform: translateX(-50%);
padding: 15px 30px;
border: 0;
border-radius: 20px;
transition: top .6s;
  text-align: center;
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







function togglePassword() {
  var passwordInput = document.getElementById('password');
  event.stopPropagation();
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}


const noLink = document.createElement("div");
noLink.innerHTML = "The switch is not set";
noLink.classList.add("no-link")
document.body.appendChild(noLink)

function noLinkFun(){
  noLink.classList.add("no-link_show");
  setTimeout(()=>noLink.classList.remove("no-link_show"), 3500)
}






