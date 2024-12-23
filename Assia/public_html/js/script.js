updateSelector();
$(function () {
  $("#tarif").on("change", function (e) {
    updateSelector();
  });
});
function updateSelector() {
  var conceptName = $("#tarif").find(":selected").text();
  switch (conceptName) {
    case "A":
      $("#firstRow").html(
        '<td>A</td><td id="prixFirstEKM">1,00</td><td id="prixFirstEMin">0,51</td><td id="prixFirst"><input class="priceSelector" type="128.5mm" placeholder="km" min="0" name="firstKM"></input></td>'
      );
      $("#secondRow").html("");
      $("#total").css("top", "116.5mm");
      $("#tva").css("top", "124.7mm");
      break;
    case "B":
      $("#firstRow").html(
        '<td>B</td><td id="prixFirstEKM">1,50</td><td id="prixFirstEMin">0,64</td><td id="prixFirst"><input class="priceSelector" type="text" placeholder="km" min="0" name="firstKM"></input></td>'
      );
      $("#secondRow").html("");
      $("#total").css("top", "116.5mm");
      $("#tva").css("top", "124.7mm");
      break;
    case "A,B":
      $("#firstRow").html(
        '<td>A</td><td id="prixFirstEKM">1,00</td><td id="prixFirstEMin">0,51</td><td id="prixFirst"><input class="priceSelector" type="text" placeholder="km" min="0" name="firstKM"></input></td>'
      );
      $("#secondRow").html(
        '<td>B</td><td id="prixSecEKM">1,50</td><td id="prixSecEMin">0,64</td><td id="prixSecond"><input class="priceSelector" type="text" placeholder="km" min="0" name="secondKM"></input></td>'
      );
      $("#total").css("top", "122mm");
      $("#tva").css("top", "130.2mm");
      break;
    case "B,A":
      $("#firstRow").html(
        '<td>B</td><td id="prixFirstEKM">1,50</td><td id="prixFirstEMin">0,64</td><td id="prixFirst"><input class="priceSelector" type="text" placeholder="km" min="0" name="firstKM"></input></td>'
      );
      $("#secondRow").html(
        '<td>A</td><td id="prixSecEKM">1,00</td><td id="prixSecEMin">0,51</td><td id="prixSecond"><input class="priceSelector" type="text" placeholder="km" min="0" name="secondKM"></input></td>'
      );
      $("#total").css("top", "122mm");
      $("#tva").css("top", "130.2mm");
      break;
    case "C":
      $("#firstRow").html(
        '<td>C</td><td id="prixFirstEKM">2,00</td><td id="prixFirstEMin">0,51</td><td id="prixFirst"><input class="priceSelector" type="text" placeholder="km" min="0" name="firstKM"></input></td>'
      );
      $("#secondRow").html("");
      $("#total").css("top", "116.5mm");
      $("#tva").css("top", "124.7mm");
      break;
    case "D":
      $("#firstRow").html(
        '<td>D</td><td id="prixFirstEKM">3,00</td><td id="prixFirstEMin">0,64</td><td id="prixFirst"><input class="priceSelector" type="text" placeholder="km" min="0" name="firstKM"></input></td>'
      );
      $("#secondRow").html("");
      $("#total").css("top", "116.5mm");
      $("#tva").css("top", "124.7mm");
      break;
    case "C,D":
      $("#firstRow").html(
        '<td>C</td><td id="prixFirstEKM">2,00</td><td id="prixFirstEMin">0,51</td><td id="prixFirst"><input class="priceSelector" type="text" placeholder="km" min="0" name="firstKM"></input></td>'
      );
      $("#secondRow").html(
        '<td>D</td><td id="prixSecEKM">3,00</td><td id="prixSecEMin">0,64</td><td id="prixSecond"><input class="priceSelector" type="text" placeholder="km" min="0" name="secondKM"></input></td>'
      );
      $("#total").css("top", "122mm");
      $("#tva").css("top", "130.2mm");
      break;
    case "D,C":
      $("#firstRow").html(
        '<td>D</td><td id="prixFirstEKM">3,00</td><td id="prixFirstEMin">0,64</td><td id="prixFirst"><input class="priceSelector" type="text" placeholder="km" min="0" name="firstKM"></input></td>'
      );
      $("#secondRow").html(
        '<td>C</td><td id="prixSecEKM">2,00</td><td id="prixSecEMin">0,51</td><td id="prixSecond"><input class="priceSelector" type="text" placeholder="km" min="0" name="secondKM"></input></td>'
      );
      $("#total").css("top", "122mm");
      $("#tva").css("top", "130.2mm");
      break;
  }
}
