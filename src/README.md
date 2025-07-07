# Introducci�n y Primeros Pasos con React

## Introducci�n  
Actualmente, si quieres formarte como desarrollador frontend y aprender a crear p�ginas web, la recomendaci�n m�s com�n que escuchar�s es, React, React, React.  
Pero, �por d�nde empezar si deseas partir desde cero?  
Este informe presenta una explicaci�n clara y sencilla para dar los primeros pasos en React, una de las tecnolog�as m�s utilizadas en el desarrollo web moderno.

## �Qu� es React?  
React es una librer�a para crear interfaces de usuario utilizando el lenguaje de programaci�n JavaScript.  
Fue lanzada en 2013 y desarrollada inicialmente por el equipo de Facebook. Actualmente, es un proyecto de c�digo abierto y uno de los m�s exitosos en GitHub.  
React sigue el paradigma de programaci�n declarativo y est� basado en componentes individuales que pueden interactuar entre s�.  
Su funcionamiento se basa en "estados" que permiten actualizar y repintar solo los elementos necesarios en la interfaz. Se puede utilizar tanto para crear aplicaciones frontend web como backend con Node.js, o incluso para aplicaciones m�viles.

## Lenguaje de Programaci�n Necesario  
React est� basado en JavaScript, el lenguaje de programaci�n principal utilizado en navegadores web. Aunque es posible usar otros lenguajes como TypeScript, es indispensable conocer los fundamentos de JavaScript para trabajar con React.  
Existen frameworks relacionados, como Next.js, que proporcionan herramientas adicionales para agilizar el desarrollo, pero este tema es m�s avanzado y queda fuera del alcance inicial.

## Requisitos para Crear una Aplicaci�n React  
Para crear tu primera aplicaci�n con React necesitas:  
1. Instalar Node.js, que est� disponible para todos los sistemas operativos. Puedes comprobar la instalaci�n correctamente ejecutando en la consola el comando node -v.  
2. Un editor de c�digo, siendo Visual Studio Code el m�s popular actualmente. Solo debes descargarlo e instalarlo.  
3. Crear un proyecto React usando el comando en la terminal:  " npx create-react-app ."

Ejecutado dentro del directorio donde deseas crear la app. Esto crear� la estructura predeterminada de una aplicaci�n React.  

4. Usar npm para gestionar paquetes y ejecutar comandos. Por ejemplo, con npm start puedes iniciar un servidor local en localhost:3000 para ver tu app en desarrollo.

## Estructura de un Proyecto React  
Una vez creado el proyecto, encontrar�s los siguientes elementos principales:  
- package.json: archivo con todas las dependencias y librer�as que usa el proyecto.  
- directorio public: contiene archivos t�picos web como favicon, index.html, im�genes y manifiestos.  
- directorio src: es donde realmente trabajaremos, con archivos JavaScript para crear componentes React, as� como archivos CSS y de pruebas.

## Fundamentos Necesarios: HTML y CSS  
Aunque React usa JavaScript para la l�gica, es importante conocer conceptos b�sicos de HTML y CSS porque al final todo se transforma en estas tecnolog�as para mostrar la p�gina en el navegador.  
Usando las herramientas para desarrolladores del navegador, se puede inspeccionar el c�digo generado que React transforma desde JSX (una sintaxis especial de React que parece HTML) hacia c�digo est�ndar HTML y CSS.

## Primeros Componentes en React  
React se basa en componentes reutilizables.  
Por ejemplo, puedes crear un archivo Component.jsx con un componente b�sico que contenga un elemento <div> y un texto.  
Para trabajar c�modamente con React, se recomienda instalar extensiones de Visual Studio Code como snippets para crear componentes r�pidamente con atajos.

## Manejo de Estado y Eventos  
React utiliza estados para detectar qu� partes del componente deben actualizarse cuando cambia la informaci�n.  
Por ejemplo:  
un componente puede tener un estado text que guarda el valor de un input y otro estado updated para almacenar el texto final tras una acci�n, como pulsar un bot�n.  
Se utilizan funciones para manejar eventos, como onChange para actualizar el estado conforme el usuario escribe, y onClick para actualizar otro estado con el valor almacenado.  
Esto permite que la interfaz se actualice de forma reactiva y eficiente.

## Despliegue de Proyectos React  
Existen m�ltiples plataformas para desplegar aplicaciones React gratuitamente, tales como:  
- GitHub Pages  
- Vercel  
- Netlify  
Estas plataformas permiten tener la aplicaci�n en producci�n accesible en l�nea, no solo en desarrollo local.

## Estructura de este Proyecto Web en React  
La estructura de la carpeta principal de nuestro proyecto React llamado react1 se organiza de la siguiente manera:

### Directorios principales  
- .git: Carpeta oculta que contiene toda la informaci�n del control de versiones Git. Permite gestionar el historial de cambios, ramas y sincronizaci�n con repositorios remotos.  
- node_modules: Carpeta donde se almacenan todas las dependencias y librer�as instaladas a trav�s de npm (Node Package Manager). Es creada autom�ticamente al instalar paquetes.  
- public: Carpeta que contiene archivos est�ticos p�blicos, como el archivo principal index.html, �conos (favicon), y otros recursos accesibles directamente desde el navegador.  
- src: Carpeta principal donde se encuentra todo el c�digo fuente de la aplicaci�n React. Aqu� se desarrollan los componentes, estilos y recursos espec�ficos de la aplicaci�n.

