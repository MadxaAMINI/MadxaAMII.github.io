/*============================================================================
                                    Évelym S.
                    https://www.linkedin.com/in/evelym-santos/
  ============================================================================*/

    // Navigation
        // Responsive Toggle Navigation =============================================
        let menuIcon = document.querySelector('.menuIcon');
        let nav = document.querySelector('.overlay-menu');

        menuIcon.addEventListener('click', () => {
            if (nav.style.transform != 'translateX(0%)') {
                nav.style.transform = 'translateX(0%)';
                nav.style.transition = 'transform 0.2s ease-out';
            } else { 
                nav.style.transform = 'translateX(-100%)';
                nav.style.transition = 'transform 0.2s ease-out';
            }
        });


        // Toggle Menu Icon ========================================
        let toggleIcon = document.querySelector('.menuIcon');

        toggleIcon.addEventListener('click', () => {
            if (toggleIcon.className != 'menuIcon toggle') {
                toggleIcon.className += ' toggle';
            } else {
                toggleIcon.className = 'menuIcon';
            }
        });
        
        //AIMS 
        // Animate sections on scroll
document.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const position = section.getBoundingClientRect();
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      section.classList.add('in-view');
    } else {
      section.classList.remove('in-view');
    }
  });
});

//Abour
// Scroll-triggered animations
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.zoom-in, .fade-in, .slide-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  });

  elements.forEach(el => observer.observe(el));
});

//Send Buttons 
(function() {
      emailjs.init("YOUR_USER_ID");
    })();

    function sendEmail(serviceID, templateID, formID, buttonClass) {
      const form = document.getElementById(formID);

      form.addEventListener("submit", function(event) {
        event.preventDefault();

        const button = form.querySelector(buttonClass);
        button.textContent = "Sending...";

        emailjs.sendForm(serviceID, templateID, form)
          .then(function() {
            alert("Email sent successfully!");
            button.textContent = "Send Message";
            form.reset();
          }, function(error) {
            alert("Failed to send email. Try again later.");
            button.textContent = "Send Message";
          });
      });
    }

    sendEmail("service_xxx", "template_general", "general-contact-form", ".submit-btn");
    sendEmail("service_xxx", "template_sponsor", "sponsor-form", ".sponsor-btn");
    
    
    
    
    // JavaScript for toggling sections and burger menu -->
    function toggleTeamMenu() {
        const navbar = document.querySelector('.team-navbar-container');
        navbar.classList.toggle('active');
    }

    function showSection(section) {
        const teamSection = document.getElementById('team');
        const staffSection = document.getElementById('staff');
        const ageGroupSection = document.getElementById('age-groups');
        const playersBtn = document.getElementById('players-btn');
        const staffBtn = document.getElementById('staff-btn');
        const ageGroupsBtn = document.getElementById('age-groups-btn');

        // Hide all sections initially
        teamSection.style.display = 'none';
        staffSection.style.display = 'none';
        ageGroupSection.style.display = 'none';

        // Reset button styles
        playersBtn.classList.remove('active');
        staffBtn.classList.remove('active');
        ageGroupsBtn.classList.remove('active');

        // Show the correct section based on the clicked button
        if (section === 'team') {
            teamSection.style.display = 'block';
            playersBtn.classList.add('active');
        } else if (section === 'staff') {
            staffSection.style.display = 'block';
            staffBtn.classList.add('active');
        } else if (section === 'age-groups') {
            ageGroupSection.style.display = 'block';
            ageGroupsBtn.classList.add('active');
        }
    }

    // Initially show players section
    showSection('age-groups');
  