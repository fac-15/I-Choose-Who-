# I-Choose-Who-
Alex, Charlie, Sak and Jason's project.

# Pokedex 
![](https://media.giphy.com/media/U2nN0ridM4lXy/giphy.gif)

[Link to our project](https://i-choose-who.herokuapp.com/)

### Goals 🥅

Create a pokedex app that can: 
1. display a list to search a list of pokemon
2. provide pokemon information to the user
3. To get more comfortable with node.js 


### Dependencies to install 💻
![](https://media.giphy.com/media/TFhobYtkih62k/giphy.gif)

- JavaScript
- HTML
- CSS
- Tape for testing
- Heroku

### Use locally:

- git clone this repo
- npm install
- set up your local server: npm run dev
- type localhost:4000 in your browser

### **Processes** 

File structure

![screen shot 2018-11-23 at 12 35 30](https://user-images.githubusercontent.com/25176118/48943813-58a2ff00-ef1c-11e8-9075-55a402e0fc2a.png)


Server side 

server.js

const http = require("http");
const router = require("./router");
const port = process.env.PORT || 4000;

const server = http.createServer(router);

server.listen(port);

console.log(`server up and running on localhost:${port}`);




### Problems 😥 
![travolta](https://media.giphy.com/media/yuI7fL5cR1YeA/giphy.gif)

- Testing

- Accessibility
-- We definitely let our accessibility fall by the wayside. We deployed with a whopping Lighthouse score of 22. Problems included: no labels attached to our input field; no alt attributes on img elements; no title in the head.

-- Placeholder text is automatically greyed out... which is a good design convention. However, this came through as an accessibility issue - poor colour contrast between grey text and white input field. 

-- We managed to resolve all this and get our audit score up to 100.

### Refactoring



### **Tests** 

- We had problems testing, we managed to test nothing!

### Stretch Goals 🏃🥅
![stretch](https://media.giphy.com/media/SwMMo3AMDwqru/giphy.gif)

- better css
- more info about the pokemon

