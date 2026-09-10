# EUROTRIP 2026

Guía operativa de viaje para 7 viajeros · Barcelona · París · Madrid · 22 SEP — 02 OCT 2026.

## Stack

- HTML / CSS / JS vanilla (máxima portabilidad).
- [Leaflet](https://leafletjs.com/) vía CDN + tiles de OpenStreetMap (no se usa Google Maps).
- Estilo Swiss / International Typographic Style. Mobile-first.

## Estructura

```
/eurtrip
  index.html      # estructura y secciones
  styles.css      # sistema visual Swiss
  app.js          # datos centralizados (objeto `trip`) + render + interacción
  README.md
  /assets/images  # (opcional) imágenes de Wikimedia Commons
```

## Datos editables

Toda la información variable vive en el objeto `trip` en [`app.js`](app.js):
`travelers`, `flightIda`, `itinerary`, `stays`, `climate`, `insurance`, `checklist`, `resources`, `route`.

Para actualizar un dato (por ejemplo, confirmar la ciudad de salida de **Melisa**), editar únicamente ese objeto.

## Funcionalidades

- Navegación con scroll suave y menú móvil.
- Itinerario en acordeón por día.
- Checklist interactivo con persistencia en `localStorage` + botón **RESET**.
- Botón **COPIAR DIRECCIÓN** en cada alojamiento.
- Mapas Leaflet con botón **VER EN OPENSTREETMAP**.
- Barra sticky móvil: PASAPORTE · HOY · CHECKLIST.

## Uso

Abrir `index.html` en el navegador, o servirlo:

```powershell
python -m http.server 8000
```

Luego visitar http://localhost:8000

## Pendiente de investigación (antes de cerrar)

Verificar con fuentes oficiales vigentes para sep/oct 2026: tarifas y pases de transporte
(Barcelona / París / Madrid), acceso gratuito al Prado, horarios del Louvre,
transporte Choisy-le-Roi → Orly a primera hora, opciones Madrid → Segovia, supermercados
cercanos y el forecast real cuando falten pocos días. No inventar horarios ni precios.

## Créditos

- Mapas: © OpenStreetMap contributors.
- Imágenes: Wikimedia Commons (usar solo imágenes libres, sin watermark; guardar créditos).
