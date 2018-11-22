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
