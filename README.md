# REACT WEATHER CHALLENGE

Este desafío implica la creación de una aplicación en React que consume la API de OpenWeather y muestre el clima actual y las predicciones para los próximos días. El usuario puede seleccionar una lista de ciudades ya predeterminadas o elegir su ubicación actual.

Se utiliza `create-react-app`, `bootstrap`, `@mdi-font` y `sass` como herramientas principales para cumplir con el desafío. La arquitectura de código utilizada está basada en las convenciones estándar de la industria.

La aplicación se encuentra desplegada y disponible en [Github Pages](https://adc91.github.io/challenge-rflow)

## Implementación local

Si lo desea, la aplicación puede ejecutarse en su entorno local. Para lograr esto siga las siguientes instrucciones:

* Clone el repositorio: `git clone git@github.com:adc91/challenge-rflow.git`
* Ingrese al directorio del proyecto creado en el paso anterior: `cd challenge-rflow/`
* Instale todoas las dependencias necesarias para el proyecto: `yarn install` o `npm install`
* Compile el proyecto para su versión de producción: `yarn build` o `npm run build`
* Instale el servidor NPM para ejecutar el proyecto localmente: `yarn global add serve` o `npm install -g serve`
* Ejecute la versión optimizada en su entorno local: `yarn run serve` o `npm run serve`
* Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador

## Scripts disponibles

En el directorio del proyecto, ejecute:

### `yarn start` o `npm run start`

Ejecuta la aplicación en el modo de desarrollo.\
Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador.

La página se volverá a cargar cuando realice cambios.\
También puede ver errores en consola.

### `yarn build` o `npm run build`

Construye la aplicación para producción en la carpeta `build`\
Empaqueta correctamente React en modo de producción y crea los archivos optimizados para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen hashes.\
Una vez completada la ejecución la aplicación estará lista para el ser implementada en producción.

### `yarn test`

Ejecuta los tests en modo interactivo.
De forma predeterminada, ejecuta pruebas relacionadas con los archivos modificados desde el último commit.

#### `yarn test -- --watchAll=false` o `npm run test -- --watchAll=false`

Ejecuta todos los tests configurados sin el modo interactivo. Utilice esta opción para realizar ejecutar todos los tests.
