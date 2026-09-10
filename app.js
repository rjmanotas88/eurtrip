/* ============================================================
   EUROTRIP 2026 — Datos centralizados + render + interacción
   ============================================================ */

const trip = {
  travelers: [
    { name: "Wadeth de la Ossa", from: "Cartagena", cabin: true, hold: false, personal: true },
    { name: "Maria Osio", from: "Cartagena", cabin: true, hold: true, personal: true },
    { name: "Mario Lambraño", from: "Cartagena", cabin: true, hold: false, personal: true },
    { name: "Mabel de la Ossa", from: "Cartagena", cabin: true, hold: false, personal: true },
    { name: "Vanessa Lambraño", from: "Bogotá", cabin: true, hold: true, personal: true },
    { name: "Roberth Manotas", from: "Bogotá", cabin: true, hold: false, personal: true },
    { name: "Melisa", from: "Cartagena", cabin: true, hold: false, personal: true },
  ],

  flightIda: [
    { time: "15:15", city: "BOGOTÁ", detail: "BOG · El Dorado · KLM KL749 · Boeing 787-9 · Economy" },
    { time: "—", city: "CARTAGENA", detail: "Parada ~1 h 20 min", note: "Aquí se incorpora parte del grupo." },
    { time: "10:45 +1", city: "ÁMSTERDAM", detail: "AMS · Schiphol · Conexión 1 h 35 min" },
    { time: "12:20", city: "AMS → BCN", detail: "HV5135 · Operado por Transavia · Boeing 737-800" },
    { time: "14:30", city: "BARCELONA", detail: "Barcelona El Prat" },
  ],

  flightRegreso: [
    { time: "06:00", city: "MADRID", detail: "MAD · Barajas · KL1500 · Economy · Clase L" },
    { time: "08:25", city: "ÁMSTERDAM", detail: "AMS · Schiphol · Conexión 1 h 25 min" },
    { time: "09:50", city: "AMS → BOG", detail: "KL0741 · Economy · Clase T" },
    { time: "13:40", city: "BOGOTÁ", detail: "BOG · El Dorado" },
  ],

  itinerary: [
    { date: "MIÉ 23 SEP", title: "Barcelona — Día de llegada", tags: [["DÍA DE LLEGADA", "priority"]],
      items: ["Llegada aproximadamente 14:30. Traslado al alojamiento.", "Check-in disponible después de las 17:00.",
        "Primer recorrido abierto según energía.", "Plaça Catalunya.",
        "El Corte Inglés Plaça Catalunya para quien quiera comprar.", "Passeig de Gràcia / centro como alternativa.", "Cena sencilla."] },
    { date: "JUE 24 SEP", title: "Barcelona a pie", tags: [["PRIORIDAD", "priority"], ["A PIE", "day"]],
      items: ["Sagrada Família.", "Passeig de Gràcia.", "Casa Batlló.", "La Pedrera / Casa Milà exterior.",
        "Plaça Catalunya.", "La Rambla.", "Barrio Gótico.", "Catedral de Barcelona.", "Port Vell.", "Barceloneta si queda energía."],
      osm: "https://www.openstreetmap.org/#map=15/41.4036/2.1744" },
    { date: "VIE 25 SEP", title: "Barcelona — Día flexible", tags: [["OPCIONAL", "night"]],
      items: ["Montjuïc.", "Plaça Espanya.", "Miradores.", "Camp Nou / zona FC Barcelona.",
        "Parque Güell si no se ha visitado.", "Barceloneta.", "Tiempo libre."] },
    { date: "SÁB 26 SEP", title: "Barcelona — Mañana abierta + traslado", tags: [["COMPRAS", "night"], ["TREN", "day"]],
      items: ["Parque Güell.", "Barceloneta.", "Compras / pendientes.", "Paseo tranquilo.",
        "Preparar equipaje y traslado a Barcelona Sants."] },
    { date: "SÁB 26 SEP", title: "París — Noche", tags: [["SI HAY ENERGÍA", "night"]],
      items: ["Llegada Gare de Lyon 23:19.", "Traslado al Airbnb. Check-in aproximadamente medianoche.",
        "Si el grupo se siente bien: salida opcional a Torre Eiffel de noche.", "Si hay cansancio: dormir y mover Torre Eiffel al domingo."] },
    { date: "DOM 27 SEP", title: "París clásico", tags: [["PRIORIDAD", "priority"]],
      items: ["Torre Eiffel / Trocadéro si no se hizo el sábado.", "Arco del Triunfo.", "Champs-Élysées.",
        "Place de la Concorde.", "Jardin des Tuileries.", "Louvre por fuera.", "Île de la Cité.",
        "Notre-Dame.", "Barrio Latino.", "Sacré-Cœur / Montmartre (puede pasar al lunes de noche)."] },
    { date: "LUN 28 SEP", title: "París — Louvre", tags: [["PRIORIDAD ALTA", "priority"]],
      items: ["Museo del Louvre por dentro (mañana / mediodía).", "No intentar ver todo el museo.",
        "El Louvre no se \"termina\": elegir obras / zonas prioritarias.",
        "Tarde/noche flexible: Montmartre + Sacré-Cœur, paseo por el Sena, Torre Eiffel iluminada."] },
    { date: "MAR 29 SEP", title: "París — Arquitectura moderna", tags: [["LA DÉFENSE", "priority"]],
      items: ["Grande Arche.", "Esplanade de La Défense.", "CNIT.", "Skyline corporativo.",
        "Eje visual hacia Arc de Triomphe.", "Dedicar ~2–3 horas.",
        "Después: almuerzo, pendientes, regreso temprano y preparar equipaje para el vuelo."] },
    { date: "MIÉ 30 SEP", title: "Madrid full — Centro histórico + Prado", tags: [["DÍA INTENSO", "priority"]],
      items: ["Puerta del Sol.", "Plaza Mayor.", "Mercado de San Miguel.", "Palacio Real.",
        "Plaza de Oriente.", "Gran Vía.", "Museo del Prado.",
        "Verificar en la web oficial las condiciones de acceso gratuito ~17:00."] },
    { date: "JUE 01 OCT", title: "Segovia — Excursión de día", tags: [["EXCURSIÓN", "day"]],
      items: ["Acueducto de Segovia.", "Casco histórico.", "Catedral.", "Alcázar de Segovia.",
        "Almuerzo local.", "Regreso a Madrid.", "Gran Vía / compras finales si queda energía.",
        "Comparar AVE + conexión local vs. bus directo. Priorizar simplicidad."] },
    { date: "VIE 02 OCT", title: "Regreso", tags: [["REGRESO", "night"]],
      items: ["No programar turismo."] },
  ],

  stays: [
    { city: "Barcelona", zone: "L'Hospitalet de Llobregat", dates: "23–26 SEP",
      addr: "Carrer Rafael Campalans, 175<br>08903 L'Hospitalet de Llobregat<br>Barcelona, España",
      copyAddr: "Carrer Rafael Campalans 175, 08903 L'Hospitalet de Llobregat, Barcelona, España",
      host: "Alex", checkin: "Después de 17:00", checkout: "Antes de 11:00", type: "Airbnb / Apartamento",
      lat: 41.3667, lng: 2.1097,
      research: "Investigar: estación de metro más cercana y línea, tiempo a Plaça Catalunya, supermercado y farmacia cercanos, tiempo a Barcelona Sants." },
    { city: "París", zone: "Choisy-le-Roi", dates: "26–30 SEP",
      addr: "65 Avenue d'Alfortville<br>94600 Choisy-le-Roi<br>France",
      copyAddr: "65 Avenue d'Alfortville, 94600 Choisy-le-Roi, France",
      host: "Emilie & Julien", checkin: "Después de 16:00", checkout: "Antes de 11:00", type: "Airbnb / Apartamento",
      lat: 48.7659, lng: 2.4103,
      research: "Investigar: RER / estación más cercana, tiempo al centro y a Torre Eiffel, supermercado, boulangerie, farmacia, alternativa Uber/taxi de noche, tiempo hacia Orly." },
    { city: "Madrid", zone: "Madrid", dates: "30 SEP – 02 OCT",
      addr: "Calle Verdaguer y García, 51<br>28027 Madrid<br>España",
      copyAddr: "Calle Verdaguer y García 51, 28027 Madrid, España",
      host: "Carlos", checkin: "Después de 15:00", checkout: "Antes de 11:00", type: "Airbnb / Apartamento",
      lat: 40.4419, lng: -3.6553,
      research: "Investigar: metro cercano, tiempo a Sol / Gran Vía, supermercado, farmacia, transporte hacia el aeropuerto." },
  ],

  climate: [
    { city: "Barcelona", temp: "17–25 °C", desc: "Templado. Días cálidos posibles, noches frescas, posible lluvia." },
    { city: "París", temp: "11–20 °C", desc: "Más fresco y variable. Posible lluvia; mañanas y noches frescas." },
    { city: "Madrid", temp: "12–24 °C", desc: "Días agradables, noches frescas. Normalmente más seco que París." },
    { city: "Segovia", temp: "8–20 °C", desc: "Mayor altitud: puede ser claramente más fría." },
  ],

  outfits: [
    { title: "Día templado", temp: "Barcelona · Madrid · mediodía", items: ["tshirt", "pants", "shoes", "cap"] },
    { title: "Tarde y noche frescas", temp: "París · noches", items: ["tshirt", "sweater", "jacket", "pants", "shoes"] },
    { title: "Lluvia y viento", temp: "París · imprevistos", items: ["sweater", "jacket", "umbrella", "pants", "shoes"] },
    { title: "Día frío", temp: "Segovia · altitud", items: ["sweater", "jacket", "scarf", "pants", "shoes"] },
  ],

  insurance: [
    { name: "Mario", ins: "MOK", status: "Confirmado" },
    { name: "Mabel", ins: "MOK", status: "Confirmado" },
    { name: "Roberth", ins: "Colmédica", status: "Confirmado" },
    { name: "Vanessa", ins: "Colmédica", status: "Confirmado" },
    { name: "Maria", ins: "AXA", status: "Confirmado" },
    { name: "Wadeth", ins: "Pendiente", status: "Pendiente" },
    { name: "Melisa", ins: "Pendiente", status: "Pendiente" },
  ],

  checklist: {
    colombia: ["Pasaporte", "Seguro de viaje", "Billetes / reservas", "Tarjetas", "Algo de efectivo",
      "eSIM / roaming", "Medicamentos personales",
      "Botiquín básico (genéricos: dolor/fiebre, antialérgico, antidiarreico, digestivo, curitas)",
      "Adaptador europeo", "Tenis cómodos", "Chaqueta ligera", "Paraguas compacto", "Báscula de equipaje"],
    ciudad: ["Contar personas", "Pasaportes", "Celulares", "Billeteras", "Cargadores", "Maletas",
      "Revisar baños / habitaciones", "Revisar cajones", "Revisar enchufes", "Revisar debajo de camas",
      "Llaves del Airbnb", "Billetes", "Transporte confirmado"],
  },

  resources: [
    { label: "TMB — Transporte Barcelona", url: "https://www.tmb.cat/es", cat: "Movilidad" },
    { label: "Île-de-France Mobilités — París", url: "https://www.iledefrance-mobilites.fr/", cat: "Movilidad" },
    { label: "CRTM — Transporte Madrid", url: "https://www.crtm.es/", cat: "Movilidad" },
    { label: "SNCF Connect — TGV", url: "https://www.sncf-connect.com/", cat: "Tren" },
    { label: "Museo del Prado", url: "https://www.museodelprado.es/", cat: "Cultura" },
    { label: "Musée du Louvre", url: "https://www.louvre.fr/", cat: "Cultura" },
    { label: "Torre Eiffel — oficial", url: "https://www.toureiffel.paris/", cat: "Cultura" },
    { label: "Aéroport Paris-Orly", url: "https://www.parisaeroport.fr/", cat: "Aeropuerto" },
  ],

  route: [
    { name: "Barcelona", lat: 41.3874, lng: 2.1686 },
    { name: "París", lat: 48.8566, lng: 2.3522 },
    { name: "Madrid", lat: 40.4168, lng: -3.7038 },
  ],
};

