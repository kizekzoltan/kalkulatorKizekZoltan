function szamolasNegyzet() {  
    var aOldal = document.getElementById("oldal").value;
    var negyzetTerulet = "A területe " + aOldal * aOldal + " cm.";
    document.getElementById("terulet").innerHTML = negyzetTerulet;
    var negyzetKerulet = "A kerülete " + aOldal * 4 + " cm.";
    document.getElementById("kerulet").innerHTML = negyzetKerulet;
  }

function szamolasKor(){
    var sugar = document.getElementById("sugar").value;
    var pi = 3.14
    
    var korTerulet = "A területe " + (sugar*sugar) * pi + " cm.";
    document.getElementById("terulet").innerHTML = korTerulet;

    var korKerulet = "A kerülete " + (2 * sugar) * pi + " cm";
    document.getElementById("kerulet").innerHTML = korKerulet;
  }

function szamolasKocka(){
    var aOldal = document.getElementById("oldal").value;
    var kockaFelszin = "A kocka felszíne " + (aOldal*aOldal) * 6 + " cm."; 
    document.getElementById("felszin").innerHTML = kockaFelszin;
    var kockaTerfogat = "A kocka felszíne " + aOldal*aOldal*aOldal + " cm.";
    document.getElementById("terfogat").innerHTML = kockaTerfogat;
  }

function szamolasTeglatest(){
    var aOldal = document.getElementById("a").value;
    var bOldal = document.getElementById("b").value;
    var cOldal = document.getElementById("c").value;
    var teglatestFelszin = "A téglatest felszíne " + 2 * (aOldal*bOldal+aOldal*cOldal+bOldal*cOldal) + " cm.";
    document.getElementById("felszin").innerHTML = teglatestFelszin;
    var teglatestTerfogat = "A téglatest térfogata " + aOldal*bOldal*cOldal + " cm.";
    document.getElementById("terfogat").innerHTML = teglatestTerfogat;
  }

  function validateForm() {
    var ertekOldal=document.getElementById("oldal").value;
    if (ertekOldal=="0"){
      alert("Ez az érték nem megfelelő!");
      return false;
    } 
    var ertekA=document.getElementById("a").value;
    if (ertekA=="0"){
      alert("Ez az érték nem megfelelő!");
      return false;
    }
    var ertekB=document.getElementById("b").value;
    if (ertekB=="0"){
      alert("Ez az érték nem megfelelő!");
      return false;
    }
    var ertekC=document.getElementById("c").value;
    if (ertekC=="0"){
      alert("Ez az érték nem megfelelő!");
      return false;
    }
    var ertekS=document.getElementById("sugar").value;
    if (ertekS=="0"){
        alert("Ez az érték nem megfelelő!");
        return false;
    }
}