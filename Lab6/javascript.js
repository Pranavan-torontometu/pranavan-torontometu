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

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userInputForm");

    // Notifies User Of Form Submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        saveFormData();
        alert("Form Submitted");
    });

    // Clears All Fields When Clear Button Is Pressed
    form.addEventListener("reset", function () {
        // Optional: Handle any specific reset actions if needed
    });

    // Save Data To Local Storage
    function saveFormData() {
        const formData = {
            fname: document.getElementById("fname").value,
            lname: document.getElementById("lname").value,
            dob: document.getElementById("dob").value,
            ageGroup: document.getElementById("ageGroup").value,
            position: form.position.value,
            portfolio_aspects: Array.from(document.querySelectorAll("input[name='portfolio_aspects']:checked")).map(
                (checkbox) => checkbox.value
            ),
            portfolio_opinions: document.querySelector("input[name='portfolio_opinions']").value,
            likelihood: document.getElementById("likelihoodSlider").value,
            comments: document.getElementById("comments").value
        };

        localStorage.setItem("formData", JSON.stringify(formData));
    }
});

// Update the label based on the slider value
function updateLabel(value) {
    const sliderValue = document.getElementById('sliderValue');
    const labels = ['Very Unlikely', 'Unlikely', 'Neutral', 'Likely', 'Very Likely'];
    sliderValue.innerText = labels[value]; // Update the label based on the slider value
}
