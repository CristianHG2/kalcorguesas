# kalcorguesas
Repository of Kalcor's burgers (Kalcorguesas) (Spanish)

## Añadiendo objetos

La adición de objetos es bien simple, simplemente clona el repositorio y abre el archivo `objects.js` que esta en el directorio `js`, busca la ubicación del array de objetos que quieras modificar y agrega un nuevo elemento basado en las instrucciones que estan comentadas al inicio del juego, después, agrega el mismo elemento en el archivo `index.php` (Obviamente en markup) con el nombre de la llave de tu nuevo elemento como el ID. Recuerda que también debes tener el atributo `data-type` que puede ser 1 (Para hamburguesas), 2 (Para tareas) y 3 (Para ayudantes).

## Utilizando la maquina de escribir

La funcion `$(element).typeWriter(texto, intervalo, opciones)` simula una maquina de escribir. Se usa como acabamos de demostrar y generalmente se llama al final de una tarea. Para agregar un texto de maquina de escribir, accede a el archivo `taskstext.js` localizado en el directorio `js` y agrega un elemento con el ID de tu tarea.

## Important!

Recuerda que cualquier objeto/elemento relacionado a otro objeto **DEBE** tener la misma ID/nombre que el objeto principal que esta en `objects.js`

**Nota del desarrollador:** Esto es una broma, y te lo podemos deletrear, es una b r o m a, no es para ser tomado en serio. Admiramos mucho el trabajo de Kalcor y es por el que desarrollamos este juego, tomenlo como un tipo de honor a Kalcor.

**Developer's note:** No tuvimos tiempo para documentar el código o hacer readme largo, pero tratamos de hacer el código lo más modular y simple que pudimos. En el siguiente commit agregaremos una documentación mejor pero por ahora solamente podras usar lo que ves.