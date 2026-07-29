// Assignment M3 - Photo Album Display
// JavaScript 2 - Comp 649
//Author: Brian Dinh





// **************************************************************
// TODO #1
// Select the status element
// TODO #2
// Select the photo album container
// **************************************************************

const status = document.getElementById("status");
const photoAlbum = document.getElementById("photoAlbum");

// **************************************************************
// TODO #3
// Create an async function named loadPhotos()
// **************************************************************

async function loadPhotos() {
    try {
        // **************************************************************
        // TODO #4
        // Fetch the first 25 photos
        // **************************************************************

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/photos?_limit=25"
        );

        // **************************************************************
        // TODO #5
        // Verify response was successful
        // **************************************************************

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        // **************************************************************
        // TODO #6
        // Convert response to JSON
        // **************************************************************

        const photos = await response.json();

        // **************************************************************
        // TODO #7
        // Remove loading message
        // **************************************************************

        status.textContent = "";

        // **************************************************************
        // TODO #8
        // Display photos
        // **************************************************************

        displayPhotos(photos);

    } catch (e) {
        console.error(e);

        // **************************************************************
        // TODO #9
        // Display friendly error message
        // **************************************************************

        status.textContent =
            "Sorry, photos could not be loaded. Please try again later.";
    }
}

// **************************************************************
// TODO #10
// Loop through photos
// Create a photo card
// Append it to the page
// **************************************************************

function displayPhotos(photos) {
    photoAlbum.innerHTML = "";

    photos.forEach(photo => {
        const card = createPhotoCard(photo);
        photoAlbum.appendChild(card);
    });
}

// **************************************************************
// TODO #11
// Create photo card
//
// Each card contains:
// - Thumbnail image
// - Title
//
// Return completed card
// **************************************************************

function createPhotoCard(photo) {

    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");

    // JSONPlaceholder image URLs are broken,
    // replace them with Picsum Photos
    image.src = `https://picsum.photos/seed/${photo.id}/150/150`;
    image.alt = photo.title;

    const title = document.createElement("p");
    title.textContent = photo.title;

    card.appendChild(image);
    card.appendChild(title);

    return card;
}

// **************************************************************
// TODO #12
// Start the application
// **************************************************************

loadPhotos();