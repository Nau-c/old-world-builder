# Sistema de Logos Personalizados

## Descripción

El proyecto Old World Builder ahora incluye un sistema de logos completamente personalizados que evita problemas de copyright. Los logos están diseñados con elementos temáticos de Warhammer como torres medievales y martillos de herrero.

## Archivos de Logo

### 1. `logo.svg` - Logo Completo
- **Descripción**: Versión detallada del logo con todos los elementos
- **Uso**: Para documentos oficiales y presentaciones
- **Características**: Torre medieval detallada, martillo de herrero, símbolos heráldicos, texto OWB

### 2. `logo-simple.svg` - Logo Simplificado
- **Descripción**: Versión intermedia del logo
- **Uso**: Para la mayoría de aplicaciones web
- **Características**: Torre estilizada, martillo horizontal, texto OWB, bordes redondeados

### 3. `logo-minimal.svg` - Logo Minimalista
- **Descripción**: Versión más simple y limpia
- **Uso**: Favicons, iconos pequeños, aplicaciones móviles
- **Características**: Diseño minimalista, perfecto para escalar

## Componente React

### `Logo` Component

El componente `Logo` está disponible en `src/components/logo/` y ofrece:

#### Props Disponibles

- **`size`**: Tamaño del logo
  - `small`: 2rem × 2rem
  - `medium`: 3rem × 3rem (por defecto)
  - `large`: 4rem × 4rem
  - `xlarge`: 6rem × 6rem

- **`showText`**: Mostrar texto del logo
  - `true`: Muestra "Old World Builder" (por defecto)
  - `false`: Solo muestra el icono

- **`className`**: Clases CSS adicionales

#### Ejemplos de Uso

```jsx
// Logo pequeño solo con icono
<Logo size="small" showText={false} />

// Logo mediano con texto
<Logo size="medium" />

// Logo grande centrado
<Logo size="large" className="logo--centered" />

// Logo extra grande solo icono
<Logo size="xlarge" showText={false} />
```

## Implementación en la Aplicación

### 1. Header Principal
- El logo aparece en el header cuando el título es "Old World Builder"
- Tamaño: `small` sin texto

### 2. Página de Inicio
- Logo grande centrado cuando no hay listas de ejércitos
- Tamaño: `large` con texto

### 3. Favicon y Metadatos
- Todos los archivos de configuración del navegador usan `logo-minimal.svg`
- Compatible con todos los navegadores modernos

## Elementos del Diseño

### Torre Medieval
- **Símbolo**: Representa la construcción y defensa
- **Colores**: Marrón madera con gradientes
- **Estilo**: Arquitectura gótica simplificada

### Martillo de Herrero
- **Símbolo**: Representa la creación y el trabajo artesanal
- **Colores**: Plateado metálico con gradientes
- **Posición**: Cruza horizontalmente la torre

### Paleta de Colores
- **Fondo**: Azul oscuro (#2C3E50, #34495E)
- **Torre**: Marrón madera (#8B4513, #654321)
- **Martillo**: Plateado (#C0C0C0, #808080)
- **Texto**: Dorado claro (#F4A460)
- **Acentos**: Azul cielo (#87CEEB)

## Ventajas del Nuevo Sistema

### 1. Originalidad
- Diseño completamente personalizado
- Sin elementos de copyright de terceros
- Identidad visual única

### 2. Escalabilidad
- Formatos SVG para cualquier tamaño
- Componente React reutilizable
- Responsive design

### 3. Flexibilidad
- Múltiples variantes para diferentes usos
- Fácil personalización de colores
- Soporte para modo oscuro/claro

### 4. Rendimiento
- SVG ligero y optimizado
- No requiere descargas adicionales
- Carga instantánea

## Personalización

### Cambiar Colores
Los colores se pueden modificar editando las variables CSS en `src/components/logo/Logo.css`:

```css
.logo__title {
  color: var(--color-headline);
}

.logo__subtitle {
  color: var(--color-font-medium);
}
```

### Modificar el Diseño
El diseño SVG se puede editar en cualquiera de los archivos `.svg` o en el componente React `Logo.js`.

## Compatibilidad

- **Navegadores**: Todos los navegadores modernos
- **Dispositivos**: Responsive en móviles y tablets
- **Formatos**: SVG, PNG (convertido), ICO (convertido)
- **Accesibilidad**: Soporte para lectores de pantalla

## Mantenimiento

### Actualizaciones
- Los logos se pueden actualizar editando los archivos SVG
- El componente React se actualiza automáticamente
- Los favicons se regeneran desde el SVG principal

### Versionado
- Cada cambio en el logo debe documentarse
- Mantener versiones anteriores para rollback
- Actualizar documentación cuando sea necesario
