"use strict"
alert("Įveskite duomenis")

function myCreateFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var fname = row.insertCell(0);
    var lname = row.insertCell(1);
    var age = row.insertCell(2)
    fname.innerHTML = "fname";
    lname.innerHTML = "lname";
    age.innerHTML = "age";
  }
  
  function myDeleteFunction() {
    document.getElementById("myTable").deleteRow(0);
  }