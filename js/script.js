const navBar = document.querySelector('nav')
const body = document.querySelector('body')
const homeContainer = document.querySelector('#home-container')
const aboutContainer = document.querySelector('#about-container')
const homeIconLg = document.querySelector('#menu-bar-lg #home')
const aboutIconLg = document.querySelector('#menu-bar-lg #about')
const skillIconLg = document.querySelector('#menu-bar-lg #skill')
const projectsIconLg = document.querySelector('#menu-bar-lg #projects')
const contactIconLg = document.querySelector('#menu-bar-lg #contact')
const menuIcon = document.querySelector('#menu-icon')
const menuBarSm = document.querySelector('#menu-bar-sm')
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')


const sendLoveEmail = document.querySelector('#send-love-email')
const sendLoveBtn = document.querySelector('#send-love-btn')
const specialChar = '?\'\"#()%/*-+=<>$đ^`_~[£{}&.,:;…·';

sendLoveEmail.addEventListener('keyup', () => {
  if (sendLoveEmail.value.slice(-10) == '@gmail.com') {
    sendLoveEmail.style.border = 'none';
    sendLoveBtn.style.opacity = '1';
  } else {
    sendLoveEmail.style.border = '2px solid red';
    sendLoveBtn.style.opacity = '.5';
  }
  if (sendLoveEmail.value == '') {
    sendLoveEmail.style.border = 'none';
  }
})

sendLoveBtn.addEventListener('click', () => {
  if (sendLoveEmail.value == '') {
    sendLoveEmail.style.border = '2px solid red';
  }
  if (sendLoveBtn.style.opacity == 1) {
    console.log(sendLoveEmail.value);
    sendLoveEmail.value = '';
    sendLoveBtn.style.opacity = .5;
  }
})

var autoTypeBio = new Typed('.auto-type1', {
  strings: ['developer', 'designer'],
  typeSpeed: 350,
  backSpeed: 150,
  loop: true
})

let isClickedMenuIcon = 'no';
menuIcon.addEventListener('click', () => {
  if (isClickedMenuIcon == 'no') {
    line2.style.opacity = 0;
    line1.style.transform = 'rotate(45deg) translate(4.5px, 5px)';
    line3.style.transform = 'rotate(-45deg) translate(4.5px, -5px)';
    menuBarSm.style.transform = 'translateY(0)';
    homeContainer.style.marginTop = '120px';
    isClickedMenuIcon = 'yes';
  } else {
    line2.style.opacity = 1;
    line1.style.transform = 'rotate(0) translate(0)';
    line3.style.transform = 'rotate(0) translate(0)';
    menuBarSm.style.transform = 'translateY(-250%)';
    homeContainer.style.marginTop = '80px';
    isClickedMenuIcon = 'no';
  }
})

window.addEventListener('load', () => {
  homeIconLg.classList.add('arrow');
  aboutIconLg.classList.remove('arrow');
  skillIconLg.classList.remove('arrow');
  projectsIconLg.classList.remove('arrow');
  contactIconLg.classList.remove('arrow');
})
homeIconLg.addEventListener('click', () => {
  homeIconLg.classList.add('arrow');
  aboutIconLg.classList.remove('arrow');
  skillIconLg.classList.remove('arrow');
  projectsIconLg.classList.remove('arrow');
  contactIconLg.classList.remove('arrow');
})
aboutIconLg.addEventListener('click', () => {
  homeIconLg.classList.remove('arrow');
  aboutIconLg.classList.add('arrow');
  skillIconLg.classList.remove('arrow');
  projectsIconLg.classList.remove('arrow');
  contactIconLg.classList.remove('arrow');
})
skillIconLg.addEventListener('click', () => {
  homeIconLg.classList.remove('arrow');
  aboutIconLg.classList.remove('arrow');
  skillIconLg.classList.add('arrow');
  projectsIconLg.classList.remove('arrow');
  contactIconLg.classList.remove('arrow');
})
projectsIconLg.addEventListener('click', () => {
  homeIconLg.classList.remove('arrow');
  aboutIconLg.classList.remove('arrow');
  skillIconLg.classList.remove('arrow');
  projectsIconLg.classList.add('arrow');
  contactIconLg.classList.remove('arrow');
})
contactIconLg.addEventListener('click', () => {
  homeIconLg.classList.remove('arrow');
  aboutIconLg.classList.remove('arrow');
  skillIconLg.classList.remove('arrow');
  projectsIconLg.classList.remove('arrow');
  contactIconLg.classList.add('arrow');
})

