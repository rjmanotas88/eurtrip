# EUROTRIP 2026 — Especificación para construir la web

## 1. Objetivo

Crear una página web responsive para uso de un grupo de **7 viajeros** durante un viaje por **Barcelona, París y Madrid**, del **22 de septiembre al 2 de octubre de 2026**.

La página debe funcionar como una **guía operativa de viaje**: fácil de consultar desde el celular, visualmente limpia y útil durante los traslados. No debe parecer una agencia de viajes, una presentación corporativa ni una página sentimental/familiar.

Debe priorizar:

1. Pasaporte y documentos.
2. Itinerario turístico.
3. Alojamientos.
4. Traslados.
5. Movilidad urbana.
6. Equipaje.
7. Alimentación.
8. Seguridad.
9. Clima y qué llevar.
10. Seguro de viaje.
11. Compras.
12. Checklist antes de cada traslado.

---

# 2. Dirección visual

## Estilo

**Swiss / International Typographic Style.**

Características:

- Fondo blanco.
- Rojo intenso como color de acento.
- Negro/gris oscuro para texto.
- Tipografía sans-serif limpia.
- Mucho espacio en blanco.
- Grid editorial fuerte.
- Títulos grandes.
- Números grandes para fechas y ciudades.
- Líneas finas rojas/negras como divisores.
- Evitar gradientes.
- Evitar sombras excesivas.
- Evitar tarjetas redondeadas estilo SaaS.
- Evitar emojis como elemento principal.
- Puede utilizar iconografía lineal mínima.
- Fotografías grandes de arquitectura/ciudad.
- Diseño mobile-first.

Paleta sugerida:

