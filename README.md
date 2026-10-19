# Martin Jerez Leal — Portfolio

Portfolio personal de Frontend Engineering, desarrollado con Next.js App Router, React, TypeScript y Tailwind CSS. Presenta experiencia, enfoque de ingeniería, tecnologías y proyectos en una interfaz editorial, adaptable a móvil y escritorio.

## Tecnologías

- Next.js 16 con App Router
- React 19
- TypeScript en modo estricto
- Tailwind CSS 4
- ESLint

## Requisitos

- Node.js compatible con Next.js 16
- npm

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Abrí `http://localhost:3000` para ver el sitio durante el desarrollo.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor local de desarrollo. |
| `npm run lint` | Ejecuta ESLint. |
| `npm run typecheck` | Comprueba los tipos de TypeScript sin generar archivos. |
| `npm run build` | Genera la compilación de producción. |
| `npm run start` | Sirve la compilación de producción; primero ejecutar `npm run build`. |

## Estructura principal

```text
src/
├── app/
│   ├── favicon.svg
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── robots.ts
├── components/
│   ├── portfolio-page.tsx
│   └── site-header.tsx
└── data/
	└── portfolio.ts
```

El contenido editable del portfolio está centralizado en `src/data/portfolio.ts`. Allí se configuran los datos personales, disponibilidad, enlaces, tecnologías, principios de trabajo y proyectos. `src/components/site-header.tsx` contiene la navegación de escritorio y el menú hamburguesa móvil; `src/app/globals.css` define el sistema visual y sus adaptaciones responsive.

## Actualizar contenido antes de publicar

- Revisá nombre, ubicación, biografía y estado de disponibilidad.
- Confirmá que las tecnologías y habilidades listadas representen tu experiencia.
- Reemplazá los tres proyectos de ejemplo por casos reales: ahora están identificados como placeholders. Agregá resultados únicamente si están documentados.
- Completá los enlaces de demostración, repositorios, redes y CV cuando estén disponibles. Los enlaces y las imágenes opcionales se omiten si no están configurados.
- Agregá imágenes reales de proyecto en `public/` y configurá su ruta y texto alternativo en los datos correspondientes.
- Cuando exista un dominio definitivo, configurá la URL base y los metadatos canónicos en `src/app/layout.tsx`.

## Accesibilidad y responsive

La interfaz incluye navegación por anclas, foco visible, un enlace para saltar al contenido, menú móvil operable por teclado, cierre con Escape y soporte para `prefers-reduced-motion`. El diseño incluye reglas específicas para pantallas pequeñas y evita depender de imágenes externas.