const searchInput = document.querySelector('.auto-type')
const carBox = document.querySelector('.car-box')
const menBox = document.querySelector('.men-box')
const womenBox = document.querySelector('.women-box')
const bedBox = document.querySelector('.bed-box')

var autoTypeSearch = new Typed('.auto-type', {
  strings: ['Car', 'Men', 'Women', 'Bed'],
  typeSpeed: 350,
  backSpeed: 350,
  loop: true
})

setInterval(() => {
  if (searchInput.textContent == "Car") {
    carBox.classList.add('car')
    bedBox.classList.remove('bed')
  }
  if (searchInput.textContent == "Men") {
    carBox.classList.remove('car')
    menBox.classList.add('men')
  }
  if (searchInput.textContent == "Women") {
    menBox.classList.remove('men')
    womenBox.classList.add('women')
  }
  if (searchInput.textContent == "Bed") {
    womenBox.classList.remove('women')
    bedBox.classList.add('bed')
  }
},100)

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const msg = document.querySelector('#msg');
const msgCount = document.querySelector('#msg-count');
const msgSendBtn = document.querySelector('#msg-send-btn');
const nameBox = document.querySelector('#name-box');
const nameLine = document.querySelector('#name-underline');
const emailBox = document.querySelector('#email-box');
const emailLine = document.querySelector('#email-underline');
const phoneBox = document.querySelector('#phone-box');
const phoneLine = document.querySelector('#phone-underline');
const nameErr = document.querySelector('#name-box #underline');
const emailErr = document.querySelector('#email-box #underline');
const phoneErr = document.querySelector('#phone-box #underline');
const nameErrText = document.querySelector('#name-box .validation');
const emailErrText = document.querySelector('#email-box .validation');
const phoneErrText = document.querySelector('#phone-box .validation');
const msgErrText = document.querySelector('#msg-box .validation');

name.addEventListener('keyup', () => {
  if (name.value == '' ) {
    nameLine.style.width = '0%';
  } else {
    nameLine.style.width = '100%';
  }
})

email.addEventListener('keyup', () => {
  if (email.value != '' && email.value.slice(-10) == '@gmail.com') {
    emailLine.style.width = '100%';
  } else {
    emailLine.style.width = '0%';
  }
})

phone.addEventListener('keyup', () => {
  if (phone.value == '' ) {
    phoneLine.style.width = '0%';
  } else {
    phoneLine.style.width = '100%';
  }
})

msg.addEventListener('keyup', () => {
  if (msg.value.length > 100) {
    msg.style.borderColor = 'red';
  } else {
    msg.style.borderColor = '#444';
  }
  if (msg.value == '') {
    msgCount.textContent = 0;
  } else {
    msgCount.textContent = msg.value.length;
  }
})

msgSendBtn.addEventListener('click', () => {
  if (name.value == '') {
    nameErr.style.background = 'red';
    nameErrText.textContent = 'Invalid name';
    nameLine.style.width = '0%';
  } else {
    nameErrText.textContent = '';
    nameErr.style.background = '#444';
    nameLine.style.width = '100%';
  }
  if (email.value != '' && email.value.slice(-10) == '@gmail.com') {
    emailErr.style.background = '#444';
    emailErrText.textContent = '';
    emailLine.style.width = '100%';
  } else {
    emailErr.style.background = 'red';
    emailErrText.textContent = 'Invalid email';
    emailLine.style.width = '0%';
  }
  if (phone.value == '') {
    phoneErr.style.background = 'red';
    phoneErrText.textContent = 'Invalid phone';
    phoneLine.style.width = '0%';
  } else {
    phoneErr.style.background = '#444';
    phoneErrText.textContent = '';
    phoneLine.style.width = '100%';
  }
  if (msg.value == '') {
    msg.style.borderColor = 'red';
    msgErrText.textContent = 'Invalid message';
    msgErrText.style.bottom = '-35px';
  } else {
    msg.style.borderColor = '#444';
    msgErrText.textContent = '';
  }
  if (name.value != '' && email.value != '' && email.value.slice(-10) == '@gmail.com' && phone.value != '' && msg.value != '' && msg.value.length <= 100) {
    const validname = name.value;
    const validemail = email.value;
    const validphone = phone.value;
    const validmsg = msg.value;
    name.value = '';
    email.value = '';
    phone.value = '';
    msg.value = '';
    msgCount.textContent = 0;
    console.log(validname)
    console.log(validemail)
    console.log(validphone)
    console.log(validmsg)
  }
})