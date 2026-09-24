/**
 * PORTFOLIO AURÉLIE CHEA - CHEF DE PROJET WEB / PRODUCT OWNER
 * Script JavaScript Vanilla (Accessible, Léger & Performant)
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollspy();
  initMobileMenu();
  initHeaderScroll();
  initProjectModals();
  initProjectFilters();
  initContactForm();
  initEmailCopy();
  initBackToTop();
});

/* --------------------------------------------------------------------------
   1. SCROLLSPY (MISE EN AVANT DE L'ANCRE ACTIVE LORS DU SCROLL)
   -------------------------------------------------------------------------- */
function initScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  if (!('IntersectionObserver' in window)) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -65% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          const href = link.getAttribute('href');
          if (href === `#${currentId}`) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
          } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/* --------------------------------------------------------------------------
   2. HEADER EFFET SCROLL (FOND & OMBRE LÉGÈRE)
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   3. MENU MOBILE ACCESSIBLE
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-cta .btn');

  if (!menuToggle || !mobileNav) return;

  const toggleMenu = (open) => {
    const isExpanded = open !== undefined ? open : menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', isExpanded);
    if (isExpanded) {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  menuToggle.addEventListener('click', () => toggleMenu());

  // Fermer le menu lors du clic sur un lien d'ancre
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Fermeture sur touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      toggleMenu(false);
      menuToggle.focus();
    }
  });
}

/* --------------------------------------------------------------------------
   4. FILTRES DE PROJETS
   -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach((card) => {
        const category = card.dataset.category;
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. DONNÉES & MODALE ACCESSIBLE POUR LES ÉTUDES DE CAS PROJETS
   -------------------------------------------------------------------------- */
const projectsData = {
  1: {
    category: 'Refonte & CMS • SEO',
    title: 'Refonte de site web institutionnel sous WordPress & Audit SEO',
    context: 'Projet piloté en agence digitale (Marketing Tactics) pour un client souhaitant moderniser son image de marque, fluidifier ses parcours et multiplier son audience organique.',
    role: 'Chef de projet Web / Product Owner de bout en bout : cadrage des besoins fonctionnels, rédaction des cahiers des charges et user stories, animation des rituels agiles, coordination développeurs WordPress et directeurs artistiques, validation des jalons et recettage QA.',
    actions: [
      'Audit SEO technique et sémantique approfondi avant refonte (arborescence, redirections 301, vitesse de chargement, balisage structuré).',
      'Conception de l’arborescence et optimisation des parcours de conversion utilisateurs.',
      'Gestion et publication des contenus sur CMS WordPress avec blocs modulaires Gutenberg.',
      'Suivi post-lancement avec Google Search Console et mise en place d’actions correctives immédiates.'
    ],
    tools: ['WordPress', 'Figma', 'Google Search Console', 'Screaming Frog', 'Trello', 'Google Analytics 4'],
    metrics: [
      { val: '+45%', label: 'Trafic organique à 6 mois' },
      { val: '95/100', label: 'Score PageSpeed mobile' },
      { val: '100%', label: 'Respect du planning & budget' }
    ]
  },
  2: {
    category: 'Emailing & Marketing Automation',
    title: 'Stratégie Emailing automatisée & Fidélisation sous Salesforce Marketing Cloud',
    context: 'Accompagnement d’une marque dans la transformation de sa communication client : passage de newsletters statiques à des scénarios automatisés et hautement personnalisés.',
    role: 'Lead gestion de campagne : scénarisation des cycles de vie client (Welcome journey, réactivation, relance panier), coordination technique avec les bases de données et pilotage du routage.',
    actions: [
      'Conception de templates HTML/CSS emailing responsive et universels (compatibles Outlook, Gmail, Apple Mail).',
      'Configuration des flux automatisés dans Journey Builder (Salesforce Marketing Cloud).',
      'Stratégie de segmentation avancée et tests A/B systématiques sur les objets et calls-to-action.',
      'Analyse mensuelle de la délivrabilité, des taux d’ouverture et du ROI généré.'
    ],
    tools: ['Salesforce Marketing Cloud', 'Express-Mailing', 'HTML/CSS responsive', 'Photoshop', 'Excel / Reporting'],
    metrics: [
      { val: '34.2%', label: 'Taux d’ouverture moyen (+8.5 pts)' },
      { val: '99.2%', label: 'Délivrabilité optimale' },
      { val: '+250k', label: 'Emails routés par trimestre' }
    ]
  },
  3: {
    category: 'UX/UI & Cadrage Fonctionnel',
    title: 'Cadrage fonctionnel, Wireframing & Prototypage interactif sous Figma',
    context: 'Conception de l’expérience utilisateur pour une nouvelle interface web métier destinée à simplifier les interactions et accélérer les prises de rendez-vous en ligne.',
    role: 'Product Owner & Designer UX/UI : recueil des besoins auprès des parties prenantes, interviews utilisateurs, conception des wireframes et du design system partagé avec l’équipe de développement.',
    actions: [
      'Animation d’ateliers de co-conception et définition des personas clés.',
      'Création des maquettes complètes sous Figma (versions desktop 1440px et mobile responsive 390px).',
      'Mise en place d’un mini Design System (typographies, composants réutilisables, états de boutons).',
      'Prototypage interactif cliquable et passation fluide aux développeurs avec spécifications précises.'
    ],
    tools: ['Figma', 'Adobe Illustrator', 'Notion', 'Canva', 'Méthode Agile'],
    metrics: [
      { val: '-30%', label: 'Temps d’intégration développeurs' },
      { val: '1er jalon', label: 'Validation client sans retour majeur' },
      { val: '100%', label: 'Composants accessibles WCAG' }
    ]
  },
  4: {
    category: 'Landing Pages & Multimédia',
    title: 'Création de Landing Pages de conversion & Production de contenus digitaux',
    context: 'Mission menée chez Axalone France pour promouvoir des offres de services et dynamiser la communication sur les canaux digitaux.',
    role: 'Chargée de projets digitaux : conception, intégration et diffusion de landing pages promotionnelles et coordination des supports visuels et vidéos associés.',
    actions: [
      'Développement et intégration de landing pages sous WordPress orientées conversion.',
      'Scénarisation et production de contenus vidéo avec Premiere Pro pour booster l’engagement.',
      'Création et gestion des campagnes emailing mensuelles associées aux pages d’atterrissage.',
      'Suivi régulier des formulaires entrants et optimisation continue des points de friction.'
    ],
    tools: ['WordPress', 'HTML/CSS', 'Premiere Pro', 'DaVinci Resolve', 'Canva'],
    metrics: [
      { val: '+20%', label: 'Hausse du taux de conversion' },
      { val: '100%', label: 'Livraison on-time des campagnes' },
      { val: 'Multi-device', label: 'Optimisation mobile & tablette' }
    ]
  }
};

