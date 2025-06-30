// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburger = document.querySelector(".hamburger");

  if (mobileMenu.classList.contains("active")) {
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
  } else {
    mobileMenu.classList.add("active");
    hamburger.classList.add("active");
  }
}

// FAQ Toggle
function toggleFAQ(index) {
  const faqAnswer = document.getElementById(`faq-${index}`);
  const faqQuestion = faqAnswer.previousElementSibling;
  const faqIcon = faqQuestion.querySelector(".faq-icon");

  // Close all other FAQs
  const allFAQs = document.querySelectorAll(".faq-answer");
  const allIcons = document.querySelectorAll(".faq-icon");

  allFAQs.forEach((faq, i) => {
    if (i !== index && faq.classList.contains("active")) {
      faq.classList.remove("active");
      allIcons[i].style.transform = "rotate(0deg)";
    }
  });

  // Toggle current FAQ
  if (faqAnswer.classList.contains("active")) {
    faqAnswer.classList.remove("active");
    faqIcon.style.transform = "rotate(0deg)";
  } else {
    faqAnswer.classList.add("active");
    faqIcon.style.transform = "rotate(180deg)";
  }
}

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

// Add scroll effect to header
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");

  if (window.scrollY > 100) {
    header.style.boxShadow =
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
  } else {
    header.style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.05)";
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".feature-card, .pricing-card, .benefit-item",
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Form submission handling (if needed)
function handleFormSubmit(event) {
  event.preventDefault();

  // Add your form submission logic here
  console.log("Form submitted");

  // Show success message
  alert("Thank you for your inquiry! We will contact you soon.");
}

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburger = document.querySelector(".hamburger");
  const header = document.querySelector(".header");

  if (
    mobileMenu.classList.contains("active") &&
    !header.contains(event.target)
  ) {
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

// Prevent mobile menu from closing when clicking inside it
document
  .getElementById("mobileMenu")
  .addEventListener("click", function (event) {
    event.stopPropagation();
  });
