# I Choose Who?
Alex, Charlie, Sak and Jason's project.

# Pokedex app
![](https://media.giphy.com/media/U2nN0ridM4lXy/giphy.gif)

[Link to our project](https://i-choose-who.herokuapp.com/)

### Goals 🥅

Create a pokedex app that can: 
1. Display a dropdown list of pokemon to the user
2. Provide information about the specific pokemon that the user selects 
3. To get more comfortable with node.js 


### Dependencies to install 💻
![](https://media.giphy.com/media/TFhobYtkih62k/giphy.gif)

- Tape and tap-spec for testing
- nodemon

### Use locally:

- git clone this repo
- npm install
- set up your local server: npm run dev
- type localhost:4000 in your browser

### **Processes** 

File structure

![screen shot 2018-11-23 at 12 35 30](https://user-images.githubusercontent.com/25176118/48943813-58a2ff00-ef1c-11e8-9075-55a402e0fc2a.png)


Server side 

server

```javascript
const http = require("http");
const router = require("./router");
const port = process.env.PORT || 4000;

const server = http.createServer(router);

server.listen(port);

console.log(`server up and running on localhost:${port}`);
```

router
  ```javascript
  const http = require("http");
  const handlers = require("./handlers.js");

  const router = (request, response) => {
    const url = request.url;
    if (url === "/") {
      handlers.handleHomeRoute(request, response);
    } else if (url.indexOf("public") !== -1) {
      handlers.handlePublic(request, response, url);
    } else if (url.indexOf("data") !== -1) {
      handlers.handleJSON(request, response, url);
    } else {
      response.writeHead(404, "Content-Type: text/html");
      response.end("<h1>404 file not found</h1>");
    }
  };

  module.exports = router;

  ```

handler 

router
```javascript
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

```
Client side

request.js

```javascript
const http = require("http");
const handlers = require("./handlers.js");

const router = (request, response) => {
  const url = request.url;
  if (url === "/") {
    handlers.handleHomeRoute(request, response);
  } else if (url.indexOf("public") !== -1) {
    handlers.handlePublic(request, response, url);
  } else if (url.indexOf("data") !== -1) {
    handlers.handleJSON(request, response, url);
  } else {
    response.writeHead(404, "Content-Type: text/html");
    response.end("<h1>404 file not found</h1>");
  }
};

module.exports = router;

```

index.js 


```javascript
fetchData(function(result) {
  createOption(result);
  eventHandler(result);
});
function createOption(result) {
  for (i in result.pokemon) {
    var option = document.createElement("option");
    var txt = result.pokemon[i].name;
    option.className = i;
    option.value = txt;
    dataList.appendChild(option);
  }
}

function eventHandler(result) {
  var input = document.getElementById("ajax");

  input.addEventListener(
    "change",
    function(e) {
      var newValue = e.target.value;
      console.log("check", newValue);
      createList(result, newValue);
    },
    false
  );

```



### Problems 😥 
![travolta](https://media.giphy.com/media/yuI7fL5cR1YeA/giphy.gif)

Testing

**Accessibility**
- We definitely let our accessibility fall by the wayside. We deployed with a whopping Lighthouse score of **22**. Problems included: **no labels** attached to our input field; **no alt** attributes on img elements; **no title** in the head.

- An interesting accessibility issue is placeholder text being automatically greyed out. On one hand, this is a good design convention. However, this results in poor colour contrast between grey text and white input field. 

- We managed to resolve all issues and get our audit score up to **100**. 🎉🎉🎉

### Refactoring



### **Tests** 

- We had problems testing, we managed to test nothing!

### Stretch Goals 🏃🥅
![stretch](https://media.giphy.com/media/SwMMo3AMDwqru/giphy.gif)

- Better css
- More info about the selected pokemon
- Desktop friendly
- Refactoring: our handlers.js file had different functions that all shared a fair amount of similar code.

