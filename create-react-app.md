# Old World Builder - Creado con Create React App

## Actualización 06-08-2025

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).

## Nuevas Funcionalidades Implementadas

### Atributo de Salvación
- Todas las unidades ahora incluyen el atributo de salvación (Sv) en sus estadísticas
- Integrado en el componente Stats.js
- Soporte completo en exportación e impresión

### Exportación Avanzada
- **PDF**: Generación automática de PDFs con jsPDF
- **Word/LibreOffice**: Exportación a formato .docx con la librería docx
- **Texto**: Formatos compactos y minimalistas
- **Markdown**: Soporte para formato Markdown

### Nuevo Diseño
- Colores modernos con gradiente de fondo
- Variables CSS personalizadas
- Mejor experiencia de usuario
- Diseño responsivo mejorado

### Traducción Completa al Español
- Funciones de localización mejoradas
- Soporte completo para contenido del juego
- Aplicación automática a todo el contenido cuando se selecciona español

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Ejecuta la aplicación en modo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

La página se recargará automáticamente cuando hagas cambios.\
También verás cualquier error de lint en la consola.

### `npm test`

Lanza el test runner en modo interactivo.\
Ver la sección sobre [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para más información.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Agrupa correctamente React en modo producción y optimiza la construcción para el mejor rendimiento.

La construcción se minimiza y los nombres de archivo incluyen los hashes.\
Tu aplicación está lista para ser desplegada!

Ver la sección sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para más información.

### `npm run eject`

**Nota: esta es una operación unidireccional. Una vez que "ejectas", no puedes volver atrás!**

Si no estás satisfecho con la herramienta de construcción y las opciones de configuración, puedes "ejectar" en cualquier momento. Este comando eliminará la dependencia de un solo build de tu proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (webpack, Babel, ESLint, etc.) directamente en tu proyecto para que tengas control total sobre ellos. Todos los comandos excepto `eject` seguirán funcionando, pero apuntarán a los scripts copiados para que puedas ajustarlos. En este punto estás por tu cuenta.

No tienes que usar nunca `eject`. La funcionalidad curada es adecuada para implementaciones pequeñas y medianas, y no deberías sentir que necesitas usar esta característica. Sin embargo, entendemos que esta herramienta no sería útil si no pudieras personalizarla cuando estés listo para ello.

## Aprende Más

Puedes aprender más en la [documentación de Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, revisa la [documentación de React](https://reactjs.org/).

### División de Código

Esta sección ha sido movida aquí: https://facebook.github.io/create-react-app/docs/code-splitting

### Análisis del Bundle

Esta sección ha sido movida aquí: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Hacer una App Web Progresiva

Esta sección ha sido movida aquí: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Configuración Avanzada

Esta sección ha sido movida aquí: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Despliegue

Esta sección ha sido movida aquí: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` falla al minificar

Esta sección ha sido movida aquí: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Tecnologías Utilizadas

- **React 17**: Framework principal
- **Redux Toolkit**: Gestión de estado
- **React Router**: Enrutamiento
- **React Intl**: Internacionalización
- **jsPDF**: Generación de PDFs
- **docx**: Generación de documentos Word
- **file-saver**: Descarga de archivos
- **CSS3**: Estilos con variables CSS personalizadas

## Estructura del Proyecto

```
old-world-builder/
├── public/
│   ├── games/           # Datos de ejércitos
│   └── index.html
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── pages/          # Páginas de la aplicación
│   ├── i18n/           # Archivos de traducción
│   ├── utils/          # Utilidades y helpers
│   └── state/          # Estado de Redux
└── docs/               # Documentación
```

---

**Versión**: 1.19.12  
**Última Actualización**: 06-08-2025
