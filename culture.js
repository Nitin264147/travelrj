

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const headers = document.querySelectorAll(".culture-category h2");
  const sectionTitle = document.querySelector(".section-title");

  const revealOnScroll = () => {
    const triggerPoint = window.innerHeight * 0.85;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < triggerPoint) {
        card.classList.add("visible");
      }
    });

    headers.forEach(header => {
      const rect = header.getBoundingClientRect();
      if (rect.top < triggerPoint) {
        header.classList.add("visible");
      }
    });

    const titleRect = sectionTitle.getBoundingClientRect();
    if (titleRect.top < triggerPoint) {
      sectionTitle.classList.add("visible");
    }
  };

  // Lightbox from earlier
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".lightbox .close");

  document.querySelectorAll("[data-image]").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("show");
    });
  });

  closeBtn.addEventListener("click", () => lightbox.classList.remove("show"));
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) lightbox.classList.remove("show");
  });

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // trigger on load
});


// Open lightbox
document.querySelectorAll("[data-image]").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("show");
  });
});

// Close on click
closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("show");
});
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) lightbox.classList.remove("show");
});


