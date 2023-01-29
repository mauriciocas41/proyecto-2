document.addEventListener("DOMConntentloaded",() =>{
   const user = localStorage.getItem("user");
   if (user) {

   } else{
    window.location = "./login.html"
   }
})