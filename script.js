const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    const french = document.documentElement.lang === 'fr';
    toggle.setAttribute('aria-label', isOpen ? (french ? 'Ouvrir la navigation' : 'Open navigation') : (french ? 'Fermer la navigation' : 'Close navigation'));
    nav.classList.toggle('open', !isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', document.documentElement.lang === 'fr' ? 'Ouvrir la navigation' : 'Open navigation');
      nav.classList.remove('open');
    });
  });
}

const translations = {
  'SCM home': 'Accueil SCM',
  'Simple Computer': 'Entretien informatique',
  'Maintenance': 'simple',
  'Open navigation': 'Ouvrir la navigation',
  'Close navigation': 'Fermer la navigation',
  'Main navigation': 'Navigation principale',
  'Services': 'Services',
  'Pricing': 'Tarifs',
  'How it works': 'Comment ça marche',
  'About SCM': 'À propos de SCM',
  'Book a session': 'Réserver une séance',
  'Personal PC help, remotely': 'Assistance informatique à distance',
  'A smoother PC.': 'Un ordinateur plus fluide.',
  'Without the guesswork.': 'Sans complications.',
  'Friendly, one-on-one computer maintenance over a live call. We’ll help clear the clutter, tune things up, and get your PC feeling like yours again.': 'Un accompagnement personnalisé en direct pour entretenir votre ordinateur. Nous vous aidons à faire le ménage, à optimiser votre PC et à le retrouver comme neuf.',
  'Schedule a session': 'Planifier une séance',
  'Explore services': 'Découvrir les services',
  'Remote support, guided live': 'Assistance à distance en direct',
  'You stay in control, every step.': 'Vous gardez le contrôle à chaque étape.',
  'Abstract purple SCM computer maintenance illustration': 'Illustration abstraite violette de maintenance informatique SCM',
  'SYSTEM CHECK': 'ÉTAT DU SYSTÈME',
  'Secure': 'Sécurisé',
  'Updated': 'À jour',
  'Optimized': 'Optimisé',
  'SCM CARE': 'ASSISTANCE SCM',
  'Maintenance gear': 'Engrenage de maintenance',
  'PC HEALTH': 'SANTÉ DU PC',
  'Care, not confusion': 'De l’aide, sans confusion',
  'Step-by-step support': 'Un accompagnement étape par étape',
  'Scroll to explore': 'Défilez pour découvrir',
  'Service highlights': 'Points forts du service',
  'One-on-one attention': 'Un accompagnement personnalisé',
  'Remote live support': 'Assistance à distance en direct',
  'Clear, guided steps': 'Des étapes claires et guidées',
  'WHAT WE CAN HELP WITH': 'NOS SERVICES',
  'Small fixes.': 'De petits gestes.',
  'Big relief.': 'Un grand soulagement.',
  'Practical PC care that helps your computer run cleaner, start faster, and feel easier to use.': 'Un entretien pratique pour un ordinateur plus propre, plus rapide au démarrage et plus simple à utiliser.',
  '01 / CLEANUP': '01 / NETTOYAGE',
  'Clutter cleanup': 'Nettoyage des fichiers inutiles',
  'Sort through temporary files and digital clutter to make room for what matters.': 'Supprimez les fichiers temporaires et le désordre numérique pour libérer de l’espace.',
  '02 / UP TO DATE': '02 / À JOUR',
  'Windows & driver updates': 'Mises à jour de Windows et des pilotes',
  'Review updates together and help keep Windows and device drivers current.': 'Examinons ensemble les mises à jour de Windows et des pilotes de vos appareils.',
  '03 / PEACE OF MIND': '03 / TRANQUILLITÉ',
  'Virus scans': 'Analyses antivirus',
  'Run a security scan and review its findings with clear, careful guidance.': 'Lancez une analyse de sécurité et examinez les résultats avec des explications claires.',
  '04 / FASTER STARTS': '04 / DÉMARRAGE PLUS RAPIDE',
  'Startup optimization': 'Optimisation du démarrage',
  'Review apps that launch with your PC and choose what really needs to run.': 'Examinons les applications lancées au démarrage et choisissons celles qui sont nécessaires.',
  '05 / PERFORMANCE': '05 / PERFORMANCE',
  'Performance tuning': 'Optimisation des performances',
  'Look for common slowdowns and tune settings with you, one sensible step at a time.': 'Repérons les ralentissements courants et ajustons les paramètres avec vous, étape par étape.',
  '06 / PERFORMANCE': '06 / PERFORMANCE',
  'Ultimate Performance Mode Activation': 'Activation du mode Performances ultimes',
  'Enable Windows’ Ultimate Performance power plan when your PC supports it, and review its power and heat tradeoffs.': 'Activez le mode d’alimentation Performances ultimes de Windows si votre PC le prend en charge, et examinez ses effets sur la consommation et la chaleur.',
  'SIMPLE, CLEAR PRICING': 'DES TARIFS SIMPLES ET CLAIRS',
  'Complete Computer': 'Entretien complet',
  'Maintenance Package': 'de votre ordinateur',
  'Keep your computer running smoothly with a complete maintenance package that covers the essentials.': 'Gardez votre ordinateur en bon état grâce à une formule complète qui couvre l’essentiel.',
  'Windows and driver updates': 'Mises à jour de Windows et des pilotes',
  'Ultimate Performance Mode activation': 'Activation du mode Performances ultimes',
  'Package price': 'Prix de la formule',
  'COMPLETE PACKAGE': 'FORMULE COMPLÈTE',
  'One complete remote maintenance session, guided live.': 'Une séance complète d’entretien à distance, guidée en direct.',
  'Schedule your session': 'Planifier votre séance',
  'Only need selected services? Pricing is adjusted to match the work requested.': 'Besoin de quelques services seulement ? Le tarif est ajusté selon le travail demandé.',
  'A competitive package price compared with similar services that may cost approximately $49.99.': 'Une formule à prix compétitif : des services similaires peuvent coûter environ 49,99 $.',
  'A SIMPLE PROCESS': 'UN PROCESSUS SIMPLE',
  'Help that feels': 'Une aide',
  'human.': 'plus humaine.',
  'No confusing handoffs. We connect remotely and work through the task together on a live call.': 'Pas de relais compliqué. Nous nous connectons à distance et avançons ensemble pendant un appel en direct.',
  'Ask about a session': 'Demander une séance',
  'Reach out': 'Contactez-nous',
  'Message SCM on Facebook and tell us what’s going on with your PC.': 'Écrivez à SCM sur Facebook et expliquez-nous le problème rencontré.',
  'Pick a time': 'Choisissez un horaire',
  'We’ll coordinate a time for a live remote support session.': 'Nous convenons ensemble d’un horaire pour une séance d’assistance à distance.',
  'Work through it together': 'Avançons ensemble',
  'Follow along as we review your PC and make agreed-upon changes.': 'Suivez les étapes pendant que nous examinons votre PC et effectuons les changements convenus.',
  'A LITTLE ABOUT SCM': 'À PROPOS DE SCM',
  'Tech help, with a': 'De l’aide informatique,',
  'human on your side.': 'avec une personne à vos côtés.',
  'SCM is here to make everyday PC maintenance feel less intimidating. We explain what we’re doing, why it matters, and keep you involved throughout your remote session.': 'SCM rend l’entretien informatique plus simple et moins intimidant. Nous expliquons ce que nous faisons, pourquoi c’est utile et vous accompagnons tout au long de la séance à distance.',
  'Live, guided support': 'Assistance en direct et guidée',
  'Clear explanations': 'Des explications claires',
  'You stay in control': 'Vous gardez le contrôle',
  'LANGUAGE / LANGUE': 'LANGUE / LANGUAGE',
  'SCM en français': 'SCM in English',
  'Consultez le site en français.': 'View the site in English.',
  'READY WHEN YOU ARE': 'À VOTRE CONVENANCE',
  'Let’s get your PC': 'Redonnons à votre PC',
  'back in rhythm.': 'son rythme optimal.',
  'Tell us what you need help with. We’ll take it one step at a time.': 'Expliquez-nous votre besoin. Nous avancerons étape par étape.',
  'Message SCM on Facebook': 'Écrire à SCM sur Facebook',
  'Remote help • Live call • Friendly guidance': 'Assistance à distance • Appel en direct • Accompagnement convivial',
  'Less computer clutter. More peace of mind.': 'Moins de désordre numérique. Plus de tranquillité.',
  'Contact & scheduling': 'Contact et rendez-vous'
};

