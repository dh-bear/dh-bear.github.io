
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
  }else{
    document.getElementById("bio").style.display = "none";
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