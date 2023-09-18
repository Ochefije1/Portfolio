//GREETING
var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
  greet = 'Good Morning!';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon!';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening!';

document.getElementById('checkTime').innerHTML = '<b>' + greet + '</b>';


function toggleText(event) {
  const button = event.target;
  const text = button.previousElementSibling; // Get the previous element, which is the text element
  if (text.classList.contains('hidden')) {
      text.classList.remove('hidden');
      button.textContent = 'Close'; // Change the button text
  } else {
      text.classList.add('hidden');
      button.textContent = 'More Details'; // Change the button text
  }
}
// const button = document.querySelector('#my-button');

// button.addEventListener('click', function() {
//   const text = 'fsssdffdsddddfsdfdfdfdsfdfAppended text';
//   // Append text to the button's text content
//   button.textContent += text;
//   // Or append text to the button's HTML using innerHTML
//   button.innerHTML += text;
// });

// const button = document.querySelector('#my-button');
// const paragraph = document.querySelector('#my-paragraph');

// button.onclick = function() {
//   const text = 'Displayed text';
//   paragraph.textContent = text;
// };

// const button = document.querySelector('#my-button');
// const div = document.querySelector('#my-div');

// button.onclick = function() {
//   const htmlText = '<strong>Displayed HTML text</strong>';
//   div.innerHTML = htmlText;
// };


// Hamburger Icon
const button = document.querySelector('#menu-button'); 
// Menu
const menu = document.querySelector('#menu'); 

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});


// Get the URL of the current page
const currentPageUrl = window.location.href;

// Get all menu links
const menuLinks = document.querySelectorAll('nav a');

// Loop through each menu link
menuLinks.forEach(link => {
  // If the link's href attribute matches the current page URL
  if (link.href === currentPageUrl) {
    // Add the border-b-2 and border-blue-500 classes to the link
    link.classList.add('border-b-2', 'border-blue-500');
  }
});




// const hamburgerIcon = document.querySelector('.hamburger-icon');
// hamburgerIcon.addEventListener('click', function() {
//   this.classList.toggle('active');
// });


// function socialMedia(id, image){
//   const whatsappImg = document.getElementById(`${id}`);
//   whatsappImg.src = "../icons/"+`${image}`;
// }




// function changeHeaderImage(){
//   let img = document.getElementById('header-img')
//   let width = window.screen.width;
//   img.style.src = "../images/profile_600*600.png"

// }

// function displayMenu(){
//   const menu = document.getElementById("menu-container")
//   menu.style.display = block;
//   menu.style.backgroundColor = '#454545'
// }

// function hideMenu(){
//   const menu = document.getElementsByClassName('menu-container')
//   menu.style.display = "none";
  
// }

// function menu() {
//   var x = document.getElementById("menu-container");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }

// }