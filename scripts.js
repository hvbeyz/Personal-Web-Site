var words = ['Web Tasarımcı', 'Front End Dev.', 'UI / UX Tasarımcı', 'Freelancer'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;

var wordflick = function () {
    setInterval(function () {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        }
        else {
            if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
            if (forwards) {
                offset++;
            }
            else {
                offset--;
            }
        }
        $('.word').text(part);
    }, speed);
};

$(document).ready(function () {
    wordflick();
});
window.addEventListener('DOMContentLoaded', (event) => {
    const progressBars = document.querySelectorAll('.progress-bar');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                bar.style.width = `${width}%`;
                observer.unobserve(bar); 
            }
        });
    }, { threshold: 0.5 });
    progressBars.forEach((bar) => {
        observer.observe(bar);
    });
});
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        const target = document.querySelector(this.getAttribute('href'));
        const offset = document.querySelector('.navbar').offsetHeight; 
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
 
document.addEventListener("DOMContentLoaded", function () {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarToggler = document.querySelector(".navbar-toggler");
  

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
       
        if (navbarCollapse.classList.contains("show")) {
          new bootstrap.Collapse(navbarCollapse).hide();
        }
      });
    });
  

 });

   // EmailJS
   (function () {
    emailjs.init("J-6SYL8RxogZ4DrSS"); 
})();


document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    emailjs.sendForm("service_1y4fc0o", "template_cz09bjo", this)
        .then(function () {
            alert("Mesaj başarıyla gönderildi!");
        }, function (error) {
            alert("Bir hata oluştu: " + error.text);
        });
});
  

  