var xhr = new XMLHttpRequest();
var dataList = document.getElementById("json-datalist");
var input = document.getElementById("ajax");

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
    var data = JSON.parse(xhr.responseText);
    for (i in data.pokemon) {
      var option = document.createElement("option");
      var txt = data.pokemon[i].name;
      option.className = i;
      option.value = txt;
      console.log("txt", txt);
      // Add the <option> element to the <datalist>.
      dataList.appendChild(option);
    }
  }
};

xhr.open("GET", "/data", true);
xhr.send();