function initProjectModals() {
  const modalOverlay = document.getElementById('projectModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const detailButtons = document.querySelectorAll('.open-modal-btn');
  let lastActiveElement = null;

  if (!modalOverlay || !closeBtn) return;

  const openModal = (projectId) => {
    const data = projectsData[projectId];
    if (!data) return;

    lastActiveElement = document.activeElement;

    // Remplissage du contenu
    document.getElementById('modalCategory').textContent = data.category;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalContext').textContent = data.context;
    document.getElementById('modalRole').textContent = data.role;

    // Actions list
    const actionsList = document.getElementById('modalActions');
    actionsList.innerHTML = '';
    data.actions.forEach((act) => {
      const li = document.createElement('li');
      li.textContent = act;
      actionsList.appendChild(li);
    });

    // Tools tags
    const toolsContainer = document.getElementById('modalTools');
    toolsContainer.innerHTML = '';
    data.tools.forEach((tool) => {
      const span = document.createElement('span');
      span.className = 'skill-tag';
      span.textContent = tool;
      toolsContainer.appendChild(span);
    });

    // Metrics grid
    const metricsGrid = document.getElementById('modalMetrics');
    metricsGrid.innerHTML = '';
    data.metrics.forEach((m) => {
      const card = document.createElement('div');
      card.className = 'modal-metric-card';
      card.innerHTML = `
        <div class="modal-metric-val">${m.val}</div>
        <div class="modal-metric-label">${m.label}</div>
      `;
      metricsGrid.appendChild(card);
    });

    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };

  const closeModal = () => {
    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  };

  detailButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      openModal(id);
    });
  });

  closeBtn.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   6. FORMULAIRE DE CONTACT ACCESSIBLE
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const subject = form.elements['subject'].value.trim();
    const message = form.elements['message'].value.trim();

    if (!name || !email || !message) {
      feedback.className = 'form-feedback error';
      feedback.textContent = 'Veuillez remplir tous les champs obligatoires correctement.';
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spin" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
      </svg>
      Envoi en cours...
    `;

    // Simulation d'envoi immédiat et propre (ou redirection mailto sécurisée)
    setTimeout(() => {
      feedback.className = 'form-feedback success';
      feedback.innerHTML = `
        <strong>Merci beaucoup pour votre message, ${name} !</strong><br>
        Votre message a bien été pris en compte. Je vous répondrai dans les plus brefs délais à l'adresse <em>${email}</em>.
      `;
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }, 900);
  });
}

/* --------------------------------------------------------------------------
   7. COPIE DE L'EMAIL AU CLIC & TOAST
   -------------------------------------------------------------------------- */
function initEmailCopy() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const toast = document.getElementById('toastNotification');

  if (!copyBtn) return;

  copyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = 'cheaaurelie2002@gmail.com';

    navigator.clipboard.writeText(email).then(() => {
      showToast('Adresse email copiée dans le presse-papier !');
    }).catch(() => {
      // Fallback si clipboard API non autorisée
      window.location.href = `mailto:${email}`;
    });
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

/* --------------------------------------------------------------------------
   8. RETOUR EN HAUT FLUIDE
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
