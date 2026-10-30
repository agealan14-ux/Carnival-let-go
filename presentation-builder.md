---
name: presentation-builder
description: Activar ante cualquier pedido de presentación, diapositivas o deck web (HTML, CSS y JS con reveal.js). Decide el estilo según tema y audiencia, fija tamaño 100% y navegación con mouse, y guía estructura, animaciones, transiciones e interactividad.
---

# Presentaciones HTML (presentation-builder)

Una sola skill con 6 partes. Seguir este orden: 1 → 2 → 3 → 4 → 5 → 6. La Parte 5 solo si el pedido la necesita.

- Los valores de estilo de la Parte 1 son recomendaciones de diseño.
- El resto se basa en la documentación de reveal.js, MDN, GSAP y Anime.js (ver Fuentes).
- **Prioridad:** pedido explícito del usuario > reglas de este archivo.

---

# PARTE 1. Contexto y decisión de diseño

Decide el **qué** y el **por qué** antes de escribir código.

## 1.1 Cuándo preguntar y cuándo decidir
- Si tema y audiencia están claros: **no preguntar**. Decidir y declarar en una línea las decisiones tomadas (estilo, paleta, cantidad de slides).
- Si falta algo que cambia el diseño: **máximo 3 preguntas** en un solo mensaje (audiencia, formalidad, duración).
- Si el usuario no responde, asumir valores razonables y avisar cuáles se asumieron.

## 1.2 Brief de diseño (formato fijo)
Completarlo antes de codificar:

```text
Tema:
Propósito: (informar / enseñar / persuadir / vender)
Audiencia: (edad, nivel, contexto: aula, reunión, feria, online)
Formalidad: (formal / neutra / informal)
Tono: (3 palabras)
Slides: (cantidad según duración)
Paleta: (fondo, texto, acento, apoyo)
Tipografías: (títulos, cuerpo, código si aplica)
Movimiento: (bajo / moderado / alto)
Transición global: (fade / slide / zoom / none / convex / concave)
Imágenes: (tipo y tratamiento)
Idioma:
```

## 1.3 Cómo elegir el estilo
1. **Dominio del tema:** define la familia visual (tabla 1.4).
2. **Audiencia y edad:** más joven = más color y movimiento.
3. **Formalidad:** gobierna el movimiento. Formal → bajo. Neutra → moderado. Informal o creativa → alto pero controlado.
4. **Contexto de proyección:** proyector o aula luminosa = fondo claro y contraste alto. Pantalla propia u online = se puede usar fondo oscuro.
5. Si el tema no está en la tabla, derivar el estilo desde tono y audiencia. No copiar la fila más parecida.

## 1.4 Matriz de estilos por tipo de contenido