/* ---------- Helpers ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const yn = (v) => v ? '<span class="yes">Sí</span>' : '<span class="no">No</span>';

/* ---------- Travelers ---------- */
function renderTravelers() {
  const el = $("#travelers");
  let html = `<div class="travelers__row travelers__row--head">
    <div>Viajero</div><div>Salida</div><div>Cabina 10 kg</div><div>Bodega 23 kg</div><div>Artículo personal</div>
  </div>`;
  trip.travelers.forEach((t) => {
    html += `<div class="travelers__row">
      <div class="travelers__name">${t.name}</div>
      <div class="travelers__cell"><b>Salida</b>${t.from}</div>
      <div class="travelers__cell"><b>Cabina 10 kg</b>${yn(t.cabin)}</div>
      <div class="travelers__cell"><b>Bodega 23 kg</b>${yn(t.hold)}</div>
      <div class="travelers__cell"><b>Art. personal</b>${yn(t.personal)}</div>
    </div>`;
  });
  el.innerHTML = html;
}

/* ---------- Flight route ---------- */
function renderFlightRoute(sel, data) {
  const el = $(sel);
  if (!el) return;
  el.innerHTML = data.map((s) => `
    <div class="flightroute__stop">
      <div class="flightroute__dot"></div>
      <div class="flightroute__time">${s.time}</div>
      <div class="flightroute__body">
        <div class="flightroute__city">${s.city}</div>
        <div class="flightroute__detail">${s.detail}</div>
        ${s.note ? `<div class="flightroute__note">${s.note}</div>` : ""}
      </div>
    </div>`).join("");
}

