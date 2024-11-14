// Toggle enlarged class for profile image on click
const profileImage = document.getElementById('profileImage');
profileImage.addEventListener('click', function () {
    this.classList.toggle('enlarged');
});

// Navigation hover effect fixes
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#e74c3c';
        this.style.color = '#ffffff';
    });
    link.addEventListener('mouseout', function () {
        this.style.backgroundColor = '';
        this.style.color = '';
    });
});

// Enlarge All Text Button
document.getElementById('enlargeTextButton').addEventListener('click', function () {
    document.body.classList.toggle('large-text');  // Apply class for enlarged text
});

// Change Text/Background Color Button
document.getElementById('changeColorButton').addEventListener('click', function () {
    // Toggle the color scheme
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = '#f0f8ff';
        document.body.style.color = '#333';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = '#FFF';
    }

    // Select and update colors for headings, navigation links, paragraphs, and table text
    document.querySelectorAll('h1, h2, h3, p, nav a, table th, table td').forEach(element => {
        element.style.color = document.body.style.color;
    });
});

// Show Alt Text Button for Images
document.querySelectorAll('.showAltTextButton').forEach((button, index) => {
    button.addEventListener('click', function () {
        const image = document.querySelectorAll('.captioned-image')[index];
        if (image) {
            alert(image.alt);  // Display the alt text of the corresponding image
        }
    });
});