| Tipo de contenido | Tono y paleta | Tipografía | Movimiento y transición |
| :--- | :--- | :--- | :--- |
| **Historia, humanidades, literatura** | Sobrio y cálido. Fondo crema (#F5EFE0), texto marrón oscuro (#2B2118), acento borgoña (#7A2E2E) o dorado apagado (#B08D57). Imágenes de época, mapas y grabados en sepia o duotono. | Serif: Playfair Display (títulos), Lora o Merriweather (cuerpo). | Bajo. Fades lentos de 600-800 ms, transición `fade`. Sin rebotes. |
| **Ciencia y educación (secundaria, universidad)** | Claro y preciso. Fondo blanco o gris claro, azul profundo (#1E3A5F), acento turquesa (#14B8A6). | Sans legible: Inter o Source Sans 3. | Moderado. Aparición paso a paso para explicar procesos. Transición `slide`. |
| **Tecnología, programación, startups tech** | Moderno y de alto contraste. Fondo oscuro (#0F172A), acentos cian (#38BDF8) y violeta (#818CF8). | Sans: Inter u Outfit. Código: JetBrains Mono. | Moderado a alto. Stagger en listas, Auto-Animate en código. Transición `slide` o `zoom`. |
| **Negocios, corporativo, finanzas** | Limpio y profesional. Blanco y gris, azul marino, un solo acento. | Sans neutra: Inter o Roboto. | Mínimo. Fades de 300 ms, transición `fade` o `none`. |
| **Marketing, producto, creatividad** | Expresivo. Máximo 3 colores vibrantes más neutros. | Display con carácter (títulos) y sans (cuerpo). | Alto pero controlado. Transición `zoom` o `slide`. |
| **Infantil y primaria** | Lúdico. Colores cálidos y brillantes, formas redondeadas. | Redondeadas: Nunito o Fredoka. Textos muy cortos y grandes. | Animado. Rebote suave permitido. Transición `slide`. |
| **Arte, cultura, diseño** | Editorial. Mucho espacio en blanco, imágenes a pantalla completa, paleta neutra con un acento. | Serif display más sans. | Bajo a moderado, lento y elegante. Transición `fade`. |
| **Salud y ciencias de la vida** | Confiable y calmo. Blancos con verdes y azules suaves. Rojo intenso solo para alertas. | Sans limpia y muy legible. | Mínimo. Transición `fade`. |
| **Naturaleza y ambiente** | Orgánico. Verdes tierra y azules, fotos a pantalla completa. | Serif suave o sans humanista. | Lento y fluido. Transición `fade` o `slide` suave. |

## 1.5 Antipatrones (NUNCA hacer)
- Estilo urbano, neón, glitch, grafiti o tipografías de calle en temas históricos, formales o institucionales.
- Animaciones rápidas, rebotes o efectos llamativos en contenido formal o serio.
- Más de **2 familias tipográficas** (3 si se suma una monoespaciada para código).
- Más de **3 o 4 colores principales** más neutros. Proporción 60% base, 30% secundario, 10% acento.
- Texto sin contraste suficiente (mínimo 4.5:1 en texto normal).
- Un efecto distinto en cada elemento. Elegir pocos efectos y repetirlos en todo el deck.
- Mezclar estilos de dominios distintos en una misma presentación.
- Párrafos largos en una slide. Una idea por slide, máximo 40 palabras.
- Imágenes de baja calidad, estiradas o sin relación con el tema.
- Emojis como decoración en contenido formal.

## 1.6 Narrativa y cantidad de slides
- Estimar **1 a 2 minutos por slide**. Sin dato de duración, apuntar a 8-12 slides.
- Arco: portada, contexto o agenda, desarrollo (una idea por slide), conclusión, cierre.
- El título de cada slide afirma la idea, no solo nombra el tema.
- Coherencia total: mismos márgenes, mismo estilo de títulos, misma transición global.
- Evitar slides verticales (anidadas) salvo pedido del usuario.

## 1.7 Cómo se traduce el brief a las partes siguientes
- **Paleta y tipografías** → variables `--r-*` (Parte 3.6).
- **Movimiento** → variables `--motion-*` (Parte 4.8):
  - Bajo: 500-800 ms, `ease-out`, solo fade.
  - Moderado: 300-500 ms, fade más desplazamiento corto.
  - Alto: 150-400 ms, stagger y escalas.
- **Transición global** → opción `transition` de reveal.js (Parte 4.2).
- **Interactividad** → por defecto, eventos de reveal.js (Parte 5). Las técnicas de scroll solo si el usuario pide contenido con scroll.

---

# PARTE 2. Reglas obligatorias: tamaño y navegación con mouse

Aplican siempre, salvo que el usuario pida otra cosa.

## 2.1 Diapositivas al 100% de ancho y 100vh
Cada slide ocupa toda la ventana, sin scroll de página ni franjas vacías. reveal.js documenta `disableLayout: true` (BYOL, "Bring Your Own Layout") para esto: desactiva el escalado y centrado integrados, y las slides cubren el 100% del ancho y alto disponibles. El estilo responsivo queda a cargo del CSS.

```javascript
Reveal.initialize({
  disableLayout: true,
  hash: true
});
```

```css
html, body {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.reveal,
.reveal .slides {
  width: 100%;
  height: 100vh;
}

.reveal .slides > section,
.reveal .slides > section > section {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 4vh 6vw;
}

/* Tipografía relativa al ancho de pantalla (sin escalado automático) */
:root {
  --r-main-font-size: clamp(20px, 2.2vw, 44px);
}
```

- Dimensionar texto e imágenes con `vw`, `vh`, `rem` o `%`. No usar píxeles fijos grandes.
- Imágenes con `max-width: 100%` y `max-height` en `vh`.
- Alternativa documentada si `disableLayout` da problemas: `width: '100%', height: '100%', margin: 0, minScale: 1, maxScale: 1` en `Reveal.initialize`.
- Con `disableLayout` no hay centrado vertical automático. Para centrar, envolver el contenido en un `div` con `min-height: 100%; display: flex; flex-direction: column; justify-content: center`.

## 2.2 Navegación con mouse
- **Click izquierdo** → avanzar: `Reveal.next()`.
- **Click derecho** → retroceder: `Reveal.prev()`, bloqueando el menú contextual del navegador.

```javascript
const IGNORE_NAV = 'a, button, input, textarea, select, video, audio, iframe, [data-no-nav]';

document.addEventListener('click', (e) => {
  if (e.target.closest(IGNORE_NAV)) return;
  if (window.getSelection().toString()) return; // no avanzar si hay texto seleccionado
  Reveal.next();
});

document.addEventListener('contextmenu', (e) => {
  if (e.target.closest(IGNORE_NAV)) return;
  e.preventDefault();
  Reveal.prev();
});
```

- Registrar los listeners **una sola vez**, después de `Reveal.initialize()`.
- Mantener activa la navegación por teclado de reveal.js.
- `next()` y `prev()` recorren los fragmentos antes de cambiar de slide. Es el comportamiento esperado.
- Elementos interactivos propios (botones, demos): marcarlos con `data-no-nav`.

---

# PARTE 3. Estructura del deck (reveal.js)

## 3.1 Arquitectura del proyecto
**Modular (recomendada para producción):**
```text
proyecto-presentacion/
├── index.html
├── css/custom-theme.css
├── js/main.js
└── assets/images/
```
**HTML autocontenido:** un solo `index.html` con dependencias por CDN. Ideal para entregas rápidas, sin servidor ni build.

## 3.2 Anatomía del HTML
Estructura obligatoria: `.reveal` > `.slides` > `<section>`. Para slides verticales, anidar `<section>` dentro de un `<section>` padre.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título de la presentación</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/theme/black.css">
  <link rel="stylesheet" href="css/custom-theme.css"> <!-- siempre después del tema -->
</head>
<body>
  <div class="reveal">
    <div class="slides">
      <section>Slide 1</section>
      <section>Slide 2</section>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.js"></script>
  <!-- Aquí van librerías opcionales (Parte 4.7 y 5.5) -->
  <script src="js/main.js"></script>
</body>
</html>
```

## 3.3 Atributos `data-*` frecuentes
- `data-background-color`, `data-background-image`, `data-background-video`, `data-background-iframe`: fondos por slide.
- `data-visibility="hidden|uncounted"`: ocultar la slide o excluirla del conteo.
- `data-auto-animate`, `data-transition`: ver Parte 4.

## 3.4 `main.js` base
```javascript
Reveal.initialize({
  disableLayout: true,
  hash: true
});

// Ejecuta un handler al cargar y en cada cambio de slide
function onSlideEnter(handler) {
  Reveal.on('ready', (e) => handler(e.currentSlide));
  Reveal.on('slidechanged', (e) => handler(e.currentSlide));
}

// Navegación con mouse: ver Parte 2.2 (registrar aquí, una sola vez)
```

## 3.5 Resaltado de código (opcional)
Para código con colores, cargar el plugin e inicializarlo:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5/plugin/highlight/monokai.css">
<script src="https://cdn.jsdelivr.net/npm/reveal.js@5/plugin/highlight/highlight.js"></script>
```
```javascript
Reveal.initialize({ disableLayout: true, hash: true, plugins: [RevealHighlight] });
```
Sin el plugin, el bloque `<pre><code>` se muestra sin colores. Atributos útiles: `data-trim`, `data-noescape`, `data-line-numbers`.

## 3.6 Temas y design tokens
**Temas oficiales:** `black` (defecto), `white`, `league`, `beige`, `night`, `serif`, `simple`, `solarized`, `moon`, `dracula`, `sky`, `blood`. Se cambian reemplazando el CSS del tema.

**Tokens:** sobrescribir las variables CSS de reveal.js en `:root` en lugar de rehacer estilos. Los valores salen del brief (Parte 1.2).
```css
:root {
  --r-background-color: #0f172a;
  --r-main-font: 'Inter', sans-serif;
  --r-heading-font: 'Outfit', sans-serif;
  --r-main-color: #f8fafc;
  --r-heading-color: #38bdf8;
  --r-link-color: #818cf8;
  --r-selection-bg-color: #0284c7;
}
```
**Fuentes:** cargar desde Google Fonts con `<link>` y mantener una familia genérica de respaldo (`sans-serif`, `serif`).

## 3.7 Plantillas de slides
Cada plantilla es el mínimo recomendado. Mantener una sola idea por slide.

**Portada**
```html
<section>
  <h1>Título de la presentación</h1>
  <h3>Subtítulo breve</h3>
  <p><small>Por <strong>Autor</strong> | Fecha</small></p>
</section>
```

**Contenido con viñetas**
```html
<section>
  <h2>Puntos clave</h2>
  <ul>
    <li>Primer concepto.</li>
    <li>Segundo aspecto relevante.</li>
    <li>Conclusión.</li>
  </ul>
</section>
```

**Dos columnas** (`r-hstack` es un helper de layout de reveal.js)
```html
<section>
  <h2>Comparativa</h2>
  <div class="r-hstack" style="gap: 2rem; align-items: start;">
    <div style="flex: 1;"><h3>Opción A</h3><p>Descripción.</p></div>
    <div style="flex: 1;"><h3>Opción B</h3><p>Descripción.</p></div>
  </div>
</section>
```

**Cita**
```html
<section>
  <blockquote>&ldquo;Texto de la cita.&rdquo;</blockquote>
  <p><small>&mdash; Autor</small></p>
</section>
```

**Código**
```html
<section>
  <h2>Ejemplo</h2>
  <pre><code data-trim data-noescape class="language-js">
function saludar(nombre) {
  console.log(`Hola, ${nombre}`);
}
  </code></pre>
</section>
```

**Imagen**
```html
<section>
  <h2>Diagrama</h2>
  <img src="assets/diagrama.png" alt="Descripción del diagrama" style="max-width: 100%; max-height: 60vh;">
</section>
```

**Cierre**
```html
<section data-background-color="#1e293b">
  <h2>¡Gracias!</h2>
  <p>¿Preguntas o comentarios?</p>
</section>
```

## 3.8 Buenas prácticas
- Un solo `<h1>` (portada) y `<h2>` para títulos de sección.
- Máximo 40 palabras por slide. Una idea principal.
- CDN con versión fija (`@5`) para prototipos. Archivos locales para uso offline.
- `alt` descriptivo en todas las imágenes y contraste suficiente (WCAG).

---

# PARTE 4. Animaciones y transiciones

## 4.1 Guía de decisión

| Necesidad | Técnica | Nota |
| :--- | :--- | :--- |
| Cambio entre slides | **Transición global** (`transition`) | Opción nativa, sin código extra. |
| Mover o transformar elementos entre dos slides consecutivas | **Auto-Animate** | Atributos `data-*`, sin JS. |
| Mostrar elementos paso a paso en una slide | **Fragmentos** | Clase `fragment`. |
| Entradas, bucles y microinteracciones | **CSS animations** | GPU, declarativo. |
| Animación imperativa con control de estado | **Web Animations API** | Nativa, promesas. |
| Cambios de estado dentro de una slide | **View Transitions API** | Requiere fallback. |
| Secuencias complejas, stagger | **Anime.js** | Librería externa. |

## 4.2 Transiciones de reveal.js
Opción global `transition` (por defecto `slide`). Valores válidos: `none`, `fade`, `slide`, `convex`, `concave`, `zoom`. Se puede sobrescribir por slide:

```html
<section data-transition="zoom">...</section>
<section data-transition-speed="fast">...</section> <!-- default, fast o slow -->
<section data-transition="slide-in fade-out">...</section> <!-- entrada y salida distintas -->
```
Los fondos tienen su propia opción: `backgroundTransition` (global) y `data-background-transition` (por slide).

```javascript
Reveal.initialize({ disableLayout: true, hash: true, transition: 'fade' });
```

## 4.3 Fragmentos
Todo elemento con la clase `fragment` se revela paso a paso antes de pasar a la siguiente slide. Estilos por clase adicional:

- Entradas: `fade-in` (defecto), `fade-up`, `fade-down`, `fade-left`, `fade-right`, `grow`.
- Salidas y énfasis: `fade-out`, `semi-fade-out`, `shrink`, `strike`, `fade-in-then-out`, `current-visible`, `fade-in-then-semi-out`.
- Color: `highlight-red`, `highlight-green`, `highlight-blue` y sus variantes `highlight-current-*`.

```html
<p class="fragment fade-up">Aparece subiendo</p>
<p class="fragment" data-fragment-index="1">Aparece primero</p>
<p class="fragment" data-fragment-index="2">Aparece segundo</p>
```
**Fragmento personalizado:** definir `.fragment.nombre` y `.fragment.nombre.visible`, y agregar la clase `custom` para anular el fade por defecto.
```css
.fragment.blur { filter: blur(5px); }
.fragment.blur.visible { filter: none; }
```
```html
<p class="fragment custom blur">Texto que se enfoca</p>
```
**Fragmentos anidados:** envolver el mismo elemento en varios `span.fragment` para encadenar pasos.
**Eventos:** `fragmentshown` y `fragmenthidden` (`event.fragment` es el elemento).

## 4.4 Auto-Animate
Agregar `data-auto-animate` a **dos `<section>` consecutivas**. reveal.js anima los elementos coincidentes.
- **Coincidencia implícita:** mismo tipo de nodo y contenido de texto, o mismo `src` en imágenes y videos.
- **Coincidencia explícita:** `data-id="nombre"` en ambos elementos cuando el contenido difiere.

```html
<section data-auto-animate>
  <h1 data-id="title">Título</h1>
  <div data-id="box" style="width: 100px; height: 100px; background: #38bdf8;"></div>
</section>
<section data-auto-animate>
  <h1 data-id="title" style="color: #818cf8;">Título</h1>
  <div data-id="box" style="width: 300px; height: 100px; background: #818cf8;"></div>
</section>
```

| Atributo | Ámbito | Defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `data-auto-animate-easing` | slide | `ease` | Función de easing CSS. |
| `data-auto-animate-duration` | slide | `1.0` | Duración en segundos. |
| `data-auto-animate-delay` | elemento | `0` | Retardo en segundos (solo en elementos). |
| `data-auto-animate-unmatched` | slide | `true` | Con `false`, los elementos sin pareja aparecen sin fade. |
| `data-auto-animate-id` | slide | ausente | Agrupa slides que deben animarse entre sí. |
| `data-auto-animate-restart` | slide | ausente | Rompe la animación con la slide anterior. |

**Valores globales:** `autoAnimateEasing`, `autoAnimateDuration`, `autoAnimateUnmatched` en `Reveal.initialize`.
**Evento:** `Reveal.on('autoanimate', (event) => { ... })`.
**Atributos de estado (para CSS propio):** la slide recibe `data-auto-animate="pending"` y luego `"running"`. Cada elemento lleva `data-auto-animate-target`.
Para animar cambios en código, usar el mismo `data-id` en cada `<pre>` y `data-line-numbers`.

## 4.5 CSS animations
`@keyframes` más estas propiedades:
- `animation-name`, `animation-duration`, `animation-delay`.
- `animation-timing-function`: curva de aceleración.
- `animation-iteration-count` (`infinite` o número), `animation-direction` (`normal`, `reverse`, `alternate`, `alternate-reverse`).
- `animation-fill-mode` (`none`, `forwards`, `backwards`, `both`), `animation-play-state` (`running`, `paused`).
- `animation-composition` (`replace`, `add`, `accumulate`).

**Funciones de easing**
- Palabras clave: `ease`, `ease-in`, `ease-out`, `ease-in-out`, `linear`, `step-start`, `step-end`.
- Curva personalizada: `cubic-bezier(x1, y1, x2, y2)`.
- Pasos discretos: `steps(n, posición)` con `jump-start`, `jump-end`, `jump-none`, `jump-both`, `start` o `end`.
- Por tramos: `linear(0, 0.25 50%, 1)`.
- Se puede definir un easing distinto en cada keyframe.

Recomendación: animar solo `transform` y `opacity` para evitar recálculos de layout.

## 4.6 Web Animations API
```javascript
const animation = element.animate(
  [
    { opacity: 0, transform: 'translateY(20px)' },
    { opacity: 1, transform: 'translateY(0)' }
  ],
  { duration: 500, easing: 'ease-out', fill: 'forwards' }
);

animation.pause();
animation.play();
animation.reverse();
animation.finish();
animation.finished.then(() => element.classList.add('listo'));
```
- `KeyframeEffect` define fotogramas y opciones por separado: `new Animation(new KeyframeEffect(el, keyframes, options), document.timeline)`.
- `document.getAnimations()` y `element.getAnimations()` devuelven las animaciones activas.

## 4.7 View Transitions API y Anime.js

### View Transitions API
Captura el estado del DOM antes y después del cambio y anima entre ambos con pseudo-elementos:
`::view-transition` > `::view-transition-group(nombre)` > `::view-transition-image-pair(nombre)` > `::view-transition-old(nombre)` y `::view-transition-new(nombre)`.

```javascript
function updateWithTransition(updateDOM) {
  if (!document.startViewTransition) { updateDOM(); return; } // fallback obligatorio
  document.startViewTransition(() => updateDOM());
}
```
```css
.hero-img { view-transition-name: hero-img; }
::view-transition-old(hero-img) { animation: 300ms ease-out both fade-out; }
::view-transition-new(hero-img) { animation: 300ms ease-in both fade-in; }
```
Recomendación: usarla para cambios de estado **dentro de una slide** (reordenar, mostrar o ocultar elementos). Para cambiar de slide usar `transition` o Auto-Animate, porque reveal.js controla ese cambio.

### Anime.js (v4)
Cargar el bundle UMD y extraer las funciones del global `anime`:
```html
<script src="https://cdn.jsdelivr.net/npm/animejs/dist/bundles/anime.umd.min.js"></script>
<script>
  const { animate, stagger, createTimeline } = anime;
</script>
```
(Alternativa ES Module: `import { animate } from 'https://esm.sh/animejs';`)

```javascript
animate('.box', { x: [-50, 0], opacity: [0, 1], duration: 600, ease: 'outExpo' });

const tl = createTimeline();
tl.add('.title', { y: [-20, 0], opacity: [0, 1], duration: 500, ease: 'outQuad' })
  .add('.item', { x: [-30, 0], opacity: [0, 1], delay: stagger(100, { start: 200, from: 'first' }) }, '<+=100');
```
- `stagger(valor, { start, from })`: `from` acepta número, `'first'`, `'center'`, `'last'`, `'random'`.
- Posición en timelines: `'<'` (junto al anterior), `'+=100'`, `'-=50'`, tiempo absoluto o etiqueta.
- Usar `x` e `y` para desplazamientos (no mezclar con `translateX/Y`).

## 4.8 Sistema de movimiento
Definir las constantes una sola vez y reutilizarlas en todo el deck:
```css
:root {
  --motion-duration-fast: 200ms;
  --motion-duration-medium: 400ms;
  --motion-duration-slow: 800ms;
  --motion-ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --motion-ease-enter: cubic-bezier(0, 0, 0.2, 1);
  --motion-ease-exit: cubic-bezier(0.4, 0, 1, 1);
}
```
Ajustar los valores según el nivel de movimiento del brief (Parte 1.7).

**Accesibilidad (obligatoria):**
```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 4.9 Recetas

**A. Entrada fade, slide y scale (CSS)**
```css
@keyframes enterCard {
  from { opacity: 0; transform: translateY(20px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.card-enter {
  animation: enterCard var(--motion-duration-medium) var(--motion-ease-enter) both;
}
```
Para repetirla en cada visita a la slide, ver recetas de la Parte 5.

**B. Lista con stagger al entrar a la slide (Anime.js)**
```javascript
const { animate, stagger } = anime;

onSlideEnter((slide) => {
  const items = slide.querySelectorAll('ul.stagger > li');
  if (!items.length) return;
  animate(items, {
    opacity: [0, 1],
    x: [-30, 0],
    delay: stagger(80),
    duration: 400,
    ease: 'outCubic'
  });
});
```

**C. Revelado de título (Web Animations API)**
```javascript
onSlideEnter((slide) => {
  slide.querySelectorAll('.reveal-title').forEach((title) => {
    title.animate(
      [
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        { clipPath: 'inset(0 0 0 0)', opacity: 1 }
      ],
      { duration: 700, easing: 'cubic-bezier(0.77, 0, 0.175, 1)', fill: 'forwards' }
    );
  });
});
```

**D. Morph entre elementos (Auto-Animate)**
```html
<section data-auto-animate>
  <div data-id="badge" style="width: 50px; height: 50px; background: #0284c7; border-radius: 50%;"></div>
</section>
<section data-auto-animate>
  <div data-id="badge" style="width: 300px; height: 150px; background: #0369a1; border-radius: 12px;"></div>
</section>
```

---

# PARTE 5. Interactividad y disparadores

Define **cuándo** se activan las animaciones. El qué se anima está en la Parte 4. **Por defecto usar los eventos de reveal.js (5.2).** Las técnicas de scroll (5.3 a 5.5) solo sirven en contenido con scroll, porque el deck navega por diapositivas. reveal.js también ofrece un modo de scroll (ver Fuentes: Scroll View).

## 5.1 Guía de decisión

| Mecanismo | Úsalo para | Límite |
| :--- | :--- | :--- |
| **Eventos reveal.js** | Disparar efectos al cambiar de slide o fragmento. | Solo navegación discreta. |
| **Intersection Observer** | Animar elementos al entrar al viewport (contenido con scroll). | Disparo discreto, no sigue el progreso del scroll. |
| **CSS scroll-driven** | Animaciones ligadas al progreso del scroll. | Soporte de navegadores en evolución, requiere fallback. |
| **GSAP + ScrollTrigger** | Secuencias complejas, `scrub` y `pin` con scroll. | Requiere GSAP y el plugin. |

## 5.2 Eventos de reveal.js
`Reveal.on('evento', fn)` registra y `Reveal.off()` elimina.
- `ready`: listo para recibir llamadas (`event.currentSlide`, `indexh`, `indexv`). `Reveal.initialize()` también devuelve una Promise. Agrega la clase `.ready` a `.reveal`.
- `slidechanged`: se dispara al instante al cambiar (`previousSlide`, `currentSlide`, `indexh`, `indexv`).
- `slidetransitionend`: igual que `slidechanged` pero cuando la transición terminó. Ideal para animaciones pesadas.
- `fragmentshown` y `fragmenthidden`: `event.fragment`.
- `resize`: `event.scale`, `event.oldScale`, `event.size`.
- `autoanimate`: ver Parte 4.4.

`slidechanged` no se dispara en la primera slide. Por eso se usa el helper `onSlideEnter` (Parte 3.4), que escucha también `ready`.

```javascript
// Activar al entrar y limpiar al salir
onSlideEnter((slide) => slide.classList.add('is-active'));
Reveal.on('slidechanged', (e) => {
  if (e.previousSlide) e.previousSlide.classList.remove('is-active');
});
```

## 5.3 Intersection Observer
Opciones: `root` (`null` = viewport), `rootMargin` (ej. `"0px 0px -50px 0px"`), `threshold` (número o array entre 0.0 y 1.0).

```javascript
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      obs.unobserve(entry.target); // solo la primera vez
    }
  });
}, { root: null, rootMargin: '0px', threshold: 0.25 });

document.querySelectorAll('.observe-me').forEach((el) => observer.observe(el));
```
Limpieza: `observer.disconnect()`.

## 5.4 Scroll-driven animations en CSS
Enlazan el progreso de un `@keyframes` al scroll con `animation-timeline`.
- `scroll()`: según el scroll de un contenedor (`nearest`, `root`, `self`; ejes `block`, `inline`, `x`, `y`).
- `view()`: según la posición de un elemento en el viewport.
- Con nombre: `scroll-timeline-name` y `view-timeline-name` (`--nombre`).
- `animation-range`: tramo de la timeline (ej. `entry 0% cover 40%`).

> **Regla crítica:** declarar `animation` **antes** de `animation-timeline`. El shorthand `animation` resetea `animation-timeline` si va después.

```css
.scroll-progress {
  position: fixed; top: 0; left: 0; width: 100%; height: 4px;
  background: var(--r-heading-color);
  transform-origin: left;
  animation: grow linear;
  animation-timeline: scroll(root block);
}
@keyframes grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }

