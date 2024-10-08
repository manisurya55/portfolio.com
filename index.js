
const notificatonSection = document.getElementById("notify");
const notifyButton = document.getElementById("notify-but");
const mainSection = document.getElementById("main"); 
const contactForm = document.getElementById("contact-form");

//displaying confirmation message //
contactForm.addEventListener('submit',function(event){
event.preventDefault();
notificatonSection.style.display = 'block';
mainSection.style.display = 'none';
this.reset();
});

//displaying Home Section //
notifyButton.addEventListener('click',function(ev){
ev.preventDefault();
mainSection.style.display = 'block';
notificatonSection.style.display = 'none';
});