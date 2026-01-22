# GitHub Copilot Instructions for Astro Static Sites

## Idioma y comunicación
- El idioma general del proyecto será **castellano**.
- Responderás siempre en **castellano**.
- En el código (nombres de variables, funciones, componentes, clases) usa **inglés técnico**.
- Los **comentarios** deben estar en **castellano**.

## Filosofía del proyecto (Astro)
- El proyecto debe seguir un enfoque **HTML-first**:
  - Prioriza **contenido y maquetación en HTML/`.astro`**.
  - Añade interactividad **solo donde aporte valor real**.
- Evita convertir el proyecto en una SPA si no es necesario.
- Usa **Astro Islands** para interactividad:
  - Prefiere `client:idle` o `client:visible` sobre `client:load`.
  - Evita hidratar componentes innecesariamente.

## Estilo general
- Prioriza código **claro, legible y mantenible** frente a soluciones innecesariamente complejas.
- Mantén el proyecto **rápido**:
  - Minimiza dependencias.
  - Minimiza JavaScript enviado al cliente.
  - Reutiliza layouts y componentes.

## Tailwind CSS (obligatorio)
- El proyecto debe usar **Tailwind CSS como sistema de estilos principal**.
- Prioriza **clases utilitarias de Tailwind** antes que CSS custom.
- Mantén consistencia visual mediante:
  - configuración del tema en `tailwind.config.*` (`theme.extend`)
  - patrones reutilizables con `@layer components` cuando se repitan combinaciones de clases.

### Reglas de uso de Tailwind
- Mantén las clases **legibles y mantenibles**.
- Orden recomendado dentro de `class`:
  - layout → flex/grid → spacing → typography → color → borders → effects → states
- Evita cadenas interminables:
  - extrae a componentes o a clases en `@layer components`.
- Usa utilidades de estado y accesibilidad:
  - `hover:`, `focus-visible:`, `active:`, `disabled:`, `aria-*`.
- Evita `!important` salvo casos justificados.
- No introduzcas frameworks CSS adicionales si Tailwind ya resuelve el caso.

## TypeScript y JavaScript (cliente)
- **TypeScript es el lenguaje preferente del proyecto.**
- Debe usarse por defecto en todo el código que no sea markup puro.
- Es **obligatorio** en:
  - `src/lib/**` (helpers, utilidades, lógica)
  - `src/data/**` (modelos y estructuras de datos)
  - componentes con `props` no triviales
- JavaScript solo está permitido en:
  - scripts muy pequeños y locales (toggles, listeners simples)
  - casos donde TypeScript no aporte valor claro

### Reglas de uso
- Tipar siempre:
  - `props`
  - parámetros públicos
  - valores de retorno
- Evitar `any` salvo casos justificados y documentados.
- Mantener los tipos:
  - simples
  - legibles
  - cercanos al código que describen
- Extraer tipos reutilizables a `src/lib/types.ts` o similar cuando tenga sentido.

### Interactividad
- Mantén la lógica de cliente **mínima y localizada**.
- Evita manipulación agresiva del DOM si puede resolverse con HTML/CSS.
- Prefiere:
  - módulos ES (`type="module"`)
  - funciones puras
  - listeners acotados y removibles

## Estructura del proyecto
- Mantén una estructura clara y modular:
  - `src/pages/` → rutas y páginas
  - `src/layouts/` → layouts reutilizables
  - `src/components/` → componentes UI
  - `src/lib/` → lógica, helpers y tipos
  - `src/data/` → datos estructurados
  - `src/styles/` → estilos globales y Tailwind
  - `public/` → assets estáticos
- No concentres toda la lógica en una sola página o componente.
- Evita refactors grandes salvo petición explícita.

## Componentes y diseño
- Divide la UI en componentes pequeños y reutilizables.
- Preferencias:
  - Layouts para estructura general (header/footer/SEO).
  - Componentes para secciones (Hero, Projects, Experience, Contact, etc.).
