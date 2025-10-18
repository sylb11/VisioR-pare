
const MESSAGES = {
  fr: {
    // ...altro...
    how: "Comment ça marche",
    step1: "Décris ton problème et lance la visioconférence",
    step2: "Avant l’appel, prépare les outils : tournevis avec embouts, pince multiprise, clé à molette, Téflon ou filasse avec pâte",
    step3: "Ton téléphone devient les yeux du technicien",
    step4: "Tes mains suivent ses instructions — tu répares, guidé étape par étape",
    // ...altro...
  },
  it: {
    // ...altro...
    how: "Come funziona",
    step1: "Descrivi il problema e avvia la videochiamata",
    step2: "Prima della chiamata, prepara gli attrezzi: cacciavite con inserti, chiave multipresa, chiave a rullino, Téflon o filassa con grasso per filassa",
    step3: "Il tuo telefono diventa gli occhi del tecnico",
    step4: "Le tue mani seguono le sue istruzioni — ripari tu, passo dopo passo",
    // ...altro...
  },
  de: {
    // ...altro...
    how: "So funktioniert’s",
    step1: "Beschreibe das Problem und starte den Videoanruf",
    step2: "Vor dem Anruf Werkzeuge bereitlegen: Schraubendreher mit Einsätzen, Wasserpumpenzange, verstellbarer Schraubenschlüssel, Teflonband oder Hanf mit Paste",
    step3: "Dein Smartphone wird zu den Augen des Technikers",
    step4: "Deine Hände folgen seinen Anweisungen — du reparierst Schritt für Schritt",
    // ...altro...
  }
};
function setLang(l){ LANG = l; localStorage.setItem('lang', l); for(const el of document.querySelectorAll('[data-i18n]')){ const k=el.getAttribute('data-i18n'); el.textContent = (MESSAGES[LANG][k]||k);} for(const el of document.querySelectorAll('[data-ph]')){ const k=el.getAttribute('data-ph'); el.placeholder=(MESSAGES[LANG][k]||''); } }
window.addEventListener('DOMContentLoaded',()=>setLang(LANG));
