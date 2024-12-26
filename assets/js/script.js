
$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("GQcUHdsSfJwATTHqH");

        emailjs.sendForm('service_x9c7bcp','template_ga8lnan', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Lokesh V | QA Tester - Expert in Manual & Automation Testing";
            $("#favicon").attr("href", "assets/images/Profile_Logo_BW.png");
        }
        else {
            document.title = "Click Here to Return to Lokesh's Portfolio";
            $("#favicon").attr("href", "assets/images/Profile_Logo.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Manual Testing", "Automation Tester", "Web App Tester", "Mobile App Tester", "API Tester", "UI/UX Tester", "Database Tester"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut() {
    setInterval(loader, 500);
}
window.onload = fadeOut;
// pre loader end


document.getElementById('viewAllButton1').addEventListener('click', function() {
    var container1 = document.querySelector('.container1'); // Use querySelector to select the first matching element
    var button = document.getElementById('viewAllButton1'); // Get the button element

    // Check if the section is collapsed or expanded
    if (container1.style.height === '60vh') {
        // Expand the section to its full content size
        container1.style.height = 'auto';  // Auto will expand based on content
        // Change the button text to 'View Less'
        button.innerHTML = '<a href="#work"><span>View Less</span><i class="fas fa-arrow-up"></i></a>';
        
    } else {
        // Collapse the section back to 80vh
        container1.style.height = '60vh';
        // Change the button text to 'View All'
        button.innerHTML = '<span>View All</span><i class="fas fa-arrow-down"></i>';
    }
});


// disable developer mode
// document.onkeydown = function (e) {
//     if (e.keyCode == 123) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//         return false;
//     }
// }

// Start of Tawk.to Live Chat
// var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// (function () {
//     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');
//     s0.parentNode.insertBefore(s1, s0);
// })();
// End of Tawk.to Live Chat

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '77px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .Phone', { interval: 200 });
srtop.reveal('.home .Email', { interval: 300 });
srtop.reveal('.home .linkedin', { interval: 400 });
srtop.reveal('.home .github', { interval: 500 });
srtop.reveal('.home .facebook', { interval: 600 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });


/* SCROLL ABOUT */
ScrollReveal().reveal('.about .row .image img', { 
    delay: 200,
    origin: 'left',      // Animation starts from the left
    distance: '100px',   // The distance the element moves during the animation
    duration: 3000,       // Duration of the animation in milliseconds
    scale: 0.9,          // Element scaling (1 is default; <1 shrinks; >1 enlarges)
    rotate: { x: -10, y: -10, z: 10 }, // Rotation along x, y, z axes (in degrees)
    reset: true          // Animation resets on scroll
});


// srtop.reveal('.about .row .image img', { delay: 200 });
srtop.reveal('.about h2', { delay: 200 });
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills h2', {delay: 200 });
srtop.reveal('.skills h3', { delay: 300 });
srtop.reveal('.skills .container', { delay: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });
srtop.reveal('.skills .container .manual-heading', { delay: 600 });
srtop.reveal('.testing-skill', { delay: 800 });


/* SCROLL experience */
srtop.reveal('.experience h2', { interval: 200 });
srtop.reveal('.experience h3', { interval: 250 });
srtop.reveal('.experience h3 span', { interval: 400 });
srtop.reveal('.experience .box-container .long-text', { interval: 400 });


/* SCROLL education */
srtop.reveal('.education h2', { delay: 400 });
srtop.reveal('.education .timeline', { delay: 400 });
srtop.reveal('.education .timeline .container', { interval: 400 });
srtop.reveal('.skills .container .bar', { delay: 400 });
srtop.reveal('.skills .container .manual-heading', { delay: 600 });


/* SCROLL CONTACT */
srtop.reveal('.contact h2', { delay: 600 });
srtop.reveal('.contact .container', { delay: 600 });
srtop.reveal('.contact .container .form-group', { delay: 600 });
srtop.reveal('.button-area button', { delay: 600 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 400 });
srtop.reveal('.work .heading', { interval: 600 });

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop1 = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: false
});

/* SCROLL PROJECTS */
srtop1.reveal('.work .container1', { interval: 600 });
srtop1.reveal('.work .worked-projects', { interval: 600 });
srtop1.reveal('.work .worked-projects h4', { interval: 600 });
srtop1.reveal('.work .worked-projects p', { interval: 600 });
srtop1.reveal('.work .worked-projects h5', { interval: 600 });
srtop1.reveal('.work .icon-item', { interval: 200 });
srtop1.reveal('.viewall', { delay: 600  });
// srtop.reveal('.work .heading', { interval: 400 });


