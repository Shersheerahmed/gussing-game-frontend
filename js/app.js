let images = Array.from(document.getElementsByClassName('display-image'))
function restartgame() {
   // console.log("hello")
   //1- rest all images to cup image
   for (let i = 0; i < images.length; i++){
      document.getElementById(i+1).src = 'Imagesss/cup.jpg'
   }
//2- rest game varibeles
win=false;
wrongLives = 1 ;
//3- find new random number
guessRandom()
}

let score = 0;
let correctAnswer;
let wrongLives = 2;
let win = false;
function postToBackend(){
   postScore("somebody",score)
}



//1- get random number
function guessRandom() {
   correctAnswer = Math.ceil(Math.random() * 5)
   console.log(correctAnswer)

}
guessRandom()

// 2- link every image with a clickable action

console.log(images)
function correctAction() {
   // 1- change the cup image into marble image
   document.getElementById(correctAnswer).src = 'Imagesss/marble.jpg'
   //2- increase score
   score++;
   //console.log("hi")    
   document.getElementById("scoreValue").innerHTML = score
   //-3 update win varible 
   win = true;

}
function wrongAction(index) {
   // 1-change the cup image into x

   document.getElementById(index).src = 'imagesss/wrong.jpg'
   //2- dicrease number of wrong lives
   wrongLives--;
   console.log(wrongLives)
}
for (let i = 0; i < images.length; i++) {
   images[i].addEventListener('click', function () {
      if (wrongLives != 0 && win==false) {
         if (correctAnswer == i + 1) {
            // console.log("you are correct")
            correctAction();
         }
         else {
            //console.log("you are wrong")
            wrongAction(i + 1)
         }
      }
   });

}















