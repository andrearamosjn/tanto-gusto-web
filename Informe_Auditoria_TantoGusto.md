# Propuesta de Rediseño Web
# tantogusto.net

**Fecha:** 6 de marzo de 2026
**Preparado para:** Tanto Gusto

---

## Sobre vosotros

Tanto Gusto es un negocio con una reputación excepcional: **4.8 estrellas en Google con más de 1.467 reseñas** (Sitges 4.8, Castelldefels 4.8, Vielha 4.6), 4.5 en TripAdvisor (27 reseñas) y más de 6.400 seguidores en Instagram. Tres locales en Catalunya (Sitges, Castelldefels y Vielha) con una propuesta clara y diferenciada: comida casera argentina artesanal.

Vuestro producto habla por sí solo. Pero vuestra web tiene margen de mejora para estar a la altura de lo que ofrecéis.

---

## Lo que funciona bien en vuestra web

Antes de hablar de mejoras, es importante reconocer lo que ya tenéis bien:

- **Carta visible** con precios en las páginas de cada local
- **Enlaces a Google Maps** funcionales en Castelldefels y Vielha
- **Horarios y teléfonos** presentes en cada página
- **Integración con Instagram** que muestra contenido real
- **Marca visual cálida** y tono de comunicación cercano
- **Diseño responsive** que se adapta a móvil

---

## Dónde vuestra web puede mejorar

### 1. Rendimiento: la web tarda casi 3 segundos en cargar

El contenido principal tarda **2.96 segundos** en aparecer. El estándar recomendado por Google es menos de 2.5 segundos. Esto se debe a:

- La imagen principal se carga con prioridad baja dentro de un carrusel
- Plugins de terceros (Trustindex, Google Tag Manager) añaden **más de 1 MB** de peso innecesario
- WordPress + Elementor generan código pesado

**Por qué importa:** Google penaliza las webs lentas en los resultados de búsqueda. Además, cada segundo extra de carga aumenta la tasa de abandono.

### 2. SEO local: no estáis sacando el máximo partido a Google

Vuestra web tiene lo básico, pero le falta lo que marca la diferencia en búsquedas locales:

- **No hay marcado schema LocalBusiness** — es lo que permite a Google mostrar vuestros horarios, teléfono, ubicación y estrellas directamente en los resultados de búsqueda
- **Las imágenes de comida no tienen texto alternativo** — Google no puede indexarlas ni mostrarlas en búsquedas de imágenes
- **Las URLs no son descriptivas** — `/comida-para-llevar-castefa-2-2/` en lugar de `/castelldefels/`
- **No existe sitemap.xml ni robots.txt** — los buscadores no tienen guía de rastreo

**Por qué importa:** Cuando alguien busca "empanadas Sitges" o "comida para llevar Castelldefels", competidores con peores valoraciones pueden aparecer por encima si tienen mejor SEO técnico.

### 3. Las reseñas: vuestra mejor arma, sin aprovechar

Tenéis **más de 1.467 reseñas entre los tres locales** con valoraciones excelentes. Eso es extraordinario. Pero la web no muestra ni una sola reseña de forma destacada. Esas valoraciones deberían ser lo primero que vea un cliente nuevo.

### 4. Proceso de pedido mejorable

El botón "Haz tu pedido" podría ser más claro sobre qué opciones tiene el cliente. Separar las acciones facilita la decisión:
- Llamar directamente (un toque en móvil)
- Pedir por Just Eat / Uber Eats
- Ir al local (con dirección y mapa)

### 5. Direcciones completas poco visibles

Las páginas de locales mencionan la zona ("en el centro de Castelldefels", "a 2 minutos de la playa") pero la dirección postal completa no siempre está visible de forma prominente. Un cliente nuevo necesita ver la calle exacta de un vistazo.

---

## Accesibilidad web: una obligación legal desde junio de 2025

### La Ley Europea de Accesibilidad (European Accessibility Act)

Desde el **28 de junio de 2025**, la Ley Europea de Accesibilidad (Directiva 2019/882) es de obligado cumplimiento en toda la UE. En España se ha transpuesto mediante la **Ley 11/2023**. Esta normativa exige que los productos y servicios digitales sean accesibles para todas las personas, incluidas aquellas con discapacidades.

### Qué significa esto para vuestra web

La normativa obliga a cumplir con el estándar **WCAG 2.1 nivel AA** y la norma **UNE-EN 301 549**. En la práctica, esto incluye:

**Navegación por teclado:**
- Toda la web debe poder usarse sin ratón, solo con teclado (Tab, Enter, Escape)
- Los menús, botones y formularios deben ser accesibles mediante teclado
- Debe haber un indicador visual claro del elemento enfocado

**Compatibilidad con lectores de pantalla (VoiceOver, NVDA, JAWS):**
- Todas las imágenes deben tener texto alternativo descriptivo
- Los botones e iconos deben tener etiquetas de texto (ARIA labels)
- La estructura de encabezados debe ser jerárquica y coherente (H1, H2, H3...)
- Los formularios y elementos interactivos deben anunciarse correctamente

**Contraste y legibilidad:**
- El texto debe tener suficiente contraste con el fondo
- El contenido debe ser legible al ampliar hasta un 200%
- No debe depender solo del color para transmitir información

**Contenido multimedia:**
- Las imágenes necesitan texto alternativo
- Los vídeos necesitan subtítulos

### Estado actual de vuestra web

Hemos detectado los siguientes incumplimientos:

