# I-Choose-Who-
Alex, Charlie, Sak and Jason's project.

# Pokedex app
![](https://media.giphy.com/media/U2nN0ridM4lXy/giphy.gif)

[Link to our project](https://i-choose-who.herokuapp.com/)

### Goals 🥅

Create a pokedex app that can: 
1. Display a dropdown list of pokemon
2. Display more information about a specific pokemon when the user selects one from the list.
3. Get more comfortable with node.js!


### Dependencies to install 💻
![](https://media.giphy.com/media/TFhobYtkih62k/giphy.gif)

- Tape and Tap-spec
- nodemon

### Use locally:

- git clone this repo
- npm install
- set up your local server: npm run dev
- type localhost:4000 in your browser

### Problems 😥 
![travolta](https://media.giphy.com/media/yuI7fL5cR1YeA/giphy.gif)

**Testing**

**Accessibility**
- We definitely let our accessibility fall by the wayside. We deployed with a whopping Lighthouse score of 22. Problems included: **no labels** attached to our input field; **no alt** attributes on img elements; no **title** in the head.

- Placeholder text is automatically greyed out... which is a good design convention. However, this came through as an accessibility issue - poor colour contrast between grey text and white input field. 

- We managed to resolve all this however, and get our audit score up to 100!

[](https://media.giphy.com/media/k2bbmbmvUo7gA/giphy.gif)


### **Tests** 

- We had problems testing, we managed to test nothing!

### Stretch Goals 🏃🥅
![stretch](https://media.giphy.com/media/SwMMo3AMDwqru/giphy.gif)

- Better CSS
- Display more info about each Pokemon
- Refactor our handlers.js file. Our ```handleHomeRoute```, ```handlePublic``` and ```handleJSON``` functions all shared a lot of similar code.

