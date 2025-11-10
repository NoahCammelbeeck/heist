document.querySelector("#Get_away_driver").addEventListener("click", updateInfoboxDriver);

function updateInfoboxDriver() {
  document.querySelector("h2").innerHTML = "Get-Away Driver er kørt";
  document.querySelector("#efficiency").innerHTML = "<h2>Situationen</h2> <p>Du har ingen til at køre dig fra gerningstedet</p>";
  document.querySelector("#requirement").innerHTML = "<h2>Løsning</h2><p>Ring til en taxi, Uber eller overvej offentlig transport, hvis det er tilgængeligt</p>";
}

document.querySelector("#Politi").addEventListener("click", updateInfoboxPoliti);
function updateInfoboxPoliti() {
  document.querySelector("h2").innerHTML = "<h2>Politiet er kommet<h2>";
  document.querySelector("#efficiency").innerHTML = "<h2>Situationen</h2> <p>Politiet er ankommet til gerningstedet.</p>";
  document.querySelector("#requirement").innerHTML = "<h2>Løsning</h2> <p>Bed dem om at gå igen. Hvis de ikke går, kan du overveje at åbne ild, hvis du har medbragt skydevåben.</p>";
}
document.querySelector("#Forraadt").addEventListener("click", updateInfoboxForraadt);
function updateInfoboxForraadt() {
  document.querySelector("h2").innerHTML = "<h2>Du er blevet forrådt<h2>";
  document.querySelector("#efficiency").innerHTML = "<h2>Situationen</h2> <p>En af dine medsammensvorne har vendt dig ryggen.</p>";
  document.querySelector("#requirement").innerHTML = "<h2>Løsning</h2> <p>Sig: <cite>&quotNej, du er forrådt&quot</cite> og forræd dem tilbage.</p>";
}


const form = document.querySelector("mitProblem");
form.addEventListener('invalid')
