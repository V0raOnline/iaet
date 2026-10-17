// IAET · Catálogo de expedientes.
// Lee expedientes.json (en la raíz del sitio) y pinta las fichas. Lo usan el portal y las
// páginas de división:
//   IAET.portal()          → divisiones en #divisiones-lista y todos los expedientes en #expedientes-lista
//   IAET.division("eqnp")  → descripción en #division-desc y sus expedientes en #expedientes-lista
// La raíz del sitio se deduce de la ubicación de este script (comun/catalogo.js), así que
// funciona igual en local y en GitHub Pages, con o sin subcarpeta de proyecto.
(function () {
  const RAIZ = new URL("../", document.currentScript.src);
  const TIPOS = { parodia: "Parodia", estudio: "Estudio", divulgacion: "Divulgación" };
  const PENDIENTE = "PENDIENTE";

  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Internas: relativas a la raíz. Externas: absolutas. PENDIENTE: sin enlace.
  function enlace(url) {
    if (!url || url === PENDIENTE) return null;
    return new URL(url, RAIZ).href;
  }

  function fecha(iso) {
    const d = new Date(iso + "T00:00:00Z");
    if (isNaN(d)) return esc(iso);
    return d.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  }

  function cargar() {
    return fetch(new URL("expedientes.json", RAIZ), { cache: "no-cache" }).then((r) => {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    });
  }

  function fallo(destinos) {
    const msg = `<p class="catalogo-error ui">No se ha podido cargar el catálogo de expedientes. ` +
      `Si ha abierto la página directamente desde el disco, sírvala con un servidor local ` +
      `(<code>python -m http.server</code>). La IAET lamenta las molestias, sin mucha convicción.</p>`;
    destinos.forEach((sel) => { const el = document.querySelector(sel); if (el) el.innerHTML = msg; });
  }

  function marcaTipo(tipo) {
    return `<span class="tipo tipo-${esc(tipo)}">${esc(TIPOS[tipo] || tipo)}</span>`;
  }

  function fichaExpediente(e, divisiones) {
    const div = divisiones.find((d) => d.slug === e.division);
    const href = enlace(e.url);
    const repo = enlace(e.repo);
    const titulo = href ? `<a href="${esc(href)}">${esc(e.titulo)}</a>` : esc(e.titulo);
    let marcas = marcaTipo(e.tipo);
    if (e.externo) {
      marcas += repo
        ? ` <a class="externo" href="${esc(repo)}">repositorio propio ↗</a>`
        : ` <span class="externo">repositorio propio ↗</span>`;
    }
    if (!href) marcas += ` <span class="pendiente">enlace pendiente</span>`;
    return `<li class="ficha">
      <p class="ficha-id">${esc(e.id)}${div ? " · División " + esc(div.sigla) : ""} · ${fecha(e.fecha)}</p>
      <h3>${titulo}</h3>
      <p class="resumen-ficha">${esc(e.resumen)}</p>
      <p class="ficha-marcas">${marcas}</p>
    </li>`;
  }

  function fichaDivision(d, expedientes) {
    const n = expedientes.filter((e) => e.division === d.slug).length;
    const tipos = [...new Set(expedientes.filter((e) => e.division === d.slug).map((e) => e.tipo))];
    return `<li class="ficha">
      <p class="ficha-id">División ${esc(d.sigla)} · ${n} expediente${n === 1 ? "" : "s"}</p>
      <h3><a href="${esc(new URL(d.slug + "/", RAIZ).href)}">${esc(d.nombre)}</a></h3>
      <p class="resumen-ficha">${esc(d.descripcion)}</p>
      <p class="ficha-marcas">${tipos.map(marcaTipo).join(" ")}${d.provisional ? ` <span class="provisional">Denominación provisional</span>` : ""}</p>
    </li>`;
  }

  // Más recientes primero.
  const porFecha = (a, b) => String(b.fecha).localeCompare(String(a.fecha));

  function lista(items) {
    return items.length ? `<ul class="fichas dos">${items.join("")}</ul>`
      : `<p class="desc ui">Sin expedientes registrados. Nadie los ha pedido.</p>`;
  }

  function portal() {
    cargar().then((c) => {
      const divs = c.divisiones || [], exps = (c.expedientes || []).slice().sort(porFecha);
      document.querySelector("#divisiones-lista").innerHTML = lista(divs.map((d) => fichaDivision(d, exps)));
      document.querySelector("#expedientes-lista").innerHTML = lista(exps.map((e) => fichaExpediente(e, divs)));
    }).catch(() => fallo(["#divisiones-lista", "#expedientes-lista"]));
  }

  function division(slug) {
    cargar().then((c) => {
      const divs = c.divisiones || [];
      const d = divs.find((x) => x.slug === slug);
      const desc = document.querySelector("#division-desc");
      if (desc && d) {
        desc.innerHTML = esc(d.descripcion) + (d.provisional ? ` <span class="provisional">Denominación provisional.</span>` : "");
      }
      const exps = (c.expedientes || []).filter((e) => e.division === slug).sort(porFecha);
      document.querySelector("#expedientes-lista").innerHTML = lista(exps.map((e) => fichaExpediente(e, divs)));
    }).catch(() => fallo(["#expedientes-lista"]));
  }

  window.IAET = { portal, division };
})();
