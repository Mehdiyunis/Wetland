const mobileMenuOpenBtn = document.querySelector(".mobile-menu-container .menu-open-btn");
const mobileMenu = document.querySelector(".mobile-menu-container .fullscreen-container"); 
const itemOpen = document.querySelectorAll(".menu-item-link_open .item-open");
const insideItems = document.querySelectorAll(".menu-item .inside-items");

mobileMenuOpenBtn.addEventListener("click",()=>{
    mobileMenu.classList.add("fullscreen-container-open");
});

mobileMenu.addEventListener("click",()=>{
    mobileMenu.classList.remove("fullscreen-container-open");
});


itemOpen.forEach((itemBtn, index)=>{
    itemBtn.addEventListener("click",(event)=>{
        event.stopPropagation();
        itemBtn.classList.toggle("item-close");
        insideItems[index].classList.toggle("inside-items-open");
    })
})