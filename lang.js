// Язык страницы: ?lang=ru|en → сохранённый выбор → язык браузера → en.
// Блоки с lang="ru" / lang="en" скрываются через style.css.
(function () {
  var RU_LIKE = ['ru', 'uk', 'be', 'kk'];

  function normalize(code) {
    if (!code) return null;
    code = String(code).slice(0, 2).toLowerCase();
    if (code === 'en') return 'en';
    if (RU_LIKE.indexOf(code) !== -1) return 'ru';
    return null;
  }

  var param = normalize(new URLSearchParams(location.search).get('lang'));
  var saved = null;
  try {
    saved = normalize(localStorage.getItem('lang'));
    if (param) localStorage.setItem('lang', param);
  } catch (e) {}

  var lang = param || saved || normalize(navigator.language) || 'en';
  var root = document.documentElement;
  root.lang = lang;

  var title = root.getAttribute('data-title-' + lang);
  if (title) document.title = title;
})();
