
// Function to toggle play/pause
function togglePlayPause(songId) {
	var audio = document.getElementById(songId);
	var button = event.target;

	if (audio.paused) {
		audio.play();
		button.innerHTML = "Pause";
	} else {
		audio.pause();
		button.innerHTML = "Play";
	}
}

document.addEventListener("DOMContentLoaded", function() {
    // Array of images for each school
    const school1Images = ["images/uitm1.jpg", "images/uitm2.jpg", "images/uitm3.jpg", "images/uitm4.jpg"];
    const school2Images = ["images/igop1.jpeg", "images/igop2.jpg", "images/igop3.jpg", "images/igop4.jpg"];
    const school3Images = ["images/sk1.jpg", "images/sk2.jpg", "images/sk3.jpg", "images/sk4.jpg"];

    // Function to change the image automatically
    function changeImage(imgElement, images) {
        let index = 0;
        setInterval(function() {
            index = (index + 1) % images.length; // Cycle through the images
            imgElement.src = images[index]; // Update the image source
        }, 4000); // Change image every 3 seconds
    }

    // Get image elements
    const school1Img = document.getElementById('school1-img');
    const school2Img = document.getElementById('school2-img');
    const school3Img = document.getElementById('school3-img');

    // Start changing images for each school
    changeImage(school1Img, school1Images);
    changeImage(school2Img, school2Images);
    changeImage(school3Img, school3Images);
});

let currentSlide = 0;

    function moveSlide(step) {
        const slides = document.querySelectorAll('.carousel-item');
        currentSlide += step;

        if (currentSlide < 0) currentSlide = slides.length - 1;
        if (currentSlide >= slides.length) currentSlide = 0;

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }

// Toggle visibility of the FAQ answer
function toggleAnswer() {
    var answer = document.getElementById("faqAnswer");
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block"; // Show the answer
    } else {
        answer.style.display = "none"; // Hide the answer
    }
}

window.addEventListener('load', function () {
	// Get the audio element
	var audio = document.getElementById('background-music');

	// Unmute the audio after the page loads (if autoplay is blocked)
	audio.muted = false;
});

let currentMediaIndex = 0;
let mediaItems = [];

// Collect all the media (images and videos) into an array
const galleryItems = document.querySelectorAll('.gallery-item img, .gallery-item video');
galleryItems.forEach((media, index) => {
	mediaItems.push(media);
});

// Open the lightbox for both images and videos
function openLightbox(media) {
	const lightbox = document.getElementById('lightbox');
	const lightboxImg = document.getElementById('lightbox-img');
	const lightboxVideo = document.getElementById('lightbox-video');

	lightbox.style.display = 'flex';
	
	if (media.tagName === 'IMG') {
		lightboxImg.src = media.src;
		lightboxImg.style.display = 'block';
		lightboxVideo.style.display = 'none';

		// Check if the image is portrait
		if (media.naturalHeight > media.naturalWidth) {
			lightboxImg.classList.add('portrait');
		} else {
			lightboxImg.classList.remove('portrait');
		}
	} else if (media.tagName === 'VIDEO') {
		lightboxVideo.src = media.src;
		lightboxVideo.style.display = 'block';
		lightboxImg.style.display = 'none';

		// Check if the video is portrait
		const videoElement = document.getElementById('lightbox-video');
		videoElement.classList.remove('portrait'); // Remove the class if previously added
		const videoAspectRatio = videoElement.videoHeight / videoElement.videoWidth;

		if (videoAspectRatio > 1) {
			videoElement.classList.add('portrait');
		} else {
			videoElement.classList.remove('portrait');
		}

		// Play the video inside the lightbox
		lightboxVideo.play();
	}

	currentMediaIndex = mediaItems.indexOf(media);
}

// Close the lightbox
function closeLightbox() {
	const lightboxVideo = document.getElementById('lightbox-video');
	
	// Pause the video when closing the lightbox
	lightboxVideo.pause();
	lightboxVideo.currentTime = 0;
	
	document.getElementById('lightbox').style.display = 'none';
}

// Change the media (image or video) in the lightbox
function changeMedia(direction) {
	currentMediaIndex += direction;

	if (currentMediaIndex < 0) {
		currentMediaIndex = mediaItems.length - 1;
	} else if (currentMediaIndex >= mediaItems.length) {
		currentMediaIndex = 0;
	}

	const media = mediaItems[currentMediaIndex];

	if (media.tagName === 'IMG') {
		document.getElementById('lightbox-img').src = media.src;
		document.getElementById('lightbox-img').style.display = 'block';
		document.getElementById('lightbox-video').style.display = 'none';
	} else if (media.tagName === 'VIDEO') {
		document.getElementById('lightbox-video').src = media.src;
		document.getElementById('lightbox-video').style.display = 'block';
		document.getElementById('lightbox-img').style.display = 'none';

		// Check if the video is portrait and add the 'portrait' class if needed
		if (media.videoHeight > media.videoWidth) {
			document.getElementById('lightbox-video').classList.add('portrait');
		} else {
			document.getElementById('lightbox-video').classList.remove('portrait');
		}
	}
}

// Filter gallery items based on category
function filterCategory(category) {
	const allItems = document.querySelectorAll('.gallery-item');
	allItems.forEach(item => {
		if (item.classList.contains(category) || category === 'all') {
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	});
}

// Call filterCategory('all') by default to show all items when the page loads
filterCategory('all');

// Function to check if an element is in the viewport
function isElementInViewport(el) {
	const rect = el.getBoundingClientRect();
	return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Function to add animation class when the element is in the viewport
function animateOnScroll() {
	const containers = document.querySelectorAll('.container');
	containers.forEach(container => {
		if (isElementInViewport(container)) {
			container.classList.add('animated');
		}
	});
}

// Listen to scroll event
window.addEventListener('scroll', animateOnScroll);

// Trigger animation on page load if elements are in view
animateOnScroll();

// JavaScript for real-time clock and date
function updateClock() {
	const now = new Date();
	const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
	const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
	document.getElementById('date').innerText = now.toLocaleDateString(undefined, optionsDate);
	document.getElementById('time').innerText = now.toLocaleTimeString(undefined, optionsTime);
}

// Update the clock every second
setInterval(updateClock, 1000);

// Example function to simulate visitor counter
let visitorCount = Math.floor(Math.random() * 1000) + 1;
function updateVisitorCounter() {
	document.getElementById('visitor-counter').innerText = `You are visitor number ${visitorCount}—thanks for dropping by!`;
}

window.onload = () => {
	updateClock();
	updateVisitorCounter();
}

// Get the audio element and button
const audio = document.getElementById('background-music');
const playMusicBtn = document.getElementById('play-music-btn');

// Function to play the music when the button is clicked
const playMusic = () => {
	if (audio.paused) {
		audio.play();
		playMusicBtn.textContent = 'Pause Background Music'; // Change button text
	} else {
		audio.pause();
		playMusicBtn.textContent = 'Play Background Music'; // Change button text
	}
};

// Add event listener to the button
playMusicBtn.addEventListener('click', playMusic);