/* ---------- Itinerary accordion ---------- */
function renderItinerary() {
  const el = $("#itinerary");
  el.innerHTML = trip.itinerary.map((d, i) => {
    const tags = d.tags.map(([t, k]) => `<span class="tag tag--${k}">${t}</span>`).join("");
    const osm = d.osm ? `<a class="btn btn--outline" href="${d.osm}" target="_blank" rel="noopener">VER RUTA EN OPENSTREETMAP</a>` : "";
    return `<div class="day" data-day="${i}">
      <button class="day__btn" aria-expanded="false">
        <span class="day__date">${d.date}</span>
        <span class="day__title">${d.title}</span>
        <span class="day__tags-wrap"><span class="tags">${tags}</span></span>
        <span class="day__sign">+</span>
      </button>
      <div class="day__panel"><div class="day__inner">
        ${d.items.map((it) => `<p>${it}</p>`).join("")}
        ${osm}
      </div></div>
    </div>`;
  }).join("");

  $$(".day__btn", el).forEach((btn) => {
    btn.addEventListener("click", () => {
      const day = btn.closest(".day");
      const open = day.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
  });
}

/* ---------- Stays ---------- */
function renderStays() {
  const el = $("#stays");
  el.innerHTML = trip.stays.map((s, i) => `
    <article class="stay">
      <div class="stay__info">
        <h3 class="stay__city">${s.city}</h3>
        <p class="stay__zone">${s.zone}</p>
        <p class="stay__dates">${s.dates}</p>
        <address class="stay__addr">${s.addr}</address>
        <div class="stay__grid">
          <div><span>Host</span><b>${s.host}</b></div>
          <div><span>Tipo</span><b>${s.type}</b></div>
          <div><span>Check-in</span><b>${s.checkin}</b></div>
          <div><span>Check-out</span><b>${s.checkout}</b></div>
        </div>
        <div class="stay__actions">
          <button class="btn" data-copy="${s.copyAddr.replace(/"/g, "&quot;")}">COPIAR DIRECCIÓN</button>
          <a class="btn btn--outline" href="https://www.openstreetmap.org/?mlat=${s.lat}&mlon=${s.lng}#map=16/${s.lat}/${s.lng}" target="_blank" rel="noopener">VER EN OPENSTREETMAP</a>
        </div>
        <p class="stay__research">${s.research}</p>
      </div>
      <div class="stay__map" id="stayMap${i}"></div>
    </article>`).join("");

  // copy buttons
  $$("[data-copy]", el).forEach((btn) => {
    btn.addEventListener("click", async () => {
      const txt = btn.getAttribute("data-copy");
      try {
        await navigator.clipboard.writeText(txt);
        const old = btn.textContent;
        btn.textContent = "COPIADO ✓";
        setTimeout(() => (btn.textContent = old), 1600);
      } catch {
        btn.textContent = "COPIA MANUAL";
      }
    });
  });
}

/* ---------- Climate ---------- */
function renderClimate() {
  $("#climate").innerHTML = trip.climate.map((c) => `
    <div class="climate__item">
      <div class="climate__city">${c.city}</div>
      <div class="climate__temp">${c.temp}</div>
      <div class="climate__desc">${c.desc}</div>
    </div>`).join("");
}

/* ---------- Outfits ---------- */
const garments = {
  tshirt: ["Camiseta", `<path d="M17 8l-9 4 3 7 4-2v19h18V17l4 2 3-7-9-4a7 7 0 0 1-14 0z"/>`],
  sweater: ["Buzo", `<path d="M16 8 6 12v10l6 2v14h24V24l6-2V12L36 8H16z"/><path d="M18 8a6 6 0 0 0 12 0"/>`],
  jacket: ["Chaqueta", `<path d="M17 8 7 12l3 8 4-1v19h20V19l4 1 3-8-10-4-5 3-5-3z"/><path d="M24 11v28"/>`],
  pants: ["Pantalón", `<path d="M14 6h20v10l-3 26h-6l-1-18-1 18h-6l-3-26z"/>`],
  shoes: ["Tenis", `<path d="M6 30c4 0 6-4 10-4 3 0 5 3 9 4l11 1a3 3 0 0 1 0 6H8a2 2 0 0 1-2-2v-5z"/><path d="M16 26l3 4M21 27l2 3"/>`],
  umbrella: ["Paraguas", `<path d="M24 6v3M8 24a16 16 0 0 1 32 0zM24 24v13a4 4 0 0 0 8 0"/>`],
  cap: ["Gorra", `<path d="M8 30c0-9 7-16 16-16s16 7 16 16zM40 30h4"/>`],
  scarf: ["Bufanda", `<path d="M18 8h12v13a6 6 0 0 1-12 0zM22 34l-4 8M27 34l4 8"/>`],
};

function renderOutfits() {
  const el = $("#outfits");
  if (!el) return;
  el.innerHTML = trip.outfits.map((o) => {
    const items = o.items.map((k) => {
      const [label, path] = garments[k] || ["", ""];
      return `<div class="outfit__item">
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linejoin="round" stroke-linecap="round" role="img" aria-label="${label}">${path}</svg>
        <span>${label}</span>
      </div>`;
    }).join("");
    return `<div class="outfit">
      <div class="outfit__title">${o.title}</div>
      <div class="outfit__temp">${o.temp}</div>
      <div class="outfit__items">${items}</div>
    </div>`;
  }).join("");
}

/* ---------- Insurance ---------- */
function renderInsurance() {
  const cls = (s) => s === "Confirmado" ? "ok" : "pending";
  $("#insurance").innerHTML = `
    <div class="insurance__row insurance__row--head">
      <div>Viajero</div><div>Seguro</div><div>Estado</div>
    </div>` + trip.insurance.map((r) => `
    <div class="insurance__row">
      <div class="insurance__name">${r.name}</div>
      <div>${r.ins}</div>
      <div><span class="status status--${cls(r.status)}">${r.status.toUpperCase()}</span></div>
    </div>`).join("");
}

/* ---------- Resources ---------- */
function renderResources() {
  $("#resources").innerHTML = trip.resources.map((r) => `
    <li><a href="${r.url}" target="_blank" rel="noopener">
      <span>${r.cat}</span>${r.label}
    </a></li>`).join("");
}

/* ---------- Checklist (localStorage) ---------- */
const CK_KEY = "eurotrip2026_checklist";
function loadCheck() { try { return JSON.parse(localStorage.getItem(CK_KEY)) || {}; } catch { return {}; } }
function saveCheck(state) { localStorage.setItem(CK_KEY, JSON.stringify(state)); }

function renderChecklist() {
  const state = loadCheck();
  $$(".check").forEach((ul) => {
    const key = ul.dataset.list;
    ul.innerHTML = trip.checklist[key].map((item, i) => {
      const id = `${key}-${i}`;
      const done = state[id] ? "done" : "";
      return `<li class="${done}">
        <input type="checkbox" id="${id}" ${state[id] ? "checked" : ""}>
        <label for="${id}">${item}</label>
      </li>`;
    }).join("");

    ul.addEventListener("change", (e) => {
      if (e.target.matches("input[type=checkbox]")) {
        const s = loadCheck();
        s[e.target.id] = e.target.checked;
        saveCheck(s);
        e.target.closest("li").classList.toggle("done", e.target.checked);
      }
    });
  });

  $("#resetCheck").addEventListener("click", () => {
    localStorage.removeItem(CK_KEY);
    renderChecklist();
  });
}

/* ---------- Maps (Leaflet) ---------- */
const mapInstances = []; // { el, onShow } — refreshed when their wizard step opens

function initMaps() {
  const tiles = () => L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19, attribution: "© OpenStreetMap contributors",
  });

  // stay maps
  trip.stays.forEach((s, i) => {
    const node = document.getElementById(`stayMap${i}`);
    if (!node) return;
    const map = L.map(node, { scrollWheelZoom: false }).setView([s.lat, s.lng], 15);
    tiles().addTo(map);
    L.marker([s.lat, s.lng]).addTo(map).bindPopup(`<b>${s.city}</b><br>${s.zone}`);
    mapInstances.push({ el: node, onShow: () => { map.invalidateSize(); map.setView([s.lat, s.lng], 15); } });
  });

  // general route map
  const gNode = $("#mapGeneral");
  if (gNode) {
    const map = L.map(gNode, { scrollWheelZoom: false });
    tiles().addTo(map);
    const pts = trip.route.map((p) => {
      L.marker([p.lat, p.lng]).addTo(map).bindPopup(`<b>${p.name}</b>`);
      return [p.lat, p.lng];
    });
    L.polyline(pts, { color: "#E30613", weight: 3 }).addTo(map);
    map.fitBounds(pts, { padding: [40, 40] });
    mapInstances.push({ el: gNode, onShow: () => { map.invalidateSize(); map.fitBounds(pts, { padding: [40, 40] }); } });
  }

  $("#osmGeneral")?.addEventListener("click", () => {
    window.open("https://www.openstreetmap.org/#map=6/44.0/1.5", "_blank", "noopener");
  });
}

