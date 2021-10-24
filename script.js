"use strict";

var vardas = document.getElementById("inputValueVardas");
var pavarde = document.getElementById("inputValuePavarde");
var metai = document.getElementById("inputValueMetai");

var add = document.getElementById("add");
var removeFirst = document.getElementById("removeFirst");
var removeLast = document.getElementById("removeLast");

var info = document.getElementById("info");




add.addEventListener("click", function() {
  if (vardas.value && pavarde.value && metai.value && metai.value >= 0) {
    var tr = document.createElement("tr");
    info.append(tr);

    var td = document.createElement("td");
    td.innerText = vardas.value;
    tr.append(td);

    var td = document.createElement("td");
    td.innerText = pavarde.value;
    tr.append(td);



      var td = document.createElement("td");
      td.innerText = metai.value;
      tr.append(td);

    vardas.value = "";
    pavarde.value = "";
    metai.value = "";

  } else {
    alert("Neįrašyta arba blogai įrašyta informaciją");
  }

});

removeFirst.addEventListener("click", function() {
var removeTR = document.getElementsByTagName("td");
  if (removeTR.length) {
    removeTR[0].parentElement.remove();
  }
   else {
    alert("Nėra ko trinti");
  }
});

removeLast.addEventListener("click", function() {
var removeTR1 = document.getElementsByTagName("td");
if (removeTR1.length) {
  removeTR1[removeTR1.length - 1].parentElement.remove();
} else {
  alert("Nėra ko trinti");
}


});
