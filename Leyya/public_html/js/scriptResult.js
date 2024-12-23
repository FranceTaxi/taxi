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
  $("#prixFirst").html(totalFirst.toFixed(2));
  $("#km1").html(firstKM + "km");
  //prixSecond
  //prixSecEKM
  var totalSecond = $("#prixSecEKM").text().replace(",", ".") * secondKM;
  $("#prixSecond").html(totalSecond.toFixed(2));
  $("#km2").html(secondKM + "km");
  //total
  if ((totalSecond + totalFirst + 2.7) > 7.3) {
    $("#total").html((totalSecond + totalFirst + 2.7).toFixed(2));
  } else {
    $("#total").html((7.3).toFixed(2));
  }
    
  if ((totalSecond + totalFirst + 2.7) > 7.3) {
    $("#tva").html(((totalSecond + totalFirst + 2.7) - ((totalSecond + totalFirst + 2.7) / 1.1)).toFixed(2));
  } else {
    $("#tva").html((7.3 - (7.3 / 1.1)).toFixed(2));
  }
  if ((totalSecond + totalFirst + 2.7) > 7.3) {
    $("#totaltva").html(((totalSecond + totalFirst + 2.7)-((totalSecond + totalFirst + 2.7) - ((totalSecond + totalFirst + 2.7) / 1.1))).toFixed(2));
  } else {
    $("#totaltva").html((7.3 - (7.3 - (7.3 / 1.1))).toFixed(2));
  }
}
function updateDist(dist) {
  $("#distance").html(dist + " km");
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
  var y = formattedDate.getFullYear();
  $("#dates").html(d + "/" + m + "/" + y);
  var hoursDeb = formattedDate.getHours();
  var minuteDeb =
    (formattedDate.getMinutes() < 10 ? "0" : "") + formattedDate.getMinutes();
  var heuresFin = dateFin.split(":");
  var hoursFin = heuresFin[0];
  var minuteFin = (heuresFin[1] < 10 ? "0" : "") + heuresFin[1];
  $("#heure1").html(hoursDeb + ":" + minuteDeb);
  $("#heure2").html(dateFin);
}
function updateSelector(tarifType) {
  var conceptName = tarifType;
  $("#tarif").html(tarifType);
  switch (conceptName) {
    case "A":
      $("#firstRow").html(
        '<td>(1.00€/km,26.20€/h)</td><td id="prixFirstEKM">1.00</td><td id="prixFirstEMin">0.51</td><td id="prixFirst">XXXXXX</td>'
      );
      $("#secondRow").html("");
      $("#total").css("top", "82.15mm");
      $("#tva").css("top", "86.95mm");
      $("#totaltva").css("top", "89.95mm");
      break;
    case "B":
      $("#firstRow").html(
        '<td>(1.50€/km,31.46€/h)</td><td id="prixFirstEKM">1.50</td><td id="prixFirstEMin">0.64</td><td id="prixFirst">XXXXXX</td>'
      );
      $("#secondRow").html("");
      $("#total").css("top", "82.15mm");
      $("#tva").css("top", "86.95mm");
      $("#totaltva").css("top", "89.95mm");
      break;
    case "A,B":
      $("#firstRow").html(
        '<td>(1.00€/km,26.20€/h)</td><td id="prixFirstEKM">1.00</td><td id="prixFirstEMin">0.51</td><td id="prixFirst">XXXXXX</td>'
      );
      $("#secondRow").html(
        '<td>(1.50€/km,31.46€/h)</td><td id="prixSecEKM">1.50</td><td id="prixSecEMin">0.64</td><td id="prixSecond">XXXXXXX</td>'
      );
      $("#total").css("top", "82.15mm");
      $("#tva").css("top", "86.95mm");
      $("#totaltva").css("top", "89.95mm");
      break;
    case "B,A":
      $("#firstRow").html(
        '<td>(1.50€/km,31.46€/h)</td><td id="prixFirstEKM">1.50</td><td id="prixFirstEMin">0.64</td><td id="prixFirst">XXXXXX</td>'
      );
      $("#secondRow").html(
        '<td>(1.00€/km,26.20€/h)</td><td id="prixSecEKM">1.00</td><td id="prixSecEMin">0.51</td><td id="prixSecond">XXXXXXX</td>'
      );
      $("#total").css("top", "82.15mm");
      $("#tva").css("top", "86.95mm");
      $("#totaltva").css("top", "89.95mm");
      break;
    case "C":
      $("#firstRow").html(
        '<td>(2.00€/km,26.20€/h)</td><td id="prixFirstEKM">2.00</td><td id="prixFirstEMin">0.51</td><td id="prixFirst">XXXXXX</td>'
      );
      $("#secondRow").html("");
      $("#total").css("top", "82.15mm");
      $("#tva").css("top", "86.95mm");
      $("#totaltva").css("top", "89.95mm");
      break;
    case "D":
      $("#firstRow").html(
        '<td>(3.00€/km,31.46€/h)</td><td id="prixFirstEKM">3.00</td><td id="prixFirstEMin">0.64</td><td id="prixFirst">XXXXXX</td>'
      );
      $("#secondRow").html("");
      $("#total").css("top", "82.15mm");
      $("#tva").css("top", "86.95mm");
      $("#totaltva").css("top", "89.95mm");
      break;
    case "C,D":
      $("#firstRow").html(
        '<td>(2.00€/km,26.20€/h)</td><td id="prixFirstEKM">2.00</td><td id="prixFirstEMin">0.51</td><td id="prixFirst">XXXXXX</td>'
      );
      $("#secondRow").html(
        '<td>(3.00€/km,31.46€/h)</td><td id="prixSecEKM">3.00</td><td id="prixSecEMin">0.64</td><td id="prixSecond">XXXXXXX</td>'
      );
      $("#total").css("top", "82.15mm");
      $("#tva").css("top", "86.95mm");
      $("#totaltva").css("top", "89.95mm");
      break;
    case "D,C":
      $("#firstRow").html(
        '<td>(3.00€/km,31.46€/h)</td><td id="prixFirstEKM">3.00</td><td id="prixFirstEMin">0.64</td><td id="prixFirst">XXXXXX</td>'
      );
      $("#secondRow").html(
        '<td>(2.00€/km,26.20€/h)</td><td id="prixSecEKM">2.00</td><td id="prixSecEMin">0.51</td><td id="prixSecond">XXXXXXX</td>'
      );
      $("#total").css("top", "82.15mm");
      $("#tva").css("top", "86.95mm");
      $("#totaltva").css("top", "89.95mm");
      break;
  }
}
