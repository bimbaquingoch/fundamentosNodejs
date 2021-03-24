# NodeJS 🔙 🔚

- Concurrencia

  > Javascript es concurrente y monohilo con salidad asíncronas, un proceso por cada núcleo del procesador

- Módulos

  > Todo lo que no sea sintaxis de programación, son modulos, vienen por defecto en Node y se puede crear módulos.

- Orientado a Eventos
  > Hay un bucle de eventos que se ejecuta constantemente

### Event Loop

- Event Queue:
  > Contienen todos los eventos que se generan por nuestro código (Funciones, peticiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.
- Event Loop:
  > Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, enviará el evento al Thread Pool.
- Thread Pool:
  > Se encarga de getionar los eventos de forma asíncrona. Una vez terminado, lo devuelve al Event Loop que verifica si lo pasa al Event Queue o no.

### Lo peligroso de que Node sea monohilo es que si ocurre un error, se detiene por completo el proceso!

## Variables de entorno

> let web = process.env.WEB || "No hay web";

> let variable = process.env.NOMBRE_DE_VARIABLE

<hr/>

### Nodemon y PM2

| Nodemo               | PM2                    |
| -------------------- | ---------------------- |
| Para local           | Para producción        |
| `nodemon archivo.js` | `pm2 start archivo.js` |

```
pm2 status
pm2 monitor
pm2 logs
pm2 stop (id)
pm2 stop 0, 1, 2 ...
pm2 start 0, 1, 2 ...
```

## Datos almacenados y datos en memoria

| Almacenados           | En memoria                 |
| --------------------- | -------------------------- |
| En disco es más lento | En memoria es súper rápido |
