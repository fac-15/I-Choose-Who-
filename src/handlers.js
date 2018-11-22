const fs = require("fs");
const path = require("path");
const pokeObj = require("../data/pokedex.json");
console.log(pokeObj.pokemon[0]);

const handleHomeRoute = (request, response) => {
  const url = request.url;
  console.log(url);
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, "Content-Type: text/html");
      response.end("<h1>Sorry, we've had a problem on our end</h1>");
    } else {
      response.writeHead(200, "Content-Type: text/html");
      response.end(file);
    }
  });
};

const handlePublic = (request, response, url) => {
  const extension = url.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    //ico: 'image/x-icon',
    jpg: "image/jpeg",
    png: "image/png"
  };

  const filePath = path.join(__dirname, "..", url);
  console.log(filePath);

  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, "Content-Type: text/html");
      response.end("<h1>404 file not found</h1>");
    } else {
      response.writeHead(200, `Content-Type: ${extensionType[extension]}`);
      response.end(file);
    }
  });
  console.log(url);
};

const handleJSON = (request, response) => {
  const url = request.url;
  console.log(url);
  const filePath = path.join(__dirname, "..", "data", "pokedex.json");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      console.log("HANDLED JSON REQ BUT ERROR");
      response.writeHead(500, "Content-Type: text/html");
      response.end("<h1>Sorry, we've had a problem on our end</h1>");
    } else {
      console.log("handled JSON req");
      response.writeHead(200, "Content-Type: application/json");
      response.end(JSON.stringify(pokeObj));
    }
  });
};

module.exports = {
  handleHomeRoute,
  handlePublic,
  handleJSON
};
