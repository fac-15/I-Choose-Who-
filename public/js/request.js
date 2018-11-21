var datalist = document.getElementById("json-datalist");
var input = document.getElementById("ajax");
var xhr = new XMLHttpRequest();

console.log(xhr);
console.log(xhr.responseText);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
  console.log(xhr.responseText);
      // var data = JSON.parse(xhr.responseText);
      // console.log(data);
      // for (i in data.pokemon){
      //   var option = document.createElement('option');
      //   var txt = data.pokemon[i].name
      //   option.value = txt;
      //   console.log("txt", txt);
      //   // Add the <option> element to the <datalist>.
      //   dataList.appendChild(option);


  }
  };

  xhr.open("GET", /, true);
  xhr.send();
