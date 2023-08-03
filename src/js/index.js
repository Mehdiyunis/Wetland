/* filter galery */
const filterBtn = document.querySelectorAll(".filter-btn");
const filterItem = document.querySelectorAll(".filter-item");
const yourCreativeWebDesign = document.querySelector(
  "#your-creative-web-design .content button"
);










// Move Imgs
const number = document.querySelectorAll(".count-content .number");

filterBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    removeOpaciy();
    item.classList.add("activ");
    setTimeout(() => filterItem[index].classList.add("opacity"), 300);
  });
});

function removeOpaciy() {
  filterItem.forEach((item) => {
    item.classList.remove("opacity");
  });

  filterBtn.forEach((item) => {
    item.classList.remove("activ");
  });
}

if (document.body.clientWidth < 1200) {
  yourCreativeWebDesign.innerHTML = "Contact";
}








// Personal slider
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    responsive: {
      1: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
});

// Features Cards
async function getFeatures() {
  const req = await fetch("http://localhost:3000/features");
  const res = await req.json();
  const featuresCards = document.querySelector(".features-cards"); 

  res.forEach(item=>{
    const {imgURL, title, text} = item;

    featuresCards.innerHTML += `
                    <div class="col-lg-4 outside-card">
                        <div class="inside-card">

                            <div class="img-div">
                                <img src="${imgURL}"
                                    alt="">
                            </div>

                            <h4 class="title">${title}</h4>
                            <p class="text">${text}</p>
                        </div>
                    </div>
    ` 
  })
}
getFeatures()