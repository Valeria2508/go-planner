# Proyecto GoPlanner

Este proyecto integra múltiples tecnologías front-end incluyendo React, junto con HTML, CSS y JavaScript.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16.0 o superior)
- [npm](https://www.npmjs.com/) (normalmente viene con Node.js)
- [Git](https://git-scm.com/)

## Instalación

1. Clona el repositorio:
```bash
git clone [URL-del-repositorio]
cd [nombre-del-proyecto]
```

2. Instala las dependencias del proyecto:
```bash
npm install
```

3. Instala las dependencias específicas de React:
```bash
npm install react react-dom
```

4. Instala las dependencias específicas de Vue.js:
```bash
npm install vue @vue/compiler-sfc
```

## Configuración del Entorno de Desarrollo

1. Abre el proyecto en Visual Studio Code:
```bash
code .
```

2. Instala las extensiones recomendadas para VS Code:
   - ESLint
   - Prettier
   - Vue Language Features (Volar)
   - React Developer Tools

## Estructura del Proyecto

```
proyecto/
├── src/
│   ├── components/
│   │   ├── react/
│   │   └── vue/
│   ├── styles/
│   ├── assets/
│   └── App.js
├── public/
│   └── index.html
├── package.json
└── README.md
```

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm start`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm test`: Ejecuta las pruebas
- `npm run lint`: Ejecuta el linter

## Desarrollo

1. Para iniciar el servidor de desarrollo:
```bash
npm start
```

2. Abre [http://localhost:3000/home](http://localhost:3000/home) en tu navegador

## Despliegue

Para construir el proyecto para producción:

```bash
npm run build
```

Esto creará una carpeta `build` con los archivos optimizados listos para ser desplegados.

