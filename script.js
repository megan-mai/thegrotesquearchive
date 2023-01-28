
function about(){
  var divsToHide = document.getElementsByClassName("right"); //divsToHide is an array
     for(var i = 0; i < divsToHide.length; i++){
       divsToHide[i].style.display = "none"; // depending on what you're doing
     }
     var divsToReveal = document.getElementsByClassName("altright"); //divsToHide is an array
     for(var i = 0; i < divsToHide.length; i++){
          divsToReveal[i].style.display = "flex"; // depending on what you're doing
        }

}
