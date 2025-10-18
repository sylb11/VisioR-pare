
const MESSAGES = {
  fr: {
    // ...altro...
    how: "Comment ça marche",
    toolsTitle: "🧰 Outils recommandés avant la visioconférence :",
toolsList: "Tournevis avec embouts • Pince multiprise • Clé à molette • Téflon ou filasse avec pâte pour filasse",
    step1: "Décris ton problème et lance la visioconférence",
    step2: "Avant l’appel, prépare les outils : tournevis avec embouts, pince multiprise, clé à molette, Téflon ou filasse avec pâte",
    step3: "Ton téléphone devient les yeux du technicien",
    step4: "Tes mains suivent ses instructions — tu répares, guidé étape par étape",
    tarifTitle: "💰 Tarifs :",
tarifText: "25 CHF à la réponse + 2.50 CHF/min, facturation à la seconde.",
    // ...altro...
  },
  it: {
    // ...altro...
    how: "Come funziona",
    toolsTitle: "🧰 Attrezzi consigliati prima della videochiamata:",
toolsList: "Cacciavite con inserti • Chiave multipresa • Chiave a rullino • Téflon o filassa con grasso per filassa",
    step1: "Descrivi il problema e avvia la videochiamata",
    step2: "Prima della chiamata, prepara gli attrezzi: cacciavite con vari inserti, chiave papagallo, chiave a rullino, Téflon o canapa con grasso per canapa",
    step3: "Il tuo telefono diventa gli occhi del tecnico",
    step4: "Le tue mani seguono le sue istruzioni — ripari tu, passo dopo passo",
    tarifTitle: "💰 Tariffe :",
tarifText: "25 CHF alla risposta + 2.50 CHF/min, fatturazione al secondo.",
    // ...altro...
  },
  de: {
    // ...altro...
    how: "So funktioniert’s",
    toolsTitle: "🧰 Empfohlenes Werkzeug vor dem Videoanruf:",
toolsList: "Schraubendreher mit Einsätzen • Wasserpumpenzange • Verstellbarer Schraubenschlüssel • Teflonband oder Hanf mit Paste",
    step1: "Beschreibe das Problem und starte den Videoanruf",
    step2: "Vor dem Anruf Werkzeuge bereitlegen: Schraubendreher mit Einsätzen, Wasserpumpenzange, verstellbarer Schraubenschlüssel, Teflonband oder Hanf mit Paste",
    step3: "Dein Smartphone wird zu den Augen des Technikers",
    step4: "Deine Hände folgen seinen Anweisungen — du reparierst Schritt für Schritt",
    tarifTitle: "💰 Preise :",
tarifText: "25 CHF beim Anrufstart + 2.50 CHF/Min, sekundengenaue Abrechnung.",
    // ...altro...
  }
};
function setLang(l){ LANG = l; localStorage.setItem('lang', l); for(const el of document.querySelectorAll('[data-i18n]')){ const k=el.getAttribute('data-i18n'); el.textContent = (MESSAGES[LANG][k]||k);} for(const el of document.querySelectorAll('[data-ph]')){ const k=el.getAttribute('data-ph'); el.placeholder=(MESSAGES[LANG][k]||''); } }
window.addEventListener('DOMContentLoaded',()=>setLang(LANG));