```css
--red: #E30613;
--black: #111111;
--gray: #6B6B6B;
--light-gray: #F3F3F1;
--white: #FFFFFF;

Tipografía sugerida:

font-family: Inter, Helvetica Neue, Helvetica, Arial, sans-serif;

La página debe sentirse como una mezcla entre:

señalética ferroviaria europea,
revista de arquitectura,
guía urbana,
diseño editorial suizo.
3. Portada

Hero minimalista.

Texto principal:

EUROTRIP
2026

Subtítulo:

BARCELONA
PARIS
MADRID

Fechas:

22 SEP — 02 OCT 2026

Información secundaria:

7 VIAJEROS
3 CIUDADES
2 PAÍSES

Incluir una línea/ruta gráfica:

BOG / CTG → AMS → BCN → PAR → MAD → AMS → BOG

Utilizar una fotografía urbana/arquitectónica potente de Europa o una composición con Barcelona, París y Madrid.

4. Navegación

Menú sticky superior o menú móvil:

Inicio
Pasaporte
Itinerario
Alojamientos
Traslados
Movilidad
Equipaje
Comida
Seguridad
Clima
Seguro
Compras

Agregar botón:

CHECKLIST

que lleve directamente al checklist operativo.

5. PASAPORTE — máxima prioridad

Esta debe ser la primera sección después del hero.

Diseño con fondo rojo o tipografía roja muy grande.

Mensaje:

PASAPORTE

SIEMPRE CONTIGO.

Se puede olvidar casi cualquier cosa.
El pasaporte no.

7 PERSONAS = 7 PASAPORTES

Reglas:

Nunca guardar el pasaporte en la maleta facturada.
No dejarlo en taxis, restaurantes o bolsillos externos.
Revisarlo antes de abandonar cada Airbnb.
Revisarlo antes de subir a trenes y vuelos.
Mantener copia digital segura del documento.
No mostrar números de pasaporte en esta web.

Crear un pequeño componente repetible:

ANTES DE SALIR
7 personas
7 pasaportes
6. VIAJEROS

No mostrar fechas de nacimiento ni números de pasaporte.

Tabla/lista:

Viajero	Salida	Cabina 10 kg	Bodega 23 kg	Artículo personal
Wadeth de la Ossa	Cartagena	Sí	Sí	Sí
Maria Osio	Cartagena	Sí	No	Sí
Mario Lambraño	Cartagena	Sí	No	Sí
Mabel de la Ossa	Cartagena	Sí	No	Sí
Vanessa Lambraño	Bogotá	Sí	Sí	Sí
Roberth Manotas	Bogotá	Sí	No	Sí
Melisa	Por confirmar	Sí	No	Sí

Nota: si posteriormente se confirma ciudad de salida de Melisa, dejar el dato editable desde un objeto JSON/JS central.

Resumen:

7 viajeros
7 maletas de cabina
2 maletas de 23 kg
7 artículos personales

Las dos maletas de 23 kg deben viajar deliberadamente livianas para dejar espacio para compras del grupo.

7. VUELO DE IDA

Crear una visualización de ruta vertical.

Martes 22 de septiembre
Bogotá
15:15
BOG — Bogotá El Dorado
KLM KL749
Boeing 787-9
Economy

El vuelo hace una parada de aproximadamente 1 h 20 min en Cartagena.

Mostrarlo visualmente:

BOGOTÁ
↓
CARTAGENA
Aquí se incorpora parte del grupo.
↓
ÁMSTERDAM
↓
BARCELONA

La idea del texto:

Los viajeros que salen desde Bogotá comienzan el viaje en BOG.
En Cartagena se incorpora el grupo que sale desde CTG.
Todos continúan juntos hacia Ámsterdam.
Ámsterdam

Llegada:

10:45 +1
AMS — Schiphol

Conexión:

1 h 35 min

Segundo vuelo:

12:20
AMS → BCN
HV5135
Operado por Transavia
Boeing 737-800

Llegada:

14:30
Barcelona El Prat

Añadir una nota operativa sobre migración Schengen en Ámsterdam y seguir siempre señalización de conexiones.

8. ITINERARIO TURÍSTICO

Debe ser una sección muy visual, organizada por día.

Usar etiquetas:

PRIORIDAD
OPCIONAL
SI HAY ENERGÍA
PLAN NOCHE
COMPRAS

No presentar todos los sitios como obligación.

BARCELONA
MIÉ 23 SEP

Llegada aproximadamente 14:30.

Traslado al alojamiento.
Check-in disponible después de las 17:00.
Primer recorrido abierto según energía.
Plaça Catalunya.
El Corte Inglés Plaça Catalunya para quien quiera realizar compras.
Passeig de Gràcia / centro como alternativa.
Cena sencilla.

Etiqueta: DÍA DE LLEGADA

JUE 24 SEP — BARCELONA A PIE

Priorizar caminar.

Ruta sugerida:

Sagrada Família.
Passeig de Gràcia.
Casa Batlló.
La Pedrera / Casa Milà exterior.
Plaça Catalunya.
La Rambla.
Barrio Gótico.
Catedral de Barcelona.
Port Vell.
Barceloneta si queda tiempo/energía.

La ruta debe poder abrirse en OpenStreetMap.

VIE 25 SEP

Día flexible.

Opciones:

Montjuïc.
Plaça Espanya.
Miradores.
Camp Nou / zona FC Barcelona.
Parque Güell si no se ha visitado.
Barceloneta.
Tiempo libre.

No mencionar graduación ni máster en la página.

SÁB 26 SEP

Mañana abierta para:

Parque Güell.
Barceloneta.
compras.
pendientes.
paseo tranquilo.

Después preparar equipaje y traslado a Barcelona Sants.

9. BARCELONA → PARÍS EN TREN
Sábado 26 septiembre
BARCELONA SANTS
16:24

TGV INOUI 9706

PARIS GARE DE LYON
23:19

Duración
6 h 55 min

Recomendación para un grupo de 7:

Llegar a Barcelona Sants con mínimo 45–60 minutos de anticipación.
Todos deben tener su billete accesible en el celular o impreso.
Llevar documento de identidad/pasaporte.
Etiquetar las maletas.
No separarse innecesariamente dentro de la estación.
Identificar coche y asiento antes de llegar al andén.

Información de equipaje del billete TGV:

Máximo por persona:
2 maletas de hasta 90 × 70 × 50 cm
+
1 equipaje de mano de hasta 40 × 30 × 15 cm

Crear bloque:

ANTES DE SUBIR AL TREN

7 personas
7 pasaportes
7 cabinas
2 maletas grandes
7 artículos personales
10. PARÍS
SÁB 26 SEP — NOCHE

Llegada Gare de Lyon 23:19.

Traslado al Airbnb.
Check-in aproximadamente medianoche.
Si el grupo se siente bien: salida opcional a Torre Eiffel.
Si hay cansancio: dormir y mover Torre Eiffel al domingo.

Etiqueta:

SI HAY ENERGÍA
TORRE EIFFEL DE NOCHE
DOM 27 SEP — PARÍS CLÁSICO

Día completo.

Ruta por proximidad, evitando desplazamientos innecesarios:

Torre Eiffel / Trocadéro si no se hizo el sábado.
Arco del Triunfo.
Champs-Élysées.
Place de la Concorde.
Jardin des Tuileries.
Louvre por fuera.
Île de la Cité.
Notre-Dame.
Barrio Latino.
Sacré-Cœur.
Montmartre.

Si el día queda demasiado cargado, Sacré-Cœur/Montmartre puede pasar al lunes por la noche.

LUN 28 SEP
Mañana / mediodía

Museo del Louvre por dentro.

Prioridad alta.

No intentar ver todo el museo.

Crear una recomendación breve:

El Louvre no se "termina".
Elegir obras/zonas prioritarias y mantener energía para el resto del día.
Tarde/noche

Plan flexible:

Montmartre + Sacré-Cœur.
paseo por el Sena.
Torre Eiffel iluminada.
cena/paseo nocturno.
MAR 29 SEP — ARQUITECTURA MODERNA
Mañana

LA DÉFENSE

Prioridad personal.

Visitar:

Grande Arche.
Esplanade de La Défense.
CNIT.
skyline corporativo.
eje visual hacia Arc de Triomphe.

Dedicar aproximadamente 2–3 horas.

Después:

almuerzo.
atracciones pendientes.
regreso temprano al Airbnb.
preparar equipaje para el vuelo del día siguiente.
11. ALOJAMIENTOS

Diseñar tres fichas grandes con mapa OpenStreetMap, dirección, fechas, host, check-in/out y movilidad.

BARCELONA
L'Hospitalet de Llobregat
23–26 SEP

Carrer Rafael Campalans, 175
08903 L'Hospitalet de Llobregat
Barcelona, España

Host: Alex
Check-in: después de 17:00
Check-out: antes de 11:00
Tipo: Airbnb / Apartamento

Investigar y mostrar:

estación de metro más cercana.
línea.
tiempo aproximado a Plaça Catalunya.
supermercado cercano.
farmacia cercana.
tiempo aproximado a Barcelona Sants.
PARÍS
Choisy-le-Roi
26–30 SEP

65 Avenue d'Alfortville
94600 Choisy-le-Roi
France

Hosts: Emilie & Julien
Check-in: después de 16:00
Check-out: antes de 11:00
Tipo: Airbnb / Apartamento

Investigar:

RER/estación más cercana.
tiempo aproximado al centro.
tiempo aproximado a Torre Eiffel.
supermercado.
boulangerie.
farmacia.
alternativa Uber/taxi por la noche.
tiempo hacia Orly.
MADRID
30 SEP – 02 OCT

Calle Verdaguer y García, 51
28027 Madrid
España

Host: Carlos
Check-in: después de 15:00
Check-out: antes de 11:00
Tipo: Airbnb / Apartamento

Investigar:

Metro cercano.
tiempo a Sol/Gran Vía.
supermercado.
farmacia.
transporte hacia aeropuerto.

Usar OpenStreetMap/Leaflet para mapas.

No usar Google Maps embebido.

12. PARÍS → MADRID
Miércoles 30 septiembre
IBERIA IB0584

PARIS ORLY (ORY)
07:25

MADRID (MAD)
09:30

Llegada:
Terminal 4

El grupo completo viaja junto.

El billete conocido indica tarifa sin equipaje facturado para ese pasajero; por tanto, la web debe recordar que cada viajero debe respetar exactamente su franquicia contratada.

Recomendación operativa

Como son 7 personas y el vuelo sale 07:25:

preparar todo el equipaje la noche anterior.
pesar maletas.
dejar ropa del día lista.
coordinar transporte a Orly previamente.
evaluar taxi/Uber/van frente a transporte público por la hora.
llegar con margen amplio.
evitar depender de combinaciones complejas de RER/metro de madrugada.

Crear un bloque especial:

NOCHE ANTES DE ORLY

PASAPORTES ✓
CHECK-IN ✓
EQUIPAJE PESADO ✓
TRANSPORTE RESERVADO ✓
ALARMAS ✓
13. MADRID
MIÉ 30 SEP — MADRID FULL

Después de dejar equipaje/check-in según disponibilidad:

Ruta:

Puerta del Sol.
Plaza Mayor.
Mercado de San Miguel.
Palacio Real.
Plaza de Oriente.
Gran Vía.
Museo del Prado.

Para el Prado, verificar en la web oficial las condiciones vigentes de acceso gratuito alrededor de las 17:00 antes de mostrarlo como dato definitivo.

Etiqueta:

DÍA INTENSO
CENTRO HISTÓRICO + PRADO
JUE 01 OCT — SEGOVIA

Excursión de día.

Prioridades:

Acueducto de Segovia.
casco histórico.
Catedral.
Alcázar de Segovia.
almuerzo local.
regreso a Madrid.
Gran Vía / compras finales si queda energía.

Investigar la mejor alternativa práctica desde Madrid para 7 personas:

tren de alta velocidad + conexión local,
bus directo,
comparar tiempos y facilidad.

Priorizar simplicidad logística.

VIE 02 OCT

Regreso.

No programar turismo.

14. MOVILIDAD

Filosofía general:

DÍA
CAMINAR + METRO / RER

NOCHE / CANSANCIO / EQUIPAJE
UBER / TAXI

Como son 7 personas:

Antes de comprar 7 billetes individuales,
comparar el precio con 2 Uber/taxis.
Barcelona
caminar como prioridad.
Metro/TMB para distancias mayores.
evaluar títulos multiviaje/pases vigentes en 2026.
investigar cuál conviene según itinerario real.
Uber/taxi para regreso tarde.
París
Metro + RER.
el alojamiento está en Choisy-le-Roi, por lo que la zonificación/importes deben verificarse.
investigar pases diarios vigentes en 2026.
no recomendar automáticamente un pase: calcular si se amortiza.
Uber/taxi de noche o cuando el grupo esté cansado.
Madrid
caminar + Metro.
investigar pase turístico vs billetes/multiviaje.
Uber/taxi por la noche.

Incluir estación más cercana y ruta básica desde cada Airbnb.

15. EQUIPAJE

Diseño muy visual.

7 × CABINA 10 KG
2 × BODEGA 23 KG
7 × ARTÍCULO PERSONAL
Regla principal
10 KG = 10 KG

NO CONFIARSE SOLO DEL TAMAÑO.

Las aerolíneas pueden pesar el equipaje de cabina.

Especial atención en París/Madrid.

Recomendaciones:

llevar báscula portátil de equipaje.
pesar todo la noche anterior a cada vuelo.
verificar límites exactos de cada tarifa.
no asumir que una maleta aceptada en un trayecto será automáticamente aceptada en otro.
no meter pasaporte/documentos esenciales en bodega.
Compras

Solo hay 2 maletas de 23 kg.

Estrategia:

SALIR LIVIANOS.
VOLVER CON COMPRAS.

Las dos maletas grandes funcionan como capacidad compartida del grupo.

Antes del regreso:

redistribuir peso.
pesar las 7 cabinas.
pesar las 2 maletas grandes.
respetar límites individuales de cada reserva.
16. COMIDA — VIAJE BUDGET

La filosofía del grupo:

DESAYUNO EN CASA
ALMUERZO DURANTE EL RECORRIDO
NOCHE FLEXIBLE

Los Airbnb permiten controlar el presupuesto.

Mañana

Comprar en supermercado:

huevos.
pan.
café.
fruta.
yogurt.
leche.
cereal.
jamón/queso.
agua.

Desayunar bien antes de salir.

Durante el día
buscar menú del día / formule / bocadillos / tapas.
evitar sentarse en restaurantes turísticos en cada comida.
usar panaderías y mercados.
llevar agua.
Noche

Según cansancio:

snack.
supermercado.
cocinar algo sencillo.
takeaway.
restaurante solo cuando realmente valga la pena.

Crear bloque:

NO TODO TIENE QUE SER RESTAURANTE.

Investigar supermercados cercanos a cada Airbnb.

17. COMPRAS
Barcelona

Prioridad inicial:

El Corte Inglés — Plaça Catalunya

Momento:

miércoles 23 si hay energía,
o integrado con recorrido del centro.

El grupo puede dividirse:

quienes quieran comprar.
quienes quieran caminar por Plaça Catalunya / Portal de l'Àngel.
París

No reservar bloque específico de compras.

Madrid

Gran Vía / Callao

Compras finales antes del regreso.

Recordatorio:

ANTES DE COMPRAR:
¿EN QUÉ MALETA VA A REGRESAR?
18. CALZADO

Sección destacada.

TENIS.
BUENA AMORTIGUACIÓN.
YA USADOS.

No estrenar zapatos durante el viaje.

Esperar jornadas largas caminando.

Especialmente:

Barcelona a pie.
París.
Louvre.
Madrid.
Segovia.

Recomendar:

tenis tipo walking/running.
buena amortiguación.
suela cómoda.
preferiblemente dos pares utilizables si el equipaje lo permite.
medias cómodas.
19. CLIMA Y QUÉ LLEVAR

No mostrar pronóstico futuro como si fuera seguro hasta estar cerca de las fechas.

Mostrar clima típico de temporada y actualizar con forecast real cuando falten pocos días.

Barcelona

Finales de septiembre:

templado.
posibilidad de días cálidos.
noches más frescas.
posibilidad de lluvia.

Rango histórico orientativo:

17–25 °C
París

Finales de septiembre:

más fresco.
variable.
posible lluvia.
mañanas/noches frescas.

Orientativo:

11–20 °C
Madrid

Finales de septiembre/inicios de octubre:

días agradables.
noches más frescas.
normalmente más seco que París.

Orientativo:

12–24 °C
Segovia

Mayor altitud.

Puede ser claramente más fría:

8–20 °C aprox.
Estrategia de ropa
CAPAS
camiseta.
suéter/buzo fino.
chaqueta ligera.
preferiblemente resistente a lluvia/viento.
pantalón largo.
paraguas compacto.
tenis cómodos.

No recomendar abrigo pesado de invierno como requisito general.

20. SEGURIDAD Y CARTERISTAS

Crear sección muy visible, sin alarmismo.

Barcelona y París requieren especial atención en zonas turísticas y transporte público.

Reglas:

celular no visible innecesariamente.
no guardar billetera en bolsillo trasero.
bolsos cerrados y hacia delante en zonas congestionadas.
no dejar teléfonos sobre mesas exteriores.
cuidado en metro, estaciones y atracciones.
ignorar distracciones sospechosas, peticiones de firmas, pulseras, etc.
repartir tarjetas/dinero entre adultos.
mantener copia digital de documentos.
pasaporte siempre controlado.
si el grupo se divide, establecer punto de encuentro.

Bloque:

NO ES MIEDO.
ES ATENCIÓN.

Agregar número europeo de emergencias:

112
21. SEGURO DE VIAJE

Mensaje principal:

TODOS DEBEN VIAJAR CON
ASISTENCIA MÉDICA INTERNACIONAL ACTIVA.

Estado interno actual:

Viajero	Seguro	Estado
Mario	MOK	Confirmado
Mabel	MOK	Confirmado
Roberth	Colmédica	Confirmado
Vanessa	Colmédica	Confirmado
Maria	AXA	Por confirmar
Wadeth	Pendiente	Pendiente
Melisa	Pendiente	Pendiente

No mostrar números de póliza públicamente.

Permitir completar después:

aseguradora.
teléfono de asistencia.
número de póliza, solo si se decide que la web será privada.
22. CHECKLIST OPERATIVO

Crear una sección final muy grande y también accesible desde botón sticky.

Antes de salir de Colombia
 Pasaporte.
 Seguro de viaje.
 Billetes / reservas.
 Tarjetas.
 Algo de efectivo.
 eSIM/roaming.
 Medicamentos personales.
 Adaptador europeo.
 Tenis cómodos.
 Chaqueta ligera.
 Paraguas compacto.
 Báscula de equipaje.
Antes de cambiar de ciudad
7 PERSONAS
7 PASAPORTES
7 CABINAS
2 MALETAS GRANDES
7 ARTÍCULOS PERSONALES

Checklist:

 Contar personas.
 Pasaportes.
 Celulares.
 Billeteras.
 Cargadores.
 Maletas.
 Revisar baños/habitaciones.
 Revisar cajones.
 Revisar enchufes.
 Revisar debajo de camas.
 Llaves del Airbnb.
 Billetes.
 Transporte confirmado.
23. MAPAS

Usar OpenStreetMap + Leaflet.

No usar Google Maps.

Crear mapas para:

Ruta general:
Barcelona → París → Madrid.
Barcelona:
Airbnb.
Sagrada Família.
Passeig de Gràcia.
Barrio Gótico.
Montjuïc.
Barceloneta.
Barcelona Sants.
París:
Gare de Lyon.
Airbnb Choisy-le-Roi.
Torre Eiffel.
Louvre.
Notre-Dame.
Montmartre.
La Défense.
Orly.
Madrid:
Airbnb.
Puerta del Sol.
Plaza Mayor.
Palacio Real.
Prado.
Gran Vía.
Segovia:
Acueducto.
Catedral.
Alcázar.

Los mapas deben tener botones para abrir OpenStreetMap en una nueva pestaña.

24. IMÁGENES

Usar imágenes de Wikimedia Commons.

Priorizar imágenes libres y de buena resolución.

Necesitamos aproximadamente:

Barcelona
skyline / Sagrada Família.
Barrio Gótico.
Casa Batlló.
Montjuïc.
Barceloneta.
París
Torre Eiffel nocturna.
Louvre.
Notre-Dame.
Sacré-Cœur / Montmartre.
Grande Arche / La Défense.
Madrid
Plaza Mayor.
Palacio Real.
Gran Vía.
Museo del Prado.
Segovia
Acueducto.
Alcázar.

No usar imágenes con watermark.

Guardar créditos en un pequeño footer o metadata.

No llenar la página de fotos: mantener el estilo editorial.

25. ARQUITECTURA TÉCNICA

Crear proyecto simple:

/eurotrip
  index.html
  styles.css
  app.js
  /assets
    /images
  README.md

Preferir HTML/CSS/JS vanilla para máxima portabilidad.

Leaflet puede cargarse vía CDN.

La información variable debe estar centralizada en objetos JS, por ejemplo:

const trip = {
  travelers: [],
  stays: [],
  flights: [],
  transfers: [],
  itinerary: []
}

Evitar repetir información hard-coded en múltiples partes del DOM.

26. RESPONSIVE

La web será consultada principalmente desde teléfonos.

Breakpoints sugeridos:

mobile: < 768px
tablet: 768–1100px
desktop: > 1100px

En móvil:

una columna.
tablas transformadas en cards cuando sea necesario.
menú compacto.
botones grandes.
direcciones copiables.
teléfonos clicables.
mapas con altura razonable.
checklist táctil.
27. FUNCIONALIDADES DESEADAS

Implementar:

1. Navegación por sección

Scroll suave.

2. Checklist interactivo

Checkboxes persistentes mediante localStorage.

Botón:

RESET CHECKLIST
3. Copiar dirección

Botón junto a cada Airbnb:

COPIAR DIRECCIÓN
4. Abrir mapa
VER EN OPENSTREETMAP
5. Modo itinerario

Cada día debe tener una tarjeta plegable/accordion.

6. Estado de reservas

Soportar etiquetas:

CONFIRMADO
PENDIENTE
OPCIONAL
7. Mobile sticky action

En celular:

PASAPORTE | HOY | CHECKLIST
28. INVESTIGACIÓN A REALIZAR ANTES DE CERRAR LA WEB

Verificar con fuentes oficiales y vigentes para septiembre/octubre de 2026:

estaciones de Metro/RER cercanas a cada alojamiento.
tarifas/pases de transporte Barcelona.
tarifas/pases París / Île-de-France.
tarifas/pases Madrid.
acceso gratuito Museo del Prado.
horarios Louvre.
transporte Choisy-le-Roi → Orly a primera hora.
opciones Madrid → Segovia.
horarios/condiciones Torre Eiffel si se recomienda subir.
supermercados cercanos.
forecast meteorológico únicamente cuando falten pocos días.

No inventar horarios ni precios.

Agregar links oficiales en una sección discreta de recursos.

29. TONO DE LA PÁGINA

Directo.

Ejemplos:

PASAPORTE.
SIEMPRE CONTIGO.
10 KG SON 10 KG.
PESA LA MALETA.
CAMINAR DE DÍA.
UBER CUANDO EL CUERPO LO PIDA.
DESAYUNO EN CASA.
PARÍS AFUERA.
NO TODO ES OBLIGATORIO.
DISFRUTAR TAMBIÉN ES PARAR.

Evitar:

frases inspiracionales.
lenguaje sentimental.
"Familia Manotas".
exceso de emojis.
tono de agencia turística.
textos largos sin jerarquía.
30. RESULTADO ESPERADO

La página debe funcionar simultáneamente como:

guía del viaje;
presentación visual para el grupo;
centro de información logística;
checklist operativo;
referencia rápida desde el celular.

El resultado debe sentirse premium en diseño, budget en filosofía de viaje y extremadamente práctico en ejecución.
"""