### Archivos principales en la ra�z del proyecto  
- .gitignore: Archivo que especifica qu� archivos o carpetas deben ser ignorados por Git, como node_modules o archivos temporales.  
- package.json: Archivo de configuraci�n del proyecto que define las dependencias, scripts de ejecuci�n y metadatos del proyecto.  
- package-lock.json: Archivo que registra las versiones exactas de las dependencias instaladas para garantizar instalaciones reproducibles.  
- README.md: Archivo de texto en formato Markdown que usualmente contiene informaci�n y documentaci�n sobre el proyecto.

### Detalle de la carpeta src  
Dentro de la carpeta src, donde reside el n�cleo de la aplicaci�n React, se organiza el proyecto de la siguiente forma:  
- assets: Carpeta dedicada a almacenar los recursos gr�ficos y multimedia usados en la aplicaci�n, como im�genes. En este proyecto, contiene archivos como background.png, hombre.png, mujer.png, otro.png y logo.svg.  
- Archivos de estilos CSS:  
  - App.css: Estilos espec�ficos para el componente principal App.js.  
  - index.css: Estilos globales que afectan toda la aplicaci�n.  
- Archivos JavaScript y JSX (componentes y l�gica):  
  - App.js: Componente ra�z que organiza la estructura general y ruteo de la aplicaci�n.  
  - Dashboard.jsx: Componente que representa la vista o secci�n principal despu�s del login.  
  - Home.jsx: Componente para la p�gina de inicio o landing page.  
  - LoginForm.jsx: Componente que contiene el formulario para iniciar sesi�n.  
  - RegisterForm.jsx: Componente con el formulario de registro de usuarios.  
  - index.js: Punto de entrada de la aplicaci�n React, donde se monta el componente ra�z en el DOM.  
  - reportWebVitals.js: Archivo para medir el rendimiento de la aplicaci�n, siguiendo las recomendaciones oficiales de React.

Esta descripci�n aporta claridad sobre c�mo est� organizado el proyecto, facilitando su comprensi�n y mantenimiento.

# Proyecto React1

## Objetivo del proyecto  
Es una aplicaci�n web simple con autenticaci�n de usuarios, donde puedes:  
- Registrarte con nombre, apellido, email, contrase�a y g�nero.  
- Iniciar sesi�n con email y contrase�a.  
- Acceder a un dashboard personalizado despu�s del login.  
- Mostrar una p�gina de bienvenida con mensaje personalizado despu�s del registro.  
- Manejar usuarios y sesiones con almacenamiento en localStorage.  
- Navegar entre las distintas p�ginas usando React Router.

---

## Principales componentes  
- LoginForm.jsx: formulario para iniciar sesi�n. Valida usuario y contrase�a, muestra errores, navega al dashboard con datos del usuario.  
- RegisterForm.jsx: formulario para registrarse. Valida datos, guarda usuario nuevo en localStorage, navega a la p�gina de bienvenida (Home).  
- Dashboard.jsx: muestra mensaje de bienvenida con el nombre completo del usuario logueado, permite continuar a la navegaci�n principal (Home).  
- Home.jsx: p�gina de bienvenida post registro con mensaje personalizado y bot�n para volver al login.  
- App.js: configuraci�n de rutas usando React Router para navegar entre los componentes seg�n la URL.

## C�mo funciona la navegaci�n  
- Al abrir localhost:3000, el usuario ve el formulario de login (LoginForm).  
- Desde ah�, puede ir a registro (RegisterForm).  
- Al registrarse, se guarda el usuario en localStorage y se redirige a /home mostrando mensaje personalizado.  
- Al iniciar sesi�n, si es correcto, se redirige a /dashboard con mensaje personalizado.  
- Desde dashboard, puede continuar a home o cerrar sesi�n.

## Uso de localStorage  
- Los usuarios registrados se almacenan en localStorage como un arreglo JSON.  
- El nombre completo del usuario se guarda por separado para mostrar mensajes personalizados.  
- No hay backend, todo es almacenamiento local en el navegador.

## Estilos y dise�o  
- Se usa CSS para el dise�o, con flexbox para centrar los formularios.  
- Inputs alineados para mejor experiencia.  
- Fondo personalizado en el login.

## C�digo relevante  
- Validaciones en formularios para asegurar que los campos sean correctos.  
- Manejo de estado con React Hooks (useState).  
- Navegaci�n program�tica con useNavigate de React Router.  
- Representaciones graficas para mostrar mensajes de error.  
- Importaci�n y uso de im�genes para fondo.

# Conclusi�n  
Este tutorial b�sico sirve para aclarar dudas sobre c�mo empezar con React desde cero. Aunque no se profundiza en temas avanzados, se presentan los conceptos esenciales y la estructura de un proyecto t�pico. React es una tecnolog�a muy demandada y con abundante material para continuar aprendiendo.

---

# Informaci�n extra�da de la web como:  
- https://www.w3schools.com/react/default.asp  
- https://www.hackaboss.com/blog/react-utilidad