| Requisito | Estado |
|---|---|
| Imágenes con texto alternativo | Faltan en imágenes de productos |
| Navegación por teclado completa | Limitada en menú móvil y modales |
| Etiquetas ARIA en botones con iconos | No implementadas |
| Jerarquía de encabezados correcta | H1 duplicados, saltos de nivel |
| Contraste de colores | Sin verificar |
| Estructura semántica del HTML | Mejorable |

### Sanciones por incumplimiento

La legislación española establece sanciones significativas:

| Tipo de infracción | Sanción |
|---|---|
| **Muy grave** | Hasta **600.000 euros** + posible prohibición de operar hasta 2 años |
| **Grave** | De 30.001 a 150.000 euros |
| **Leve** | Hasta 30.000 euros |

**Esto no es opcional.** La ley ya está en vigor y afecta a cualquier negocio que ofrezca servicios digitales a consumidores en la UE.

---

## Lo que proponemos

Un sitio web nuevo, diseñado desde cero pensando en lo que vuestros clientes necesitan y cumpliendo toda la normativa vigente:

### Carta mejorada por local
Cada local con su carta organizada por categorías, con precios, descripciones, fotos y etiquetas de alérgenos (vegano, sin gluten). Diseño limpio y fácil de consultar.

### Pedidos sin fricción
Botones claros y separados para cada acción:
- **Llamar** (un toque en móvil)
- **Pedir por Just Eat / Uber Eats** (enlace directo)
- **Cómo llegar** (mapa con dirección exacta)

### Velocidad
De casi 3 segundos a **menos de 1.5 segundos de carga**. El doble de rápido. Mejor experiencia y mejor posicionamiento en Google.

### SEO local optimizado
Implementación de schema LocalBusiness, URLs limpias, sitemap.xml, texto alternativo en imágenes y contenido optimizado. Para que Google muestre vuestros locales con horarios, teléfono y estrellas directamente en los resultados.

### Reseñas destacadas
1.467+ reseñas de Google y TripAdvisor mostradas de forma prominente. La mejor publicidad que existe: la opinión de vuestros clientes.

### Accesibilidad completa (WCAG 2.1 AA)
- Navegación completa por teclado
- Compatible con lectores de pantalla (VoiceOver, NVDA)
- Texto alternativo en todas las imágenes
- Estructura semántica correcta
- Contraste de colores verificado
- **Cumplimiento de la Ley Europea de Accesibilidad**

### Diseño mobile-first
Más del 70% del tráfico de restaurantes viene del móvil. La nueva web estará diseñada para funcionar perfectamente en el teléfono.

### Cumplimiento legal
- Accesibilidad WCAG 2.1 AA (obligatoria por ley)
- Políticas de privacidad y cookies adaptadas al GDPR

---

## Antes vs. Después

| | Web actual | Web nueva |
|---|---|---|
| **Velocidad de carga** | 2.96 s | < 1.5 s |
| **SEO local** | Básico | Schema LocalBusiness + optimizado |
| **Reseñas visibles** | No aparecen | Destacadas en la web |
| **Accesibilidad** | Incumplimientos detectados | WCAG 2.1 AA completo |
| **Navegación por teclado** | Limitada | Completa |
| **Lectores de pantalla** | Parcial | Compatible (VoiceOver, NVDA) |
| **Texto alt en imágenes** | Parcial | Todas las imágenes |
| **Diseño móvil** | Adaptado | Nativo mobile-first |
| **URLs** | Confusas | Limpias y descriptivas |
| **Cookies y privacidad** | Incompleto | GDPR compliant |
| **Ley de Accesibilidad** | No cumple | Cumplimiento total |

---

## Presupuesto

| Concepto | Precio |
|---|---|
| **Rediseño web completo** — Diseño, desarrollo, SEO local, accesibilidad WCAG 2.1 AA, optimización de rendimiento y cumplimiento legal | **1.000 €** |

**Qué incluye:**
- Diseño y desarrollo de la nueva web desde cero (Next.js)
- Carta digital por local con fotos, precios y alérgenos
- SEO local optimizado (schema, sitemap, URLs limpias)
- Accesibilidad completa WCAG 2.1 AA (cumplimiento legal)
- Optimización de velocidad (< 1.5s de carga)
- Reseñas de Google y TripAdvisor integradas
- Diseño mobile-first
- Políticas de privacidad y cookies (GDPR)

**Pago:** 50% al inicio del proyecto, 50% a la entrega de la web terminada.

**Revisiones incluidas:** El precio incluye todas las modificaciones y ajustes que necesitéis hasta que la web quede exactamente como queréis.

**Dominio:** Se utilizaría vuestro dominio actual (tantogusto.net), a no ser que prefiráis uno diferente. Solo necesitaríamos que nos facilitéis el acceso para configurar la nueva web.

**Mantenimiento:** No es necesario con la entrega del proyecto. Si en el futuro queréis un plan mensual para ir haciendo cambios y actualizaciones de forma continua, también es posible. Se presupuesta por separado según vuestras necesidades.

---

## Contacto

**Andrea Ramos Juan**
Correo: andrearamosjuan@gmail.com
Portfolio: https://andrearamos.es

---

*Todos los datos de este documento han sido verificados contra fuentes públicas: tantogusto.net, Google Maps, TripAdvisor, Just Eat e Instagram.*
*Información sobre la Ley Europea de Accesibilidad basada en la Directiva 2019/882 y su transposición en España (Ley 11/2023).*
