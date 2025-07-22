// Modal functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close-button');

const details = {
    jaipur: {
        title: 'More about Jaipur',
        description: 'Explore City Palace, Jantar Mantar, and shop for jewelry and textiles at Johari Bazaar.'
    },
    udaipur: {
        title: 'More about Udaipur',
        description: 'Enjoy boat rides on Lake Pichola, and catch sunsets at Sajjangarh Palace.'
    },
    jaisalmer: {
        title: 'More about Jaisalmer',
        description: 'Visit Sam Sand Dunes for a camel safari and watch cultural dance under desert stars.'
    },
    jodhpur: {
        title: 'More about Jodhpur',
        description: 'Wander the blue city streets and explore majestic Mehrangarh Fort and Jaswant Thada.'
    }
};

document.querySelectorAll('.learn-more').forEach(btn => {
    btn.addEventListener('click', () => {
        const place = btn.dataset.place;
        if (!modal || !modalTitle || !modalDescription) return;
        if (details[place]) {
            modalTitle.textContent = details[place].title;
            modalDescription.textContent = details[place].description;
        } else {
            modalTitle.textContent = 'Details not found';
            modalDescription.textContent = 'Sorry, no additional information is available for this place.';
        }
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
closeBtn.addEventListener('click', () => { modal.classList.add('hidden'); modal.style.display = 'none'; });
window.addEventListener('click', e => { if (e.target === modal) { modal.classList.add('hidden'); modal.style.display = 'none'; } });

// Animate hero typing
const hero = document.querySelector('.hero');
const text = '🔱पधारो म्हारे देश - Rajasthan🔱';
let i = 0;
function type() {
    if (i < text.length) {
        hero.textContent += text.charAt(i);
        i++;
        setTimeout(type, 50);
    }
}
// hero.style.backgroundVideo = "url('pic/bgvideo1.mp4')"; // Ensure the video path is correct
hero.style.backgroundImage = "url('pic/backgroundrj.jpg')"; // Ensure the image path is correct
hero.textContent = '';
type();

// ***********************************8






// Animate on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.place').forEach(el => observer.observe(el));

// // Smooth scroll
// document.querySelectorAll('nav a').forEach(link => {
//     link.addEventListener('click', e => {
//         e.preventDefault();
//          const href = link.getAttribute('href');
//         console.log(href); // Check what this value is
//         document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
//     });
// });

// //         


// === Contact Form Submit (demo only) ===
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('🎉 Message sent successfully! We’ll get back to you soon.');
        this.reset();
    });
}

// === Back to Top Button ===
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// === Filter Logic ===
const filterButtons = document.querySelectorAll('.filter-btn');
const placeSections = document.querySelectorAll('.place');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    placeSections.forEach(section => {
      if (filter === 'all' || section.dataset.city === filter) {
        section.style.display = 'flex';
        if (!section.classList.contains('fade-in')) {
          section.classList.add('fade-in');
        }
      } else {
        section.style.display = 'none';
      }
    });
  });
});

// === Scroll Reveal Animation ===
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.place').forEach(section => {
  section.classList.add('fade-in');
  revealObserver.observe(section);
});

const cities = ['Jaipur', 'Udaipur', 'Jaisalmer', 'Jodhpur'];
let current = 0;
let cityTypingIndex = 0;
let typing = true;

function typeWriter() {
  const span = document.getElementById('typed-city');
  if (!span) return; // Prevent error if element is missing
  const city = cities[current];

  if (typing) {
    span.textContent = city.slice(0, ++cityTypingIndex);
    if (cityTypingIndex === city.length) {
      typing = false;
      setTimeout(typeWriter, 1200);
      return;
    }
  } else {
    span.textContent = city.slice(0, --cityTypingIndex);
    if (cityTypingIndex === 0) {
      typing = true;
      current = (current + 1) % cities.length;
    }
  }
  setTimeout(typeWriter, 150);
}
typeWriter();

document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});


function toggleChatbot() {
  const bot = document.getElementById('chatbot');
  bot.style.display = bot.style.display === 'flex' ? 'none' : 'flex';
}

function handleChat() {
  const input = document.getElementById('user-input');
  const msg = input.value.trim();
  if (!msg) return;

  appendMessage(msg, 'user');
  respondToUser(msg.toLowerCase());
  input.value = '';
}

