// --- Menu hamburger responsive ---
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      if (navMenu.classList.contains('open')) {
        navMenu.style.display = 'flex';
      } else {
        navMenu.style.display = 'none';
      }
    });
    // Fermer le menu au clic sur un lien (mobile)
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          navMenu.classList.remove('open');
          navMenu.style.display = 'none';
        }
      });
    });
  }

  // --- Générer la timeline depuis les données ---
  generateTimeline();
});

// --- Données de la timeline ---
const timelineData = [
  {
    date: "Septembre 2025 - Juin 2028",
    title: "Bachelor en développement web & applications (en cours)",
    location: "CREA Genève",
    description: "Formation en développement web et applications avec immersion professionnelle dès la deuxième année. Développement de solutions innovantes, collaboration en équipe et préparation à des postes IT, en start-up, agence ou entreprise.",
    skills: ["HTML/CSS", "JavaScript", "C", "Python", "Travail en Équipe", "Utilisation de l'IA", "Linux"],
    side: "left"
  },
  {
    date: "Juin 2024 - Présent",
    title: "Livreur",
    location: "Chaskis SA Geneva",
    description: "Livraison de repas dans la région de Genève",
    skills: ["Ponctualité", "Service Client"],
    side: "right"
  },
  {
    date: "2020 - 2024",
    title: "CFC d'informaticien option développement d'applications (obtenu)",
    location: "Centre de formation professionnelle technique",
    description: "Analyse des besoins clients, proposition et développement d’applications, assurance qualité et sécurité, et déploiement fonctionnel sur la plateforme appropriée.",
    skills: ["HTML", "CSS", "JavaScript", "SQL", "Git", "PHP", "Méthodologies Agiles"],
    side: "left"
  }
];

// --- Fonction pour générer la timeline ---
function generateTimeline() {
  const container = document.querySelector('.timeline-container');
  if (!container) return;

  // Trouver ou créer le conteneur des items
  let itemsContainer = container.querySelector('.timeline-items');
  if (!itemsContainer) {
    itemsContainer = document.createElement('div');
    itemsContainer.className = 'timeline-items';
    container.appendChild(itemsContainer);
  }

  // Générer chaque item
  timelineData.forEach((item, index) => {
    const isLast = index === timelineData.length - 1;
    const itemHTML = `
      <div class="timeline-item timeline-${item.side} ${isLast ? '' : 'mb-12 md:mb-16'}">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          ${item.side === 'right' ? `
            <div class="md:text-right">
              <div class="timeline-content bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                <span class="text-emerald-400 text-sm font-semibold">${item.date}</span>
                <h3 class="text-xl font-bold text-white mt-2 mb-1">${item.title}</h3>
                <p class="text-gray-400 text-sm mb-3">${item.location}</p>
                <p class="text-gray-300">${item.description}</p>
                <div class="flex flex-wrap gap-2 mt-4 md:justify-end">
                  ${item.skills.map(skill => `<span class="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full">${skill}</span>`).join('')}
                </div>
              </div>
            </div>
            <div class="hidden md:block"></div>
          ` : `
            <div class="hidden md:block"></div>
            <div>
              <div class="timeline-content bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                <span class="text-emerald-400 text-sm font-semibold">${item.date}</span>
                <h3 class="text-xl font-bold text-white mt-2 mb-1">${item.title}</h3>
                <p class="text-gray-400 text-sm mb-3">${item.location}</p>
                <p class="text-gray-300">${item.description}</p>
                <div class="flex flex-wrap gap-2 mt-4">
                  ${item.skills.map(skill => `<span class="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full">${skill}</span>`).join('')}
                </div>
              </div>
            </div>
          `}
        </div>
        <div class="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-900 hidden md:block"></div>
      </div>
    `;
    itemsContainer.insertAdjacentHTML('beforeend', itemHTML);
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Active nav on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-emerald-400");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("text-emerald-400");
    }
  });
});
