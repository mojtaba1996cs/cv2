// SHOW LINKS
const showLinks = (icon, listLinks) => {
  const toggle = document.querySelector(icon);
  const nav = document.querySelector(listLinks);

  toggle.addEventListener("click", () => nav.classList.toggle("show"));

  document.addEventListener("click", (e) => {
    e.target.className !== "icon" && e.target.className !== "icon-shape"
      ? nav.classList.remove("show")
      : false;
  });
};

showLinks(".icon", ".list-links");

// SHOW LINKS ACTIONS
function showActions() {
  const links = document.querySelectorAll(".list-links a");
  links.forEach((link) => link.classList.remove("active"));
  this.classList.add("active");

  const nav = document.querySelector(".list-links");
  nav.classList.remove("show");
}

const links = document.querySelectorAll(".list-links a");
links.forEach((link) => link.addEventListener("click", showActions));

// DARK MODE SETTINGS
let modeToggle = document.getElementById("dark-mode-toggle");
let dark_on = localStorage.getItem("dark_on")
  ? JSON.parse(localStorage.getItem("dark_on"))
  : false;
let dark = "#051e34";
let light = "#f6f7f9";

const setMode = (colorLight, colorDark, darkOn) => {
  document.documentElement.style.setProperty("--second-color", colorLight);
  document.documentElement.style.setProperty("--light-color", colorDark);
  dark_on = darkOn;
  localStorage.setItem("dark_on", dark_on);
};

modeToggle.addEventListener("click", (e) => {
  dark_on ? setMode(dark, light, false) : setMode(light, dark, true);
  e.target.classList.toggle("bxs-sun");
});

// SET MODE AFTER RELOAD PAGE FROM LOCAL STORAGE
if (dark_on) {
  setMode(light, dark, true);
  modeToggle.classList.toggle("bxs-moon");
}

// DISPLAY SKILLS
let skills = [
  { name: "HTML", icon: "bx bxl-html5" },
  { name: "CSS", icon: "bx bxl-css3" },
  { name: "JAVASCRIPT", icon: "bx bxl-javascript" },
  { name: "JQUERY & AJAX", icon: "bx bxl-jquery" },
  { name: "REACT & REDUX", icon: "bx bxl-react" },
  { name: "BOOTSTRAP", icon: "bx bxl-bootstrap" },
  { name: "django", icon: "bx bxl-django" },
  { name: "GIT & GITHUB", icon: "bx bxl-github" },
  { name: "wordpress", icon: "bx bxl-wordpress" },
  { name: "node.js & PHP" , icon:"bx bxl-nodejs"},
];

let skillsContentDOM = document.querySelector(".skills-content");

const displaySkills = () => {
  const display = skills.map((skill) => {
    return `
      <div class="skills-box line-swaping">
        <i class="${skill.icon}"></i>
        <span>${skill.name}</span>
      </div>
      `;
  });

  skillsContentDOM.innerHTML = display.join("");
};

displaySkills();

// DISPLAY PORTFOLIO PROJECTS
let projects = [
  {
    name: "Graduation project management",
    img: "images/project1.jpg",
    link: "http://mojtabacs.epizy.com/gp/",
  },
  {
    name: "Electricity reporting",
    img: "images/project2.jpg",
    link: "http://mojtabacs.epizy.com/ss/muen.php",
  },
  {
    name: "Electricity reporting site",
    img: "images/project3.jpg",
    link: "https://mojtabadev.000webhostapp.com/exol/",
  },
];

let projectsContentDOM = document.querySelector(".portfolio-content");

const displayProjects = () => {
  const display = projects.map((project) => {
    return `
            <div class="project-box">
              <div class="project-image">
                <img src="${project.img}" alt="project-image" />
                <div class="project-overlay">
                  <div class="project-details">
                    <a href="${project.link}" class="button" target="_blank"> view project </a>
                    <p>${project.name}</p>
                  </div>
                </div>
              </div>
          </div>
      `;
  });

  projectsContentDOM.innerHTML = display.join("");
};

displayProjects();

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  // reset: true,
});

// HOME SCROLL REVEAL
sr.reveal(".home-desc", {});
sr.reveal(".home-social li", { interval: 300 });
sr.reveal(".home-img", { delay: 300 });

// SKILLS SCROLL REVEAL
sr.reveal(".skills", {});

// PORTFOLIO SCROLL REVEAL
sr.reveal(".portfolio", {});