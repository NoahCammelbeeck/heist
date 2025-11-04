document.querySelector("#Get_away_driver").addEventListener("click", updateInfoboxDriver);

function updateInfoboxDriver() {
  document.querySelector("h2").innerHTML = "Get-Away Driver";
  document.querySelector("#efficiency").innerHTML = "<h2>Situationen</h2><p>Din get-away driver har forladt dig</p>";
  document.querySelector("#requirement").innerHTML = "<h2>Løsning</h2><p>Her kan du skrive noget tekst om løsningen.</p>";
}

document.querySelector("#Politi").addEventListener("click", updateInfoboxPoliti);
function updateInfoboxPoliti() {
  document.querySelector("h2").innerHTML = "<h2>Politi<h2>";
  document.querySelector("#efficiency").innerHTML = "<h2>Situationen<h2>";
  document.querySelector("#requirement").innerHTML = "<h2>Løsning<h2>";
}
document.querySelector("#Forraadt").addEventListener("click", updateInfoboxForraadt);
function updateInfoboxForraadt() {
  document.querySelector("h2").innerHTML = "<h2>Forrådt<h2>";
  document.querySelector("#efficiency").innerHTML = "<h2>Situationen<h2>";
  document.querySelector("#requirement").innerHTML = "<h2>Løsning<h2>";
}