@supports not (animation-timeline: scroll()) {
  .scroll-progress { display: none; } /* fallback */
}
@media (prefers-reduced-motion: reduce) {
  .scroll-progress { animation-timeline: none; }
}
```

## 5.5 GSAP y ScrollTrigger
Cargar GSAP y el plugin **después** de reveal.js y **antes** de `main.js`:
```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>
```
```javascript
gsap.registerPlugin(ScrollTrigger); // una sola vez, antes de crear instancias

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.pin-section',
    start: 'top top',
    end: '+=500',
    scrub: 1,
    pin: true
  }
});

tl.to('.layer-1', { opacity: 1, duration: 1 })
  .to('.layer-2', { y: 0, duration: 1 }, '+=0.2') // 0.2 s después
  .to('.layer-3', { scale: 1.2, duration: 1 }, '<'); // junto a la anterior
```
- Métodos de timeline: `to`, `from`, `fromTo`, `add`, `addLabel`, `seek`, `timeScale`, `progress`.
- Posición: `'<'`, `'+=0.5'`, `'-=0.3'`, etiqueta.
- `ScrollTrigger` acepta `trigger`, `start`, `end`, `scrub` (`true` o segundos), `pin`.

## 5.6 Recetas

**1. Animar elementos al entrar a una slide (eventos de reveal.js + GSAP)**
```javascript
onSlideEnter((slide) => {
  const cards = slide.querySelectorAll('.stat-card');
  if (!cards.length) return;
  gsap.fromTo(cards,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, overwrite: 'auto' }
  );
});
```
Usar `fromTo` evita que la animación se acumule al volver a la slide.

**2. Aparición escalonada al entrar en viewport (Intersection Observer)**
```javascript
const staggerObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.stagger-item').forEach((item, i) => {
      setTimeout(() => item.classList.add('visible'), i * 100);
    });
    obs.unobserve(entry.target);
  });
}, { threshold: 0.3 });

