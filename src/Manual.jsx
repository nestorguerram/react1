import React from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import fondomanual from "./assets/fondomanual.png"; // Imagen de fondo importada
import ScrollToBottomButton from "./components/ScrollToBottomButton"; // Botón para ir al final
import "./Manual.css"; // Importamos estilos externos

// Contenido Markdown que se mostrará en la página



const markdown = `
# Introducción y Primeros Pasos con React

## Introducción

Actualmente, si quieres formarte como desarrollador frontend y aprender a crear páginas web, la recomendación más común que escucharás es, React, React, React. 

Pero, ¿por dónde empezar si deseas partir desde cero?

Este informe presenta una explicación clara y sencilla para dar los primeros pasos en React, una de las tecnologías más utilizadas en el desarrollo web moderno.

## ¿Qué es React?

React es una librería para crear interfaces de usuario utilizando el lenguaje de programación JavaScript. 

Fue lanzada en 2013 y desarrollada inicialmente por el equipo de Facebook. Actualmente, es un proyecto de código abierto y uno de los más exitosos en GitHub. 

React sigue el paradigma de programación declarativo y está basado en componentes individuales que pueden interactuar entre sí.

Su funcionamiento se basa en "estados" que permiten actualizar y repintar solo los elementos necesarios en la interfaz. Se puede utilizar tanto para crear aplicaciones frontend web como backend con Node.js, o incluso para aplicaciones móviles.

## Lenguaje de Programación Necesario

React está basado en JavaScript, el lenguaje de programación principal utilizado en navegadores web. Aunque es posible usar otros lenguajes como TypeScript, es indispensable conocer los fundamentos de JavaScript para trabajar con React.

Existen frameworks relacionados, como Next.js, que proporcionan herramientas adicionales para agilizar el desarrollo, pero este tema es más avanzado y queda fuera del alcance inicial.

## Requisitos para Crear una Aplicación React

Para crear tu primera aplicación con React necesitas:

1. Instalar Node.js, que está disponible para todos los sistemas operativos. Puedes comprobar la instalación correctamente ejecutando en la consola el comando \`node -v\`.

2. Un editor de código, siendo Visual Studio Code el más popular actualmente. Solo debes descargarlo e instalarlo.

3. Crear un proyecto React usando el comando en la terminal \`npx create-react-app .\` .  Ejecutado dentro del directorio donde deseas crear la app. 
Esto creará la estructura predeterminada de una aplicación React.

4. Usar npm para gestionar paquetes y ejecutar comandos. Por ejemplo, con \`npm start\` puedes iniciar un servidor local en \`localhost:3000\` para ver tu app en desarrollo.

## Estructura de un Proyecto React

Una vez creado el proyecto, encontrarás los siguientes elementos principales:

- \`package.json\`: archivo con todas las dependencias y librerías que usa el proyecto.

- directorio \`public\`: contiene archivos típicos web como favicon, \`index.html\`, imágenes y manifiestos.

- directorio \`src\`: es donde realmente trabajaremos, con archivos JavaScript para crear componentes React, así como archivos CSS y de pruebas.

## Fundamentos Necesarios: HTML y CSS

Aunque React usa JavaScript para la lógica, es importante conocer conceptos básicos de HTML y CSS porque al final todo se transforma en estas tecnologías para mostrar la página en el navegador.

Usando las herramientas para desarrolladores del navegador, se puede inspeccionar el código generado que React transforma desde JSX (una sintaxis especial de React que parece HTML) hacia código estándar HTML y CSS.

## Primeros Componentes en React

React se basa en componentes reutilizables. 

Por ejemplo, puedes crear un archivo \`Component.jsx\` con un componente básico que contenga un elemento \`<div>\` y un texto.

Para trabajar cómodamente con React, se recomienda instalar extensiones de Visual Studio Code como snippets para crear componentes rápidamente con atajos.


## Uso de Components en este Proyecto

En este proyecto, la aplicación está organizada en múltiples componentes React, que son bloques reutilizables e independientes de código que representan partes específicas de la interfaz de usuario.  
Cada componente se encuentra como un archivo separado dentro de la carpeta \`src/components/\` (o directamente en \`src/\` para componentes simples), por ejemplo:  
- \`LoginForm.jsx\`: contiene el formulario para iniciar sesión.  
- \`RegisterForm.jsx\`: contiene el formulario para registro de nuevos usuarios.  
- \`Dashboard.jsx\`: muestra la pantalla principal tras iniciar sesión.  
- \`Home.jsx\`: muestra la bienvenida después de registrar un usuario.  
- \`Manual.jsx\`: presenta la documentación en formato Markdown.  
- \`ScrollToBottomButton.jsx\`: botón reutilizable para desplazarse rápidamente al final de la página.

Esta estructura modular permite:  
- Reutilizar código y evitar duplicación.  
- Facilitar la lectura y mantenimiento del código.  
- Trabajar en equipo, donde diferentes personas pueden trabajar en diferentes componentes.  
- Mejorar la escalabilidad del proyecto, permitiendo agregar, modificar o eliminar componentes sin afectar el resto.

Cada componente puede tener su propio estado interno, manejar eventos y recibir propiedades (props) para personalizar su comportamiento o apariencia.

Al importar y usar componentes en otros archivos, se construye la interfaz de la aplicación de forma clara, ordenada y mantenible.

---

Es recomendable mantener la organización clara, colocando los componentes en carpetas específicas (\`components/\`, \`pages/\`, etc.) según su función, para mantener la escalabilidad y limpieza del proyecto.


## Manejo de Estado y Eventos

React utiliza estados para detectar qué partes del componente deben actualizarse cuando cambia la información.

Por ejemplo:

un componente puede tener un estado \`text\` que guarda el valor de un input y otro estado \`updated\` para almacenar el texto final tras una acción, como pulsar un botón.

Se utilizan funciones para manejar eventos, como \`onChange\` para actualizar el estado conforme el usuario escribe, y \`onClick\` para actualizar otro estado con el valor almacenado.

Esto permite que la interfaz se actualice de forma reactiva y eficiente.

## Despliegue de Proyectos React

Existen múltiples plataformas para desplegar aplicaciones React gratuitamente, tales como:

- GitHub Pages  
- Vercel  
- Netlify  

Estas plataformas permiten tener la aplicación en producción accesible en línea, no solo en desarrollo local.

## Estructura de este Proyecto Web en React

La estructura de la carpeta principal de nuestro proyecto React llamado react1 se organiza de la siguiente manera:

### Directorios principales

- \`.git\`: Carpeta oculta que contiene toda la información del control de versiones Git. Permite gestionar el historial de cambios, ramas y sincronización con repositorios remotos.

- \`node_modules\`: Carpeta donde se almacenan todas las dependencias y librerías instaladas a través de npm (Node Package Manager). Es creada automáticamente al instalar paquetes.

- \`public\`: Carpeta que contiene archivos estáticos públicos, como el archivo principal \`index.html\`, íconos (favicon), y otros recursos accesibles directamente desde el navegador.

- \`src\`: Carpeta principal donde se encuentra todo el código fuente de la aplicación React. Aquí se desarrollan los componentes, estilos y recursos específicos de la aplicación.

### Archivos principales en la raíz del proyecto

- \`.gitignore\`: Archivo que especifica qué archivos o carpetas deben ser ignorados por Git, como \`node_modules\` o archivos temporales.

- \`package.json\`: Archivo de configuración del proyecto que define las dependencias, scripts de ejecución y metadatos del proyecto.

- \`package-lock.json\`: Archivo que registra las versiones exactas de las dependencias instaladas para garantizar instalaciones reproducibles.

- \`README.md\`: Archivo de texto en formato Markdown que usualmente contiene información y documentación sobre el proyecto.

### Detalle de la carpeta src

Dentro de la carpeta \`src\`, donde reside el núcleo de la aplicación React, se organiza el proyecto de la siguiente forma:

- \`assets\`: Carpeta dedicada a almacenar los recursos gráficos y multimedia usados en la aplicación, como imágenes. En este proyecto, contiene archivos como \`background.png\`, \`hombre.png\`, \`mujer.png\`, \`otro.png\` y \`logo.svg\`.

- Archivos de estilos CSS:

  - App.css : Estilos específicos para el componente principal \`App.js\`.

  - xxxx.css: Estilos globales que afectan toda la aplicación.
  

  - \`index.css\`: Estilos globales que afectan toda la aplicación.

- Archivos JavaScript y JSX (componentes y lógica):
  - \`App.js\`: Componente raíz que organiza la estructura general y ruteo de la aplicación.

  - \`Dashboard.jsx\`: Componente que representa la vista o sección principal después del login.

  - \`Home.jsx\`: Componente para la página de inicio o landing page.

  - \`LoginForm.jsx\`: Componente que contiene el formulario para iniciar sesión.

  - \`RegisterForm.jsx\`: Componente con el formulario de registro de usuarios.

  - \`index.js\`: Punto de entrada de la aplicación React, donde se monta el componente raíz en el DOM.

  - \`reportWebVitals.js\`: Archivo para medir el rendimiento de la aplicación, siguiendo las recomendaciones oficiales de React.

Esta descripción aporta claridad sobre cómo está organizado el proyecto, facilitando su comprensión y mantenimiento.

## En este Proyecto React <a id="proyecto-react"></a>


## Objetivo del proyecto

Es una aplicación web simple con autenticación de usuarios, donde puedes:

- Registrarte con nombre, apellido, email, contraseña y género.

- Iniciar sesión con email y contraseña.

- Acceder a un dashboard personalizado después del login.

- Mostrar una página de bienvenida con mensaje personalizado después del registro.

- Manejar usuarios y sesiones con almacenamiento en localStorage.

- Navegar entre las distintas páginas usando React Router.

---

## Principales componentes

- \`LoginForm.jsx\`: formulario para iniciar sesión. Valida usuario y contraseña, muestra errores, navega al dashboard con datos del usuario.

- \`RegisterForm.jsx\`: formulario para registrarse. Valida datos, guarda usuario nuevo en localStorage, navega a la página de bienvenida (Home).

- \`Dashboard.jsx\`: muestra mensaje de bienvenida con el nombre completo del usuario logueado, permite continuar a la navegación principal (Home).

- \`Home.jsx\`: página de bienvenida post registro con mensaje personalizado y botón para volver al login.

- \`App.js\`: configuración de rutas usando React Router para navegar entre los componentes según la URL.

- \`xxx.css\`: de cada uno de los archivos jsx ,nos permite la modularidad, mantenimiento, claridad, escalabilidad, organización, performance y carga, de cada uno de los estilos de los distintos componentes jsx

---

## Cómo funciona la navegación

- Al abrir \`localhost:3000\`, el usuario ve el formulario de login (\`LoginForm\`).

- Desde ahí, puede ir a registro (\`RegisterForm\`).

- Al registrarse, se guarda el usuario en localStorage y se redirige a /home mostrando mensaje personalizado.

- Al iniciar sesión, si es correcto, se redirige a /dashboard con mensaje personalizado.

- Desde dashboard, puede continuar a home o cerrar sesión.

---

## Uso de localStorage

- Los usuarios registrados se almacenan en localStorage como un arreglo JSON.

- El nombre completo del usuario se guarda por separado para mostrar mensajes personalizados.

- No hay backend, todo es almacenamiento local en el navegador.

---

## Estilos y diseño

- Se usa CSS para el diseño, con flexbox para centrar los formularios.

- Inputs alineados para mejor experiencia.

- Fondo personalizado en el login.

---

## Código relevante

- Validaciones en formularios para asegurar que los campos sean correctos.

- Manejo de estado con React Hooks (\`useState\`).

- Navegación programática con \`useNavigate\` de React Router.

- Representaciones gráficas para mostrar mensajes de error.

- Importación y uso de imágenes para fondo.

---

## Conclusión

Este tutorial básico sirve para aclarar dudas sobre cómo empezar con React desde cero. Aunque no se profundiza en temas avanzados, se presentan los conceptos esenciales y la estructura de un proyecto típico. React es una tecnología muy demandada y con abundante material para continuar aprendiendo.

---

## Información extraída de la web como:

[https://www.w3schools.com/react/default.asp](https://www.w3schools.com/react/default.asp)  
[https://www.hackaboss.com/blog/react-utilidad](https://www.hackaboss.com/blog/react-utilidad)

`;

function Manual() {
  const navigate = useNavigate();

  return (
    <div
      className="manual-container"
      style={{ backgroundImage: `url(${fondomanual})` }}
    >
      {/* Botón para hacer scroll hasta el final */}
      <div className="scroll-button-wrapper">
        <ScrollToBottomButton />
      </div>
        
      {/* Renderizado del contenido Markdown */}
      <ReactMarkdown>{markdown}</ReactMarkdown>

      {/* Contenedor para los botones */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
        <button
          onClick={() => navigate("/")}
          className="manual-back-button"
        >
          Ir al inicio de sesión
        </button>

        <button
          onClick={() => navigate("/registro-bebidas")}
          className="manual-back-button"
        >
          Ir a Registro Bebidas
        </button>
      </div>
    </div>
  );
}

export default Manual;