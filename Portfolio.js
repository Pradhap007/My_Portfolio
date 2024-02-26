let links=document.getElementsByClassName("tab-links")
let contents=document.getElementsByClassName("tab-contents")
function show(id)
{
    for(i of links){
        i.classList.remove("active-link");
    }
    for(j of contents){
        j.classList.remove("active-skill");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(id).classList.add("active-skill");

}
var sidemenu=document.getElementById("sidemenu")
function open1(){
   sidemenu.style.right = "0"
}
function close1(){
    sidemenu.style.right="-200px"
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbzvsu9G5riMfshFEDg6YGrH76zJq39GRenIhANbN2qvXe81WtI8na_zI2OSh0N0UhI5TQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const sub = document.getElementById("sub")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        sub.innerHTML="Message Sent Seccessfully"
        setTimeout(function(){
            sub.innerHTML=""
        },1000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })