// Zentrale Stelle für Werte, die wortgleich auf mehreren Seiten auftauchen.
// Beim nächsten Preis-Update hier einmal anpassen, statt jede HTML-Datei
// einzeln nach "September 2026" zu durchsuchen.
const STAND_DATUM = "September 2026";

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.stand-datum').forEach(el => { el.textContent = STAND_DATUM; });
});
