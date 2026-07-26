/* ==========================================
   HK FX Ventures
   Premium Website JavaScript
========================================== */

// ==============================
// Mobile Navigation
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ==============================
// Scroll Progress Bar
// ==============================

const progressBar = document.querySelector(".scroll-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

});

// ==============================
// Back To Top Button
// ==============================

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.display = "flex";

        backToTop.style.alignItems = "center";

        backToTop.style.justifyContent = "center";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==============================
// FAQ Accordion
// ==============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    const answer = item.querySelector(".faq-answer");

    const icon = item.querySelector("span");

    question.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                other.querySelector(".faq-answer").style.display = "none";

                other.querySelector("span").textContent = "+";

            }

        });

        if (answer.style.display === "block") {

            answer.style.display = "none";

            icon.textContent = "+";

        } else {

            answer.style.display = "block";

            icon.textContent = "−";

        }

    });

});

// ==============================
// Fade-Up Animation
// ==============================

const animatedElements = document.querySelectorAll(

    ".section, .service-card, .feature-card, .card, .journal-box"

);

animatedElements.forEach(el => {

    el.classList.add("fade-up");

});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

animatedElements.forEach(el => observer.observe(el));

// ==============================
// Active Navigation
// ==============================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==============================
// Sticky Navbar Shadow
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(0,0,0,0.92)";

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(0,0,0,.45)";

        header.style.boxShadow = "none";

    }

});

// ==============================
// Contact Form
// ==============================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert(
            "Thank you for contacting HK FX Ventures! Your message has been received."
        );

        this.reset();

    });

}

// ==============================
// Hero Stats Counter Animation
// ==============================

const counters = document.querySelectorAll(".stat h3");

const speed = 50;

counters.forEach(counter => {

    const target = counter.innerText;

    const number = parseInt(target);

    const suffix = target.replace(number, "");

    let count = 0;

    const update = () => {

        const increment = Math.ceil(number / speed);

        if (count < number) {

            count += increment;

            counter.innerText = count + suffix;

            requestAnimationFrame(update);

        } else {

            counter.innerText = target;

        }

    };

    update();

});

console.log("HK FX Ventures Website Loaded Successfully");
