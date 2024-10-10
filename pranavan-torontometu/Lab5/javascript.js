
document.getElementById('nameButton').addEventListener('click', function () {
    let name = prompt("Please enter your name:");
    if (name) {
        document.getElementById('greeting').innerText = "Hello, " + name + "!";
    }
});


const profileImage = document.getElementById('profileImage');
profileImage.addEventListener('click', function () {
    this.classList.toggle('enlarged');
});


const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
        this.style.color = '#e74c3c'; 
    });
    link.addEventListener('mouseout', function () {
        this.style.color = ''; 
    });
});
