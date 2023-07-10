
let navCounter = 0;
let bioCounter = 0;
let newsCounter = 0;
/* Set the width of the side navigation to 0 */
function toggleNav() {
  if (navCounter % 2 == 1){
    document.getElementById("mySidenav").style.width = "0%";
    document.getElementById("mySidenav").style.paddingLeft = "0%";
    document.getElementById("navTog").name = "menu";
  }else{
    document.getElementById("mySidenav").style.width = "25%";
    document.getElementById("mySidenav").style.paddingLeft = "7%";
    document.getElementById("navTog").name = "close";
  }navCounter++;
}


function toggleBio() {
  if (bioCounter % 2 == 0){
    document.getElementById("bio").style.display = "block";
    document.getElementById("alfred").style.transform = "translateX(-10%)";
  }else{
    document.getElementById("bio").style.display = "none";
    document.getElementById("alfred").style.transform = "translateX(25vw)";
  }
  bioCounter++;
}


function toggleNews() {
  if (newsCounter % 2 == 0){
    document.getElementById("news").style.display = "block";
  }else{
    document.getElementById("news").style.display = "none";
  }
  newsCounter++;
}


let currentSectionIndex = 0;

const sections = Array.from(document.querySelectorAll('section'));


function updateCurrentSection() {
  sections.forEach((section, index) => {
    const top = section.getBoundingClientRect().top;
    if (top >= 0 && top < window.innerHeight / 2) {
      currentSectionIndex = index;
    }
    backBtn = document.getElementById("backBtnDiv");
    nextBtn = document.getElementById("nextBtnDiv");
    if (currentSectionIndex == 0){
      backBtn.style.display = "none";
      nextBtn.classList.add("first-page");
    }else{
      backBtn.style.display = "block";
      nextBtn.classList.remove("first-page");
    }

    if (currentSectionIndex == (sections.length - 1)){
      nextBtn.style.display = "none";
      backBtn.classList.add("first-page");
    }else{
      nextBtn.style.display = "block";
      backBtn.classList.remove("first-page");
    }
  });
}

function scrollToNext(){
  const upcomingSection = sections[currentSectionIndex + 1];
  upcomingSection.scrollIntoView({behavior: "smooth"});
  updateCurrentSection();
}

function scrollToPrev(){
  const upcomingSection = sections[currentSectionIndex - 1];
  upcomingSection.scrollIntoView({behavior: "smooth"});
  updateCurrentSection();
}

window.addEventListener('scroll', updateCurrentSection);

