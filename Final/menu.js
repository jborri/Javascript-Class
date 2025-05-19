document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-button");
  const startMenu = document.getElementById("start-menu");

  startButton.addEventListener("click", () => {
    // Toggle the visibility of the start menu
    if (startMenu.classList.contains("hidden")) {
      startMenu.classList.remove("hidden");
      startMenu.style.display = "block";
    } else {
      startMenu.classList.add("hidden");
      startMenu.style.display = "none";
    }
  });

  // Close the menu if clicked outside?
  document.addEventListener("click", (event) => {
    if (!startButton.contains(event.target) && !startMenu.contains(event.target)) {
      startMenu.classList.add("hidden");
      startMenu.style.display = "none";
    }
  });

  // nature.exe elements
  const door1Link = document.getElementById("door1-link");
  const natureLink = document.getElementById("nature-link");
  const door1Modal = document.getElementById("door1-modal");
  const closeDoor1 = document.getElementById("close-door1");

  // reflect.exe elements
  const reflectLink = document.getElementById("reflect-link");
  const memesLink = document.getElementById("memes-link");
  const reflectModal = document.getElementById("reflect-modal");
  const closereflect = document.getElementById("close-reflect");

  // Door 3 elements gone lol
  const escapeLink = document.getElementById("escape-link");
  const meLink = document.getElementById("me-link");
  const escapeModal = document.getElementById("escape-modal");
  const closeescape = document.getElementById("close-escape");

  // Function to open a modal
  const openModal = (modal) => {
    modal.classList.remove("hidden");
  };

  // Function to close a modal
  const closeModal = (modal) => {
    modal.classList.add("hidden");
  };

  // nature.exe event listeners
  door1Link.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(door1Modal);
  });

  natureLink.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(door1Modal);
  });

  closeDoor1.addEventListener("click", () => {
    closeModal(door1Modal);
  });

  // reflect.exe event listeners
  reflectLink.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(reflectModal);
  });

  memesLink.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(reflectModal);
  });

  closereflect.addEventListener("click", () => {
    closeModal(reflectModal);
  });

  // Door 3 event listeners gone D:
  escapeLink.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(escapeModal);
    setTimeout(function(){ map.invalidateSize()}, 500); // Time out and refresh wheh Modal Opens
  });

  meLink.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(escapeModal);
    setTimeout(function(){ map.invalidateSize()}, 500); // Time out and refresh wheh Modal Opens
  });

  closeescape.addEventListener("click", () => {
    closeModal(escapeModal);
  });

  // Close modal when clicking outside the content
  window.addEventListener("click", (event) => {
    if (event.target === door1Modal) {
      closeModal(door1Modal);
    }
    if (event.target === reflectModal) {
      closeModal(reflectModal);
    }
    if (event.target === escapeModal) {
      closeModal(escapeModal);
    }
  });

  const musicPlayer = document.getElementById("musicplayer");
  const audio = document.getElementById("background-music");

  musicPlayer.addEventListener("click", () => {
    if (audio.paused) {
      audio.play(); // Play the music
      musicPlayer.classList.remove("paused");
      musicPlayer.classList.add("playing");
    } else {
      audio.pause(); // Pause the music
      musicPlayer.classList.remove("playing");
      musicPlayer.classList.add("paused");
    }
  });

  const lotusImage = document.getElementById("lotus");
  const lotusModal = document.getElementById("lotus-modal");
  const closeLotus = document.getElementById("close-lotus");

  // Open the modal when the lotus image is clicked
  lotusImage.addEventListener("click", () => {
    lotusModal.classList.remove("hidden");
  });

  // Close the modal when the close button is clicked
  closeLotus.addEventListener("click", () => {
    lotusModal.classList.add("hidden");
  });

  // Close the modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === lotusModal) {
      lotusModal.classList.add("hidden");
    }
  });

  const rotationSpeedSlider = document.getElementById("rotationSpeed1");
  const speedValue = document.getElementById("speedValue1");
  const smallest = document.querySelector(".smallest");
  const largest = document.querySelector(".largest");
  const middle = document.querySelector(".middle");

  // Function to update the animation duration
  const updateRotationSpeed = () => {
    const speed = rotationSpeedSlider.value;
    speedValue.textContent = speed;

    // Update the animation duration for each image
    smallest.style.animationDuration = `${speed}ms`;
    largest.style.animationDuration = `${speed}ms`;
    middle.style.animationDuration = `${speed}ms`;
  };

  // Add event listener to the slider
  rotationSpeedSlider.addEventListener("input", updateRotationSpeed);

  // Initialize the rotation speed
  updateRotationSpeed();
});

// Music player from previous project
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

function updateDateTime() {
  const now = new Date();
  const dateString = now.toLocaleDateString();
  const timeString = now.toLocaleTimeString();
  document.getElementById('current-time').textContent = `${dateString} ${timeString}`;
}

setInterval(updateDateTime, 1000); // Update every second
updateDateTime(); // Initial call to display immediately

  //loading screeeen
//   var loading_screen = document.querySelector(".loading");

// window.addEventListener('load', function() {
//     loading_screen.style.display = 'none';
// })
// Creating a new date object with the current date and time
const now = new Date();

// Creating a new date object with a specific date and time
const specificDate = new Date('2024-07-20T10:30:00');

// Creating a new date object with year, month (0-indexed), day, hours, minutes, seconds, milliseconds
const anotherDate = new Date(2025, 4, 11, 15, 45, 30, 500);

