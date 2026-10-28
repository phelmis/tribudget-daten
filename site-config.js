// Zentrale Stelle für Werte, die wortgleich auf mehreren Seiten auftauchen.
// Beim nächsten Preis-Update hier einmal anpassen, statt jede HTML-Datei
// einzeln nach "September 2026" zu durchsuchen.
const STAND_DATUM = "September 2026";

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.stand-datum').forEach(el => { el.textContent = STAND_DATUM; });
});

// Reichweitenmessung mit GoatCounter (ohne Cookies, ohne Speicherung im Browser).
// Wird hier einmal geladen und gilt dadurch für alle Seiten, die site-config.js einbinden.
(function () {
  var s = document.createElement('script');
  s.async = true;
  s.dataset.goatcounter = 'https://triabudget.goatcounter.com/count';
  s.src = '//gc.zgo.at/count.js';
  document.head.appendChild(s);
})();
