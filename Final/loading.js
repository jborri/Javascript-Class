function play() {
  var audio = new Audio('Because of You.mp3');
  audio.play();
  audio.loop = true;
  audio.volume = 0.2;
}

function setCookie(c_name,value,exdays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString()); + "; path=/";
    document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==c_name)
        {
        return unescape(y);
        }
      }
}

var song = document.getElementsByTagName('audio')[0];
var played = false;
var tillPlayed = getCookie('timePlayed');
function update()
{
    if(!played){
        if(tillPlayed){
        song.currentTime = tillPlayed;
        song.play();
        played = true;
        }
        else {
                song.play();
                played = true;
        }
    }

    else {
    setCookie('timePlayed', song.currentTime);
    }
}

setInterval(update,10);

setInterval(update,10);
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById('current-time').textContent = timeString;
  }
  
setInterval(updateTime, 1000); // Update every 1000 milliseconds
updateTime(); // Initial call to display time immediately

document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username && password) {
      // Redirect to index.html if both fields are filled
      window.location.href = "index.html";
    } else {
      // Alert the user if fields are empty
      alert("Error. Wrong User. 2 attempts remaining until system-wide shutdown.");
    }
  });
});

// var loading_screen = document.querySelector(".loading");

// window.addEventListener('load', function() {
//     loading_screen.style.display = 'none';
// })

let loaded = false
let enoughTimePassed = false

window.addEventListener("load", function() {
  if (enoughTimePassed) { hidePreloader() }
  loaded = true
})

setTimeout(() => {
  if (loaded) { hidePreloader() }
  enoughTimePassed = true
}, 1800)
console.log('timesup')

function hidePreloader() {
   document.getElementById("preloader").remove()
}

