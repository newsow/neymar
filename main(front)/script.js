window.onload = function() {
  mode = 0;
};
function modeView(){

  if(mode==0){
    document.getElementsByTagName('html')[0].style.filter = "invert(1)";
    mode=1;
    document.getElementById("logout").style.filter = "invert(1)";
    }
  else{
    document.getElementsByTagName('html')[0].style.filter = "invert(0)";
    mode=0;
    document.getElementById("logout").style.filter = "invert(0)";
    }
}
function Selected(select) {

  if(select==1){
  document.getElementById("selected1").style.borderBottom = "1px solid #fff"; 
  document.getElementById("selected2").style.borderBottom = "0px solid #fff";
  document.getElementById("selected3").style.borderBottom = "0px solid #fff";
  document.getElementById("selected4").style.borderBottom = "0px solid #fff";
  
  }
  if(select==2){
    document.getElementById("selected1").style.borderBottom = "0px solid #fff"; 
    document.getElementById("selected2").style.borderBottom = "1px solid #fff";
    document.getElementById("selected3").style.borderBottom = "0px solid #fff";
    document.getElementById("selected4").style.borderBottom = "0px solid #fff";
    }

}
function profileopen(){
  document.getElementById("profile-info").style.display = "block";
}
function profileclose(){
  document.getElementById("profile-info").style.display = "none";
}


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}