const originalTexts = new Map();
const originalAttributes = [];
const languageToggle = document.querySelector('#language-toggle');
const languageNote = document.querySelector('#language-note');

function captureOriginalText() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return node.parentElement?.closest('script, style, svg, #language-toggle, #language-note')
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT;
    }
  });
  let node;
  while ((node = walker.nextNode())) {
    if (node.textContent.trim() && !originalTexts.has(node)) originalTexts.set(node, node.textContent);
  }

  document.querySelectorAll('body *').forEach((element) => {
    for (const attribute of ['aria-label', 'title']) {
      if (element.hasAttribute(attribute) && !originalAttributes.some((item) => item.element === element && item.attribute === attribute)) {
        originalAttributes.push({ element, attribute, value: element.getAttribute(attribute) });
      }
    }
  });
}

function translatedText(original, french) {
  if (!french) return original;
  const trimmed = original.trim();
  const translation = translations[trimmed];
  if (!translation) return original;
  const leading = original.match(/^\\s*/)?.[0] || '';
  const trailing = original.match(/\\s*$/)?.[0] || '';
  return leading + translation + trailing;
}

function setLanguage(language) {
  const french = language === 'fr';
  document.documentElement.lang = french ? 'fr' : 'en';
  captureOriginalText();

  originalTexts.forEach((original, node) => {
    node.textContent = translatedText(original, french);
  });
  originalAttributes.forEach(({ element, attribute, value }) => {
    element.setAttribute(attribute, translatedText(value, french));
  });

  document.querySelectorAll('.price-en').forEach((element) => { element.hidden = french; });
  document.querySelectorAll('.price-fr').forEach((element) => { element.hidden = !french; });

  if (languageToggle) {
    languageToggle.setAttribute('aria-pressed', String(french));
    languageToggle.textContent = french ? 'SCM in English' : 'SCM en français';
  }
  if (languageNote) languageNote.textContent = french ? 'Voir le site en anglais.' : 'Consultez le site en français.';
  document.title = french ? 'SCM | Entretien informatique simple' : 'SCM | Simple Computer Maintenance';
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = french
    ? 'SCM propose un entretien informatique à distance : nettoyage, mises à jour Windows et pilotes, analyses antivirus, optimisation du démarrage et des performances.'
    : 'Simple Computer Maintenance provides friendly remote PC cleanup, Windows and driver updates, virus scans, startup optimization, and performance tuning over live calls.';
}

if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    const nextLanguage = document.documentElement.lang === 'fr' ? 'en' : 'fr';
    setLanguage(nextLanguage);
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();
