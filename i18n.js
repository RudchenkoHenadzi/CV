const translations = {
  ru: {
    docTitle: "CV Rudchenko Gennady",
    docDescription: "CV Rudchenko Gennady",
    langSwitch: "Язык",
    downloadPdf: "Скачать PDF",
    photoAlt: "Рудченко Геннадий",
    name: "Рудченко Геннадий",
    location: "Беларусь, Минск",
    age: "33 года",
    skills: "Навыки",
    skillLanguages: "Языки",
    skillVue: "Vue-экосистема",
    skillStyles: "Стили и вёрстка",
    skillData: "Данные и API",
    tools: "Инструменты",
    toolsBuild: "Сборка и качество",
    toolsDesign: "Дизайн и AI",
    toolsTest: "Тесты и DX",
    toolsExtra: "Дополнительно",
    tagAiAgents: "AI-агенты",
    experience: "Опыт",
    kindWork: "Работа",
    yearsCompany: "2018–н.в.",
    roleFrontend: "Frontend-разработчик",
    yearsFrontend: "2022–н.в.",
    dutyFrontend1: "Разрабатываю клиентскую часть на Vue.",
    dutyFrontend2: "Работаю в команде с backend-разработчиками: согласовываю API и вместе выкатываю фичи.",
    roleSeo: "SEO-специалист",
    dutySeo1: "Вёл полный цикл развития проекта: от прототипирования до запуска и дальнейшего роста.",
    dutySeo2: "Работал с дизайнером и разработчиками над интерфейсом, постановкой задач и реализацией.",
    dutySeo3: "Собирал семантику, ставил ТЗ копирайтерам, занимался внутренней и внешней оптимизацией.",
    dutySeo4: "Продвигал проекты в Яндекс и Google.",
    kindFreelance: "Фриланс",
    yearsFreelance: "2022–н.в.",
    freelanceTitle: "Сайты для клиентов",
    freelanceProgram: "Полный цикл самостоятельно",
    dutyFreelance1: "Делаю небольшие сайты под ключ: от задачи до запуска и наполнения.",
    dutyFreelance2: "Начинал на MODX, затем перешёл на Nuxt + Strapi.",
    projects: "Проекты",
    education: "Образование",
    kindCourses: "Курсы",
    kindCollege: "Среднее специальное",
    rsNote: "Основной источник практических навыков: вёрстка, JavaScript, командная разработка и работа с Git.",
    stepName: "Академия ШАГ",
    stepProgram: "Современные веб-технологии и дизайн",
    stepNote: "База по веб-разработке и дизайну интерфейсов.",
    collegeName: "Минский государственный колледж электроники",
    collegeProgram: "Техник-электромеханик"
  },
  en: {
    docTitle: "CV Gennady Rudchenko",
    docDescription: "CV Gennady Rudchenko — Frontend Web Developer",
    langSwitch: "Language",
    downloadPdf: "Download PDF",
    photoAlt: "Gennady Rudchenko",
    name: "Gennady Rudchenko",
    location: "Minsk, Belarus",
    age: "33 years old",
    skills: "Skills",
    skillLanguages: "Languages",
    skillVue: "Vue ecosystem",
    skillStyles: "Styling & layout",
    skillData: "Data & API",
    tools: "Tools",
    toolsBuild: "Build & quality",
    toolsDesign: "Design & AI",
    toolsTest: "Testing & DX",
    toolsExtra: "Additional",
    tagAiAgents: "AI agents",
    experience: "Experience",
    kindWork: "Employment",
    yearsCompany: "2018–present",
    roleFrontend: "Frontend Developer",
    yearsFrontend: "2022–present",
    dutyFrontend1: "Build the client-side application with Vue.",
    dutyFrontend2: "Work with backend developers: align APIs and ship features together.",
    roleSeo: "SEO Specialist",
    dutySeo1: "Owned the full project cycle: from prototyping to launch and further growth.",
    dutySeo2: "Worked with designers and developers on the interface, task definition, and implementation.",
    dutySeo3: "Did keyword research, briefed copywriters, and handled on-page and off-page SEO.",
    dutySeo4: "Promoted projects in Yandex and Google.",
    kindFreelance: "Freelance",
    yearsFreelance: "2022–present",
    freelanceTitle: "Client websites",
    freelanceProgram: "End-to-end, independently",
    dutyFreelance1: "Build small websites end to end: from the brief to launch and content.",
    dutyFreelance2: "Started with MODX, then moved to Nuxt + Strapi.",
    projects: "Projects",
    education: "Education",
    kindCourses: "Courses",
    kindCollege: "Vocational",
    rsNote: "Main source of practical skills: layout, JavaScript, teamwork, and Git.",
    stepName: "IT Step Academy",
    stepProgram: "Modern web technologies and design",
    stepNote: "Foundation in web development and UI design.",
    collegeName: "Minsk State College of Electronics",
    collegeProgram: "Electromechanics Technician"
  }
};

function getInitialLang() {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl === "en" || fromUrl === "ru") {
    return fromUrl;
  }

  const saved = window.localStorage.getItem("cv-lang");
  if (saved === "en" || saved === "ru") {
    return saved;
  }

  return "ru";
}

function setLang(lang) {
  const dict = translations[lang];
  if (!dict) {
    return;
  }

  document.documentElement.lang = lang;
  document.title = dict.docTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", dict.docDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value) {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const value = dict[el.dataset.i18nAlt];
    if (value) {
      el.setAttribute("alt", value);
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const value = dict[el.dataset.i18nAria];
    if (value) {
      el.setAttribute("aria-label", value);
    }
  });

  document.querySelectorAll(".lang-switch [data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const pdfLink = document.querySelector(".pdf-download");
  if (pdfLink) {
    const file = lang === "en" ? "cv-en.pdf" : "cv-ru.pdf";
    const filename = lang === "en" ? "CV-Gennady-Rudchenko.pdf" : "CV-Rudchenko-Gennady.pdf";
    pdfLink.setAttribute("href", file);
    pdfLink.setAttribute("download", filename);
  }

  window.localStorage.setItem("cv-lang", lang);

  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState(null, "", url);
}

document.querySelectorAll(".lang-switch [data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    setLang(button.dataset.lang);
  });
});

setLang(getInitialLang());