document.querySelectorAll('.stagger-container').forEach((el) => staggerObserver.observe(el));
```

**3. Barra de progreso con scroll:** ver el bloque de la Parte 5.4.

**4. Sección fijada con animación scrub (GSAP)**
```javascript
gsap.registerPlugin(ScrollTrigger);
gsap.timeline({
  scrollTrigger: { trigger: '#hero-pin', start: 'top top', end: '+=1000', scrub: true, pin: true }
})
.to('.hero-title', { scale: 0.8, opacity: 0 })
.from('.hero-content', { y: 100, opacity: 0 }, '<');
```

## 5.7 Coordinación y limpieza
- Coordinar varias animaciones en una sola timeline, con etiquetas o posiciones relativas.
- Al destruir o cambiar vistas dinámicamente:
```javascript
observer.disconnect();
ScrollTrigger.getAll().forEach((st) => st.kill());
tl.kill();
```
- Si cambia el tamaño o el layout, llamar `ScrollTrigger.refresh()`.

## 5.8 Reglas de integración
1. **Orden de carga:** CSS de reveal.js y tema → CSS propio → `reveal.js` → librerías (GSAP, ScrollTrigger, Anime.js) → `main.js`.
2. **Responsabilidades:** la Parte 3 define el DOM y los tokens, la Parte 4 define los efectos visuales, la Parte 5 decide cuándo se disparan.
3. **Un solo motor por propiedad:** nunca animar la misma propiedad de un elemento con dos motores a la vez (CSS scroll-driven y GSAP, Auto-Animate y GSAP, Anime.js y GSAP).
4. **Eventos:** usar `Reveal.on()` y no `addEventListener` en `window`.
5. **Fuera de este archivo:** vista de orador, exportación a PDF, plugins y modo scroll. Consultar la documentación oficial antes de implementarlos.

---

# PARTE 6. Checklist final y errores comunes

## Checklist
- [ ] Brief completado y decisiones declaradas en una línea.
- [ ] Estilo coherente con el tema (tabla 1.4), sin antipatrones (1.5).
- [ ] Máximo 2 familias tipográficas, paleta de 3-4 colores más neutros, contraste suficiente.
- [ ] Una sola transición global y nivel de movimiento acorde a la formalidad.
- [ ] `disableLayout: true`, slides a 100% de ancho y 100vh, sin scroll de página.
- [ ] Click izquierdo avanza, click derecho retrocede, sin menú contextual. Listeners registrados una sola vez.
- [ ] Estructura `.reveal > .slides > section`, `reveal.css` y tema vinculados antes del CSS propio, `Reveal.initialize()` ejecutado.
- [ ] Texto y tamaños en unidades relativas, sin desbordes.
- [ ] Solo `transform` y `opacity` en animaciones propias, variables `--motion-*` y `prefers-reduced-motion`.
- [ ] `startViewTransition` con fallback. `data-id` iguales en ambas slides de Auto-Animate.
- [ ] Anime.js y GSAP cargados por CDN antes de `main.js`, y `gsap.registerPlugin(ScrollTrigger)` ejecutado antes de usarlo.
- [ ] `animation` escrita antes de `animation-timeline` en CSS scroll-driven.
- [ ] Observers y triggers limpiados cuando corresponda.

## Errores comunes
- **Slides apiladas o layout roto:** falta `reveal.css` o los contenedores `.reveal` y `.slides` están mal escritos.
- **No avanza ni responde:** falta `Reveal.initialize()` o hay un error de JS previo. Revisar la consola.
- **Texto cortado:** alturas o anchos fijos en píxeles. Usar `vw`, `vh`, `rem` o `%`.
- **El click derecho abre el menú del navegador:** falta `e.preventDefault()` en `contextmenu`.
- **Auto-Animate no conecta dos elementos:** falta `data-auto-animate` en una de las dos slides, o falta un `data-id` común.
- **Elementos invisibles tras animar:** falta `fill: 'forwards'` (WAAPI) o `animation-fill-mode: forwards` / `both` (CSS).
- **`animation-timeline` no hace nada:** `animation` declarada después. Mover `animation` arriba.
- **La animación no corre en la primera slide:** se usó solo `slidechanged`. Usar `onSlideEnter`.
- **Animaciones que se acumulan al volver a una slide:** usar `gsap.fromTo` con `overwrite: 'auto'` o reiniciar las clases al salir.
- **Parpadeo o saltos (jank):** animar `transform` en lugar de `margin`, `top` o `left`.
- **Título visible antes de animar:** ocultar el estado inicial por CSS o disparar con `slidechanged` en vez de `slidetransitionend`.

---

## Fuentes
- reveal.js: https://revealjs.com/llms.txt, https://revealjs.com/presentation-size/, https://revealjs.com/themes/, https://revealjs.com/transitions/, https://revealjs.com/fragments/, https://revealjs.com/auto-animate/, https://revealjs.com/events/, https://revealjs.com/scroll-view/, https://github.com/hakimel/reveal.js
- MDN: https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API, https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API, https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API, https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines, https://developer.mozilla.org/es/docs/Web/CSS/Guides/Animations
- WebKit: https://webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css/
- GSAP: https://gsap.com/docs/v3/GSAP/Timeline/scrollTrigger/, https://ics.media/en/entry/220825/
- Anime.js: https://animejs.com/documentation/getting-started/installation