function appendMessage(text, sender) {
  const body = document.getElementById('chat-body');
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message ' + sender;
  msgDiv.textContent = text;
  body.appendChild(msgDiv);
  body.scrollTop = body.scrollHeight;
}

function respondToUser(input) {
  let response = "Sorry, I didn’t understand that.";

  if (input.includes('hello') || input.includes('hi')) {
    response = "Hello! 👋 Ask me about cities, places, or itineraries in Rajasthan.";
  } else if (input.includes('jaipur')) {
    response = "Top places in Jaipur: Hawa Mahal, City Palace, Amber Fort.";
  } else if (input.includes('udaipur')) {
    response = "Top places in Udaipur: Lake Pichola, City Palace, Jag Mandir.";
  } else if (input.includes('best time')) {
    response = "October to March is the best time to visit Rajasthan.";
  } else if (input.includes('itinerary') || input.includes('3 days')) {
    response = "3-Day Itinerary:\nDay 1: Jaipur\nDay 2: Jodhpur\nDay 3: Udaipur.";
  } else if (input.includes('jodhpur')) {
    response = "Don't miss Mehrangarh Fort and the Blue City streets!";
  }

  setTimeout(() => appendMessage(response, 'bot'), 500);
}

// Hotel Filter Buttons
document.querySelectorAll(".hotel-filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".hotel-filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const city = btn.dataset.city;

    document.querySelectorAll(".hotel-card").forEach(card => {
      card.style.display = city === "all" || card.dataset.city === city ? "block" : "none";
    });
  });
});

// Modal Open
function openModal(hotelId) {
  const modal = document.getElementById("hotelModal");
  const modalBody = document.getElementById("modalBody");

  const hotelData = {
    hotel1: {
      name: "Rambagh Palace, Jaipur",
      price: "₹18,000/night",
      desc: "Luxury stay with royal heritage and gardens."
    },
    hotel2: {
      name: "Taj Lake Palace, Udaipur",
      price: "₹25,000/night",
      desc: "Floating palace with scenic lake views."
    },
    hotel3: {
      name: "Umaid Bhawan Palace, Jodhpur",
      price: "₹22,000/night",
      desc: "Elegant architecture and regal experience."
    }
  };

  const hotel = hotelData[hotelId];
  if (!hotel) return;

  modalBody.innerHTML = `
    <h2>${hotel.name}</h2>
    <p>${hotel.desc}</p>
    <p><strong>Price:</strong> ${hotel.price}</p>
    <form class="booking-form" onsubmit="return handleBooking(event, '${hotel.name}')">
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="date" name="date" required>
      <input type="number" name="guests" placeholder="Guests" min="1" max="10" required>
      <button type="submit">Book Now</button>
    </form>
    <a class="whatsapp-book" target="_blank" id="whatsappLink">📲 Book via WhatsApp</a>
  `;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("hotelModal").style.display = "none";
}

function handleBooking(event, hotelName) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const date = form.date.value;
  const guests = form.guests.value;

  const msg = `Hi, I want to book *${hotelName}* on *${date}* for *${guests}* guest(s). My name is *${name}*.`;
  const encoded = encodeURIComponent(msg);
  const waNumber = "8290810926"; // Your WhatsApp number
  const waLink = `https://wa.me/${waNumber}?text=${encoded}`;

  document.getElementById("whatsappLink").href = waLink;
  alert("Click the WhatsApp button below to confirm your booking.");
  return false;
}


let selectedRating = 0;

function setRating(rating) {
  selectedRating = rating;
  document.getElementById("ratingValue").value = rating;

  const stars = document.querySelectorAll(".star-rating span");
  stars.forEach((star, index) => {
    star.classList.toggle("selected", index < rating);
  });
}

function submitReview(event) {
  event.preventDefault();

  const name = document.getElementById("reviewerName").value.trim();
  const text = document.getElementById("reviewText").value.trim();
  const rating = parseInt(document.getElementById("ratingValue").value);

  if (!name || !text || !rating) {
    alert("Please fill all fields and give a rating.");
    return;
  }

  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  const reviewHTML = `
    <div class="review-card">
      <h4>${name}</h4>
      <div class="stars">${stars}</div>
      <p>${text}</p>
    </div>
  `;

  document.getElementById("reviewList").innerHTML += reviewHTML;

  // Reset form
  document.querySelector(".review-form form").reset();
  setRating(0);
}


