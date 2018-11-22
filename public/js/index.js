// alert("index.js file is being served!");
//
// (function() {
//   function handleErr(err) {
//     // var h1 = document.createElement("h1");
//     // h1.innerHTML = "Server Error";
//     console.log("server error");
//     // document.querySelector("#repos").appendChild(h1);
//   }
//
//   function renderRepos(repos) {
//     console.log("name", repos.pokemon[0].name);

//
//     // var view_capitalised = view.toUpperCase();
//     // var other_view = view === 'fac' ? 'dwyl' : 'fac';
//     // var other_view_capitalised = other_view.toUpperCase();
//     //
//     // var h1 = document.createElement('h1');
//     // h1.innerHTML = view_capitalised + ' Repositories';
//     // document.querySelector('#repos').appendChild(h1);
//     //
//     // var link = document.querySelector('#link');
//     // link.href = '/' + other_view;
//     // link.innerHTML = 'See ' + other_view_capitalised + '\'s repositories';
//     //
//     // repos.forEach(function (repo, i) {
//     //   var h3 = document.createElement('h3');
//     //   var a = document.createElement('a');
//     //   h3.innerHTML = (i + 1) + '. ' + repo.name;
//     //   a.href = repo.url;
//     //   a.appendChild(h3);
//     //   document.querySelector('#repos').appendChild(a);
//     // });
//   }
//
//   request.get("../../data/pokedex.json", function(err, res) {
//     if (err) {
//       handleErr(err);
//     } else {
//       renderRepos(res);
//     }
//   });
// })();

var dataList = document.getElementById("json-datalist");
var input = document.getElementById("ajax");

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
}

function createList(result, x) {
  for (i in result.pokemon) {
    if (x == result.pokemon[i].name) {
      var outputName = result.pokemon[i].name;
      var title = document.getElementById("title");
      title.textContent = outputName;
      var outputImg = result.pokemon[i].img;
      console.log(outputImg);
      var image = document.getElementById("img");
      image.src = outputImg;
    }
  }
}
// var outputName = result.pokemon[i].name;
// // var outputImg = result.pokemon[i].img;
// // var outputCandy = result.pokemon[i].candy;
// var outputWeaknesses = result.pokemon[i].weaknesses;
// console.log(outputImg);
// console.log(outputName);

//
// function eventHandler(event) {
//   var inputvalue = document.querySelector("input").value;
//   console.log(event.target.value);
//   console.log(inputvalue);
//   return inputValue;
// }
//
// const button = document.querySelector("button");
// button.addEventListener("click", eventHandler, false);
//
// console.log();
//
// function dataLoop(inputValue) {}