- En componentes `.astro`:
  - Mantén el frontmatter (`---`) limpio.
  - Pasa datos por `props` cuando aporte claridad.
  - Evita lógica compleja en el frontmatter; extrae helpers a `src/lib/`.

## Tests unitarios (obligatorios)
- **Siempre que se genere o modifique código TypeScript o JavaScript, se deben generar tests unitarios.**
- Prioriza tests para:
  - helpers y utilidades en `src/lib/`
  - lógica de negocio
  - funciones puras
- Framework recomendado:
  - **Vitest**
- Buenas prácticas:
  - Tests claros y legibles.
  - Nombres descriptivos (`should_do_x_when_y`).
  - Patrón **Arrange – Act – Assert**.
  - Evita mocks innecesarios si el código es testeable de forma pura.
- Los tests deben:
  - vivir en `tests/` o junto al archivo (`*.test.ts`)
  - no depender de red ni APIs externas
- Si no es razonable crear un test (por ejemplo, markup estático puro), **debe explicarse el motivo**.

## CSS y estilos
- Tailwind es la primera opción para estilos.
- Usa CSS adicional solo cuando:
  - Tailwind no sea suficiente o pierda claridad.
  - haya estilos muy repetidos que convenga encapsular.
  - existan animaciones complejas o casos muy específicos.
- Evita CSS global descontrolado:
  - Mantén un `global.css` (reset + base).
  - Usa `@layer components` para estilos reutilizables.
  - Separa estilos por responsabilidad si crecen.

## SEO, accesibilidad y calidad
- SEO:
  - Cada página debe tener `<title>` y meta description coherentes.
  - Usa etiquetas semánticas (`header`, `main`, `section`, `nav`, `footer`).
- Accesibilidad:
  - Imágenes con `alt`.
  - Botones reales para acciones, enlaces para navegación.
  - Estados `focus-visible` visibles (`focus-visible:ring-*`).
- Rendimiento:
  - Optimiza imágenes.
  - Evita scripts globales si solo afectan a una página.

## Dependencias y librerías
- Prioriza:
  - Astro core
  - Tailwind CSS
  - TypeScript
  - APIs nativas del navegador
- Si se propone una librería de terceros:
  - Debe estar mantenida.
  - Debe justificarse por funcionalidad clara.
- Evita dependencias pesadas para cosas simples.

## Contenido y datos
- Para contenido repetible:
  - Prefiere `src/content/` (Astro Content Collections).
  - Alternativamente, `src/data/` con JSON o TypeScript.
- Evita duplicar texto; centraliza datos y reutiliza componentes.

## Build y despliegue (GitHub Pages)
- El output debe ser **estático** (SSR desactivado).
- Asegura compatibilidad con GitHub Pages:
  - Configura correctamente `site` y `base`.
  - Evita rutas absolutas que rompan bajo subrutas.
- Mantén scripts y assets compatibles con Pages.

## Trabajo con código existente
- Respeta el estilo del código ya escrito.
- Cambios pequeños, claros y fáciles de revisar.
- Si se pide refactor:
  - Divide en pasos coherentes.
  - No mezcles cambios funcionales con cambios estéticos.

## Documentación y comentarios
- Usa comentarios solo cuando aporten contexto no trivial.
- Documenta:
  - estructura del proyecto
  - convenciones de componentes
  - despliegue en GitHub Pages
  - uso coherente de Tailwind y TypeScript
- Evita documentación redundante.

## Comportamiento general
- Prioriza siempre:
  1. **Corrección**
  2. **Claridad**
  3. **Consistencia**
  4. **Rendimiento (menos JS)**
  5. **TypeScript donde aporte valor**
  6. **Tests unitarios**
- En caso de duda, elige la solución más simple y mantenible.
- Adecúa las sugerencias al archivo y al contexto del proyecto.
