$(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const firstKM = urlParams.get("firstKM");
  if (firstKM.search(",") != -1) {
    firstKM = firstKM.replace(",", ".");
  }
  const secondKM = urlParams.get("secondKM");
  if (secondKM != null) {
    if (secondKM.search(",") != -1) {
      secondKM = secondKM.replace(",", ".");
    }
  }
  const ref = urlParams.get("ref");
  const dateDeb = urlParams.get("dateDeb");
  const dateFin = urlParams.get("dateFin");
  const dist = urlParams.get("dist");
  const tarif = urlParams.get("tarif");
  updateSelector(tarif);
  updateRef(ref);
  updateDate(dateDeb, dateFin);
  updateDist(dist);
  updatePrice(firstKM, secondKM);
  const $btnPrint = document.querySelector("#btnPrint");
  $btnPrint.addEventListener("click", () => {
    window.print();
});
});
function updatePrice(firstKM, secondKM) {
  //prixFirst
  //prixFirstEKM
  var totalFirst = $("#prixFirstEKM").text().replace(",", ".") * firstKM;
  $("#prixFirst").html((Math.round(totalFirst * 10) / 10).toFixed(2));
  //prixSecond
  //prixSecEKM
  var totalSecond = $("#prixSecEKM").text().replace(",", ".") * secondKM;
  $("#prixSecond").html((Math.round(totalSecond * 10) / 10).toFixed(2));
  //total
  if ((totalSecond + totalFirst + 2.7) > 7.3) {
    $("#total").html((Math.round((totalSecond + totalFirst + 2.7) * 10) / 10).toFixed(2));
  } else {
    $("#total").html((7.3).toFixed(2));
  }
    
  if ((totalSecond + totalFirst + 2.7) > 7.3) {
    $("#tva").html(((totalSecond + totalFirst + 2.7) - ((totalSecond + totalFirst + 2.7) / 1.1)).toFixed(2));
  } else {
    $("#tva").html((7.3 - (7.3 / 1.1)).toFixed(2));
  }
}
function updateDist(dist) {
  $("#distance").html(dist);
}
function updateRef(ref) {
  $("#reference").html(ref);
}
function updateDate(dateDeb, dateFin) {
  var formattedDate = new Date(dateDeb);
  var d = (formattedDate.getDate() < 10 ? "0" : "") + formattedDate.getDate();
  var m = formattedDate.getMonth();
  m += 1;
  m = (m < 10 ? "0" : "") + m;
  var y = formattedDate.getFullYear() - 2000;
  $("#dates").html(d + "/" + m + "/" + y);
  var hoursDeb = formattedDate.getHours();
  var minuteDeb =
    (formattedDate.getMinutes() < 10 ? "0" : "") + formattedDate.getMinutes();
  var heuresFin = dateFin.split(":");
  var hoursFin = heuresFin[0];
  var minuteFin = (heuresFin[1] < 10 ? "0" : "") + heuresFin[1];
  if (hoursDeb > 9) {$("#heures").html(hoursDeb + ":" + minuteDeb + " - " + dateFin);}
  else {$("#heures").html("0" + hoursDeb + ":" + minuteDeb + " - " + dateFin);}
}
function updateSelector(tarifType) {
  var conceptName = tarifType;
  $("#tarif").html(tarifType);
  switch (conceptName) {
    case "A":
      $("#firstRow").html(
        '<td>A</td><td id="prixFirstEKM">1,00</td><td id="prixFirstEMin">0,51</td><td id="prixFirst">XXXXXX</td>'
      );
      $("#secondRow").html("");
      $("#total").css("top", "115.5mm");
      $("#tva").css("top", "123.5mm");
      break;
    case "B":
      $("#firstRow").html(
        '<td>B*</td><td id="prixFirstEKM">1,50</td><td id="prixFirstEMin">0,64</td><td id="prixFirst">XXXXXX</td>'
      );
      $("#secondRow").html("");
      $("#total").css("top", "115.5mm");
      $("#tva").css("top", "123.5mm");
      break;
    case "A,B":
      $("#firstRow").html(
        '<td>A</td><td id="prixFirstEKM">1,00</td><td id="prixFirstEMin">0,51</td><td id="prixFirst">XXXXXX</td>'
      );
      $("#secondRow").html(
        '<td>B*</td><td id="prixSecEKM">1,50</td><td id="prixSecEMin">0,64</td><td id="prixSecond">XXXXXXX</td>'
      );
      $("#total").css("top", "120mm");
      $("#tva").css("top", "128mm");
      break;
    case "B,A":
      $("#firstRow").html(
        '<td>B*</td><td id="prixFirstEKM">1,50</td><td id="prixFirstEMin">0,64</td><td id="prixFirst">XXXXXX</td>'
      );
      $("#secondRow").html(
        '<td>A</td><td id="prixSecEKM">1,00</td><td id="prixSecEMin">0,51</td><td id="prixSecond">XXXXXXX</td>'
      );
      $("#total").css("top", "120mm");
      $("#tva").css("top", "128mm");
      break;
    case "C":
      $("#firstRow").html(
        '<td>C</td><td id="prixFirstEKM">2,00</td><td id="prixFirstEMin">0,51</td><td id="prixFirst">XXXXXX</td>'
      );
      $("#secondRow").html("");
      $("#total").css("top", "115.5mm");
      $("#tva").css("top", "123.5mm");
      break;
    case "D":
      $("#firstRow").html(
        '<td>D*</td><td id="prixFirstEKM">3,00</td><td id="prixFirstEMin">0,64</td><td id="prixFirst">XXXXXX</td>'
      );
      $("#secondRow").html("");
      $("#total").css("top", "115.5mm");
      $("#tva").css("top", "123.5mm");
      break;
    case "C,D":
      $("#firstRow").html(
        '<td>C</td><td id="prixFirstEKM">2,00</td><td id="prixFirstEMin">0,51</td><td id="prixFirst">XXXXXX</td>'
      );
      $("#secondRow").html(
        '<td>D*</td><td id="prixSecEKM">3,00</td><td id="prixSecEMin">0,64</td><td id="prixSecond">XXXXXXX</td>'
      );
      $("#total").css("top", "120mm");
      $("#tva").css("top", "128mm");
      break;
    case "D,C":
      $("#firstRow").html(
        '<td>D*</td><td id="prixFirstEKM">3,00</td><td id="prixFirstEMin">0,64</td><td id="prixFirst">XXXXXX</td>'
      );
      $("#secondRow").html(
        '<td>C</td><td id="prixSecEKM">2,00</td><td id="prixSecEMin">0,51</td><td id="prixSecond">XXXXXXX</td>'
      );
      $("#total").css("top", "120mm");
      $("#tva").css("top", "128mm");
      break;
  }
}
