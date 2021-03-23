// import { createServer } from "http";
const http = require("http");

const router = (request, response) => {
  console.log("nueva peticion!");
  console.log(request.url);
  // respuesta al usuario

  switch (request.url) {
    case "/hola":
      response.write("Hola que tal!");
      response.end();

      break;

    default:
      response.write("ERROR 404");
      response.end();
  }
  //   response.writeHead(201, { "Content-Type": "text/plain" });
  //   response.write("hola, ya se conecto desde Nodejs");
  //   response.end();
};

const puerto = 3000;

http.createServer(router).listen(puerto);

console.log("Escuchando HTTP en el puerto 3000");
