# U1-Ejercicios_Javascript

Conjunto de trabajos de JavaScript para medir nuestro conocimiento sobre el lenguaje y así poder tener una idea mas clara de nuestra experiencia trabajando con este.

# ################################################################################################## #
# ######################################  Ejercicios Basicos ####################################### #
# ################################################################################################## #

1. **Hola Mundo**
   - Descripción: Crea un archivo `hello.js` que imprima "Hola, Mundo" en la consola.

2. **Variables y Operaciones Básicas**
   - Descripción: Declara dos variables `a` y `b` con valores numéricos. Imprime la suma, resta, multiplicación y división de `a` y `b`.

3. **Función de Suma**
   - Descripción: Escribe una función llamada `suma` que reciba dos números como argumentos y devuelva su suma.

4. **Condicionales Básicos**
   - Descripción: Crea una función `mayorDeEdad` que reciba un número como argumento y devuelva "Eres mayor de edad" si el número es mayor o igual a 18, o "Eres menor de edad" de lo contrario.

5. **Bucles Simples**
   - Descripción: Escribe un bucle `for` que imprima los números del 1 al 10.


# ################################################################################################## #
# ####################################  Ejercicios Intermedios ##################################### #
# ################################################################################################## #

6. **Arrays y Métodos Básicos**
   - Descripción: Declara un array con los números del 1 al 5. Agrega el número 6 al final del array y luego imprime el array modificado.

7. **Manipulación de Strings**
   - Descripción: Escribe una función `toUpperCase` que reciba una cadena de texto y devuelva la misma cadena en mayúsculas.

8. **Objetos Básicos**
   - Descripción: Declara un objeto `persona` con propiedades `nombre`, `edad`, y `ciudad`. Imprime cada propiedad en la consola.

9. **Manipulación de Objetos**
   - Descripción: Añade una función `imprimirInfo` dentro del objeto `persona` que imprima una frase con la información del objeto (e.g., "Soy [nombre], tengo [edad] años y vivo en [ciudad]").

10. **Funciones Anónimas y Callbacks**
    - Descripción: Escribe una función `operacion` que reciba dos números y un callback. El callback debe realizar una operación (suma, resta, multiplicación, etc.) con los dos números.

11. **Manipulación de Arrays**
    - Descripción: Crea una función `sumarElementos` que reciba un array de números y devuelva la suma de todos los elementos.

12. **Uso de `map` y `filter`**
    - Descripción: Escribe una función `filtrarPares` que reciba un array de números y devuelva un nuevo array solo con los números pares utilizando `filter`.
    - Objetivo: Aprender a utilizar métodos avanzados de arrays como `filter`.

13. **Funciones Flecha**
    - Descripción: Reescribe la función `filtrarPares` usando la sintaxis de funciones flecha.

14. **Promesas Básicas**
    - Descripción: Escribe una función `promesaSuma` que reciba dos números y devuelva una promesa que se resuelva con la suma de esos números después de 2 segundos.


# ################################################################################################## #
# #####################################  Ejercicios Avanzados ###################################### #
# ################################################################################################## #

> [!NOTE]
> Está sección solo fue terminada hasta el punto 17.

15. **Async/Await**
    - Descripción: Convierte la función `promesaSuma` en una función `async` que use `await` para esperar la resolución de la promesa.

16. **Manipulación Compleja de Arrays**
    - Descripción: Crea una función `duplicarYFiltrar` que reciba un array de números, duplique cada número y luego filtre solo los números mayores a 10.

17. **Reducción de Arrays**
    - Descripción: Escribe una función `contarCaracteres` que reciba un array de strings y devuelva el número total de caracteres de todos los strings utilizando `reduce`.

18. **Uso de `fetch` (Simulación)**
    - Descripción: Simula una llamada a una API externa utilizando `fetch` con la URL `"https://jsonplaceholder.typicode.com/posts"`, y procesa los datos para imprimir solo los títulos de los posts.

19. **Manipulación de Objetos Complejos**
    - Descripción: Crea un objeto `curso` que contenga propiedades `nombre`, `alumnos` (un array de objetos con propiedades `nombre` y `calificacion`). Escribe una función `calcularPromedio` que calcule el promedio de calificaciones de los alumnos.

20. **Aplicación de Clases**
    - Descripción: Crea una clase `Coche` con propiedades `marca`, `modelo`, y `año`. Añade un método `describir` que imprima una descripción del coche. Luego, crea instancias de la clase y llama al método `describir` para cada instancia.

21. **Uso de lodash para Manipulación de Arrays**
Descripción: Utiliza el paquete lodash para encontrar la intersección de dos arrays y ordenarlos de manera ascendente.
- Instrucciones:
  1. Instala lodash usando npm: npm install lodash.
  2. Escribe una función interseccionYOrdenar que reciba dos arrays y devuelva un array con la intersección de ambos, ordenado de manera ascendente.

22. **Uso de axios para Realizar Solicitudes HTTP**
Descripción: Utiliza el paquete axios para realizar una solicitud GET a una API pública y obtener datos.
 - Instrucciones:
   1. Instala axios 
   2. Escribe una función obtenerUsuarios que haga una solicitud GET a "https://jsonplaceholder.typicode.com/users" y muestre los nombres de los usuarios en la consola.

23. **Uso de moment para Manipulación de Fechas**
Descripción: Utiliza el paquete moment para manipular fechas y calcular la diferencia entre dos fechas.
 - Instrucciones:
   1. Instala moment 
   2. Escribe una función diferenciaDias que reciba dos fechas en formato YYYY-MM-DD y devuelva la diferencia en días entre ellas.

24. **Uso de chalk para Colorear la Salida en la Consola**
Descripción: Utiliza el paquete chalk para colorear la salida de texto en la consola.
 - Instrucciones:
   1. Instala chalk 
   2. Escribe una función imprimirMensajeColoreado que reciba un mensaje y un color, y luego imprima el mensaje en la consola con el color especificado.

25. **Uso de bcrypt para Encriptar Contraseñas**
Descripción: Utiliza el paquete bcrypt para encriptar una contraseña.
 - Instrucciones:
   1. Instala bcrypt 
   2. Escribe una función encriptarContrasena que reciba una contraseña y devuelva la contraseña encriptada utilizando bcrypt.