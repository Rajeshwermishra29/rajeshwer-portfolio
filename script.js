console.log("✅ Rajeshwer Portfolio JS Loaded Successfully!");

// 1. Dynamic Typing Effect in Hero Section
const roles = [
    "AI Voice Agents & Chatbots",
    "Prompt Engineering",
    "FreePBX & Asterisk VoIP",
    "React.js & Node.js Development",
    "Java & Python Programming"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing-text");

function typeRole() {
    if (!typingElement) return;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 45 : 90;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 1800; // Pause at full word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 400;
    }

    setTimeout(typeRole, typeSpeed);
}

// 2. Interactive Skill Category Filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const skillCards = document.querySelectorAll(".skill-category");

filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.getAttribute("data-filter");

        skillCards.forEach((card) => {
            if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });
    });
});

// 3. One-Click Copy for Email & Phone Cards
const copyCards = document.querySelectorAll(".copy-card");
const toast = document.getElementById("toast");

copyCards.forEach((card) => {
    card.addEventListener("click", () => {
        const textToCopy = card.getAttribute("data-copy");
        navigator.clipboard.writeText(textToCopy).then(() => {
            toast.textContent = `Copied: ${textToCopy}`;
            toast.classList.add("show");
            setTimeout(() => toast.classList.remove("show"), 2500);
        });
    });
});

// 4. Mobile Hamburger Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}

// 5. Scroll-to-Top Button & Active Navbar Link Highlight
const scrollTopBtn = document.getElementById("scrollTopBtn");
const sections = document.querySelectorAll("section, header");
const navItems = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
    // Show/hide scroll to top button
    if (window.scrollY > 350) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }

    // Highlight active section in navbar
    let currentSection = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href") === `#${currentSection}`) {
            item.classList.add("active");
        }
    });
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// 6. Set Dynamic Footer Year & Start Typing Animation
document.getElementById("year").textContent = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", typeRole);