# PipesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

---

## [Instalación de PrimeNG](https://primeng.org/installation)

Ejecutar el siguiente comando en el proyecto de Angular:
```bash
npm install primeng
```
Finalizada la instalación, podemos observar que en el **package.json** se agrega la dependencia instalada:
```json
"dependencies": {
    "@angular/animations": "^16.0.0",
    "@angular/common": "^16.0.0",
    "@angular/compiler": "^16.0.0",
    "@angular/core": "^16.0.0",
    "@angular/forms": "^16.0.0",
    "@angular/platform-browser": "^16.0.0",
    "@angular/platform-browser-dynamic": "^16.0.0",
    "@angular/router": "^16.0.0",
    "primeng": "^16.0.2", <--------------------------------- PrimeNG
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.13.0"
}
```
Ahora, necesitamos instalar el archivo core de PrimeNG y un theme de nuestra elección. 
Los estilos Theme y Core son los archivos css necesarios de los componentes, [visite la sección Temas](https://primeng.org/theming#themes) para ver la lista completa de temas disponibles para elegir. Los estilos se pueden importar en el archivo angular.json o src/styles.css. En mi caso, lo instalaremos en el archivo **angular.json**.

```json
"styles": [
  "node_modules/primeng/resources/themes/lara-dark-blue/theme.css",
  "node_modules/primeng/resources/primeng.min.css",
  ....
],
```

Pero si quisiéramos instalarlo en el archivo de estilos global **styles.scss**, sería así: 

```css
@import "primeng/resources/themes/lara-dark-blue/theme.css";
@import "primeng/resources/primeng.css";
```

**NOTA**
> Usualmente cuando se hace algún cambio en el **angular.json** los cambios no se aplican automáticamente, se tiene que 
> bajar la aplicación y volver a levantarlo para que los cambios hagan efecto.

Cada tema PrimeNG tiene su propia familia de fuentes, por lo que se sugiere aplicarlo a su aplicación para obtener un aspecto unificado. Así que ahora lo que haremos será agregar el siguente estilo en el archivo global de estilos **styles.scss**:
```css

body {
    font-family: var(--font-family);
}
```

Varios componentes utilizan animaciones Angular para mejorar la experiencia del usuario. Las animaciones tienen su propio módulo, se requiere **BrowserAnimationsModule** para ser importado en su aplicación. Si prefiere deshabilitar las animaciones globalmente, importe **NoopAnimationsModule** en su lugar.

En nuestro caso habilitaremos las animaciones:

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        //...
    ],
    //...
})
export class AppModule { }
```

## [Instalación de Íconos](https://primeng.org/icons)

PrimeIcons es la biblioteca de iconos predeterminada de PrimeNG con más de 250 iconos de código abierto desarrollados por PrimeTek. La biblioteca PrimeIcons es opcional ya que los componentes PrimeNG pueden usar cualquier icono con plantillas.

Para que los PrimeIcons estén disponibles en el proyecto debemos ejecutar el siguiente comando:

```bash
npm install primeicons
```
Luego en el archivo **styles.scss** debemos importar el archivo css de la biblioteca de íconos:

```css
@import "primeicons/primeicons.css";
```

## Efecto de burbuja en los componentes

Cada vez que demos click en algún botón o algún componente clickeable veremos una especie de efecto como una burbuja que hace más atractivo los componentes.
Para hacer eso, necesitmaos hacer una inyección de dependencia en el component principal de angular **app.component.ts**

```javascript
import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api'; //<------------

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private primeNgConfig: PrimeNGConfig) { } //<------------

  ngOnInit(): void {
    this.primeNgConfig.ripple = true; //<------------
  }

}
```
