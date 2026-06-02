/* ===== Irbis Tech Solutions ERP — Demos · navegación y footer compartidos ===== */

const NAV_LINKS = [
  { href: "index.html",            label: "Planes",        key: "planes" },
  { href: "demos/talleres.html",   label: "Talleres",      key: "talleres" },
  { href: "demos/ferreteria.html", label: "Ferretería",    key: "ferreteria" },
  { href: "demos/botica.html",     label: "Botica",        key: "botica" },
  { href: "demos/restaurante.html",label: "Restaurante",   key: "restaurante" },
  { href: "demos/multisede.html",  label: "Multi-sede",    key: "multisede" },
];

/**
 * Renderiza la barra de navegación.
 * @param {string} active  clave de la página activa
 * @param {string} base    prefijo de ruta ("" en la raíz, "../" dentro de /demos)
 */
function renderNav(active, base = "") {
  const links = NAV_LINKS.map(
    (l) =>
      `<a href="${base}${l.href}" class="${l.key === active ? "active" : ""}">${l.label}</a>`
  ).join("");

  document.body.insertAdjacentHTML(
    "afterbegin",
    `
    <nav class="nav">
      <div class="container nav-inner">
        <a class="brand" href="${base}index.html">
          <span class="logo"><img src="${base}assets/logo.png" alt="Irbis Tech Solutions" /></span>
          <span>Irbis Tech Solutions<small>ERP en la nube · SUNAT + IA</small></span>
        </a>
        <button class="nav-toggle" aria-label="Menú" onclick="document.getElementById('navlinks').classList.toggle('open')">☰</button>
        <div class="nav-links" id="navlinks">
          ${links}
          <a class="nav-cta" href="${base}index.html#planes">Ver planes</a>
        </div>
      </div>
    </nav>`
  );
}

function renderFooter(base = "") {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <footer class="footer">
      <div class="container">
        <div>
          <strong>Irbis Tech Solutions ERP</strong> · Arequipa, Perú —
          <span class="muted">Facturación electrónica SUNAT + Inteligencia Artificial</span>
        </div>
        <div class="muted">Demo visual · datos de ejemplo, sin base de datos real</div>
      </div>
    </footer>`
  );
}

/** Banner que aclara que la demo es solo visual. */
function demoBanner(text) {
  return `<div class="demo-banner">🔎 <span><b>Demo visual.</b> ${text} Los datos son de ejemplo y no se guardan.</span></div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const active = document.body.dataset.page;
  const base = document.body.dataset.base || "";
  if (active !== undefined) renderNav(active, base);
  renderFooter(base);
});
