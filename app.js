(function () {
  var LANG_KEY = "trip-lang";
  var app = document.getElementById("app");
  var buttons = document.querySelectorAll("#langbar button");

  function wireNav() {
    var navLinks = app.querySelectorAll(".quicknav a");
    var sections = app.querySelectorAll("section[id]");
    if (!sections.length) return;

    function onScroll() {
      var pos = window.scrollY + 120;
      var current = sections[0].id;
      sections.forEach(function (s) {
        if (s.offsetTop <= pos) current = s.id;
      });
      navLinks.forEach(function (a) {
        a.classList.toggle("active", a.getAttribute("href") === "#" + current);
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function render(lang) {
    if (!I18N[lang]) lang = "ja";
    app.innerHTML = I18N[lang];
    document.documentElement.lang = lang === "zh-Hans" || lang === "zh-Hant" ? "zh" : lang;
    buttons.forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    wireNav();
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      render(b.getAttribute("data-lang"));
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    });
  });

  var saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
  render(saved && I18N[saved] ? saved : "ja");
})();
