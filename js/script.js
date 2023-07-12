const menuHamburger = document.querySelector(".menu-hamburger") 
 const navLinks = document.querySelector(".nav-links") 
  
 menuHamburger.addEventListener('click',()=>{ 
   if (navLinks.classList.contains("mobile-menu")) { 
     navLinks.classList.remove("mobile-menu"); 
     setTimeout(() => { 
       navLinks.classList.add("none-mobile"); 
     }, 500); 
   } else { 
     navLinks.classList.remove("none-mobile"); 
     setTimeout(() => { 
       navLinks.classList.add("mobile-menu"); 
     }, 1); 
   } 
 })