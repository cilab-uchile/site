// Has to run early (in head), otherwise a flash of the stored language will occur.
// Mirrors the pattern used by theme.js for the dark mode toggle.

// Read the stored language preference, defaulting to "es".
let getStoredLang = () => {
  let lang = localStorage.getItem("lang");
  if (lang !== "es" && lang !== "en") {
    lang = "es";
  }
  return lang;
};

// Look up a dot-notation key (e.g. "nav.people") inside a translation dictionary.
let getNestedTranslation = (dict, key) => {
  return key.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), dict);
};

// Apply a language: update the <html> attributes and swap every [data-i18n] element.
let applyLang = (lang) => {
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("data-lang", lang);

  const dict = (window.I18N_DICT && window.I18N_DICT[lang]) || {};
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = getNestedTranslation(dict, el.getAttribute("data-i18n"));
    if (value !== undefined) {
      el.textContent = value;
    }
  });

  // Prose fields sourced from _data (see td.liquid): each element carries its
  // own ES/EN text as data attributes instead of going through I18N_DICT.
  document.querySelectorAll("[data-i18n-field]").forEach((el) => {
    const value = lang === "en" && el.getAttribute("data-en") ? el.getAttribute("data-en") : el.getAttribute("data-es");
    if (value) {
      el.textContent = value;
    }
  });

  const label = document.getElementById("lang-toggle-label");
  if (label) {
    label.textContent = lang.toUpperCase();
  }
};

// Change the language setting, persist it, and apply it.
let setLangSetting = (lang) => {
  localStorage.setItem("lang", lang);
  applyLang(lang);
};

// Toggle between the two supported languages.
let toggleLangSetting = () => {
  setLangSetting(getStoredLang() === "es" ? "en" : "es");
};

let initLang = () => {
  // Set <html> attributes as early as possible to avoid mismatched state;
  // the [data-i18n] text swap below is a no-op here since body isn't parsed yet.
  applyLang(getStoredLang());

  document.addEventListener("DOMContentLoaded", function () {
    // Re-apply now that [data-i18n] elements exist in the DOM.
    applyLang(getStoredLang());

    const langToggle = document.getElementById("lang-toggle");
    if (langToggle) {
      langToggle.addEventListener("click", function () {
        toggleLangSetting();
      });
    }
  });
};