function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");

  lightboxImg.src = imgElement.src;
  // Find the .para parent and get its <p> node (including <h1> etc)
  let para = imgElement.closest('.para');
  caption.innerHTML = '';
  if (para) {
    let p = para.querySelector('p');
    if (p) {
      // Clone the <p> node and append it so all child HTML (including <h1>) is preserved
      caption.appendChild(p.cloneNode(true));
    }
  }

  lightbox.style.display = "flex";
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
  document.body.classList.remove("lightbox-open");
}

// about
// Counter Animation
const counters = document.querySelectorAll('.counter');
let started = false;

function animateCounters() {
  if (!started && window.scrollY + window.innerHeight >= document.querySelector('.counter-section').offsetTop) {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = Math.ceil(target / 100);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
    started = true;
  }
}
window.addEventListener('scroll', animateCounters);

// Scroll Reveal
function revealOnScroll() {
  const elements = document.querySelectorAll('.fade-in-on-scroll');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

function toggleAccordion(btn) {
  const allButtons = document.querySelectorAll('.accordion button');
  allButtons.forEach(b => b !== btn && b.classList.remove('active'));
  
  btn.classList.toggle('active');
  const panel = btn.nextElementSibling;
  if (btn.classList.contains('active')) {
    panel.style.maxHeight = panel.scrollHeight + 'px';
  } else {
    panel.style.maxHeight = null;
  }
}

function generateItinerary() {
  const days = document.getElementById("daySelect").value;
  const result = document.getElementById("itineraryResult");

  let plan = "";

  if (days === "3") {
    plan = `📍 Jaipur (Day 1)<br>📍 Ajmer & Pushkar (Day 2)<br>📍 Udaipur (Day 3)`;
  } else if (days === "5") {
    plan = `📍 Jaipur (Day 1-2)<br>📍 Ajmer & Pushkar (Day 3)<br>📍 Jodhpur (Day 4)<br>📍 Udaipur (Day 5)`;
  } else if (days === "7") {
    plan = `📍 Jaipur (Day 1-2)<br>📍 Ajmer + Pushkar (Day 3)<br>📍 Jodhpur (Day 4)<br>📍 Jaisalmer (Day 5-6)<br>📍 Udaipur (Day 7)`;
  } else {
    plan = "Please select a valid number of days!";
  }

  result.innerHTML = `<strong>Your Suggested Itinerary:</strong><br>${plan}`;
}




function showCityInfo(city) {
  const infoBox = document.getElementById('map-info');
  const videoBox = document.getElementById('city-video');

  // Use YouTube embed links for smooth playback
  const cityData = {
    Jaipur: {
      text: `🕌 <strong>Jaipur – The Pink City:</strong> Explore Hawa Mahal, City Palace, and Amer Fort.<br>
             <a target="_blank" rel="noopener noreferrer" href="https://www.makemytrip.com/hotels/jaipur-hotels.html">🔗 View Hotels in Jaipur</a>`,
      video: "https://www.youtube.com/embed/UcXIXE0FN94" // Example embed link
    },
    Jodhpur: {
      text: `🟦 <strong>Jodhpur – The Blue City:</strong> Visit Mehrangarh Fort and bustling markets.<br>
             <a target="_blank" rel="noopener noreferrer" href="https://www.trivago.in/en-IN/odr/hotels-jodhpur-india?search=200-74386">🔗 View Hotels in Jodhpur</a>`,
      video: "https://www.youtube.com/embed/KopcsbeACXU"
    },
    Udaipur: {
      text: `🏞️ <strong>Udaipur – The City of Lakes:</strong> Enjoy boat rides, City Palace & sunsets.<br>
             <a target="_blank" rel="noopener noreferrer" href="https://www.makemytrip.com/hotels/hotel-listing/?locusId=CTUDR&locusType=city&city=CTUDR&searchText=Udaipur&regionNearByExp=3&country=IN&roomStayQualifier=2e0e&reference=hotel&type=city&cmp=SEM|D|DH|G|Destination|DH_Destination_CTUDR_Udaipur|CTUDR_Hotel|RSA|&mf_source=google&mf_medium=cpc&mf_campaignid=19486082622&cid=Cj0KCQjw-NfDBhDyARIsAD-ILeDGOui0FcevY5zzv0JkZ5_sLcVP3DVssnCyvFQLBqlB1k7V_b88--caAn8fEALw_wcB&pl=&kw=hotels%20in%20udaipur&adg=148534877001&aid=643893017724&campaign_type=search&device=c&mf_campaign={HARDCODE_CAMPAIGN_NAME}&gad_source=1&gad_campaignid=19486082622&gbraid=0AAAAAD5Az1RT-iGz_NFkA3sJfj63Gpylh&gclid=Cj0KCQjw-NfDBhDyARIsAD-ILeDGOui0FcevY5zzv0JkZ5_sLcVP3DVssnCyvFQLBqlB1k7V_b88--caAn8fEALw_wcB">🔗 View Hotels in Udaipur</a>`,
      video: "https://www.youtube.com/embed/bp0feD87kWc"
    },
    Bikaner: {
      text: `🐫 <strong>Bikaner:</strong> Discover Junagarh Fort and taste iconic Bikaneri Bhujia.<br>
             <a target="_blank" rel="noopener noreferrer href="https://www.booking.com/city/in/bikaner-in.en.html?aid=306395;label=bikaner-in-cYiQhjkhKqvOwK3ppjVCOgS649008878570:pl:ta:p165:p2:ac:ap:neg:fi:tikwd-1691272321:lp9302426:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c;ws=&gad_source=1&gad_campaignid=17741369&gbraid=0AAAAAD_Ls1LSBgYaXoar4mwvpysmfKfgI&gclid=Cj0KCQjw-NfDBhDyARIsAD-ILeBCoAmJYgM3uh73SdcVI5rw4nZT0UzsrX7KnO0Z7Tp2vDaerXZ96dAaAhzxEALw_wcB">🔗 View Hotels in Bikaner</a>`,
      video: "https://www.youtube.com/embed/meGm3N1D_J8"
    },
    Jaisalmer: {
      text: `🌵 <strong>Jaisalmer – The Golden City:</strong> Forts, dunes, and camel safaris await.<br>
             <a target="_blank"  rel="noopener noreferrer
              href="https://www.tripadvisor.in/SmartDeals-g297667-Jaisalmer_Jaisalmer_District_Rajasthan-Hotel-Deals.html#SPLITVIEWMAP">🔗 View Hotels in Jaisalmer</a>`,
      video: "https://www.youtube.com/embed/rqDc8mzLpMQ"
    }
  };

  if (cityData[city]) {
    infoBox.innerHTML = cityData[city].text;
    videoBox.innerHTML = `<iframe width="100%" height="300" src="${cityData[city].video}" frameborder="0" allowfullscreen></iframe>`;
  } else {
    infoBox.innerHTML = "No data available for this city.";
    videoBox.innerHTML = "";
  }
}


function togglePhrases() {
  const list = document.getElementById("phrases-list");
  list.classList.toggle("phrases-hidden");
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'hi-IN';
  speechSynthesis.speak(utterance);
}

function openFestivalModal(festival) {
  const modal = document.getElementById("festival-modal");
  const body = document.getElementById("modal-body");

  const festivalData = {
    pushkar: {
      title: "Pushkar Mela",
      image: "pic/pushkar mela.jpeg",
      video: "https://www.youtube.com/embed/fAV8DLwEcbo",
      date: "🗓️ November 2025",
      location: "📍 Pushkar",
      desc: "The Pushkar Mela is the world’s largest camel fair, featuring traditional music, cultural events, and local handicrafts."
    },
    desert: {
      title: "Desert Festival",
      image: "pic/Jaisalmer-Desert-Festival-2023.jpg",
      video: "https://www.youtube.com/embed/f_l-PoK6uw0",
      date: "🗓️ February 2026",
      location: "📍 Jaisalmer",
      desc: "A 3-day cultural extravaganza of camel races, folk dances, turban tying and sword fights in the golden city of Jaisalmer."
    },
    gangaur: {
      title: "Gangaur Festival",
      image: "pic/gangaur.jpeg",
      video: "https://www.youtube.com/embed/uo54t4kzBNg",
      date: "🗓️ March–April 2026",
      location: "📍 Jaipur & Udaipur",
      desc: "Gangaur is celebrated by women with traditional attire and idol processions, signifying devotion and marital harmony."
    },
    teej: {
      title: "Teej Festival",
      image: "pic/teej.jpeg",
      video: "https://www.youtube.com/embed/HeeYYxiKx94",
      date: "🗓️ August 2026",
      location: "📍 Jaipur",
      desc: "Teej marks the arrival of monsoon and is celebrated with swings, songs, fasting and grand processions of Goddess Parvati."
    }
  };

  const data = festivalData[festival];
  body.innerHTML = `
    <h2>${data.title}</h2>
    <img src="${data.image}" alt="${data.title}" style="width:50%; border-radius:10px; margin:1rem 0;" />
    <p>${data.date} &nbsp; ${data.location}</p>
    <p>${data.desc}</p>
    <iframe width="60%" height="200" src="${data.video}" frameborder="0" allowfullscreen></iframe>
  `;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("festival-modal").style.display = "none";
}


// seasonal
function showSuggestions(season) {
  const box = document.getElementById("suggestion-box");

  const data = {
    winter: `
      <h3>❄️ Winter Picks (Nov–Feb)</h3>
      <ul>
        <li>🔥 Jaisalmer – Desert Camp & Camel Safari</li>
        <li>🕌 Jaipur – City Palace, Light Shows</li>
        <li>🏞️ Udaipur – Boat Rides & Lakes</li>
      </ul>
    `,
    summer: `
      <h3>☀️ Summer Picks (Apr–June)</h3>
      <ul>
        <li>🌿 Mount Abu – Cool Hill Escape</li>
        <li>🌅 Kumbhalgarh – Forest Fort Trails</li>
        <li>🏰 Chittorgarh – Early Mornings Only!</li>
      </ul>
    `,
    monsoon: `
      <h3>🌧️ Monsoon Picks (July–Sept)</h3>
      <ul>
        <li>🌧️ Udaipur – Romantic Rainy Vibes</li>
        <li>🏯 Bundi – Less Crowded, Waterfalls</li>
        <li>🌿 Ranakpur – Temple + Jungle Combo</li>
      </ul>
    `
  };

  box.innerHTML = data[season] || "";
}

// cost calculator
function calculateCost(e) {
  e.preventDefault();
  const cities = Array.from(document.getElementById("cities").selectedOptions).map(opt => opt.value);
  const nights = parseInt(document.getElementById("nights").value);
  const hotelType = document.getElementById("hotelType").value;
  const resultBox = document.getElementById("cost-result");

  if (cities.length === 0 || nights <= 0) {
    alert("Please select cities and a valid number of nights.");
    return;
  }

  const rates = {
    budget: 1200,
    standard: 2500,
    luxury: 5000
  };

  const cityCount = cities.length;
  const hotelCost = rates[hotelType];
  const transportCost = 800 * cityCount; // flat rate per city
  const total = cityCount * nights * hotelCost + transportCost;

  resultBox.classList.remove('show');
  void resultBox.offsetWidth;
  resultBox.innerHTML = `
    <h3>🧳 Estimated Trip Cost</h3>
    <p><strong>Cities:</strong> ${cities.join(", ")}</p>
    <p><strong>Nights per City:</strong> ${nights}</p>
    <p><strong>Hotel Type:</strong> ${hotelType.charAt(0).toUpperCase() + hotelType.slice(1)}</p>
    <p>🚌 <strong>Transport:</strong> ₹${transportCost}</p>
    <p>🏨 <strong>Hotel Total:</strong> ₹${hotelCost * cityCount * nights}</p>
    <h4 style="color:#e67e22;">💰 Grand Total: ₹${total.toLocaleString()}</h4>
  `;
  resultBox.classList.add('show');
}

// route recommendor
function recommendRoute(theme, btn) {
  const resultBox = document.getElementById("route-result");
  const routes = {
    heritage: `
      <h3>🏰 Heritage & Forts Route</h3>
      <ul>
        <li>Jaipur – Amer Fort, City Palace</li>
        <li>Jodhpur – Mehrangarh Fort, Jaswant Thada</li>
        <li>Chittorgarh – India's Largest Fort</li>
        <li>Udaipur – City Palace, Jag Mandir</li>
      </ul>
    `,
    desert: `
      <h3>🏜️ Desert Explorer Route</h3>
      <ul>
        <li>Bikaner – Camel Breeding & Havelis</li>
        <li>Jaisalmer – Sam Dunes, Desert Camping</li>
        <li>Barmer – Folk Art & Sandscapes</li>
      </ul>
    `,
    romantic: `
      <h3>❤️ Romantic Escape Route</h3>
      <ul>
        <li>Udaipur – Lakes & Palaces</li>
        <li>Mount Abu – Hilltop Views & Peace</li>
        <li>Bundi – Quiet Blue Streets</li>
        <li>Udaipur – Rayta Hills</li>
      </ul>
    `,
    spiritual: `
      <h3>🕉️ Spiritual Trail</h3>
      <ul>
        <li>Pushkar – Brahma Temple, Ghats</li>
        <li>Nathdwara – ShreeNathJi Temple</li>
        <li>Bikaner – Karni Mata Temple</li>
        <li>Sikar – Khatu Shyam Temple</li>
        <li>Chittorgarh – Sanwaliya Ji Temple</li>
      </ul>
    `,
    wildlife: `
      <h3>🦌 Nature & Wildlife</h3>
      <ul>
        <li>Sariska – Tiger Reserve</li>
        <li>Ranthambore – Safari + Fort</li>
        <li>Keoladeo (Bharatpur) – Bird Watching Paradise</li>
      </ul>
    `
  };
  // Animate fade-in
  resultBox.classList.remove('show');
  void resultBox.offsetWidth; // trigger reflow
  resultBox.innerHTML = routes[theme] || "";
  resultBox.classList.add('show');
  // Button active state
  if (btn) {
    document.querySelectorAll('.route-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
}

// food
function openFoodModal(food) {
  const body = document.getElementById("food-modal-body");
  const modal = document.getElementById("food-modal");
  if (!body || !modal) return;

  const foods = {
    dalbati: {
      name: "Dal Baati Churma",
      desc: "A classic Rajasthani trio – baked wheat balls (baati), spiced lentil curry (dal), and sweet crumbled wheat (churma).",
      img: "pic/dbc.jpeg",
      video: "https://www.youtube.com/embed/5R0_quRjtqQ"
    },
    gatte: {
      name: "Gatte ki Sabzi",
      desc: "Gram flour dumplings simmered in spicy yogurt gravy – a royal vegetarian delicacy.",
      img: "pic/gatteks.jpeg",
      video: "https://www.youtube.com/embed/p8DDt7ehk9Y"
    },
    kerSangri: {
      name: "Ker Sangri",
      desc: "A desert specialty made with wild berries (ker) and beans (sangri) in spicy Rajasthani masala.",
      img: "pic/kersangri.jpeg",
      video: "https://www.youtube.com/embed/njhQbSGN4ac"
    },
    laalmaas: {
      name: "Laal Maas",
      desc: "Fiery mutton curry from royal kitchens, made with red chilies and spices.",
      img: "pic/laalmaas.jpeg",
      video: "https://www.youtube.com/embed/z2cgUMqZg"
    }
  };

  const f = foods[food];
  if (!f) {
    body.innerHTML = '<p>Food details not found.</p>';
    modal.style.display = "flex";
    return;
  }
  body.innerHTML = `
    <h2>${f.name}</h2>
    <img src="${f.img}" alt="${f.name}" style="width:50%; border-radius:10px; margin:1rem 0;" />
    <p>${f.desc}</p>
    <iframe width="60%" height="200" src="${f.video}" frameborder="0" allowfullscreen></iframe>
  `;
  modal.style.display = "flex";
}

function closeModal() {
  // Only close the topmost visible modal
  const modals = document.querySelectorAll(".modal");
  for (const m of modals) {
    if (m.style.display === "flex") {
      m.style.display = "none";
      break;
    }
  }
}

function showDishInfo(city) {
  const info = {
    jodhpur: `
      <h3>🍴 Jodhpur Specialties</h3>
      <ul style="list-style-type: none;">
        <li>Pyaaz Kachori</li>
        <li>Mirchi Vada</li>
        <li>Mawa Kachori</li>
      </ul>
    `,
    jaipur: `
      <h3>🍴 Jaipur Specialties</h3>
      <ul style="list-style-type: none;">
        <li>Ghewar</li>
        <li>Besan Chilla</li>
        <li>Rajasthani Thali</li>
      </ul>
    `,
    udaipur: `
      <h3>🍴 Udaipur Specialties</h3>
      <ul style="list-style-type: none;">
        <li>Daal Baati Churma</li>
        <li>Ker Sangri</li>
        <li>Rabdi Malpua</li>
      </ul>
    `
  };

  document.getElementById("food-location-info").innerHTML = info[city] || "Select a city to view food highlights.";
}

// Hotel filter functionality
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.hotel-filter');
  const hotelCards = document.querySelectorAll('.hotel-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const city = this.getAttribute('data-city');
      hotelCards.forEach(card => {
        if (city === 'all' || card.getAttribute('data-city') === city) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});




