var text = 'welcome noa <3';
var index = 0;
var speed = 100;

var isDone = 0;

function typeWriter() {
 if (index < text.length) {
 document.getElementById('animated-text').innerHTML += text.charAt(index);
 index++;
 setTimeout(typeWriter, speed);
 } else {
 setTimeout(function(){
  document.getElementById('animated-text2').style.display = 'block';
  typeWriter2();
 }, 1000);
 }
}

typeWriter();

var text2 = 'click me!';
var index2 = 0;
var speed2 = 100;

function typeWriter2() {
  if (index2 < text2.length) {
  document.getElementById('animated-text2').innerHTML += text2.charAt(index2);
  index2++;
  setTimeout(typeWriter2, speed2);
  }
}

document.body.addEventListener('click', function() {
    var bgTextDiv = document.getElementById('bg-text');
    while (bgTextDiv.firstChild) {
    bgTextDiv.removeChild(bgTextDiv.firstChild);
    }
    var newMessage = document.createElement('h1');
    newMessage.id = 'animated-text';
    newMessage.innerHTML = 'thank you for being the best person ever to be kind towards me..'; 
    bgTextDiv.appendChild(newMessage);
   
    setTimeout(function() {
    while (bgTextDiv.firstChild) {
    bgTextDiv.removeChild(bgTextDiv.firstChild);
    }
    var imgElement = document.createElement('img');
    imgElement.src = 'assets/img/snowman.PNG'; 
    imgElement.width = 500;
    imgElement.height = 500;
    bgTextDiv.appendChild(imgElement);
    bgTextDiv.removeAttribute('style');
    }, 5000);
});
   