// Getting date components
const year = now.getFullYear();
const month = now.getMonth(); // 0-indexed
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const milliseconds = now.getMilliseconds();

// Setting date components
specificDate.setFullYear(2026);
specificDate.setMonth(6); // 0-indexed
specificDate.setDate(25);
specificDate.setHours(12);
specificDate.setMinutes(0);
specificDate.setSeconds(0);
specificDate.setMilliseconds(0);




// Formatting dates
const isoString = now.toISOString();
const dateString = now.toDateString();
const timeString = now.toTimeString();
const localeDateString = now.toLocaleDateString();
const localeTimeString = now.toLocaleTimeString();

// Getting timestamp (milliseconds since epoch)
const timestamp = now.getTime();

// Creating date from timestamp
const dateFromTimestamp = new Date(timestamp);

// Parsing date from string
const parsedDate = new Date(Date.parse('2024-07-20T10:30:00'));

// Date arithmetic
const futureDate = new Date(now);
futureDate.setDate(now.getDate() + 7); // Add 7 days

const pastDate = new Date(now);
pastDate.setDate(now.getDate() - 3); // Subtract 3 days

//falling pics/emojis

const emojiContainer = document.querySelector('.emoji-container');
const emojis = ['🍃', '🍃', '🪻', '🍃', '🪻']; 

function createFallingEmoji() {
    const emoji = document.createElement('span');
    emoji.classList.add('emoji');

    // Create an img element for the picture
    const img = document.createElement('img');
    img.src = 'images/desktop/flower.png'; 
    img.alt = 'Falling Image';
    img.style.width = '150px'; // Adjust the size of the image
    img.style.height = '150px';

    // Append the image to the emoji container
    emoji.appendChild(img);

    // Random horizontal starting position
    emoji.style.left = `${Math.random() * 100}%`;
    emoji.style.top = `${-5}%`;

    // Apply falling animation
    emoji.style.animationName = "fall";

    // Random duration for a varied effect
    emoji.style.animationDuration = `${Math.random() * 4 + 3}s`; // Duration between 3-7s

    // Add the emoji to the container
    emojiContainer.appendChild(emoji);

    // Remove the emoji after it finishes falling
    emoji.addEventListener('animationend', () => {
        emoji.remove();
    });
}

// Create a new emoji every so often
setInterval(createFallingEmoji, 1000);


document.querySelector('.submit-button').addEventListener('click', () => {
  const textBox = document.querySelector('.reflect-textbox');
  const scrollingTextContainer = document.querySelector('.scrolling-text-container'); // Select the container for multiple texts

  // Get the text from the textarea
  const text = textBox.value.trim();

  // Clear the textarea
  textBox.value = '';

  if (!text) return;

  // Create a new scrolling text element
  const newScrollingText = document.createElement('div');
  newScrollingText.classList.add('scrolling-text');
  newScrollingText.textContent = text;

    // Dynamically set the animation duration
  const duration = Math.max(25, text.length / 3); // Longer text scrolls slower
  newScrollingText.style.animationDuration = `${duration}s`;

  // Set a random position for the text 
  newScrollingText.style.left = '80%'; 
  newScrollingText.style.top = `${Math.random() * 80}%`;

  // Append the new text to the scrolling container
  scrollingTextContainer.appendChild(newScrollingText);

  // Remove the text after the animation ends
  newScrollingText.addEventListener('animationend', () => {
    newScrollingText.remove();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const imageFolder = "images/door1/";
  const images = [
    "IMG_0679.JPG",
    "IMG_1041.JPG",
    "IMG_1042.JPG",
    "IMG_1043.JPG",
    "IMG_1049.JPG",
    "IMG_1057.JPG",
  ];

  let currentIndex = 0;
  const slideshowElement = document.getElementById("slideshow");
  const speedSlider = document.getElementById("speedSlider");
  const speedValue = document.getElementById("speedValue");

  let intervalId;
  let cycleSpeed = parseInt(speedSlider.value, 10);

  function cycleImages() {
    const imagePath = imageFolder + images[currentIndex];
    console.log("Loading image:", imagePath); // Debugging
    slideshowElement.src = imagePath;
    currentIndex = (currentIndex + 1) % images.length;
  }

  function startSlideshow() {
    clearInterval(intervalId); // Clear the previous interval
    intervalId = setInterval(cycleImages, cycleSpeed); // Start a new interval with the updated speed
  }

  // Update the cycle speed when the slider value changes
  speedSlider.addEventListener("input", () => {
    cycleSpeed = parseInt(speedSlider.value, 10); // Get the new speed from the slider
    speedValue.textContent = cycleSpeed; // Update the displayed speed value
    startSlideshow(); // Restart the slideshow with the new speed
  });

  // Start the slideshow initially
  startSlideshow();
  cycleImages(); // Show the first image immediately
});

// Setting up Map

var map = L.map('map', {
    minZoom: 10,
    maxZoom: 13,
}).setView([40.74470993686422, -73.9580105570574], 10);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

addressPoints = addressPoints.map(function (p) { return [p[0], p[1]]; });

var heat = L.heatLayer(addressPoints, {
  radius: 40, // Increase or decrease for more/less spread
  blur: 40,   // Lower blur for sharper points
  max: 2.0,   // Lower max for higher contrast 
  gradient: {0.2: 'blue',0.4: 'cyan', 0.5: "chartreuse", 0.6: 'yellow', .8: 'red', 1.0: 'white'},
  maxZoom: 1.0,
  maxOpacity: .8,
  minOpacity: 0.4,
}).addTo(map);