/* ---------- Wizard ---------- */
function initWizard() {
  const steps = [...$$("body > section"), $("footer.footer")].filter(Boolean);
  const prevBtn = $("#wizPrev");
  const nextBtn = $("#wizNext");
  const prog = $("#wizProgress");
  const titleEl = $("#wizTitle");
  let idx = 0;

  document.body.classList.add("wizard");

  const titleOf = (step) => {
    const t = step.querySelector(".section__title, .hero__title, .passport__title, .footer__big");
    return t ? t.textContent.replace(/\s+/g, " ").trim() : "";
  };
  const indexOfId = (id) => steps.findIndex((s) => s.id === id);

  function go(i) {
    idx = Math.max(0, Math.min(steps.length - 1, i));
    steps.forEach((s, k) => s.classList.toggle("is-active", k === idx));
    prog.textContent = `${idx + 1} / ${steps.length}`;
    titleEl.textContent = titleOf(steps[idx]);
    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === steps.length - 1;
    window.scrollTo(0, 0);
    // refresh any Leaflet maps that just became visible
    mapInstances.forEach((m) => { if (steps[idx].contains(m.el)) setTimeout(m.onShow, 60); });
    if (steps[idx].id) history.replaceState(null, "", `#${steps[idx].id}`);
  }

  prevBtn.addEventListener("click", () => go(idx - 1));
  nextBtn.addEventListener("click", () => go(idx + 1));

  // any in-page anchor jumps to that wizard step
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href").slice(1);
      const i = indexOfId(id);
      if (i >= 0) { e.preventDefault(); go(i); }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea")) return;
    if (e.key === "ArrowRight") go(idx + 1);
    if (e.key === "ArrowLeft") go(idx - 1);
  });

  const start = indexOfId(location.hash.slice(1));
  go(start >= 0 ? start : 0);
}

/* ---------- Mobile nav ---------- */
function initNav() {
  const toggle = $("#navToggle");
  const menu = $("#navMenu");
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  $$("#navMenu a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderTravelers();
  renderFlightRoute("#flightIda", trip.flightIda);
  renderFlightRoute("#flightRegreso", trip.flightRegreso);
  renderItinerary();
  renderStays();
  renderClimate();
  renderOutfits();
  renderInsurance();
  renderResources();
  renderChecklist();
  initNav();
  initMaps();
  initWizard();
});
