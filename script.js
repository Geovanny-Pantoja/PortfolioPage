

//global objects 
const project1 = {
    title: "Project 1: E-commerce Web App", 
    summary: "MyWebApp is a secure, role-based web application built using PHP and MySQL, following the Model-View-Controller (MVC) architecture. It allows users to register, log in, browse products, manage a shopping cart, and complete checkout."
    +" Administrators can manage product listings, including adding, editing, and discontinuing items. The application emphasizes session tracking, form validation, and transactional integrity.", 
    imageUrl: "images/ecommercepict.jpg", 
    repoLink: "https://github.com/Geovanny-Pantoja/Electro_Shop.git"
  }
const project2 = {
    title: "Project 2: C Financial Console app", 
    summary: "This C-based project features a menu-driven financial tracking system that allows users to input income and expense data, view transaction history, and generate summaries including total amounts and counts."
    + " It uses a custom data structure to store entries with fields like date, description, amount, and category. The program supports reading from and writing to a CSV file for persistent storage," 
    + " and includes logic to load existing data at startup and save new entries upon exit.", 
    imageUrl: "images/Cpicture.png", 
    repoLink: "https://github.com/Geovanny-Pantoja/ECPI_Agile_Project.git"
  };
const project3 = {
    title: "Coming Soon", 
    summary: "Exciting things are on the horizon! I'm currently working on a new programming project that showcases the latest skills I'm developing in software development." 
    + " This upcoming release will highlight my growth in coding techniques, problem-solving strategies, and real-world application of modern technologies. Whether you're curious about clean code," 
    + " dynamic interfaces, or practical debugging workflows, this project will offer a glimpse into how I'm leveling up as a developer. Stay tuned, it's coming soon, and it's built with purpose.", 
    imageUrl: "images/comingsoon.png", 
    repoLink: "#"
  };

const projects = [project1, project2, project3];

//function to initilized and stored project info from the object array
function initializedProjectInfo() {
  const storedProjects = getStoredProjects();
  if(!storedProjects) {
    storeObjects(projects);
  }else {
    console.log("projects in session")
  }
}

//helper to store objets in sessions
function storeObjects(projectArray){
  if(!Array.isArray(projectArray)){
    console.error("there is something wrong with the projects array");
    return;
  }
  const projectString = JSON.stringify(projectArray);
  sessionStorage.setItem("projects", projectString);

}

//function to dinamically render project info 
function renderProjects() {
  const container = document.getElementById("projectContainer");
  container.innerHTML = ""; // Clear any existing content

  const projects = getStoredProjects();
  if (!projects || projects.length < 3) {
    console.error("Project data is missing or incomplete.");
    return;
  }

  projects.forEach((project, index) => {
    const card = document.createElement("div");

    if (index === 2) {
      // Third project: Coming Soon
      card.className = "project-placeholder";

      const title = document.createElement("h3");
      title.textContent = project.title;

      const summary = document.createElement("p");
      summary.id = "soon"; // ✅ Keep this ID for styling
      summary.textContent = project.summary;

      const image = document.createElement("img");
      image.src = project.imageUrl;
      image.alt = project.title;
      image.className = "project-img";

      card.appendChild(title);
      card.appendChild(summary);
      card.appendChild(image);
    } else {
      // First two projects
      card.className = "project-card";

      const title = document.createElement("h3");
      title.textContent = project.title;

      const summary = document.createElement("p");
      summary.textContent = project.summary;

      const link = document.createElement("a");
      link.href = project.repoLink;
      link.target = "_blank";

      const image = document.createElement("img");
      image.src = project.imageUrl;
      image.alt = project.title;
      image.width = 300;

      link.appendChild(image);
      card.appendChild(title);
      card.appendChild(summary);
      card.appendChild(link);
    }

    container.appendChild(card);
  });
}



//helper to get storedprojects 
function getStoredProjects() {
  const stored = sessionStorage.getItem("projects");
  return stored ? JSON.parse(stored) : null;
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

    //checked stored preference on page load
    const darkModeEnabled = localStorage.getItem("darkMode") === "true";
    if (darkModeEnabled){
      document.body.classList.add("dark-mode");
      toggle.checked = true;
    } else {
      document.body.classList.remove("dark-mode");
      toggle.checked = false;
    }
  
    toggle.addEventListener("change", function () {
      if (toggle.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "true")
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "false");
      }
    });
  }
//function to add functionality to submit button 
  function submitButton() {
    const submitted = document.getElementById("sButton");
    //capturing element to show status message 
    const status = document.getElementById("statusMessage");

    if (submitted && status){

      submitted.addEventListener("click", function(event){
        event.preventDefault();
        submitted.disabled = true;
        status.innerText = "Sending message...";

        setTimeout(function() {
          status.innerText = "Thank you, your message has been sent!";
          submitted.disabled = false;
        }, 2500);      
        
       });   

    }  

  } 
  
  // Modifying css to soon paragraph 
function changeCssStyle(){
  const soonPar = document.getElementById("soon");
  const soondiv = document.querySelector(".project-placeholder");
  soonPar.style.color = "black";    
  soonPar.style.fontStyle = "normal";
  soondiv.style.backgroundColor = "#E6E6FA";
  
}

//Close modal function 
  function closeModal() {
    const clsBtn = document.getElementById("modalCloseBtn");
    const modalContainer = document.getElementById("myModal");

    if (clsBtn && modalContainer){
      clsBtn.addEventListener("click", function(event){
        event.preventDefault();
        modalContainer.style.display = "none";
      }); 
    }
  }

  // Call both functions when the DOM is ready
  window.addEventListener("DOMContentLoaded", function () {
    closeModal();
    initializedProjectInfo();
    renderProjects();
    toggleResourceVisibility();
    loadSkills();
    setupDarkModeToggle();
    submitButton();    
    changeCssStyle();
    changeCssStyle();
    
  });