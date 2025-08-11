# Configuración de Espacios Publicitarios

## Descripción

Este directorio contiene la configuración para los espacios publicitarios del Old World Builder. Los anuncios se muestran en la página principal y son completamente personalizables.

## Archivo de Configuración

### `advertisements.js`

Este archivo contiene la configuración de todos los espacios publicitarios disponibles.

## Cómo Personalizar los Anuncios

### 1. Editar el Archivo de Configuración

Abre `src/config/advertisements.js` y modifica los campos según tus necesidades:

```javascript
export const advertisements = [
  {
    id: 1,
    title: "Tu Tienda de Miniaturas",           // Título del anuncio
    description: "Las mejores miniaturas",       // Descripción
    placeholder: "¡Visita nuestra tienda!",      // Texto del placeholder
    active: true,                                // Mostrar/ocultar (true/false)
    image: "/images/tu-banner.jpg",             // URL de la imagen (opcional)
    link: "https://tu-tienda.com"               // URL del enlace (opcional)
  }
];
```

### 2. Campos Disponibles

- **`id`**: Identificador único del anuncio
- **`title`**: Título principal del anuncio
- **`description`**: Descripción o subtítulo
- **`placeholder`**: Texto que se muestra cuando no hay imagen
- **`active`**: Controla si el anuncio se muestra o no
- **`image`**: URL de la imagen del anuncio (opcional)
- **`link`**: URL de destino cuando se hace clic (opcional)

### 3. Ejemplos de Uso

#### Anuncio con Imagen y Enlace
```javascript
{
  id: 1,
  title: "Tienda de Miniaturas",
  description: "Las mejores figuras de Warhammer",
  placeholder: "¡Visita nuestra tienda!",
  active: true,
  image: "/images/banner-tienda.jpg",
  link: "https://minitiendas.com"
}
```

#### Anuncio Solo de Texto
```javascript
{
  id: 2,
  title: "Evento de Juego",
  description: "Torneo este fin de semana",
  placeholder: "¡Inscríbete ahora!",
  active: true,
  image: null,
  link: null
}
```

#### Anuncio Desactivado
```javascript
{
  id: 3,
  title: "Anuncio Temporal",
  description: "No disponible por ahora",
  placeholder: "Próximamente",
  active: false,  // No se mostrará
  image: null,
  link: null
}
```

## Recomendaciones

1. **Imágenes**: Usa formatos optimizados (JPG, PNG, WebP)
2. **Tamaños**: Recomendado máximo 600x200 píxeles
3. **Enlaces**: Siempre incluye `target="_blank"` para enlaces externos
4. **Contenido**: Mantén los anuncios relevantes para la comunidad de Warhammer

## Ubicación de Imágenes

Coloca las imágenes de los anuncios en:
- `public/images/` - Para imágenes estáticas
- `src/assets/` - Para imágenes que se procesan con webpack

## Soporte

Para ayuda con la configuración de anuncios, consulta la documentación principal del proyecto o contacta con el equipo de desarrollo.
