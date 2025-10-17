//global variable 
let userName = "";
//function to ask for name and personilized the title welcome message
function personalizeWelcomeMessage() {
    userName = prompt("Hello, What your name?");
    if (userName) {
      const welcomeElement = document.getElementById("welcomeMessage");
      welcomeElement.textContent = "Welcome, " + userName + "! This is Geovanny's Portfolio";
    }
  }
  //fucntion to show div in feartured resources 
  function toggleResourceVisibility() {
    const projectCards = document.querySelectorAll("#projects .project-card");
    const resourcesDiv = document.getElementById("resources");
  
    if (projectCards.length >= 3) {
      resourcesDiv.style.display = "none";
    }
    // Otherwise, do nothing — both divs are visible by default via your CSS
  }
  //Load skills to about sections
  function loadSkills() {
    const skills = [
      "JavaScript", "SQL", "MySQL", "C#", "PHP"
    ];
  
    const skillsContainer = document.querySelector(".skills");
  
    // Create a flex row to hold columns
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.flexWrap = "wrap";
    row.style.justifyContent = "center";
    row.style.gap = "40px";

    for (let i = 0; i < skills.length; i += 3) {
      const col = document.createElement("ul");
      col.style.padding = "0 20px";
      col.style.margin = "0";
      col.style.listStyleType = "disc";
      col.style.textAlign = "left";

      for (let j = i; j < i + 3 && j < skills.length; j++) {
        const li = document.createElement("li");
        li.textContent = skills[j];
        li.style.margin = "6px 0";
        li.style.fontWeight = "bold";
        li.style.color = "#ffcc00";
        col.appendChild(li);
      }

      row.appendChild(col);
    }

  skillsContainer.appendChild(row);
}
//function to switch between darkmode and normal 
function setupDarkModeToggle() {
    const toggle = document.getElementById("themeToggle");
  
    toggle.addEventListener("change", function () {
      if (toggle.checked) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    });
  }
//function to add functionality to submit button 
  function submitButton() {
    const submitted = document.getElementById("sButton")

    submitted.addEventListener("click", function(event){
        event.preventDefault();
        alert("Thank you, " + userName + ", your message has been sent!")
        
    });

    

  }
  
  // Call both functions when the DOM is ready
  window.addEventListener("DOMContentLoaded", function () {
    personalizeWelcomeMessage();
    toggleResourceVisibility();
    loadSkills();
    setupDarkModeToggle();
    submitButton();

  });